//server
console.log('hello');
import http from 'http'
import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const PORT = 8080;

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const server = http.createServer(async (req, res) => {


    try {

        if (req.method === 'GET') {

            let filePath;

            if (req.url === '/') {
                filePath = path.join(__dirName, 'index.html')
            } else if (req.url === '/about') {
                filePath = path.join(__dirName, 'about.html')

            } else if (req.url === '/contact-me') {
                filePath = path.join(__dirName, 'contact-me.html')

            } else {
                filePath = path.join(__dirName, '404.html');
                res.statusCode = 404;

            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end()
        } else {
            throw new Error('method not allowed!')
        }

    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('Server error');

    }


})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

