function getSUM(...args){
    return args.reduce((a,b)=>a+b);
}

function getMAX(...args){
    return Math.max(...args);
}

export {
    getMAX, getSUM
};
