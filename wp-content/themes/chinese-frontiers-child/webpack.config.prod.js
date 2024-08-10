const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['src/images/*.{jpg,png}'], 'assets/images', {
    use: [imageminWebp({ quality: 100 })],
  });

  console.log('Images optimized');
})();
