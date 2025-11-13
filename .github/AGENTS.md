---
nav_exclude: true
---

# AGENTS.md - Codex Persistent Guidance

This file provides persistent guidance to AI coding assistants (like Codex CLI, GitHub Copilot, etc.) about how to work with the Microsoft AI Decision Tree project.

---

## Project Context

**What this project does:**  
Provides a comprehensive decision framework for selecting the right Microsoft AI technology (M365 Copilot, Copilot Studio, Azure AI Foundry, etc.) based on business requirements, technical complexity, and organizational capabilities.

**Why it exists:**  
Microsoft's AI portfolio is vast and rapidly evolving. This framework helps technical decision-makers avoid costly mistakes by providing evidence-based, source-backed guidance for technology selection.

**Target audience:**  
Enterprise architects, technical leads, developers, and business stakeholders evaluating Microsoft AI technologies for production use cases.

---

## Core Principles (ALWAYS FOLLOW)

### 1. Source-Backed Research ONLY

**NEVER guess or assume technology capabilities.**

When adding or editing content about Microsoft AI technologies:
1. Search Microsoft Learn documentation FIRST
2. Verify the specific capability you're claiming
3. Cite sources with URLs and "Last Updated" dates
4. Mark Preview/GA/Experimental status explicitly
5. When uncertain, state "Requires verification against official docs"

### 2. Prevent "Shoeboxing"

**Shoeboxing** = Claiming a technology can do something it cannot.

**Real shoeboxing examples we caught:**
- ❌ Fabric Data Agents in "Autonomous" path → ✅ Actually conversational Q&A, not autonomous
- ❌ M365 SDK "has built-in Agent Framework" → ✅ Actually "bring your own orchestrator" model
- ❌ Logic Apps for "multi-agent orchestration" → ✅ Actually triggers SINGLE agents via events

**How to avoid:**
- Research official Microsoft Learn docs before making capability claims
- Don't infer features from product naming
- Validate against actual documentation, not assumptions

### 3. Maintain Navigation Order

**Learning flow is critical.** Documents are ordered to build knowledge progressively:

1. **Capability Model** (nav_order: 2) - Foundation
2. **Decision Framework** (nav_order: 3) - Methodology
3. **Scenarios** (nav_order: 4) - Context
4. **Visual Framework** (nav_order: 5) - Application
5. **Evaluation Criteria** (nav_order: 6) - Assessment
6. **Implementation Patterns** (nav_order: 7) - Execution
7. **Technologies** (nav_order: 8) - Deep dive
8. **Feature Comparison** (nav_order: 9) - Matrices
9. **Quick Reference** (nav_order: 10) - Cheat sheet

**Why Quick Reference is at position 10:**  
Prevents "cheating" - users must learn the framework before accessing fast-lookup tables.

**When editing navigation:**
- Update both `nav_order` in front matter AND "Next:" links at bottom
- Never move Quick Reference before position 10
- Maintain progressive complexity: Foundation → Application → Reference

### 4. Mermaid Diagram Validation

**Every diagram in `docs/visual-framework.md` must have:**
1. Dark theme: `%%{init: {'theme':'dark'}}`
2. Color-coded nodes (Blue=Microsoft primary, Purple=Dev tools, Green=Simple, Orange=Medium, Red=Complex)
3. Status annotations: `<i>Preview</i>` for preview features
4. Validation summary with:
   - Last validated date
   - Key changes explanation
   - List of technologies with capabilities and source URLs

**Before committing diagram changes:**
- Research EVERY technology mentioned
- Verify capabilities against Microsoft Learn
- Add/update validation summary
- Test Mermaid syntax locally with Jekyll

---

## File Structure & Conventions

### Documentation Files (docs/*.md)

**Required front matter:**
```yaml
---
layout: default
title: [Title]
nav_order: [1-12]
description: "[SEO description]"
---
```

**Bottom navigation:**
```markdown
---

**Next:** [Next Document](filename.md) - What the user will learn next
```

### Technology Status Annotations

Use these consistently:
- `(GA)` - Generally Available, production-ready
- `(Preview)` - Public preview, not for production
- `(Experimental)` - Early access, highly volatile
- `(Third-party)` - Non-Microsoft (e.g., LangGraph, LangChain)

### Five-Layer Capability Model

When referencing technologies, identify their layer:
- **Layer 1: Consumption** - M365 Copilot, built-in agents
- **Layer 2: Extensibility** - Graph Connectors, AI Plugins, Declarative Agents
- **Layer 3: Development Platforms** - Copilot Studio, M365 SDK, Azure AI Foundry
- **Layer 4: Infrastructure** - Azure OpenAI, AI Search, Logic Apps, Cosmos DB, Fabric
- **Layer 5: Specialized Copilots** - GitHub Copilot, Security Copilot, Fabric Data Agents

### BXT Decision Framework

When discussing decision-making:
1. **Phase 1: BXT Assessment** - Viability (Business), Desirability (Experience), Feasibility (Technology)
2. **Phase 2: 6 Critical Questions** - User interaction, Build style, Platform, Data, Orchestration, Infrastructure
3. **Phase 3: Technology Selection** - Compare shortlist, evaluate criteria, select simplest option

### Multi-Agent Orchestration Patterns

When discussing multi-agent capabilities, distinguish THREE patterns:
1. **Connected Agents** - Independent agents communicate/collaborate
2. **Sub-agents** - Parent-child hierarchy with delegation
3. **Agent Workflows** - Sequential/Concurrent/Handoff orchestration

**NOT multi-agent orchestration:**
- Event-driven single agent triggering (Logic Apps, Azure Functions)

---

## Common Tasks

### When Asked: "Add new Microsoft technology X"

1. **Research:**
   - Search Microsoft Learn for "X overview", "X documentation", "X capabilities"
   - Find official docs with last updated date
   - Identify: GA/Preview/Experimental status, capabilities, limitations

2. **Update files:**
   - `docs/capability-model.md` - Add to appropriate layer
   - `docs/technologies.md` - Add technical specifications
   - `docs/visual-framework.md` - Update relevant diagrams + validation summaries
   - `docs/feature-comparison.md` - Add to comparison matrices
   - `docs/quick-reference.md` - Add to lookup tables
   - `docs/scenarios.md` - Add relevant use cases

3. **Validation:**
   - Include source URLs
   - Mark status (GA/Preview)
   - Add "Last Validated: [Date]"
   - Test locally with Jekyll

### When Asked: "Update diagram X"

1. **Verify current state:**
   - Read existing validation summary
   - Check Microsoft Learn for updates
   - Note any status changes (Preview → GA)

2. **Update diagram:**
   - Edit Mermaid flowchart syntax
   - Add/update status annotations
   - Maintain color coding conventions
   - Test syntax locally

3. **Update validation summary:**
   - Change "Last Validated" date
   - Document what changed and why
   - Update technology list with new sources
   - Verify cross-references

### When Asked: "Fix navigation"

1. **Check nav_order values:**
   - README.md: 1
   - Capability Model: 2
   - Decision Framework: 3
   - Scenarios: 4
   - Visual Framework: 5
   - Evaluation Criteria: 6
   - Implementation Patterns: 7
   - Technologies: 8
   - Feature Comparison: 9
   - Quick Reference: 10
   - Resources: 11
   - Glossary: 12

2. **Update "Next:" links:**
   - Capability Model → Decision Framework
   - Decision Framework → Scenarios
   - Scenarios → Visual Framework
   - Visual Framework → Evaluation Criteria
   - Evaluation Criteria → Implementation Patterns
   - Implementation Patterns → Technologies
   - Technologies → Feature Comparison
   - Feature Comparison → Quick Reference

3. **Test:**
   - Run `bundle exec jekyll serve --incremental`
   - Verify sidebar navigation
   - Click through "Next:" links

### When Asked: "Add cross-references"

**Good cross-references:**
- Descriptive: `[Five-Layer Capability Model - Layer 2](capability-model.md#layer-2-extensibility)`
- Contextual: "See [Scenarios](scenarios.md) for real-world examples"
- Actionable: "Use [Evaluation Framework](evaluation-criteria.md) to assess complexity"

**Bad cross-references:**
- Vague: `[Click here](file.md)`
- Missing context: Just a URL without explanation
- Dead links: Not tested locally

---

## Quality Checklist

Before proposing edits, verify:

**Content:**
- [ ] All claims backed by Microsoft Learn sources
- [ ] Source URLs included with dates
- [ ] GA/Preview/Experimental status marked
- [ ] No shoeboxing (capabilities match docs)
- [ ] Third-party tools labeled explicitly

**Diagrams:**
- [ ] Dark theme applied
- [ ] Color coding follows conventions
- [ ] Status annotations present
- [ ] Validation summary includes sources
- [ ] Mermaid syntax tested locally

**Navigation:**
- [ ] nav_order correct (1-12)
- [ ] "Next:" link points to right doc
- [ ] Cross-references descriptive
- [ ] Learning flow preserved

**Standards:**
- [ ] Consistent terminology (M365 Copilot, not "Microsoft 365 Copilot")
- [ ] Heading hierarchy (H1 → H2 → H3)
- [ ] File under 1000 lines
- [ ] Front matter complete

---

## Technology Naming Conventions

**Use these names consistently:**
- ✅ M365 Copilot (not "Microsoft 365 Copilot")
- ✅ Copilot Studio (not "Microsoft Copilot Studio")
- ✅ M365 Agents SDK (not "Microsoft 365 Agents SDK")
- ✅ Azure AI Foundry (not "Azure AI Studio" - rebranded)
- ✅ Azure AI Agent Service (not "AI Agent Service")
- ✅ Microsoft Agent Framework (not "Agent Framework SDK")
- ✅ Logic Apps AI Agent Workflows (not "Logic Apps Agents")
- ✅ Fabric Data Agents (not "Fabric Agents")

**Status as of November 2025:**
- M365 Copilot: GA
- Copilot Studio: GA
- M365 Agents SDK: GA
- Azure AI Foundry: GA
- Azure AI Agent Service: GA
- Microsoft Agent Framework: Preview/Experimental (Microsoft's investment direction, will be GA soon)
- Semantic Kernel: Maintenance mode (security patches only, no new features - recommend Agent Framework instead)
- Logic Apps AI Agent Workflows: Preview
- Fabric Data Agents: Preview
- SQL Server 2025 VECTOR: Preview RC1
- Azure AI Content Understanding: Preview
- Copilot Studio Connected Agents: Preview
- Azure AI Foundry Connected Agents: GA May 2025
- Graph Connectors: GA March 2025

---

## Known Distinctions (DON'T MIX THESE UP)

### Microsoft Fabric: Platform vs. Agent

- **Microsoft Fabric Platform** (Layer 4): Lakehouse, Warehouse, OneLake for direct data access
- **Fabric Data Agents** (Layer 5): Conversational AI agent for analytics, can participate as connected agent

### M365 SDK: Integration vs. Built-in

- ❌ "M365 SDK has built-in Agent Framework"
- ✅ "M365 SDK integrates with Agent Framework (recommended), LangChain third-party (bring your own orchestrator)"

**Orchestration Ordering:**
- ❌ "Semantic Kernel, LangChain, Agent Framework"
- ❌ "Agent Framework, Semantic Kernel, LangChain" (don't list SK equally)
- ✅ "Agent Framework (Preview/Experimental, Microsoft recommended), LangChain/LangGraph (third-party alternative)"

### Logic Apps: Event-Driven vs. Multi-Agent

- ❌ "Logic Apps for multi-agent orchestration"
- ✅ "Logic Apps AI Agent Workflows trigger SINGLE agents via events; can expose workflows as MCP servers"

### Autonomous vs. Conversational

- ❌ "Fabric Data Agents for autonomous workflows"
- ✅ "Fabric Data Agents for conversational Q&A over analytics data"

---

## Local Development

**Start Jekyll server:**
```bash
bundle install
bundle exec jekyll serve --incremental
```

**Test Mermaid diagrams:**
1. Edit diagram in `docs/visual-framework.md`
2. Refresh browser at `http://localhost:4000`
3. Verify diagram renders correctly
4. Check color coding and annotations

**Validate navigation:**
1. Start local server
2. Click through sidebar navigation
3. Follow "Next:" links at bottom of pages
4. Verify order: Foundation → Application → Reference

---

## When in Doubt

1. **Can't find official docs?** → State "Requires verification" and don't make claims
2. **Conflicting sources?** → Prefer Microsoft Learn over blog posts, use newest date
3. **Unsure about status?** → Mark as "(Verification needed)" and note in PR
4. **Breaking 1000 line limit?** → Split file by concept, add cross-references
5. **Navigation seems wrong?** → Verify against learning flow: Foundation → Context → Application → Reference

---

## Success Metrics

**Your edits are successful when:**
- All claims traceable to Microsoft Learn sources
- No shoeboxing (capabilities match official docs)
- Navigation supports progressive learning
- Cross-references create cohesive framework
- Status annotations accurate (GA/Preview)
- Diagrams validated with sources and dates
- Local Jekyll build succeeds without errors

---

## Emergency Commands

**If Jekyll fails to build:**
```bash
# Clean and rebuild
bundle exec jekyll clean
bundle install
bundle exec jekyll serve
```

**If Mermaid diagrams don't render:**
1. Check syntax with online Mermaid Live Editor
2. Verify `_includes/head-custom.html` loads Mermaid
3. Clear browser cache
4. Check browser console for errors

**If navigation is broken:**
1. Verify all `nav_order` values unique (1-12)
2. Check front matter syntax (YAML format)
3. Restart Jekyll server
4. Clear browser cache

---

**Remember:** When working on this project, you're helping people make multi-million dollar technology decisions. Accuracy and source-backing are CRITICAL. If you're not sure, research first or ask for clarification. Never guess.
