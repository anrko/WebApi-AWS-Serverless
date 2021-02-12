const request = require('request');
const uuidv4 = require('uuid/v4');

let chave_translator = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';

//==> Se não encontrar uma variável de ambiente' enviar mensagem de erro!
if (!process.env[chave_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + chave_translator);
}

let subscriptionKey = process.env[chave_translator];

let endpoint_translator = 'TRANSLATOR_TEXT_ENDPOINT';

if (!process.env[endpoint_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + endpoint_translator);
}

let endpoint = process.env[endpoint_translator];

function fn_Traductor(sName) {
    // ==> Aqui vamos configurar os requests
    let options = {
      method: 'POST',
      baseUrl: endpoint,
      url: 'translate',
      qs: {
        'api-version': '3.0',
        'to': ['en', 'es']
      },
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      },
      body: [{
        'text': sName//'Olá Desenvolvedor!'
      }],
      json: true,
    }
   // ==> Aquí vamos realizar la solicitud y impresión de la respuesta
  /* request(options, (err, res, body) => {
    console.log(JSON.stringify(body, null, 4));
  })*/
  return body;
};

// Aquí llamaremos la función a realizar la traducción
// a tradução via API
//traduzirTexto();

