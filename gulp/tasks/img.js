module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng(BNRW4rkZQR2rkK4Q04MRBsRz5KJCsqF9))
            .pipe($.gulp.dest('./build/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'));
    });
};
