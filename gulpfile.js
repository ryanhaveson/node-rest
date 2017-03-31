var gulp = require('gulp');
var  nodemon = require('gulp-nodemon');

gulp.task('default', () => {
   nodemon({
       script: 'app.js',
       ext:'js',
       ignore: ['./node_modules/**']  

   })
   .on('restart', () => {
       console.log('Restarting');
   }); 
   
});