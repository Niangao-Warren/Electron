// renderer.js
const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('message', 'hi from renderer')
  ipcRenderer.on('reply', (event, arg) => {
    document.getElementById('msg').innerHTML = arg
  })
})