# Astro Demo for DiscussionBridge

[Open the public demo](https://astro.demo.discussionbridge.dev/)

This repository owns the plain Astro DiscussionBridge demo. It builds and
deploys independently as a Cloudflare Worker with static assets.

The adapter package pinned by this source is
`vendor/astro-discussion-bridge-0.2.0-alpha.20.tgz`. It contains 43 members, is
43,930 bytes, and its SHA-256 is
`b63b62a40a1283d9b333f1a35c7b44da3976f029c8b2b9548ad2e0388d5f82f9`.
Use the repository lockfile to reproduce this demo build.

Every rendered page includes the DiscussionBridge Google Analytics property
`G-K9SYR7QENF` through the shared Astro head component.

```powershell
npm ci
npm run build
npm run deploy:dry-run
npm run deploy
```

Deployment requires a reviewed build and explicit production authorization.

[Astro adapter and V4 source tag](https://github.com/DiscussionBridge/astro-discussion-bridge) · [Demo chooser](https://demo.discussionbridge.dev/)
