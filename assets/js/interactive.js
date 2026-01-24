---
    layout: null
---
    document.addEventListener('DOMContentLoaded', function () {
        const input = document.getElementById('cmd-input');
        const display = document.getElementById('cmd-display');
        const inputLine = document.getElementById('terminal-input-line');

        // Command History
        let cmdHistory = [];
        let historyIndex = -1;

        // --- Dynamic File System Generation ---
        const fileSystem = {
            '~': {
                type: 'dir',
                content: {
                    'about_me.txt': { type: 'file', text: 'I am a researcher focused on Automated Science. Ph.D. from ELSC, Hebrew University.' },
                    'contact.sh': { type: 'file', text: 'Email: tomer.barak.mail@gmail.com\nTwitter: @Barak_Tomer\nGitHub: Tomer-Barak' },
                    'projects': {
                        type: 'dir',
                        content: {} // Populated below
                    },
                    'blog': {
                        type: 'dir',
                        content: {
                        {% for post in site.posts limit: 10 %}
        '{{ post.date | date: "%Y-%m-%d" }}-{{ post.title | slugify }}.md': {
            type: 'file',
                text: '{{ post.description | default: post.excerpt | strip_html | strip_newlines | escape }}',
                    url: '{{ post.url }}'
        },
        {% endfor %}
    }
                },
        'cv': { type: 'link', url: '/assets/Tomer_Barak_CV.pdf' },
        'thesis': { type: 'link', url: '/assets/PhD_Thesis.pdf' }
            }
        }
    };

// Populate Projects and Insights deeply
const projectsContent = fileSystem['~'].content['projects'].content;

{% for project in site.projects %}
projectsContent['{{ project.slug }}'] = {
    type: 'dir',
    content: {
        'README.md': { type: 'file', text: '{{ project.excerpt | strip_html | strip_newlines | escape }}' },
        'insights': {
            type: 'dir',
            content: {
                    {% assign insights = site.project_posts | where: 'project_slug', project.slug %}
{% for post in insights %}
'{{ post.title | slugify }}.md': {
    type: 'file',
        text: '{{ post.excerpt | strip_html | strip_newlines | escape }}',
            url: '{{ post.url }}'
},
{% endfor %}
                }
            }
        }
    };
{% endfor %}

// --- Current State ---
let currentPath = getCurrentPathFromUrl();
updatePrompt();

if (input && display) {
    input.addEventListener('input', function () {
        display.textContent = input.value;
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const command = input.value.trim();

            // Print command line
            const cmdDiv = document.createElement('div');
            cmdDiv.className = 'command-line';
            cmdDiv.innerHTML = `<span class="cmd-prompt">guest@tomer:${currentPath}$</span> <span class="cmd-command">${escapeHtml(input.value)}</span>`;
            inputLine.parentNode.insertBefore(cmdDiv, inputLine);

            if (command) {
                cmdHistory.push(command);
                historyIndex = cmdHistory.length;
                processCommand(command);
            }

            input.value = '';
            display.textContent = '';
            input.focus();
            inputLine.scrollIntoView({ behavior: 'smooth', block: 'end' });

        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = cmdHistory[historyIndex];
                display.textContent = input.value;
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < cmdHistory.length - 1) {
                historyIndex++;
                input.value = cmdHistory[historyIndex];
                display.textContent = input.value;
            } else {
                historyIndex = cmdHistory.length;
                input.value = '';
                display.textContent = '';
            }
        }
    });

    document.querySelector('.terminal').addEventListener('click', function (e) {
        // If selecting text, don't focus
        const selection = window.getSelection();
        if (selection.toString().length > 0) return;

        // Allow clicking links
        if (e.target.tagName !== 'A') {
            input.focus();
        }
    });
}

function getCurrentPathFromUrl() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') return '~';
    const cleanPath = path.replace(/^\/|\/$/g, '');
    if (cleanPath === '') return '~';
    return '~/' + cleanPath;
}

function updatePrompt() {
    const promptSpan = document.querySelector('#terminal-input-line .cmd-prompt');
    if (promptSpan) {
        promptSpan.textContent = `guest@tomer:${currentPath}$`;
    }
}

function resolvePath(path) {
    if (path === '/') return '~';
    if (path === '~') return '~';
    if (path.startsWith('~/')) return path;

    let basePath = currentPath;
    if (path.startsWith('/')) {
        basePath = '~';
        path = path.substring(1);
    }

    const currentParts = basePath === '~' ? [] : basePath.substring(2).split('/');
    const parts = path.split('/');

    for (const part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..') {
            if (currentParts.length > 0) currentParts.pop();
        } else {
            currentParts.push(part);
        }
    }

    if (currentParts.length === 0) return '~';
    return '~/' + currentParts.join('/');
}

function getDirContent(path) {
    if (path === '~') return fileSystem['~'].content;
    const relativePath = path.substring(2);
    const parts = relativePath.split('/');

    let current = fileSystem['~'].content;

    for (const part of parts) {
        if (current && current[part] && current[part].type === 'dir') {
            current = current[part].content;
        } else {
            return null;
        }
    }
    return current;
}

function processCommand(cmdStr) {
    const parts = cmdStr.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    let output = '';

    switch (cmd) {
        case 'help':
            output = `
Available commands:
  <span class="cmd-command">ls</span> [dir]      List contents
  <span class="cmd-command">cd</span> [dir]      Change directory
  <span class="cmd-command">cat</span> [file]    View file contents
  <span class="cmd-command">clear</span>         Clear terminal
  <span class="cmd-command">whoami</span>        Print user
  <span class="cmd-command">reboot</span>        Go to home
`;
            break;

        case 'ls':
        case 'll':
            let targetPath = currentPath;
            if (args.length > 0) targetPath = resolvePath(args[0]);
            const content = getDirContent(targetPath);

            if (content) {
                output = '<div class="file-list">';
                if (targetPath !== '~') {
                    output += `<div style="color: var(--accent-cyan); font-weight: bold;">../</div>`;
                }
                const entries = Object.entries(content).sort((a, b) => {
                    const aDir = a[1].type === 'dir';
                    const bDir = b[1].type === 'dir';
                    if (aDir && !bDir) return -1;
                    if (!aDir && bDir) return 1;
                    return a[0].localeCompare(b[0]);
                });

                for (const [name, info] of entries) {
                    let style = 'color: var(--text-bright);';
                    if (info.type === 'dir') style = 'color: var(--accent-cyan); font-weight: bold;';
                    else if (info.type === 'link') style = 'color: var(--accent-purple); font-style: italic;';

                    let displayName = name;
                    if (info.type === 'dir') displayName += '/';
                    output += `<div style="${style}">${displayName}</div>`;
                }
                output += '</div>';
            } else {
                output = `ls: cannot access '${args[0] || ''}': No such file or directory`;
            }
            break;

        case 'cd':
            if (args.length === 0) { window.location.href = '/'; return; }
            const newPath = resolvePath(args[0]);
            const dirContent = getDirContent(newPath);

            if (dirContent !== null) {
                let urlPath = newPath.replace(/^~/, '');
                if (urlPath === '') urlPath = '/';
                else {
                    if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
                    if (!urlPath.endsWith('/')) urlPath += '/';
                }
                window.location.href = urlPath;
            } else {
                output = `cd: ${args[0]}: No such file or directory`;
            }
            break;

        case 'cat':
            if (args.length === 0) { output = 'cat: missing filename'; }
            else {
                const fname = args[0];
                const content = getDirContent(currentPath);
                if (content && content[fname]) {
                    const file = content[fname];
                    if (file.type === 'file') {
                        output = file.text;
                        if (file.url) output += `<br><a href="${file.url}" style="color:var(--accent-cyan)">[Open File]</a>`;
                    } else if (file.type === 'dir') {
                        output = `cat: ${fname}: Is a directory`;
                    } else if (file.type === 'link') {
                        window.open(file.url, '_blank');
                        output = `Opening ${fname}...`;
                    }
                } else {
                    output = `cat: ${fname}: No such file or directory`;
                }
            }
            break;

        case 'clear':
            const terminalBody = document.querySelector('.terminal-body');
            const children = Array.from(terminalBody.childNodes);
            children.forEach(child => {
                if (child.id === 'terminal-input-line') return;
                if (child.contains && child.contains(inputLine)) return;
                terminalBody.removeChild(child);
            });
            return;

        case 'whoami': output = 'guest'; break;
        case 'reboot': window.location.href = '/'; break;
        case 'coffee':
            output = `<pre style="border:none; padding:0; background:transparent; margin:0; font-family:'Fira Code', monospace; line-height:1.2;">
    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |  COFFEE     | | | |
    |             |_| | |
    |             |\\___/
    \\___________/
</pre>`;
            break;

        default: output = `${cmd}: command not found`;
    }

    if (output) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'cmd-output';
        outputDiv.innerHTML = output;
        inputLine.parentNode.insertBefore(outputDiv, inputLine);
    }
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
});
