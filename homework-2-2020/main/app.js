function addTokens(input, tokens){ 
    if ((typeof input !== 'string') ){ 
        throw new Error('Invalid input')
    }    
    else if(input.length < 6){
        throw new Error('Input should have at least 6 characters')
    }    
    var result = tokens.find(token => (typeof token.tokenName !== 'string') && (token.tokenName !== null)) 
    if (result !== undefined){
        throw new Error('Invalid array format')     
    }    
    if ((input.includes('...') !== true) && result === undefined)
    {
        return input
    }   
    if ((input.includes('...') === true) && result === undefined)
    {
        let result2 = tokens.find(token => (typeof token.tokenName === 'string'))
        let newinput = input.replace('...','')   
        let newresult = newinput.concat('${' + result2.tokenName + '}') 
        return newresult 

    }  
}

const app = {
    addTokens: addTokens
}

module.exports = app;