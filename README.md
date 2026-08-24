# Astro Demo for DiscussionBridge

Public surface: https://astro.demo.discussionbridge.dev/

This repository owns the plain Astro DiscussionBridge demo. It builds and
deploys independently as a Cloudflare Worker with static assets.

The pinned adapter artifact is
`vendor/astro-discussion-bridge-0.1.0-alpha.20260824.3.tgz`. It contains 67
members, is 110,908 bytes, and its SHA-256 is
`d800c2802f1a0818bc9a176899490d768960e09a06c9ae9ecc0efe4410e3cc53`.
This replaces the rejected clipping-era `0.1.0` artifact. Publication and
release acceptance remain separate gates.

```powershell
npm ci
npm run build
npm run deploy:dry-run
npm run deploy
```

Deployment requires a reviewed build and explicit production authorization.
