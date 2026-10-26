# CAIL Docs

Documentation for the CUNY AI Lab's tools, kept in one place so the writing can be reviewed and revised together. Each folder is one documentation set.

| Folder | Tool | Where readers see it |
| --- | --- | --- |
| `stem-splitter/` | Stem Splitter, the browser mixer for close listening | Served by the Stem Splitter app under `/docs/` |
| `systems-mapping/` | Systems Mapping, the course workspace for building and interpreting system maps | Guide source maintained here; copy into the app to publish |
| `sandbox/` | CAIL Sandbox, the Lab's Open WebUI deployment | Published at https://ailab.gc.cuny.edu/sandbox-docs/ from the [website repository](https://github.com/CUNY-AI-Lab/CUNY-AI-Lab-website/tree/main/src/content/sandbox-docs) |

## How each set is maintained

The Stem Splitter and Systems Mapping sets are static HTML pages with a shared `docs.css` and an `img/` folder. They are written as prose, one idea per paragraph, for instructors and students who may be new to the tool. Links to the app itself (`/`, `/favicon.svg`) are root-relative because the app serves the pages. Copy a folder into the app's `public/docs/` directory to ship a revision.

The Systems Mapping build does not currently include a `public/docs/` copy or a workflow that copies these guides. Updating `systems-mapping/` here updates the guide source; it does not publish the pages in the app. Publishing them requires a separate app release containing the guide pages and their linked assets.

The Sandbox set is the original Markdown, kept as the historical source of the articles that moved into the Lab website in September 2026. Current edits to the Sandbox documentation belong in the website repository, which publishes them.

## Checks

```
node scripts/check-links.mjs
```

The check confirms that every relative link and asset in the three sets resolves to a file in this repository. It runs on every push and pull request.

This repository was formerly `sandbox-docs` and served a GitHub Pages site. That site is no longer published; the Sandbox documentation lives on the Lab website.
