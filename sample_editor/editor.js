let = editor = null

window.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  const editor_area = document.getElementById('editor_area')
  const footer_area = document.getElementById('footer')

  editor = ace.edit('editor_area')
  editor.setTheme('ace/theme/dracula')
  editor.focus()
}