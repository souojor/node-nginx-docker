const express = require('express')
const app = express()
const port = 3000
const names = ['João', 'José', 'Raquel', 'Maria', 'Pedro', 'Joana', 'Tiago', 'Mateus'];
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createTableSql = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(createTableSql)
connection.end()

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)
  const insert = `INSERT INTO people(name) values ('` + names[Math.floor(Math.random() * names.length)] + `')`
  connection.query(insert)

  const query = `SELECT * FROM people`
  connection.query(query, function(err, result, fields) {
    if (err) throw err;

    var text = '<h1>Full Cycle Rocks!</h1><ul>'
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      text = text + '<li>' + row.name + '</li>'
    })
    text = text + '</ul>'

    res.send(text)
  })
  connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})