# VitePress Project Template

## Steps used to create this template

* Install `Node.js` and `yarn` locally.
* Add `vitepress` as dev dependency:

```sh
# This also creates a package.json file
yarn add -D vitepress
```

* Start VitePress setup wizard using:
    * Where should VitePress initialize the config?
        * `./docs`
    * Site title:
        * `VitePress Template`
    * Site description:
        * `Description placeholder for VitePress Template`
    * Theme:
        * `Default Theme (Out of the box, good-looking docs)`
    * Use TypeScript for config and theme files?
        * `Yes`
    * Add VitePress npm scripts to package.json?
        * `Yes`

```sh
yarn vitepress init
```

* Added the following directories to the `.gitignore` file:

```
.DS_Store
node_modules/
docs/.vitepress/dist
docs/.vitepress/cache
```

* Removed following unused files:

```
markdown-examples.md
api-examples.md
```

* Added Sidebar config under `.vitepress` directory.
    * This lets you have different sidebar based on different books/prefixes.

* Also, added Theme config under `.vitepress` directory.
    * This lets you change colors for your website.

* Updated `config.mts` under `.vitepress` directory.

* Adjusted `index.md` for the new changes.

* Added `spotlight/index.md` file for Spotlight section of homepage.
    * This is optional and can be removed if you chose not to have it.
        * Make sure you adjust `index.md` accordingly.

* Added `public` directory and its contents for `config.mts` to work.

## Steps needed to customize your project

* Modify these files to fir your project:

```
index.md
spotlight/index.md
.vitepress/config.mts
```

* Update Book1, Book2 and Book3 to match your book contents.
    * Also, update corresponding sidebar configs.

* You can run the server locally using:

```sh
yarn docs:dev
```