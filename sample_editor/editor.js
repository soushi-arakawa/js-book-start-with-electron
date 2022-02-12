let = editor = null

window.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  editor = ace.edit('editor_area')
  setTheme('textmate')
  editor.focus()
}

function setTheme(tname) {
  editor.setTheme('ace/theme/' + tname)
}