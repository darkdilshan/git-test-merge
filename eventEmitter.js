const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('eventEmitter',(num1, num2)=>{
    console.log(`${num1+num2}`);
});

eventEmitter.emit('eventEmitter',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    };

    get name(){
        return this._name;
    };
};

let person = new Person('sanka');
person.on('person', ()=>{
    console.log('Person name is '+person.name);
});

person.emit('person');