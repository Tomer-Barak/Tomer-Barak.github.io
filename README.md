# Tomer Barak's Academic Website

This repository contains the source code for my academic portfolio website, built using Jekyll and GitHub Pages.

## Website Structure

The website includes:
- Home page with research and publication information
- Projects page showcasing research and development work
- Blog section for updates and thoughts on research
- Contact information

## How to Use This Repository

### Prerequisites

To work with this website locally, you'll need:
- [Ruby](https://www.ruby-lang.org/en/downloads/) (version 2.5.0 or higher)
- [RubyGems](https://rubygems.org/pages/download)
- [Jekyll](https://jekyllrb.com/docs/installation/)
- [Git](https://git-scm.com/downloads)

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   cd YOUR-REPOSITORY
   ```

2. Install dependencies:
   ```
   bundle install
   ```

3. Run the site locally:
   ```
   bundle exec jekyll serve
   ```

4. View the site at `http://localhost:4000`

### Adding Content

#### Blog Posts

1. Create a new Markdown file in the `_posts` directory with the naming convention:
   ```
   YYYY-MM-DD-title-of-post.md
   ```

2. Add front matter at the top of the file:
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

3. Write your content in Markdown below the front matter.

#### Projects

1. Create a new Markdown file in the `_projects` directory.

2. Add front matter at the top of the file:
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

3. Write your project description in Markdown below the front matter.

#### Project Insights (Dive Deeper)

1. Create a project insights index page in the `projects` directory:
   ```yaml
   ---
   layout: project_insights
   title: "Project Name Insights"
   description: "A description of what these insights cover about the project."
   project: "Exact Project Title"  # Must match the project title
   project_slug: "project-slug"    # Must match the project slug
   ---
   ```

2. Create insight posts in the `_project_posts` directory with the naming convention:
   ```
   YYYY-MM-DD-title-of-insight.md
   ```

3. Add front matter to the insight post:
   ```yaml
   ---
   layout: project_post
   title: "Your Insight Title"
   date: YYYY-MM-DD
   project: "Exact Project Title"  # Must match the project title
   project_slug: "project-slug"    # Must match the project slug
   tags: [tag1, tag2, tag3]
   image: /assets/images/your-image.jpg  # Optional
   ---
   ```

4. Write your insight content in Markdown below the front matter.

5. A "Dive Deeper" button will automatically appear on the project page, linking to the insights collection for that project.

### Customization

- **Site configuration**: Edit `_config.yml` to update site-wide settings.
- **Styling**: Modify `assets/css/styles.css` to customize the appearance.
- **Layouts**: Edit files in `_layouts` directory to change page structures.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## File Structure

```
├── _config.yml               # Site configuration
├── _layouts/                 # Page templates
│   ├── default.html          # Base template
│   ├── post.html             # Blog post template
│   ├── project.html          # Project template
│   ├── project_post.html     # Project insight post template
│   ├── project_insights.html # Project insights index template
│   ├── projects.html         # Projects page template
│   └── blog.html             # Blog index template
├── _posts/                   # Blog posts
├── _project_posts/           # Project-specific insight posts
├── _projects/                # Project files
├── assets/                   # Static assets
│   ├── css/                  # Stylesheets
│   │   └── styles.css        # Main CSS file
│   └── images/               # Image files
├── projects/                 # Project insight index pages
├── index.md                  # Home page
├── projects.md               # Projects page
├── blog.md                   # Blog index page
└── README.md                 # This file
```

## Credits

- Theme based on custom design with Jekyll integration
- Icons from [Font Awesome](https://fontawesome.com/)
