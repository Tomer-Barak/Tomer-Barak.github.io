---
layout: project
title: "Automated Science: AI-Enhanced Research"
subtitle: "Building infrastructure for AI systems to conduct rigorous science alongside real laboratories, bridging the gap between AI reasoning and experimental knowledge."
category: research
icon: flask
order: 2
permalink: /projects/automated-science/
---

# Automated Science: AI-Enhanced Research Infrastructure

**Status**: Active Development

Automated Science is my vision for the future of scientific research—where AI systems work alongside human scientists to accelerate discovery. This isn't about replacing researchers, but about creating a symbiosis between human expertise, experimental knowledge, and AI's ability to process vast amounts of information.

## The Challenge

Traditional approaches to AI-led science face fundamental barriers:

### 1. The Authority Problem
Academics won't publish in platforms not recognized by authoritative bodies—papers don't count toward promotions or grants if the publication venue isn't established.

### 2. The Grounding Problem
Science is tightly linked to experiments, and experiments require real humans. A lot of knowledge in laboratories is tacit—not written down, but held in the minds of experienced researchers.

### 3. The Integration Problem
AI systems typically operate in isolation, disconnected from the day-to-day workflow of active research groups.

## The Solution: Enterprise AI-Archive

The path forward is integrating AI deeply within real research institutions:

```
┌─────────────────────────────────────────────────────────────┐
│                    AI-Enhanced Science Center               │
│                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
│   │  Real Labs  │───▶│  AI Agents  │───▶│  Authority  │   │
│   │ Experiments │    │  Grounded   │    │  in Domain  │   │
│   │ Tacit Know. │    │  in Reality │    │  Expertise  │   │
│   └─────────────┘    └─────────────┘    └─────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

By embedding AI infrastructure within research centers:
- AI agents gain access to **real experimental data** and **laboratory protocols**
- Researchers get **AI assistance** integrated into their existing workflow
- Over time, the AI develops **deep domain expertise** grounded in actual practice
- Eventually, this expertise becomes **authoritative** for reviewing work in that domain

## The Dual-Pipe Architecture

Working with research institutions requires careful handling of both code/papers and large data files. The architecture separates:

### The "Brain" (Git Monorepo)
- Handles logic, code, and papers
- Strict governance via Pull Requests
- Permission-based access for different researchers

### The "Body" (Syncthing/Tailscale)
- Handles heavy data and outputs
- Automated background synchronization
- Real-time sync to researcher machines

### The AI Agent Bridge
```yaml
services:
  agent-runtime:
    volumes:
      # Code & Papers (Read/Write via PR)
      - ./workspace:/app/workspace
      
      # Raw Data (Read-Only)
      - /srv/data/raw:/app/data/raw:ro
      
      # Results (Read-Write for outputs)
      - /srv/data/outputs:/app/data/outputs:rw
```

The agent reads from the "Brain" to understand the science and mounts the "Body" to execute analysis—all without bypassing safety checks for code changes.

## Key Components

### Cloud Tasks
Researchers submit specific questions via structured YAML files. AI processes queries through scheduled pipelines, delivering results as merge requests for human review.

### Collaboration Sessions
Interactive research via browser-based VS Code connected to AI agents. Researchers can pair-program with AI, exploring data together with full access to analysis tools.

### Autonomous Research
Daily scheduled jobs for autonomous data exploration. AI agents generate hypotheses, find interesting patterns, and produce research artifacts for human scientists to validate.

## Current Development

This vision is being developed in collaboration with ELSC (Edmond and Lily Safra Center for Brain Sciences), where I completed my PhD. The goal is to make ELSC a leading center in collaboration between real scientists and AI.

### Near-term Goals
- Deploy AI infrastructure integrated with lab workflows
- Create AI agents with deep knowledge of computational neuroscience
- Build tools for AI-assisted paper writing and peer review

### Long-term Vision
Develop an agent so deeply integrated with ELSC's labs that it becomes authoritative in reviewing papers in computational neuroscience—grounded by its understanding of real experiments, not just text.

## The Bigger Picture

This approach represents an "Enterprise tier" of AI-Archive—not just a platform for AI papers, but a complete solution for making science centers AI-enhanced. Each integrated center becomes a node in a larger network where AI agents, grounded in real experimental knowledge, can meaningfully contribute to scientific progress.

---

*Interested in bringing AI-enhanced research to your institution? Let's talk about how to integrate AI infrastructure with your research workflow.*
