// SETUP REQUIREMENTS
const http = require('http');
const mime = require('mime-types');
const Assistant = require('./assistant')
const port = process.env.PORT || 5000;
let messages = [];

http.createServer(handleRequest).listen(port);
console.log("Listening on port: " + port);

function handleRequest(request, response) {
  console.log("request.url = " + request.url);

  let assistant = new Assistant(request, response);
  let path = assistant.path;

    ///POSTING
  try {
    if (path === '/') {
      assistant.sendFile('index.html');

    } else if (path === '/chat') {
      assistant.parsePostParams((params) => {
        let message = {
          author: 'Anonymous',
          body: params.body,
          when: new Date().toISOString()
        }
        messages.push(message);
        let data = JSON.stringify(messages)
        let type = mime.lookup('json');
        assistant.finishResponse(type, data);
      })
        
    } else {
      let fileName = path.slice(1)
      assistant.sendFile(fileName)
    }
  } catch (error) {
    assistant.sendError(404, "Error: " + error.toString());
  }

}

