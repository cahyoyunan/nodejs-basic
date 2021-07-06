const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = (name) => {
   console.log('Kopi ' + name +' telah dibuat!');
};
 
const makeBill = (price) => {
    console.log('Bill sebesar '+ price + ' telah dibuat!');
}

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
//myEventEmitter.on('coffee-buat', makeCoffee);
//myEventEmitter.on('coffee-buat', makeBill);

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });


// Memicu event 'coffee-order' terjadi.
//myEventEmitter.emit('coffee-buat', { name: 'hitam' ,price:'10000'});