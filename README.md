# Astro Demo for DiscussionBridge

Public surface: https://astro.demo.discussionbridge.dev/

This repository owns the plain Astro DiscussionBridge demo. It builds and
deploys independently as a Cloudflare Worker with static assets.

The pinned adapter artifact is
`vendor/astro-discussion-bridge-0.1.0-alpha.20260903.6.tgz`. It contains 39
members, is 42,672 bytes, and its SHA-256 is
`cb7fe059ee91dd6fab79bafca938d942a8f8a28811f721511cf9de8d75935824`.
This replaces the rejected clipping-era adapter estate. Publication and
release acceptance remain separate gates.

```powershell
npm ci
npm run build
npm run deploy:dry-run
npm run deploy
```

Deployment requires a reviewed build and explicit production authorization.
