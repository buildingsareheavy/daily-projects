var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var log = require("fancy-log");

// start 'sass'
gulp.task("sass", function() {
  gulp
    .src("scss/styles.scss")
    .pipe(sass({ includePaths: ["scss"] }))
    .on("error", log)
    .pipe(gulp.dest("css"));
});

// start 'browser-sync'
gulp.task("browser-sync", function() {
  // watch index.html & all .css and .js files
  browserSync.init(["**/*.html", "**/*.css", "**/*.js"], {
    server: {
      baseDire: "./"
    },
    // open in Firefox Developer Edition instead of default browser
    browser: "Firefox Developer Edition"
  });
});

// combine 'sass' and 'browser-sync'
// just run 'gulp'
gulp.task(
  "default",
  // added gulp.series and gulp.parallel becuase of Gulp v4
  gulp.series(gulp.parallel("sass", "browser-sync"), function() {
    gulp.watch("scss/*.scss", ["sass"]);
  })
);
