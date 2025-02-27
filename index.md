---
layout: default
title: Home
header_title: Tomer Barak
header_subtitle: Ph.D. student at Edmond and Lily Safra Center for Brain Sciences (ELSC)<br>The Hebrew University of Jerusalem.
---

<!-- About Section -->
<section id="about">
    <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="fade-in">
            <p style="text-align: center; max-width: 800px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8;">
                I am a Ph.D. student at the Edmond and Lily Safra Center for Brain Sciences (ELSC) at The Hebrew University of Jerusalem. My research focuses on scales of description in science and physics, exploring how different levels of abstraction relate to one another. Using machine learning tools, particularly artificial neural networks (ANNs), I study how high-dimensional information can be transformed into meaningful lower-dimensional representations.
            </p>
        </div>
    </div>
</section>

<!-- Research Section -->
<section id="research" style="background-color: #f0f5fa;">
    <div class="container">
        <h2 class="section-title">My Research</h2>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 40px; font-size: 1.1rem;">
            I am interested in scales of description in science and physics. For example, we can view a person as a collection of atoms or as part of a community. How do these different scales relate? Advances in machine learning provide tools to study these questions.
        </p>
        <div class="research-container">
            <!-- Research Item 1 -->
            <div class="research-item fade-in delay-1">
                <div class="research-content">
                    <h3 class="research-title">Abstract Reasoning in Neural Networks</h3>
                    <p class="research-text">
                        We tested an ANN's ability to extract a predictably changing feature from image sequences with various changing features. The ANN performed well on intelligence tests requiring this ability, validating its use in modeling the extraction of abstract theories.
                    </p>
                </div>
            </div>
            
            <!-- Research Item 2 -->
            <div class="research-item fade-in delay-2">
                <div class="research-content">
                    <h3 class="research-title">Theory Adaptation in Response to Contradictions</h3>
                    <p class="research-text">
                        We studied how theories change in response to observations that contradict them. Our ANN's choice of resolution depended on the inconsistency's magnitude, highlighting flexibility in forming descriptions.
                    </p>
                </div>
            </div>
            
            <!-- Research Item 3 -->
            <div class="research-item fade-in delay-3">
                <div class="research-content">
                    <h3 class="research-title">Analogies Between Scales of Description</h3>
                    <p class="research-text">
                        We are studying how ANNs form analogies in general, particularly between scales of description. This work relates to the Renormalization Group framework in physics, which preserves theory structure across scales.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Publications Section -->
<section id="publications">
    <div class="container">
        <h2 class="section-title">Publications</h2>
        
        <!-- Publication 1 -->
        <div class="pub-item fade-in">
            <h3 class="pub-title">Is it me, or is A larger than B: Uncovering the determinants of relational cognitive dissonance resolution</h3>
            <p class="pub-meta">T. Barak, Y. Loewenstein. Arxiv, Nov 2024.</p>
            <p>We studied how theories change in response to observations that contradict them. Our ANN's choice of resolution depended on the inconsistency's magnitude, highlighting flexibility in forming descriptions.</p>
            <div class="pub-links">
                <a href="https://arxiv.org/abs/2411.05809" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
                <a href="https://github.com/Tomer-Barak/relational_cognitive_dissonances" target="_blank"><i class="fab fa-github"></i> Github</a>
            </div>
        </div>
        
        <!-- Publication 2 -->
        <div class="pub-item fade-in delay-1">
            <h3 class="pub-title">Untrained neural networks can demonstrate memorization-independent abstract reasoning</h3>
            <p class="pub-meta">T. Barak, Y. Loewenstein. Scientific Reports, Nov 2024.</p>
            <p>We tested an ANN's ability to extract a predictably changing feature from image sequences with various changing features. The ANN performed well on intelligence tests requiring this ability, validating its use in modeling the extraction of abstract theories.</p>
            <div class="pub-links">
                <a href="https://www.nature.com/articles/s41598-024-78530-z" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
                <a href="https://github.com/Tomer-Barak/learning-independent_abstract_reasoning" target="_blank"><i class="fab fa-github"></i> Github</a>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" style="background-color: #f0f5fa;">
    <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-info">
            <div class="contact-item fade-in">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <h3 class="contact-title">Email</h3>
                <p class="contact-text">
                    <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
                </p>
            </div>
            
            <div class="contact-item fade-in delay-1">
                <div class="contact-icon">
                    <i class="fab fa-twitter"></i>
                </div>
                <h3 class="contact-title">Twitter</h3>
                <p class="contact-text">
                    <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank">@{{ site.author.twitter }}</a>
                </p>
            </div>
            
            <div class="contact-item fade-in delay-2">
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
