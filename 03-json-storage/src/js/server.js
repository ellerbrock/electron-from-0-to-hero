const storage = require('electron-json-storage')
const moment = require('moment')
const $ = require('jquery')
const os = require('os')

let date = moment().format('LL')
let userInfo = os.userInfo()
let hostname = os.hostname()
let platform = os.platform()

// resetStorage()

let info = storage.get('init', function(err, data) {
  if(err) {
    firstStart()
    dumpHtml('The Application started first time!')
  } else {
    storage.set('log', {
      date: moment().format('LL')
    }, function(err) {
      if(err) throw err
    })
    dumpHtml('active browser session ...')
  }
})

function firstStart() {
  storage.set('init', {
    date: moment().format('LL')
  }, function(err) {
    if(err) throw err
  })
}

function resetStorage() {
  storage.clear(function(error) {
    if(error) throw error
  })
  console.log('storage cleared sucessful ...')
}

function dumpHtml(info) {
  let inject = `<tr>
                  <td>${info}</td>
                  <td>${userInfo.username}
                  <td>${hostname}</td>
                  <td>${platform}</td>
                  <td>${date}</td>
                </tr>`
  $('.debug').append(inject)
}
