function createTable(n){
    for(let i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            const multiply = i*j;
            console.log(`${i} * ${j} = ${multiply}`)
        }
    }
}
createTable(10)

