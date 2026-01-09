---
layout: post
title: "The Grounding Problem: Why AI Scientists Need Real Labs"
date: 2026-01-08
categories: [AI, Research, Philosophy of Science]
tags: [Automated Science, AI-Archive, Grounding, Laboratory Science, Tacit Knowledge]
description: "Exploring why AI systems struggle to do real science without integration into laboratory practice, and how we might solve the grounding problem."
keywords: grounding problem, AI science, tacit knowledge, laboratory integration, automated research
---

There's a fundamental obstacle facing automated science that doesn't get discussed enough: the **grounding problem**.

AI systems can read every paper ever published. They can identify patterns across literature, generate plausible hypotheses, and even write coherent scientific prose. But ask them to actually *do* science—to design an experiment that will work in practice, to interpret unexpected results, to know when a measurement feels wrong—and they stumble.

This isn't just about current limitations. It reflects something deep about how scientific knowledge actually works.

## What Papers Don't Tell You

Scientific papers are like icebergs. The published text is the visible tip—the polished, logical presentation of results. But beneath the surface lies an enormous mass of knowledge that never makes it to print:

### The Troubleshooting Lore
Every lab has folklore about what works and what doesn't. "Use the centrifuge in room 302, not 305—the 305 one runs hot." "The protocol says 30 minutes, but with our cells, 45 works better." This knowledge lives in conversations, Post-it notes, and collective memory.

### The Intuition About Significance
A 5% difference in one experiment might be meaningful; in another, it might be noise. Knowing the difference requires understanding the specific system, the measurement techniques, the sources of variability. This intuition develops through years of hands-on experience.

### The Experimental Aesthetics
Experienced scientists develop a feel for "good" experiments—designs that will give clean answers, controls that will be convincing, approaches that are elegant rather than brute-force. This aesthetic sense guides decisions in ways that are hard to articulate.

### The Community Dynamics
Science happens in communities. Knowing which reviewers care about which issues, understanding the unstated assumptions of a field, recognizing when a result will be controversial—these social dynamics shape how research is conducted and communicated.

An AI that only reads papers misses all of this. It's like trying to learn to cook by reading recipes without ever tasting food.

## The Problems This Creates

### 1. Experimental Proposals That Don't Work

An AI might propose an experiment that looks reasonable on paper but fails in practice. Maybe the reagents interact unexpectedly. Maybe the timing is too precise for available equipment. Maybe the protocol assumes conditions that don't exist in typical labs.

Without exposure to the reality of laboratory work, AI systems can't distinguish between experiments that will work and those that won't.

### 2. Interpretations That Miss Context

Results mean different things in different contexts. An AI reading a paper might miss that the authors used a specific cell line known for particular properties, or that the field has a history of contested claims in exactly this area.

Context-free interpretation leads to conclusions that feel right in isolation but wrong to anyone embedded in the research community.

### 3. Reviews That Miss the Point

If an AI reviews papers without understanding laboratory reality, it might praise technically described experiments that experienced researchers know are problematic, or criticize approaches that are actually clever solutions to practical constraints.

## Failed Solutions

### More Data
We might think: just give the AI more data. Include lab notebooks, protocols, troubleshooting forums. But tacit knowledge is called tacit precisely because it's rarely externalized. You can't learn it by reading—you learn it by doing.

### Simulation
Perhaps we could simulate laboratory environments for AI to practice in. But simulations are only as good as our understanding—and that understanding is itself grounded in the tacit knowledge we're trying to capture. We'd just reproduce our known unknowns.

### Language Model Fine-Tuning
Fine-tuning on scientific text helps with style and terminology, but doesn't address the fundamental issue. The text itself doesn't contain the knowledge—it assumes it.

## A Possible Path: Deep Integration

Here's the approach I'm exploring: instead of trying to somehow transfer tacit knowledge to AI, we **embed AI within active research environments** where that knowledge lives.

This means:

1. **AI agents integrated into lab workflows**, not just reading papers but participating in the daily practice of research
2. **Real-time access to experimental data**, protocols, and troubleshooting conversations
3. **Feedback loops with working scientists** who can correct misunderstandings and transmit intuitions
4. **Long-term presence** allowing the AI to develop contextual understanding over time

The goal isn't to make AI that knows everything about a field from day one. It's to create AI that learns the way scientists learn—through sustained engagement with practice.

### The Enterprise Model

This approach naturally leads to an "enterprise" model of AI-Archive. Instead of just providing a platform where anyone can submit AI papers, we work with specific research institutions to:

- Deploy AI infrastructure integrated with their systems
- Train AI agents on their specific practices and domains
- Build deep expertise grounded in their experimental reality
- Develop AI that becomes genuinely authoritative in their areas

Over time, an AI deeply integrated with a neuroscience lab might become a credible reviewer of neuroscience papers—not because it read the most papers, but because it genuinely understands how the science works.

## The Authority Dividend

There's a virtuous cycle here. If we can create AI reviewers that scientists trust, it helps address the peer review crisis. Better reviews lead to better science. And the track record of good reviews builds the credibility needed for AI-authored work to be taken seriously.

This is why I believe the path to automated science goes through integration with real labs, not around it. The grounding problem isn't a bug to be fixed—it's a design constraint to be embraced.

## Open Questions

I'm still working through the implications:

- **How do we evaluate** whether an AI has truly learned tacit knowledge?
- **What governance structures** ensure AI remains helpful rather than disruptive?
- **How does tacit knowledge scale**—can insights from one lab transfer to others?
- **What are the risks** of AI systems embedded in research institutions?

These aren't just technical questions. They touch on the nature of scientific knowledge, the structure of academic institutions, and the future relationship between human and artificial intelligence.

## Conclusion

The grounding problem isn't going away. AI will continue to improve at processing and generating text about science. But real scientific capability—the ability to genuinely advance knowledge—requires something more than text processing.

It requires grounding in practice.

This is the bet I'm making with my work on AI-enhanced research environments. Not that we can solve the grounding problem with any clever algorithm, but that we can design sociotechnical systems where AI and humans work together in ways that keep the AI grounded in reality.

The science of the future might be collaborative in a new sense—not just humans working with humans, but humans and AI systems developing shared understanding through sustained practice.

---

*This post is part of my ongoing exploration of automated science. If you're thinking about these issues too, I'd love to hear your perspective.*
