---
layout: default
title: Agentic Engineering
nav_order: 13
description: "Vibe coding, vibe engineering, and agentic engineering: the vocabulary engineering teams are already using, what actually separates the practices, and why verification became the discipline that matters."
---

# Agentic Engineering
{: .no_toc }

**The industry spent two years arguing about what to call this, and the argument produced three terms your engineers already use.**
{: .fs-6 .fw-300 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Why this page exists

If you lead engineers, you have heard these words in interviews, conference talks, and your own channels. They are not interchangeable, the differences carry real consequences, and the vocabulary is the fastest route to a precise conversation about a subject that otherwise dissolves into opinion and anecdote.

This is a companion to the [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}), which covers *what Microsoft ships* for the developer loop. This page covers *how the practice itself is changing*, which is a different question with a different answer.

## The three terms

**Vibe coding** came first, and it was precise before it escaped. You give in to the vibes and forget the code exists; you stop reading the diffs; the code grows beyond your comprehension. It was explicitly scoped to throwaway weekend projects and was never offered as a methodology. It became an accusation only after people started applying it to production systems, which is not what its author proposed. Used correctly, it names a legitimate mode: exploratory, disposable, and honest about being both.

**Vibe engineering** was coined as its deliberate antonym: the same agents directed by experienced engineers applying *more* rigor rather than less. The term did real work by naming the opposite, and you will still hear it. When someone on your team says it, they mean the disciplined practice.

**Agentic engineering** is where the industry has settled, and it is the term to standardize on. Even the engineer who coined *vibe engineering* has since conceded that this one won and moved to it. What it names is the goal itself: claim the leverage agents offer **without compromising the quality of the software**. That costs you more oversight and scrutiny, not less.

## What actually separates them

Vibe coding and agentic engineering are **indistinguishable from the outside**. Same tools, same editor, pull requests that look alike. What separates them is entirely the machinery built around the work.

**And the discriminator is not the one you would expect.** The obvious test, *do you read every line?*, is quietly failing, because serious engineers building serious software have already stopped reading every line and their software is fine. The honest test is different: **can you prove it works?** Tests, conformance checks, preview environments, adversarial review, a definition of done enforced by something other than your own optimism. Reading was one way to earn confidence. It stopped being the only one, and it never scaled anyway.

That reframes discipline as *infrastructure* rather than virtue, which is good news: infrastructure can be funded and built, and virtue can only be hoped for.

## The failure mode worth naming in a leadership conversation

**The normalization of deviance.** Every time an agent gets it right without supervision, the case for supervising it next time gets a little weaker. Nothing announces the moment the trust became unearned. You discover it in an incident review, reconstructing a decision nobody consciously made.

## Why seniority matters more, not less

Agents reward the practices that were already good engineering. Better specs produce better output. Comprehensive tests make delegation safe. Clean architecture leaves less room for invented abstractions. When these projects fail, it is rarely the AI that caused it. It is the design thinking that got skipped because generation felt fast enough to skip it.

## A note on dialects

Microsoft and GitHub largely do not use this vocabulary. They have built their own (**spec-driven development**, **agentic DevOps**, **context engineering**) and they treat vibe coding as a foil: fine for quick prototypes, less reliable for mission-critical applications. Learn both dialects. Your engineers speak one and your vendor documentation speaks the other, and they are describing the same argument.

---

**Next:** [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}) for the developer-loop ladder and what Microsoft ships against it, or [AI Instinct]({{ '/docs/ai-instinct' | relative_url }}) for the human side of adoption.
