const http = require('http'); 

const port = 5001;
const host = 'localhost';

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {

    // get method dr request
    const {url,method} = request;

    // set header
    response.setHeader('Content-Type', 'text/html');
    // set status code

    // if (url === "/") {
    //     if (method === "GET") {
    //         response.statusCode = 200;
    //         response.end('<h1>Hi! Welcome!</h1>');
    //     } else if(method === "POST"){
    //         response.statusCode = 200;
    //         let body = [];

    //         // mengisi data dengan chunk
    //         request.on('data', (chunk) => {
    //             body.push(chunk);
    //         });

    //         // mengubah buddy dengan buffer yang sudah tertampung pada body
    //         request.on('end', () => {
    //             body = Buffer.concat(body).toString();
    //             const { name } = JSON.parse(body);
    //             response.end(`<h1>Hai, ${name}!</h1>`);
    //         });
    //     } else {
    //         response.statusCode = 404;
    //         response.end('url not found!');
    //     }
    // } else if (url == "/login") {
    //     response.statusCode = 200;
    //     let body = [];

    //     // mengisi data dengan chunk
    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     // mengubah buddy dengan buffer yang sudah tertampung pada body
    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name,pass } = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}! ${pass}You can continue</h1>`);
    //     });
    // } else {
    //     response.statusCode = 404;
    //     response.end('url not found!');
    // }

    switch (url) {
        case "/":
            switch (method) {
                case "GET":
                    response.statusCode = 200;
                    response.end('<h1>Hi! Welcome!</h1>');
                    break;
                case "POST":
                    response.statusCode = 200;
                    let body = [];

                    // mengisi data dengan chunk
                    request.on('data', (chunk) => {
                        body.push(chunk);
                    });

                    // mengubah buddy dengan buffer yang sudah tertampung pada body
                    request.on('end', () => {
                        body = Buffer.concat(body).toString();
                        const { name } = JSON.parse(body);
                        response.end(`<h1>Hai, ${name}!</h1>`);
                    });
                    break;
                default:
                    response.statusCode = 404;
                    response.end('Page not found!');
                    break;
            }
            break;
        case "/login":
            switch (method) {
                case "POST":
                    response.statusCode = 200;
                    let body = [];

                    // mengisi data dengan chunk
                    request.on('data', (chunk) => {
                        body.push(chunk);
                    });

                    // mengubah buddy dengan buffer yang sudah tertampung pada body
                    request.on('end', () => {
                        body = Buffer.concat(body).toString();
                        const { name,pass } = JSON.parse(body);
                        response.end(`<h1>Hai, ${name}! ${pass}You can continue</h1>`);
                    });
                    break;
            
                default:
                    break;
            }
        default:
            response.statusCode = 404;
            response.end('Page not found!');
            break;
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});