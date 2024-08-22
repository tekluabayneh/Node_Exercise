const url = require("url");

const urlString = "https://www.example.com:8080/path/name?query=string#hash";
const parsedUrl = url.parse(urlString, true); // The second argument, true, parses the query string into an object

console.log(parsedUrl);



const urlObject = {
  protocol: 'https:',
  slashes: true,
  host: 'www.example.com:8080',
  pathname: '/path/name',
  query: { query: 'string' },
};

const formattedUrl = url.format(urlObject);

console.log(formattedUrl); // Outputs: 'https://www.example.com:8080/path/name?query=string'



const baseUrl = 'https://www.example.com/path/name';
const relativeUrl = 'another/path';

const resolvedUrl = url.resolve(baseUrl, relativeUrl);

console.log(resolvedUrl); // Outputs: 'https://www.example.com/path/another/path'


const { URL } = require('url');

const myURL = new URL('https://www.example.com:8080/path/name?query=string#hash');

console.log(myURL.hostname); // Outputs: 'www.example.com'
console.log(myURL.searchParams.get('query')); // Outputs: 'string'

const base = 'https://www.example.com';
const relativeURL = new URL('/path/name', base);

console.log(relativeURL.href); // Outputs: 'https://www.example.com/path/name'
