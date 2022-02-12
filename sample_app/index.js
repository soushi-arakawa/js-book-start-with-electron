


function doit() {
  window.ipcMain.createTable()
  findUsers()
}

function addUser() {
  let ta = document.querySelector('#ta')
  let data = ta.value.split(',')
  console.log(`doit() ${JSON.stringify(data)}`)
  window.ipcMain.addUser(data[0], data[1], data[2]).then((res) => {
    alert(res)
    ta.value = ""
    makeTable()
  })
}

function findUsers() {
  let ta = document.querySelector('#ta')
  window.ipcMain.findUser(ta.value).then((res) => {
    let msg = document.querySelector('#msg')
    msg.innerHTML = jsonToTable(res)
  })
}

function makeTable() {
  console.log('makeTable')
  window.ipcMain.findAll().then((res) => {
    console.log(res)
    let msg = document.querySelector('#msg')
    console.log(jsonToTable(res))
    msg.innerHTML = jsonToTable(res)
  })
}

function jsonToTable(json) {
  let table = '<table class="table"><thead><tr><th></th>'
  for (let ky in json) {
      let ob = json[ky]
      for (let ky2 in ob) {
          table += '<th>' + ky2 + '</th>'
      }
      break
  }
  table += '</tr></thead><tbody>'
  for (let ky in json) {
      table += '<tr><td>' + ky + '</td>'
      let ob = json[ky]
      for (let ky2 in ob) {
          table += '<td>' + ob[ky2] + '</td>'
      }
      table += '</tr>'
  }
  table += '</tbody></table>'
  return table
}

makeTable()