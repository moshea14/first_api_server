import express from 'express';

const app = express();

app.get('/', (_, responseObj) => {
  responseObj.send('Hello, World!');
});

app.get('/quote', (_, responseObj) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.lenth)];

  responseObj.send({
    quote: randomQuote,
  })
});

app.get('/data', (_, responseObj) => {
  const data = {
    name: 'John Doe',
    age: 30
  };

  responseObj.send(data);
});

app.listen(3333);

/* 
Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. It sends back an object like the one below: 
{
  quote: 'JavaScript is the tool that turns ideas into reality.'
}
*/









