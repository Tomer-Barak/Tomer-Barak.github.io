---
layout: default
title: Home
---

<div class="page-head">
  <h1>Grounding AI in real scientific work</h1>
  <p class="subtitle">I advise research institutes on integrating AI into how their labs actually work, and build Persopy — AI personas grounded in a person's documented record.</p>
</div>

<section class="section">
  <span class="label">About</span>
  <p>
    I completed my Ph.D. at the Edmond and Lily Safra Center for Brain Sciences (ELSC), The Hebrew University of
    Jerusalem, where I studied real-time adaptation as a computational framework for modeling fluid intelligence.
  </p>
  <p>
    I spent several years pursuing <strong>Automated Science</strong> — the vision of AI systems conducting research
    on their own — and built infrastructure to test it. What I found is that fully autonomous agents remain
    genuinely problematic: scientific competence lives in laboratory practice, tacit knowledge, and troubleshooting
    lore that never reaches the published paper. I wrote about that in
    <a href="/blog/2026/01/08/grounding-problem-ai-science/">The Grounding Problem</a>.
  </p>
  <p>
    That conclusion redirected my work. Today I am an <strong>AI consultant and advisor to research institutes</strong>,
    currently ELSC — helping labs and researchers integrate AI into their real workflows rather than around them.
    In practice that means building the infrastructure it runs on: an internal deployment platform where a researcher
    can push a repository and get a running, authenticated web app; self-hosted Git and CI; an institutional LLM
    service that keeps data in-house; and the onboarding tooling that puts all of it on a researcher's laptop in one
    step.
  </p>
  <p>
    Separately, I run <a href="https://persopy.com" target="_blank" rel="noopener"><strong>Persopy</strong></a>,
    which builds AI personas grounded in a person's documented record rather than in a model's recollection of it.
  </p>
</section>

<section class="section">
  <span class="label">Documents</span>
  <ul class="doc-list">
    <li>
      <a class="card" href="/assets/Tomer_Barak_CV.pdf" target="_blank" rel="noopener">
        <span class="card-title">Curriculum Vitae</span>
        <span class="card-desc">Academic background, research experience, and publications.</span>
        <span class="meta"><span>PDF</span></span>
      </a>
    </li>
    <li>
      <a class="card" href="/assets/PhD_Thesis.pdf" target="_blank" rel="noopener">
        <span class="card-title">Ph.D. Thesis — Modeling Fluid Intelligence via Real-Time Adaptation</span>
        <span class="card-desc">Real-time adaptation as a computational framework for understanding how minds solve
          genuinely novel problems. Neural networks can perform abstract reasoning through test-time parameter
          adaptation — without extensive pre-training.</span>
        <span class="meta"><span>PDF</span></span>
      </a>
    </li>
  </ul>
</section>

<section class="section">
  <span class="label">Publications</span>
  <ul class="pub-list">
    <li>
      <span class="pub-year">2025</span>
      <span class="pub-title">Two pathways to resolve relational inconsistencies</span>
      <span class="pub-venue">T. Barak, Y. Loewenstein — Scientific Reports</span>
      <span class="pub-links">
        <a href="https://www.nature.com/articles/s41598-025-16135-w" target="_blank" rel="noopener">Paper</a>
        <a href="https://github.com/Tomer-Barak/relational_expectation_violations" target="_blank" rel="noopener">Code</a>
      </span>
    </li>
    <li>
      <span class="pub-year">2024</span>
      <span class="pub-title">Untrained neural networks can demonstrate memorization-independent abstract reasoning</span>
      <span class="pub-venue">T. Barak, Y. Loewenstein — Scientific Reports</span>
      <span class="pub-links">
        <a href="https://www.nature.com/articles/s41598-024-78530-z" target="_blank" rel="noopener">Paper</a>
        <a href="https://github.com/Tomer-Barak/learning-independent_abstract_reasoning" target="_blank" rel="noopener">Code</a>
      </span>
    </li>
    <li>
      <span class="pub-year">2022</span>
      <span class="pub-title">Naive Few-Shot Learning: Uncovering the fluid intelligence of machines</span>
      <span class="pub-venue">T. Barak, Y. Loewenstein — arXiv preprint</span>
      <span class="pub-links">
        <a href="https://arxiv.org/abs/2205.12013" target="_blank" rel="noopener">arXiv</a>
      </span>
    </li>
    <li>
      <span class="pub-year">2022</span>
      <span class="pub-title">Zero-Episode Few-Shot Contrastive Predictive Coding</span>
      <span class="pub-venue">T. Barak, Y. Loewenstein — arXiv preprint</span>
      <span class="pub-links">
        <a href="https://arxiv.org/abs/2205.01924" target="_blank" rel="noopener">arXiv</a>
      </span>
    </li>
    <li>
      <span class="pub-year">2020</span>
      <span class="pub-title">Naive Artificial Intelligence</span>
      <span class="pub-venue">T. Barak, Y. Avidan, Y. Loewenstein — arXiv preprint</span>
      <span class="pub-links">
        <a href="https://arxiv.org/abs/2009.02185" target="_blank" rel="noopener">arXiv</a>
      </span>
    </li>
  </ul>
</section>

<section class="section">
  <span class="label">Latest writing</span>
  <ul class="card-list">
    {% for post in site.posts limit:2 %}
    <li>
      <a class="card" href="{{ post.url }}">
        <span class="card-title">{{ post.title }}</span>
        <span class="card-desc">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</span>
        <span class="meta"><span>{{ post.date | date: "%b %-d, %Y" }}</span></span>
      </a>
    </li>
    {% endfor %}
  </ul>
  <a class="more-link" href="/blog/">All posts →</a>
</section>

<section class="section">
  <span class="label">Contact</span>
  <ul class="link-list">
    <li><span class="k">Email</span> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></li>
    <li><span class="k">Twitter</span> <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank" rel="noopener">@{{ site.author.twitter }}</a></li>
    <li><span class="k">Scholar</span> <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Google Scholar</a></li>
    <li><span class="k">Persopy</span> <a href="https://persopy.com" target="_blank" rel="noopener">persopy.com</a></li>
  </ul>
</section>
