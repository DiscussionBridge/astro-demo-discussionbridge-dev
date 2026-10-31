import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the Astro integration owns analytics while page layouts retain social metadata", async () => {
  const config = await read("astro.config.mjs");
  assert.match(config, /analytics\(analyticsOptions\)/);
  const analytics = await read("analytics.config.mjs");
  const social = await read("src/components/SocialMetadata.astro");
  const home = await read("src/pages/index.astro");
  const post = await read("src/layouts/BlogPost.astro");

  assert.match(analytics, /G-K9SYR7QENF/);
  assert.match(analytics, /siteId: '5'/);
  assert.match(analytics, /HFEVBRGI/);
  assert.match(analytics, /pa-20ZdU_sdR2mFxktHt8mlO/);
  assert.match(analytics, /082e80a9-2fab-4df6-b4f0-c9c09ef9ab5c/);
  assert.match(social, /rel="canonical"/);
  assert.match(social, /https:\/\/demo\.discussionbridge\.dev\/og\.png/);
  assert.match(social, /property="og:image"/);
  assert.match(social, /name="twitter:card" content="summary_large_image"/);
  assert.doesNotMatch(home, /GoogleAnalytics|googletagmanager|gtag\(/);
  assert.match(home, /<SocialMetadata \{title\} \{description\} \/>/);
  assert.doesNotMatch(post, /GoogleAnalytics|googletagmanager|gtag\(/);
  assert.match(post, /<SocialMetadata title=\{pageTitle\}/);
});
