---
layout: default
title: Home
---

<div class="command-line">
  <span class="cmd-prompt">guest@tomer-site:~$</span>
  <span class="cmd-command">cat</span>
  <span class="cmd-args">about_me.txt</span>
</div>

<div class="cmd-output">
  <p>
    I am a researcher focused on <strong>Automated Science</strong>—the vision of AI systems conducting rigorous scientific research. <br>
    I completed my Ph.D. at the Edmond and Lily Safra Center for Brain Sciences (ELSC), The Hebrew University of Jerusalem, where I studied real-time adaptation as a computational framework for modeling fluid intelligence.
  </p>
  <p>
    I created <a href="https://ai-archive.io" target="_blank"><strong>AI-Archive</strong></a>, a platform where AI agents can publish and peer-review scientific papers under human supervision. <br>
    Currently, I'm working on integrating AI-led science with real laboratories, building infrastructure that enables AI to work alongside human scientists—grounded in real experiments and tacit knowledge.
  </p>

</div>

<div class="command-line">
  <span class="cmd-prompt">guest@tomer-site:~$</span>
  <span class="cmd-command">ls</span>
  <span class="cmd-args">-la ~/cv/</span>
</div>

<div class="cmd-output">
  <div class="file-header">total 1</div>
  <p>
    <a href="/assets/Tomer_Barak_CV.pdf" target="_blank">-rw-r--r-- 1 tomer 84078 Jan 24 2025 Tomer_Barak_CV.pdf</a>
  </p>
  <blockquote>
    Curriculum Vitae: Academic background, research experience, and publications.
  </blockquote>
</div>

<div class="command-line">
  <span class="cmd-prompt">guest@tomer-site:~$</span>
  <span class="cmd-command">ls</span>
  <span class="cmd-args">-la ~/thesis/</span>
</div>

<div class="cmd-output">
  <div class="file-header">total 1</div>
  <p>
    <a href="/assets/PhD_Thesis.pdf" target="_blank">-rw-r--r-- 1 tomer 15859826 Jan 24 2025 Modeling_Fluid_Intelligence_via_Real_Time_Adaptation.pdf</a>
  </p>
  <blockquote>
    This thesis explores real-time adaptation as a computational framework for understanding how minds solve genuinely novel problems. I demonstrate that neural networks can perform abstract reasoning through test-time parameter adaptation—without extensive pre-training.
  </blockquote>
</div>

<div class="command-line">
  <span class="cmd-prompt">guest@tomer-site:~$</span>
  <span class="cmd-command">grep</span>
  <span class="cmd-args">"title" ~/publications/*.bib</span>
</div>

<div class="cmd-output">
  <ul>
    <li>
      <strong>2025: Two pathways to resolve relational inconsistencies</strong> <br>
      T. Barak, Y. Loewenstein. <em>Scientific Reports</em>. <br>
      <a href="https://www.nature.com/articles/s41598-025-16135-w" target="_blank">[Paper]</a> <a href="https://github.com/Tomer-Barak/relational_expectation_violations" target="_blank">[Code]</a>
    </li>
    <li>
      <strong>2024: Untrained neural networks can demonstrate memorization-independent abstract reasoning</strong> <br>
      T. Barak, Y. Loewenstein. <em>Scientific Reports</em>. <br>
      <a href="https://www.nature.com/articles/s41598-024-78530-z" target="_blank">[Paper]</a> <a href="https://github.com/Tomer-Barak/learning-independent_abstract_reasoning" target="_blank">[Code]</a>
    </li>
    <li>
      <strong>2022: Naive Few-Shot Learning: Uncovering the fluid intelligence of machines</strong> <br>
      T. Barak, Y. Loewenstein. <em>arXiv preprint</em>. <br>
      <a href="https://arxiv.org/abs/2205.12013" target="_blank">[arXiv]</a>
    </li>
    <li>
      <strong>2022: Zero-Episode Few-Shot Contrastive Predictive Coding</strong> <br>
      T. Barak, Y. Loewenstein. <em>arXiv preprint</em>. <br>
      <a href="https://arxiv.org/abs/2205.01924" target="_blank">[arXiv]</a>
    </li>
    <li>
      <strong>2020: Naive Artificial Intelligence</strong> <br>
      T. Barak, Y. Avidan, Y. Loewenstein. <em>arXiv preprint</em>. <br>
      <a href="https://arxiv.org/abs/2009.02185" target="_blank">[arXiv]</a>
    </li>
  </ul>
</div>

<div class="command-line">
  <span class="cmd-prompt">guest@tomer-site:~$</span>
  <span class="cmd-command">ls</span>
  <span class="cmd-args">-lat ~/blog_posts/ | head -n 3</span>
</div>

<div class="cmd-output">
  <div class="file-header">total {{ site.posts.size }}</div>
  {% for post in site.posts limit:2 %}
  <div class="file-entry" style="margin-bottom: 0.5rem;">
    <span style="color: var(--text-color);">-rw-r--r--</span>
    <span style="color: var(--text-color);">1 tomer</span>
    <span style="color: var(--accent-orange);">{{ post.content | size }}</span>
    <span style="color: var(--text-color);">{{ post.date | date: "%b %d %H:%M" }}</span>
    <a href="{{ post.url }}" style="color: var(--accent-yellow); font-weight: bold;">{{ post.title | slugify }}.md</a>
    <div style="padding-left: 1rem; color: var(--comment-color); font-size: 0.9em;">
       # {{ post.title }}: {{ post.description | default: post.excerpt | strip_html | truncatewords: 20 }}
    </div>
  </div>
  {% endfor %}
  
  <div style="margin-top: 1rem; color: var(--comment-color);">
      ... <a href="/blog/" style="color: var(--accent-cyan);">view all posts</a>
  </div>
</div>

<div class="command-line">
  <span class="cmd-prompt">guest@tomer-site:~$</span>
  <span class="cmd-command">./contact.sh</span>
</div>

<div class="cmd-output">
  <ul>
    <li>Email: <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
    <li>Twitter: <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank">@{{ site.author.twitter }}</a></li>
    <li>Scholar: <a href="{{ site.author.scholar }}" target="_blank">Google Scholar Profile</a></li>
    <li>AI-Archive: <a href="https://ai-archive.io" target="_blank">ai-archive.io</a></li>
  </ul>
</div>
