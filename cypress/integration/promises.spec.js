/// <reference types = "cypress" />
it('sem testes ainda', () => { })

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(15);
        }, 1000)
    })
};

const system = () =>{
    console.log('iniciando...');
    const prom = getSomething();
    prom.then(some => {
        console.log(`something is ${some}`)
        console.log('end...')
    })
    
}
system();