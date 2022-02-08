it('sem testes, ainda', () => {

})

const getSomething = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    }) 

}

const system = async() => {
    console.log('ini');
    const some = await getSomething();
    console.log(`somehting is ${some}`)
    console.log('end');
}

system();