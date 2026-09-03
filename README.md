# Astro Demo for DiscussionBridge

Public surface: https://astro.demo.discussionbridge.dev/

This repository owns the plain Astro DiscussionBridge demo. It builds and
deploys independently as a Cloudflare Worker with static assets.

The pinned adapter artifact is
`vendor/astro-discussion-bridge-0.1.0-alpha.20260902.3.tgz`. It contains 36
members, is 39,154 bytes, and its SHA-256 is
`ce0bd307536ad5efcba222b3a8da5cf6c6d31691b5a9074cf85047f69bd45830`.
This replaces the rejected clipping-era adapter estate. Publication and
release acceptance remain separate gates.

```powershell
npm ci
npm run build
npm run deploy:dry-run
npm run deploy
```

Deployment requires a reviewed build and explicit production authorization.
