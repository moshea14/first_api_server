import express from 'express';
const app = express();
app.get('/', (_, responseObj) => {
    responseObj.send('Hello, World!');
});
app.listen(3333);
