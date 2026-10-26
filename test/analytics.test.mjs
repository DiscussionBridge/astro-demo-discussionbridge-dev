import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("every page layout includes the shared DiscussionBridge analytics component", async () => {
  const analytics = await read("src/components/GoogleAnalytics.astro");
  const social = await read("src/components/SocialMetadata.astro");
  const home = await read("src/pages/index.astro");
  const post = await read("src/layouts/BlogPost.astro");

  assert.match(analytics, /G-K9SYR7QENF/);
  assert.match(analytics, /googletagmanager\.com\/gtag\/js/);
  assert.match(analytics, /gtag\("config", measurementId\)/);
  assert.match(social, /rel="canonical"/);
  assert.match(social, /https:\/\/demo\.discussionbridge\.dev\/og\.png/);
  assert.match(social, /property="og:image"/);
  assert.match(social, /name="twitter:card" content="summary_large_image"/);
  assert.match(home, /<GoogleAnalytics \/>/);
  assert.match(home, /<SocialMetadata \{title\} \{description\} \/>/);
  assert.match(post, /<GoogleAnalytics \/>/);
  assert.match(post, /<SocialMetadata title=\{pageTitle\}/);
});
