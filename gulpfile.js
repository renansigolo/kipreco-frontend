'use strict'

/**************** Global Imports ****************/

//GLOBAL
const browserSync = require('browser-sync').create()

//VARIABLES FOR WATCH
const 
  autoprefixer = require('autoprefixer'),
  concat = require('gulp-concat'),
  cssnano = require('cssnano'),
  del = require('del'),
  eslint = require('gulp-eslint'),
  gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  imageminGuetzli = require('imagemin-guetzli'),
  imageminPngquant = require('imagemin-pngquant'),
  postcss = require('gulp-postcss'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  sitemap = require('gulp-sitemap'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify')

//TASKS FOR WATCH

//Watch SCSS files -> sourcemap, autroprefixer, minify with cssnano, rename .css to .min.css
const cssPlugins = [autoprefixer(), cssnano()]
const scss = () => {
  return gulp
    .src('src/assets/_pre/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(cssPlugins))
    .pipe(
      rename(function (path) {
        if (path.extname === '.css') {
          path.basename = 'styles'
          path.basename += '.min'
        }
      })
    )
    .pipe(gulp.dest('src/assets/css/'))
    .pipe(browserSync.stream())
}

//TASKS FOR THE WEB

//Watch JS files -> sourcemap, minifiy with uglify, concat for the website
const jsFilesWeb = [
  'src/assets/_pre/js/app.js',
  'src/assets/_pre/js/routes.js',
  'src/assets/_pre/js/controllers/**/*.js',
]

const jsWeb = function () {
  return (
    gulp
      .src(jsFilesWeb)
      .pipe(sourcemaps.init())
      // .pipe(uglify())
      .pipe(concat('scriptsWeb.js'))
      .pipe(
        rename(function (path) {
          if (path.extname === '.js') {
            path.basename += '.min'
          }
        })
      )
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('src/assets/js/'))
      .pipe(browserSync.stream())
  )
}

//Watch Libs -> concat JS libraries for the website
const libPathsWeb = [
  'node_modules/angular/angular.min.js',
  'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
]

const jsLibsWeb = function () {
  return gulp
    .src(libPathsWeb)
    .pipe(concat('libsWeb.js'))
    .pipe(
      rename(function (path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(gulp.dest('src/assets/js/'))
}

//TASKS FOR DISTRIBUTION

//Delete all files in the dist folder
const clean = () => {
  del.sync(['dist/**/*'])
  return Promise.resolve()
}

//Minify HTML files
const htmlminify = function () {
  return gulp
    .src('src/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest('dist/'))
}

//Create sitemap.xml
const generateSitemap = function () {
  return gulp
    .src('src/**/*.html', {
      read: false,
    })
    .pipe(
      sitemap({
        siteUrl: 'https://www.kipreco.com.br',
      })
    )
    .pipe(gulp.dest('dist'))
}

//Optimize Images - GIF, SVG and ICO
const optimizeGif = function () {
  return gulp
    .src('src/**/*.{gif,svg,ico}')
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3,
        }),
      ])
    )
    .pipe(gulp.dest('dist/'))
}

//Optimize Images - PNG
const optimizePng = function () {
  return gulp
    .src('src/**/*.{jpg,jpeg,png}')
    .pipe(imagemin([imageminPngquant()]))
    .pipe(gulp.dest('dist/'))
}

//Optimize Images - JPG ang JPEG
const optimizeJpg = function () {
  return gulp
    .src('src/**/*.{jpg,jpeg}')
    .pipe(imagemin([imageminGuetzli()]))
    .pipe(gulp.dest('dist/'))
}

//Copy remaining files to dist
// gulp.task('copy', ['scss', 'jsWeb', 'jsLibsWeb'], function () {
//   return gulp
//     .src([
//       'src/**/*.{pdf,htm,xml,txt,eot,ttf,woff,woff2,otf,ttf,php,css,js,json,map}',
//       '!src/assets/_pre/**/*',
//     ])
//     .pipe(gulp.dest('dist/'))
// })

const copy = () => {
  return gulp
    .src([
      'src/**/*.{pdf,htm,xml,txt,eot,ttf,woff,woff2,otf,ttf,php,css,js,json,map}',
      '!src/assets/_pre/**/*',
    ])
    .pipe(gulp.dest('dist/'))
}

//TASKS FOR DEBUGGING

//Watch JS files -> sourcemap, lint with eslint, minifiy with uglify, concat for the website
const jsDebug = function () {
  return gulp
    .src(jsFilesWeb)
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(uglify())
    .pipe(concat('scriptsWeb.js'))
    .pipe(
      rename(function (path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/assets/js/'))
    .pipe(browserSync.stream())
}

//GULP TASKS

// Static server
// gulp.task('serve', ['scss', 'jsWeb'], function () {
//   browserSync.init({
//     server: {
//       baseDir: './src/',
//     },
//   })
//   gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss'])
//   gulp.watch('src/assets/_pre/js/**/*.js', ['jsWeb'])
//   gulp.watch('src/**/*.html').on('change', browserSync.reload)
// })

// // Static server for debugging
// gulp.task('serveDebug', ['scss', 'jsDebug'], function () {
//   browserSync.init({
//     server: {
//       baseDir: './src/',
//     },
//   })
//   gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss'])
//   gulp.watch('src/assets/_pre/js/web/**/*.js', ['jsDebug'])
//   gulp.watch('src/**/*.html').on('change', browserSync.reload)
// })

//Watch task
// gulp.task('watch', function () {
//   gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss'])
//   gulp.watch('src/assets/_pre/js/web/**/*.js', ['jsWeb'])
//   gulp.watch('node_modules/**/*', ['jsLibsWeb', 'jsLibsApp'])
// })

//Compile task
exports.compile = gulp.series(scss, jsWeb, jsLibsWeb)

//Distribution task
exports.default = gulp.series(
  clean,
  gulp.parallel(
    htmlminify,
    scss,
    jsWeb,
    jsLibsWeb,
    generateSitemap,
    optimizeGif,
    optimizePng,
    optimizeJpg
  ),
  copy
)
