require('./override')
// express para servir aplicação de teste
const express = require('express')
// faker para gerar dados aleatórios para nossos exemplos
const { faker } = require('@faker-js/faker');
const app = express()
const port = 8080

app.get('/', (req, res) => {
  // simples objeto fictício de mensagem para ser gerado em nosso log
  const message = {
    id: faker.string.uuid(),
    from: '+5542988888888',
    to: '+554299' + faker.number.int({ min: 1000000, max: 9999999 }),
    text: faker.lorem.text(),
    name: faker.person.firstName(),
    sendedAt: new Date().toISOString(),
    channel: 'WhatsApp',
  }

  // simples log fictício simulando erro
  if (req.query.error) console.error('error sending message', message)

  // simples log fictício simulando sucesso
  if (req.query.success) console.log('success sending message', message)

  res.send(';)')
})

app.listen(port, () => {
  console.log(`Running in port ${port}`)
})