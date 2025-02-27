# Jekyll Website Implementation Guide

This guide explains how to implement and manage your new Jekyll website. I've converted the standalone HTML pages into a Jekyll-powered site that allows you to easily manage content using Markdown files.

## Directory Structure Setup

First, you'll need to create the following directory structure in your GitHub repository:

```
your-repository/
├── _config.yml               # Site configuration
├── _layouts/                 # Page templates
│   ├── default.html          # Base template
│   ├── post.html             # Blog post template
│   ├── projects.html         # Projects page template
│   └── blog.html             # Blog index template
├── _posts/                   # Blog posts
├── _projects/                # Project files
├── assets/                   # Static assets
│   ├── css/                  # Stylesheets
│   │   └── styles.css        # Main CSS file
│   └── images/               # Image files
├── index.md                  # Home page
├── projects.md               # Projects page
├── blog.md                   # Blog index page
└── README.md                 # Documentation
```

## Step 1: Install Jekyll Files

1. Save all the files I've created to their respective directories:
   - `_config.yml` in the root directory
   - Layout files in the `_layouts` directory
   - CSS file in `assets/css/styles.css`
   - Page files (`index.md`, `projects.md`, `blog.md`) in the root directory
   - Create the directories `_posts` and `_projects` for your content

2. Create an `assets/images` directory and add placeholder images (or your own images)

## Step 2: Configure GitHub Pages

1. In your GitHub repository, go to Settings > Pages
2. Set Source to "Deploy from a branch"
3. Select the main branch and "/" (root) folder
4. Click Save

## Step 3: Writing Content

### Blog Posts

To create a new blog post:

1. Create a file in the `_posts` directory with the naming convention: `YYYY-MM-DD-title.md`
2. Add the front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [Category1, Category2]
tags: [Tag1, Tag2, Tag3]
image: /assets/images/your-image.jpg  # Optional
---
```

3. Write your content in Markdown below the front matter

### Projects

To add a new project:

1. Create a file in the `_projects` directory (e.g., `project-name.md`)
2. Add the front matter:

```yaml
---
layout: default
title: "Project Title"
category: development  # or research
icon: code  # Font Awesome icon name without the fa- prefix
order: 1  # Display order
features:
  - "Feature 1: Description"
  - "Feature 2: Description"
github: https://github.com/your-username/repo  # Optional
link: https://example.com  # Optional
link_text: "View Demo"  # Optional
---
```

3. Write your project description in Markdown below the front matter

## Step 4: Testing Locally (Optional)

If you want to test your site locally before pushing to GitHub:

1. Install Ruby and Jekyll (follow instructions at [jekyllrb.com/docs/installation](https://jekyllrb.com/docs/installation/))
2. Open a terminal and navigate to your repository directory
3. Run `bundle init` to create a Gemfile
4. Add `gem "jekyll"` to the Gemfile
5. Run `bundle install`
6. Run `bundle exec jekyll serve`
7. View your site at `http://localhost:4000`

## Step A: Customization Options

### Theme Colors

To customize the color scheme, edit the CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary-color: #3498db;     /* Change this to your preferred primary color */
    --secondary-color: #2c3e50;   /* Change this to your preferred secondary color */
    --accent-color: #e74c3c;      /* Change this to your preferred accent color */
    /* Other color variables */
}
```

### Font Awesome Icons

You can use any [Font Awesome](https://fontawesome.com/icons) icon in your projects by specifying the icon name (without the "fa-" prefix) in the project front matter.

### Adding Images

1. Place image files in the `assets/images` directory
2. Reference them in your markdown files using:
   - For blog posts: `image: /assets/images/filename.jpg` in the front matter
   - In content: `![Alt text](/assets/images/filename.jpg)`

## Troubleshooting

- **Site not building**: Check the GitHub Actions tab for error messages
- **Styling issues**: Verify the CSS file is correctly linked and the path is correct
- **Missing content**: Make sure file names and front matter are formatted correctly

## Remember

- All files should use UTF-8 encoding
- Markdown files (`.md`) should have LF line endings (not CRLF)
- The site may take a few minutes to build after pushing changes to GitHub

That's it! You now have a modern, Jekyll-powered website that you can easily update with simple Markdown files.
