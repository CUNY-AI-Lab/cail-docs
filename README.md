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

## License

Copyright © 2026 CUNY AI Lab, The Graduate Center, City University of New York.

Except where otherwise noted, the contents of this repository, including text, slides, images, and example code, are licensed under [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/) (CC BY-NC 4.0). You may share and adapt them for non-commercial purposes if you credit the CUNY AI Lab, link to the license, and indicate any changes.

Suggested attribution: “Documentation for CUNY AI Lab tools: Stem Splitter, Systems Mapping and the CAIL Sandbox” by the CUNY AI Lab, CUNY Graduate Center, licensed under CC BY-NC 4.0.

This license applies to every version of this repository, including earlier commits. The license does not cover third-party material such as images, screenshots, quoted readings, and embedded media, which remain subject to their owners' terms, or the names and logos of CUNY, the CUNY Graduate Center, and the CUNY AI Lab.

For commercial use or other permissions, contact [ailab@gc.cuny.edu](mailto:ailab@gc.cuny.edu). See CAIL's [licensing page](https://ailab.gc.cuny.edu/license/).
