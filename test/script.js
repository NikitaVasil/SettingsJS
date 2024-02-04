function getSUM(...args){
    return args.reduce((a,b)=>a+b);
}

function getMAX(...args){
    return Math.max(...args);
}

//module.export = {getSUM, getMAX};

export {
    getMAX, getSUM
};



/*import Person from './Person';

const person1 = new Person('Nikita', 'Vasilnyak');
const person2 = new Person('Yra', 'Kiselev');

console.log(person1);
console.log(person2); */