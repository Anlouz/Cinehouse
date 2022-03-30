let cinema= 'cineRama'
console.log(cinema)

let catalogo=[{
     codigo:1,
    titulo: 'clube da luta',
    duracao: 2.0,
    atores: ('Brad Pitt', 'Edward Norton'),
    anoDeLancamento:1999,
    emCartaz:false
},
{
    codigo:2,
    titulo: 'Moulin Rouge',
    duracao: 2.30,
    atores: ('Nicole Kidman', 'Ewan Mcgregor'),
    anoDeLancamento:2001,
    emCartaz:false
},
{
    codigo:3,
    titulo: 'Batman',
    duracao: 3.0,
    atores: ('Zoe Kravitz', 'vampiro'),
    anoDeLancamento:2022,
    emCartaz: true
}
]


console.log(catalogo[1])// acessa possição do array


catalogo.push({  
    codigo:4,
    titulo: 'Matrix',
    duracao: 2.30,
    atores: ('Keenu Reaves'),
    anoDeLancamento:2000,
    emCartaz: false
}) //adiciona no final do array, pode ser chamado a variavel dento do parametro.

//catalogo.pop() remove o ultimo item
//catalogo.shift() remove a partit do inicio
//catalogo.unshift(filme4)  adiciona a partir do inicio

//console.indexOf() procurar elemento no array

/*const encontrarFilme= function(catalogo){
    return catalogo.codigo==5 // retorno é sempre um booleano
}

const filmeEncontrado= catalogo.find(encontrarFilme)
console.log(filmeEncontrado)

if (filmeEncontrado!= undefined){
    console.log(filmeEncontrado.codigo)
}else{
    console.log('o filme não foi encontrado')
}*/

console.log(catalogo)

