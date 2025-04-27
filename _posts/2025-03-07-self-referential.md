---
layout: post
title: "Self-referential agent architecture: how BarakBot agents talk to themselves"
date: 2025-03-07
categories: [AI, Bot Development, Natural Language Processing]
tags: [BarakBot, Agent Architecture, LLM Agents, Multi-Agent Systems, Cognitive Modeling]
---

In developing BarakBot, I encountered a fundamental challenge in multi-agent coordination. How should distinct AI agents communicate effectively while keeping the architecture simple and scalable? The solution turned out to be surprisingly intuitive: let them talk to themselves.

## The multi-agent challenge

BarakBot consists of multiple specialized LLM agents operating within a Telegram bot interface:

- A **general agent** managing conversations and delegating tasks
- A **photo agent** generating captions for images
- A **scheduler agent** handling reminders and notifications

Each agent performs well in isolation, but they often need to collaborate. For example, the photo agent might need the scheduler agent to remind a user about an analyzed image. The naive approach—hardcoding direct interactions—quickly becomes unmanageable.

## The conventional approach: centralized agent hub

A typical solution is to implement an "agent hub," a structured interface where agents formally request services from each other. While common in multi-agent systems, this method introduces unnecessary complexity:

1. Requires additional infrastructure for agent communication
2. Adds debugging challenges as the network of interactions expands
3. Creates separate protocols for human-agent and agent-agent interactions

This approach felt artificial—unlike how humans coordinate thoughts and actions internally.

## The self-referential solution

The breakthrough came when I reframed the problem from an agent's perspective. If an agent needed another agent's help, what would be the most natural way to request it? The answer: do exactly what a human user does—send a message to the bot.

This is related to an interesting observation: while the agents were switching behind the scenes, users didn't notice the transitions. From the human perspective, the bot remained a singular, coherent entity, even as it dynamically changed between specialized agents. This revealed a key insight: humans naturally maintain a unified mental model of the bot, regardless of its internal complexity.

If the system was coherent enough for users to treat it as one entity, why not let the agents do the same? Instead of addressing specific subcomponents, each agent could simply refer to a single, overarching "assistant"—which, in reality, **is just the bot itself**. When an agent requires a capability it lacks, it simply asks the bot, which routes the request appropriately—just as it does for human users.

### Why this works

- **Simplicity:** No additional communication protocols or infrastructure.
- **Consistency:** The same mechanism handles human and agent interactions.
- **Scalability:** New agents integrate seamlessly without modifying existing connections.

## Conclusion

This approach simplifies multi-agent coordination without requiring additional infrastructure, allowing agents to leverage existing communication channels. By treating the bot as a unified entity, both users and agents interact with it in a way that feels natural and coherent.

More broadly, this highlights an interesting parallel between AI coordination and human cognition. Just as people maintain a stable sense of identity despite shifting internal processes, AI agents can function cohesively within a larger system while operating independently behind the scenes.

There is still much to explore, especially in understanding the implications of self-referential communication in AI systems. As BarakBot evolves, these insights will help refine its design and expand its capabilities. For more details, visit the [projects page](/projects).