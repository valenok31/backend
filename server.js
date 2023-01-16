const http = require('http');

let requestsCount = 0;

const  server = http.createServer((request, response)=>{

    switch(request.url){

        case '/ret':
            response.write('ret URL')
            response.end()
            break;
        case '/':
        case '/top':
            response.write('top server!')
            response.end()
            break;
        default:
            response.write('not found 404')
            response.end()
    }

});


server.listen(3005)