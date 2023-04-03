const express = require('express')
import * as deepl from 'deepl-node'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/translate', function (req, res) {

  const authKey = '6d8099b7-eb69-09bb-2f34-5d7b9dfe6f44:fx'
  const translator = new deepl.Translator(authKey);
  translator.translateText(req.body.text, null, req.body.targetLang)
    .then((response) => {
      res.send(response.text)
      console.log('Response: ', response)
    })
    .catch((error) => {
      res.send(error)
    })
})


export default {
  path: '/api',
  handler: app
}
