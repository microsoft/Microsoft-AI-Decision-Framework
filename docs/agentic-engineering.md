---
layout: default
title: Agentic Engineering
nav_order: 13
description: "Vibe coding, vibe engineering, and agentic engineering: the vocabulary engineering teams are already using, what actually separates the practices, and why verification became the discipline that matters, even for builders who never read the code."
---

# Agentic Engineering
{: .no_toc }

**The industry spent two years arguing about what to call this, and the argument produced three terms your engineers already use.**
{: .page-subtitle }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Why this page exists

If you lead engineers, you have heard these words in interviews, conference talks, and your own channels. They are not interchangeable, the differences carry real consequences, and the vocabulary is the fastest route to a precise conversation about a subject that otherwise dissolves into opinion and anecdote.

This is a companion to the [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}), which covers *what Microsoft ships* for the developer loop and for people who build apps by describing them. This page covers *how the practice itself is changing*, which is a different question with a different answer.

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

## When the builder never reads the code

**Everything above assumes an engineer somewhere in the loop. What happens when there isn't one?** Andrej Karpathy's [original post](https://x.com/karpathy/status/1886192184808149383) described a mode where you *"forget that the code even exists"*. For a business user describing an app, that isn't an attitude. It's the default path: the builder never has to open the code. And unlike a weekend project, the result gets shared with colleagues who never saw how it was made.

The honest test still applies: **can you prove it works?** Simon Willison's golden rule for production code is that he won't commit anything he *"couldn't explain exactly what it does to somebody else"*. A business owner can't meet that bar for the implementation. They can meet it for the rules, because they know what the Monday total ought to be. That is a reason to divide the review, not to lower it.

Start with cases the owner can judge: known totals, deliberately bad input, two people editing the same record at once. Save them, rerun them after every change, and remember that matching the old spreadsheet only counts if the old spreadsheet was right. Known-answer tests are one layer, though, not the whole job. [Microsoft's guidance for Copilot Studio apps](https://learn.microsoft.com/en-us/microsoft-copilot-studio/faq-apps) says to test the app's *"calculations, sample data, links, permissions, connections, accessibility, and error handling"* before sharing it, and to keep the organization's normal *"design, security, accessibility, compliance, testing, and release processes"* for business-critical work.

So split the work. The business owner validates the rules and the results. A developer or platform reviewer covers what the owner can't assess, from who can see what to what happens when a connection fails halfway through a save. Before the app touches sensitive data or feeds a consequential decision, make both reviews a condition of release, and keep running them after launch. The normalization of deviance doesn't need an engineer in the loop to get started.

A governed runtime helps, but be precise about how far. It decides who can open the app and what the app can reach. It has no opinion about whether the totals are right, and nobody's runtime does.

## A note on dialects

On the engineering side, Microsoft and GitHub have built a vocabulary of their own (**spec-driven development**, **agentic DevOps**, **context engineering**), and they often cast vibe coding as fine for quick prototypes and less reliable for mission-critical applications. That isn't a boycott of the word: GitHub titled one of its own launch posts [*"Vibe coding with GitHub Copilot"*](https://github.blog/news-insights/product-news/github-copilot-agent-mode-activated/). Learn both dialects. Your engineers speak one and your vendor documentation speaks the other, and they are describing the same argument.

**For builders who aren't engineers, Microsoft speaks two dialects of its own.** The Power Platform team took the word *vibe* and ran with it: its natural-language builder is the [Power Apps vibe](https://learn.microsoft.com/en-us/power-apps/vibe/overview) experience, and its September 2026 feature update announced a skill to *"vibe code entire model-driven apps"*. The Copilot team says *natural language app building* and *agentic app creation*, and calls the architecture underneath [*"open build and managed run"*](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/build-where-you-want-run-with-confidence-now-microsoft-hosts-and-manages-the-code-created-by-copilot/). A year earlier, Microsoft's Sumit Chauhan had [introduced Agent Mode in Office as *vibe working*](https://www.microsoft.com/en-us/copilot/blog/2025/09/29/vibe-working-introducing-agent-mode-and-office-agent-in-microsoft-365-copilot/), borrowing the word for documents rather than apps.

Here is how those land in the words your organization already uses:

* **End-user programming** is the oldest of these names for the activity. The spreadsheet is its classic example, and one of the cases Bonnie Nardi studied in *A Small Matter of Programming* (1993). [Microsoft's post introducing Code](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) tells the story as a new unit of work: after the document, the spreadsheet, and the deck, *"Code adds a fourth: small, purpose-built solutions anyone can create to get a job done"*.
* **Citizen developer** is Gartner's [2009 name](https://web.archive.org/web/20130128074257/http://www.gartner.com/it/page.jsp?id=1212813) for the person: *"a user operating outside of the scope of enterprise IT and its governance"*. A managed runtime inverts that defining trait, because the builder can start inside IT's governance.
* **Vibe coding** is the newest name for the mode, and its drift from weekend projects to non-developers building apps is exactly the ground these builders stand on.
* **"Open build and managed run"** is Microsoft's phrase. The nearest industry terms are platform engineering's [*paved road*](https://martinfowler.com/articles/talk-about-platforms.html) and [*golden path*](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem): a supported way to build that is easier to take than to go around. That comparison is ours, not Microsoft's.

**One tradition doesn't translate cleanly.** Clay Shirky's [*situated software*](https://web.archive.org/web/20040411012949/http://www.shirky.com/writings/situated_software.html) (2004) is built for a particular group in a particular context, and the [Ink & Switch essay on *malleable software*](https://www.inkandswitch.com/essay/malleable-software/) (2025) wants tools people can reshape to fit their own needs. Both start from the user's agency. Microsoft's runtime announcement starts from governance and offers agency inside it: *"Central governance should not require centralized creation."* Whether a governed host leaves enough room for what those writers want is an open question, and a testable one. If your users must be able to run their software independently, evaluate that requirement directly. Owning the source and being able to leave the platform are different things.

---

**Next:** [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}) for the developer-loop ladder, the business builder's paths, and what Microsoft ships for both, or [AI Instinct]({{ '/docs/ai-instinct' | relative_url }}) for the human side of adoption.
