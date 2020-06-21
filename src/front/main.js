import path from 'path'
import fs from 'fs'
import util from 'util'


const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)

const directoryPath = path.join(path.resolve(), '/src/front/components')

fs.writeFile(`${ path.resolve('src/public/js') }/scripts.js`, '', function (err) {
  if (err) throw err
  console.log('Saved!')
})

const appentF = (data)=>{
  fs.appendFile(`${ path.resolve('src/public/js') }/scripts.js`, data, function (err) {
    if (err) throw err
    console.log('Updated!')
  })
}

const concatFiles = ()=>{
  readdir(directoryPath)
  .then((files) => {
    files.forEach(function (file) {
      readFile(`${ directoryPath }/${ file }`)
      .then((str) => {
        appentF(str)
      })
      .catch(err=>{
        console.log(err)
      })
    })
  })
  .catch(err=>{
    console.log(err)
  })
}

export default concatFiles
