// server.js
const lonelybots = require('lonelybots-sdk')
const express = require('express')

// this is your main bot logic
// read more in https://github.com/lonelybots/lonelybots-sdk-node about
// what you can get from the email object and what you can do with it
function myOnlyBot (email) {
  email.reply('hi!!! I AM ALIVE!!! did you just say ' + email.text)
}

const server = express()
server.use('/bot', lonelybots({
  callback: myOnlyBot,
  validationToken: 'abcdefg',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGlhcyI6Im9ubHlib3QiLCJkaXNwbGF5TmFtZSI6Ik9ubHkgQm90IiwiaWF0IjoxNDYzMTIwNjgzfQ.nPuHbQrDRkqLO9wcYILfeSAeX4-yaLTaygmRzraLwp8'
}))

const port = process.env.PORT || 3000
server.listen(port, function () {
  console.log('my only bot is listening at port ' + port)
})
