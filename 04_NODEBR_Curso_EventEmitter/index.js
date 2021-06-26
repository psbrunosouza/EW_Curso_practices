/**
 * The EventEmitter is an abstract class from node
 * it's used to create and emit a new event
 */
const EventEmitter = require('events');

/**
 * It's not necessary to implement content inner the class
 * because EventEmitter provides all needed functions
 */
class MyEmitter extends EventEmitter{}

const event = new MyEmitter();
const eventName = "myclick";

/**
 * Creates the event. The second param is a listener
 */
event.on(eventName, function(click){
  console.log('a user has clicked', click);
});

/**
 * Emit the event
 */
// event.emit(eventName, 'on ok');
// event.emit(eventName, 'on scrollbar');

// let count = 0;

// setInterval(() => {
//   event.emit(eventName, 'clicked' + (count++));
// }, 1000);

const stdin = process.openStdin();
stdin.addListener('data', function(value){
  console.log(`you has typed: ${value.toString().trim()}`);
});

