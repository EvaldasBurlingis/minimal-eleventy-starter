# Minimal @11ty/eleventy starter

This starter boilerplate was built to allow you to start a new eleventy project in seconds. It doesn't have any prebuilt styles, so you don't need to delete a bunch of things to make it work for you.

This starter is a bare minimum to start and can be easily modified.

## Features

* Eleventy
* TailwindCSS
* SCSS
* PurgeCSS for removing unused CSS in production

## File structure

```html
  /dist               // production files
  /filters            // date formatters
  /site
    --/css            // compiled css
    --/globals        // place for data files
    --/images         
    --/includes       // components & layouts
    --/js           
    --/resources      // scss
    --404.njk
    --index.njk
    --robots.txt
    --sitemap.njk
```

## Installation

To use the starter, follow these steps:

```
  git clone https://github.com/EvaldasBurlingis/minimal-eleventy-starter.git
```

```
  cd minimal-eleventy-starter
```

```
  npm install
```

```
  npm run dev
```

## Deployment

To deploy this website, use command `npm run production`. It will run PurgeCSS to delete unused css. The site will be built inside the `dist` folder.
