#!/usr/bin/env node
const readline = require('readline'); 
const fs = require('fs'); 
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
rl.question('What task are you working on? ', function (answer){
const now = Date.now();
rl.once('line', function (line) {
const end = Date.now();
const duration = Math.floor((end - now) / 1000);
console.log('===============================================');
console.log('                SESSION SUMMARY                ');
console.log('===============================================');
console.log('Task: ' + answer);
console.log('Duration: ' + duration + ' seconds');  
console.log('Saved to tasks.json');
console.log('===============================================');
 const data={
    task : answer,
    duration :duration,
    date : new Date().toISOString(),
 }
 if(fs.existsSync('tasks.json')){
    const fileData = fs.readFileSync('tasks.json');
    const tasks = JSON.parse(fileData);
    tasks.push(data);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));
 }
 else{
    fs.writeFileSync('tasks.json', JSON.stringify([data]));
 }
rl.close(); 
}) 
});