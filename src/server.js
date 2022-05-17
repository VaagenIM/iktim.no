// Dependencies
const express = require('express')
const app = express()

// Variabler
const baseURL = process.env.BASE_URL || 'localhost'
const port = process.env.PORT || 80

// Legg til mappen public, brukes til CSS, bilder & favicon
app.use(express.static('public'))
// Bruk .pug til å tegne HTML (https://pugjs.org/)
app.set('view engine', 'pug')

// Hvis NODE_ENV er dev, kjør utviklermodus (liveserver).
// Liveserver oppdateres automatisk ved endringer av (pug|css|js) filer i mappene: ['views', 'views/templates', 'public', 'public/*']
if (process.env.NODE_ENV === 'dev') {
  console.log('WARNING: Dev mode initialized.')
  const path = require('path')
  const watchFolders = ['views', 'views/templates', 'public', 'public/css', 'public/css/var', 'public/css/anim', 'public/js']
  var paths = []
  watchFolders.forEach(folder => {
    paths = paths.concat([path.join(__dirname, folder)])
  })
  app.use(require('easy-livereload')({
    watchDirs: paths,
    checkFunc: (file) => {
      return /.(pug|css|js|jpg|png|gif|svg)$/.test(file)
    }
  }))
}

const pugData = {
  base_url: `${baseURL}`,
  favicon: `//${baseURL}/favicon.ico`,
  css: `//${baseURL}/css/style.css`
}

// Hjemmeside
app.get('/', (req, res) => {
  res.render('index', pugData)
})

// Redirect alle andre lenker til index
app.get('/*', (req, res) => {
  res.redirect(`//${baseURL}`)
})

// Start app
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
