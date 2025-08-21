---
layout: default
title: Home
header_title: Tomer Barak
header_subtitle: Ph.D. student at Edmond and Lily Safra Center for Brain Sciences (ELSC)<br>The Hebrew University of Jerusalem.
description: Tomer Barak is a Ph.D. researcher at ELSC studying neural networks, cognitive science, and scales of description in physics.
keywords: Tomer Barak, neural networks, cognitive science, physics, scales of description, ELSC, abstract reasoning, AI research, Hebrew University
---

<!-- About Section -->
<section id="about" style="background-color: #f0f5fa;">
    <div class="container">
        <h2 class="section-title">About Me</h2>
            <p style="text-align: justify; max-width: 800px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8; hyphens: none; word-break: keep-all;">
                I am a Ph.D. student at the Edmond and Lily Safra Center for Brain Sciences (ELSC) at The Hebrew University of Jerusalem. My research focuses on scales of description in science and physics, exploring how different levels of abstraction relate to one another. Using machine learning tools, particularly artificial neural networks (ANNs), I study how high-dimensional information can be transformed into meaningful lower-dimensional representations.
            </p>
    </div>
</section>

<!-- Publications Section -->
<section id="publications">
    <div class="container">
        <h2 class="section-title">Publications</h2>
        
        <div class="publications-container" style="max-width: 800px; margin: 0 auto;">
            <!-- Publication 1 -->
            <div class="pub-item">
                <h3 class="pub-title">Two pathways to resolve relational inconsistencies</h3>
                <p class="pub-meta">T. Barak, Y. Loewenstein. Scientific Reports, Aug 2025.</p>
                <p>We studied how theories change in response to observations that contradict them. Our ANN's choice of resolution depended on the inconsistency's magnitude, highlighting flexibility in forming descriptions.</p>
                <div class="pub-links">
                    <a href="https://www.nature.com/articles/s41598-025-16135-w" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
                    <a href="https://github.com/Tomer-Barak/relational_expectation_violations" target="_blank"><i class="fab fa-github"></i> Github</a>
                </div>
            </div>
            
            <!-- Publication 2 -->
            <div class="pub-item">
                <h3 class="pub-title">Untrained neural networks can demonstrate memorization-independent abstract reasoning</h3>
                <p class="pub-meta">T. Barak, Y. Loewenstein. Scientific Reports, Nov 2024.</p>
                <p>We tested an ANN's ability to extract a predictably changing feature from image sequences with various changing features. The ANN performed well on intelligence tests requiring this ability, validating its use in modeling the extraction of abstract theories.</p>
                <div class="pub-links">
                    <a href="https://www.nature.com/articles/s41598-024-78530-z" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
                    <a href="https://github.com/Tomer-Barak/learning-independent_abstract_reasoning" target="_blank"><i class="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Recent Blog Posts Section -->
<section id="blog-posts" style="background-color: #f0f5fa;">
    <div class="container">
        <h2 class="section-title">Recent Blog Posts</h2>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 30px; font-size: 1.1rem;">
            Explore my latest thoughts on neural networks, cognitive science, and scales of description.
        </p>
        
        <div class="blog-posts-container">
            {% for post in site.posts limit:2 %}
            <div class="blog-post-item">
                <div class="blog-post-content">
                    <h3 class="blog-post-title">
                        <a href="{{ post.url }}">{{ post.title }}</a>
                    </h3>
                    <p class="blog-post-meta">{{ post.date | date: "%B %d, %Y" }} | {{ post.categories | join: ", " }}</p>
                    <p class="blog-post-excerpt">
                        {{ post.description | default: post.excerpt | strip_html | truncatewords: 30 }}
                    </p>
                    <a href="{{ post.url }}" class="read-more">Read More →</a>
                </div>
            </div>
            {% endfor %}
            
            <div class="blog-all-posts">
                <a href="/blog/" class="all-posts-button">View All Posts</a>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact">
    <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-info">
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <h3 class="contact-title">Email</h3>
                <p class="contact-text">
                    <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
                </p>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fab fa-twitter"></i>
                </div>
                <h3 class="contact-title">Twitter</h3>
                <p class="contact-text">
                    <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank">@{{ site.author.twitter }}</a>
                </p>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h3 class="contact-title">Google Scholar</h3>
                <p class="contact-text">
                    <a href="{{ site.author.scholar }}" target="_blank">View Profile</a>
                </p>
            </div>
        </div>
    </div>
</section>