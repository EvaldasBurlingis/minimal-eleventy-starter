const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

// Compile SCSS & TailwindCSS
mix
  .sass('site/resources/sass/main.scss', 'site/css/main.css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')]
  })

// Production only
if (mix.inProduction()) {
  mix.purgeCss({
    folders: [
      'site'
    ],
    extensions: [
      'html',
      'njk'
    ]
  })
}