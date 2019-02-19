let gulp = require('gulp'),
    minifyJS = require('gulp-terser'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    cssMinify = require('gulp-csso'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug');
   
gulp.task('html', ()=> {
    return gulp.src('app/html/index.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', ()=>{
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer())
        .pipe(cssMinify())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('clean', ()=>{
    return delFiles('dist')
});

gulp.task('pug', ()=>{
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist/templates'))
});

gulp.task('js:es6', ()=>{
    return gulp.src('app/js/*.js')
        .pipe(minifyJS())
        .pipe(rename({
            suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('js:babel', ()=>{
    return gulp.src('app/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({
            suffix: '.es5'
        }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('server', ()=>{
    return bs({
        server: {
            baseDir: 'dist'
        },
        browser: 'chrome'
    })
});

gulp.task('copyJson', ()=>{
    return gulp.src('app/json/*.json')
    .pipe(gulp.dest('dist/json'))
});

gulp.task('sass:watch', ()=>{
    return gulp.watch('app/css/**/*.css', gulp.series('sass', (done) =>{
        bs.reload();
        done()
    }))
});

gulp.task('js:watch', ()=>{
    return gulp.watch('app/js/**/*.js', gulp.series('js:es6', (done) =>{
        bs.reload();
        done()
    }))
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('copyJson','sass', 'html','js:es6', 'js:babel'),
//    'pug', //не работает?
    gulp.parallel('sass:watch', 'js:watch','server')
    ))
    