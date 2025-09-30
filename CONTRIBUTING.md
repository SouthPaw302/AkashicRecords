### Contributing Guidelines (Spec Kit aligned)

This project follows a specification-first workflow inspired by GitHub Spec Kit.

Core flow
- Constitution: Agree on high-level principles (see docs/spec-kit/CONSTITUTION.md)
- Specify: Capture a clear problem statement and acceptance criteria (open an Issue using the Feature/Spec template)
- Plan: Propose a technical plan (link plan to the Issue)
- Tasks: Break into implementable tasks with DoD
- Implement: Open a PR, link the Issue, meet the Definition of Done

Definition of Done (DoD)
- Linked Issue with specification and acceptance criteria
- Plan documented or link to plan comment
- Tests or manual verification notes included
- Docs/README updated when behavior or usage changes
- CI/build passes

Commit messages
- Use conventional style where possible
- Reference Issue numbers (e.g., "feat(rules): add Spec Kit constitution (#123)")

Pull requests
- Link the Issue and spec
- Include a brief plan summary in the PR description
- Check the PR template boxes before requesting review

Security
- Do not commit secrets. Client-side keys must be treated as public.