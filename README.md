# Pro0428-LocalEventShared

This repository is for both [frontend](https://github.com/fac-31/Pro0428-LocalEventFrontend) and [backend](https://github.com/fac-31/Pro0428-LocalEventBackend) repositories to make use of it in areas where it expects both repos to follow same type structure, e.g. API response body, database storage.

To update a submodule, a commit is needed to be pushed at this shared repository, then run a shared command with specified branch or SHA to update it, leaving it blank would default to main branch.

Frontend:

```
npm run shared
npm run shared branch-name
npm run shared 01d3fff1eb933f27867da2834ce53447cea140be
```

Backend:

```
deno task shared
deno task shared branch-name
deno task shared 01d3fff1eb933f27867da2834ce53447cea140be
```
