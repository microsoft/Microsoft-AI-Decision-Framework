# Contributing to Microsoft AI Decision Framework

We welcome contributions from developers and organizations worldwide! Our goal is to foster a collaborative and inclusive community where diverse perspectives can help improve this decision framework. 

**We actively encourage you to fork this repository and submit pull requests** following standard open-source GitHub practices. Your improvements, corrections, and enhancements make this framework better for everyone.

## Ways to Contribute

- **Documentation improvements**: Clarify explanations, fix typos, improve examples
- **Diagram updates**: Enhance Mermaid decision trees, add new decision paths
- **Scenario contributions**: Add real-world use cases with validated technology recommendations
- **Technology research**: Validate capabilities against official Microsoft Learn documentation
- **Framework enhancements**: Improve BXT methodology, evaluation criteria, or implementation patterns
- **Community engagement**: Participate in [discussions](https://github.com/microsoft/microsoft-ai-decision-framework/discussions), answer questions, share experiences

## Philosophy: Right Technology, Right Context

This framework is built on the principle that **there are no "winners" or "losers" among Microsoft AI technologies** — only the right technology for your specific requirements and context.

- **Evidence-based decisions**: Technology recommendations must be backed by validated capabilities, not opinions or preferences
- **Context matters**: What works best for one scenario may not be optimal for another
- **Complexity-appropriate**: Choose the simplest technology that meets your requirements
- **Balanced perspective**: Each technology has strengths for specific use cases; the framework helps you find the best fit

**When contributing, please maintain this balanced, objective approach:**
- Avoid strongly opinionated language that favors one technology over others without context
- Present trade-offs clearly (e.g., "Technology A is simpler for basic scenarios; Technology B provides more control for complex requirements")
- Don't "trash talk" or dismiss any Microsoft AI technology — instead, clarify when each is most appropriate
- Focus on helping users make informed decisions based on their specific needs, not on promoting a particular technology

## Before You Start

Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit <https://cla.opensource.microsoft.com>.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Contribution Guidelines

### Source-Backed Research Principle

**CRITICAL**: All technology capabilities, features, and status (GA/Preview/Experimental) MUST be validated against official Microsoft Learn documentation.

**Never:**
- Guess or assume features based on product naming
- Rely on pretraining knowledge without verification
- Accept "common knowledge" without source confirmation

**Always:**
- Search Microsoft Learn documentation first
- Cite sources with URLs and last updated dates
- Note when information is unavailable or unclear
- Mark Preview/Experimental/GA status explicitly

### Preventing "Shoeboxing"

**"Shoeboxing"** = Forcing a technology into a capability it doesn't actually support because we didn't research properly.

**Validation workflow when adding/editing content:**
1. Identify every technology mentioned
2. Search Microsoft Learn for official documentation
3. Verify the specific capability claimed
4. Document validation with source URLs and dates
5. Add validation summary to your contribution

### Documentation Standards

**When updating Markdown files:**
- Follow existing front matter format (layout, title, nav_order, description)
- Maintain heading hierarchy (H1 for page title, H2 for major sections)
- Use descriptive link text: `[Capability Model](capability-model.md)`
- Keep files under 1000 lines (split into separate files if needed)
- Add status annotations: `(GA)`, `(Preview)`, `(Experimental)`

**When updating Mermaid diagrams:**
- Use dark theme: `%%{init: {'theme':'dark'}}`
- Follow color coding conventions:
  - Blue (#0078D4): Microsoft primary technologies
  - Purple (#5C2D91): Developer-focused solutions
  - Green (#107C10): Low complexity/fast path
  - Orange (#FFB900): Medium complexity
  - Red (#D83B01): High complexity/enterprise
- Add status annotations: `<br/><i>Preview</i>` for preview features
- Include validation summary with sources and last validated date
- Test locally with `bundle exec jekyll serve` before committing

## Suggested Workflow

1. **Create an issue** for your work (skip for trivial changes like typos)
2. **Fork the repository** on GitHub
3. **Create a branch** off of main: `git checkout -b your-branch-name`
4. **Make your changes** following the guidelines above
5. **Validate your changes**:
   - Run `bundle exec jekyll serve --incremental` to test locally
   - Verify Mermaid diagrams render correctly
   - Check that all links work
   - Ensure navigation flow makes sense
6. **Add validation sources**: Include Microsoft Learn URLs and last updated dates
7. **Commit your changes** with clear commit messages
8. **Create a pull request** against the main branch:
   - Describe what you changed and why
   - Reference any related issues
   - Include validation summary for technology changes
9. **Wait for feedback** from maintainers
10. **Address review comments** if needed

## File Structure

- **Main documentation**: `docs/*.md` (12 core files with nav_order 1-12)
- **Diagrams**: Embedded in `docs/visual-framework.md` using Mermaid
- **Configuration**: `_config.yml`, `Gemfile`
- **Custom styling**: `_sass/custom/custom.scss`
- **AI agent guidance**: `.github/copilot-instructions.md`, `.github/AGENTS.md`

## Quality Checklist

Before submitting your PR, verify:

**Content Quality:**
- [ ] All technology claims backed by Microsoft Learn sources
- [ ] Source URLs included with last updated dates
- [ ] GA/Preview/Experimental status explicitly marked
- [ ] No "shoeboxing" (capabilities match official documentation)
- [ ] Balanced, objective tone maintained (no technology "winners/losers")
- [ ] Trade-offs presented clearly with context
- [ ] Recommendations tied to specific requirements, not personal preferences

**Diagram Quality (if applicable):**
- [ ] Mermaid syntax valid (tested locally)
- [ ] Dark theme applied
- [ ] Color coding follows conventions
- [ ] Status annotations included
- [ ] Validation summary present with sources

**Navigation & Structure:**
- [ ] Front matter includes correct nav_order
- [ ] Cross-references use descriptive link text
- [ ] File under 1000 lines
- [ ] Tested locally with Jekyll

## Questions or Need Help?

- **Documentation questions**: Create a [discussion](https://github.com/microsoft/microsoft-ai-decision-framework/discussions)
- **Bug reports**: File an [issue](https://github.com/microsoft/microsoft-ai-decision-framework/issues)
- **Feature requests**: File an [issue](https://github.com/microsoft/microsoft-ai-decision-framework/issues) with detailed description
- **Security vulnerabilities**: See [SECURITY.md](SECURITY.md)

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Thank You!

Your contributions help improve technology decision-making for the entire community. We appreciate your time and expertise!
