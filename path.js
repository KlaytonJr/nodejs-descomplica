import { basename, dirname } from "path";

let fileName = basename('./test.txt');
let fileNameSomething = basename('/test/something');

let dir = dirname('/test/something');
let directory = dirname('/test/something/file.txt');

console.log('fileName -> ', fileName);
console.log('fileNameSomething -> ', fileNameSomething);

console.log('dir -> ', dir);
console.log('directory -> ', directory);