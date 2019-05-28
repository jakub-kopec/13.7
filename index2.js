var fs = require('fs')
var colors = require('colors')

fs.readdir('./katalog', 'utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.blue)
    console.log(files)
    fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err
        console.log('Zapisano!'.blue)
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data)
        })
    })
})