const imagemin = require('imagemin'),
  webp = require('imagemin-webp')
const outputFolder = './img/webp'
const produceWebP = async () => {
  await imagemin(['img/*.webp'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('webps processed')
  await imagemin(['img/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()