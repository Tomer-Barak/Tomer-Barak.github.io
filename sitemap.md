---
layout: default
title: Sitemap
header_title: Site Map
description: Complete index of all pages on Tomer Barak's academic website including research topics, projects, blog posts, and contact information.
permalink: /sitemap.html
---

<div class="container">
    <h2 class="section-title">Site Map</h2>
    
    <div class="sitemap-section">
        <h3>Main Pages</h3>
        <ul class="sitemap-list">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#research">Research</a></li>
            <li><a href="/#publications">Publications</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/projects/">Projects</a></li>
            <li><a href="/blog/">Blog</a></li>
        </ul>
    </div>
    
    <div class="sitemap-section">
        <h3>Projects</h3>
        <ul class="sitemap-list">
            {% assign sorted_projects = site.projects | sort: 'title' %}
            {% for project in sorted_projects %}
            <li><a href="{{ project.url }}">{{ project.title }}</a> - {{ project.category | capitalize }}</li>
            {% endfor %}
        </ul>
    </div>
    
    <div class="sitemap-section">
        <h3>Blog Posts</h3>
        <ul class="sitemap-list">
            {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
            {% for post in sorted_posts %}
            <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
            {% endfor %}
        </ul>
    </div>
    
    <div class="sitemap-section">
        <h3>Categories</h3>
        <ul class="sitemap-list">
            {% assign categories = site.categories | sort %}
            {% for category in categories %}
            <li><a href="/category/{{ category[0] | slugify }}/">{{ category[0] }}</a> ({{ category[1].size }} posts)</li>
            {% endfor %}
        </ul>
    </div>
    
    <div class="sitemap-section">
        <h3>Tags</h3>
        <ul class="sitemap-list tags-list">
            {% assign tags = site.tags | sort %}
            {% for tag in tags %}
            <li><a href="/tag/{{ tag[0] | slugify }}/">{{ tag[0] }}</a> ({{ tag[1].size }} posts)</li>
            {% endfor %}
        </ul>
    </div>
</div>

<style>
    .sitemap-section {
        margin-bottom: 40px;
    }
    
    .sitemap-section h3 {
        color: var(--secondary-color);
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    
    .sitemap-list {
        list-style: none;
        padding-left: 15px;
    }
    
    .sitemap-list li {
        margin-bottom: 10px;
        position: relative;
        padding-left: 15px;
    }
    
    .sitemap-list li:before {
        content: '›';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
    }
    
    .tags-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px;
    }
</style>
