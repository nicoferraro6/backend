const usuarios = [
    {id:'1',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'2',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'3',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'4',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'5',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'6',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'7',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'8',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'9',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
    {id:'10',nombre:'Nike',apellido:'50000',sueldo:'10',categoria:'10'},
]

//id 7
let product = products.filter((product) =>{
return product.id == 7
})

product = products.filter( (product)=>{
    return product.categoria == 'NN'
})



indiceProduct = products.findIndex( (product)=>{
    return product.id == 8
})

// -1 no existe || el valor del indice

products.splice(indiceProduct, 1)



console.log(products)