const products =  [
    { 
        id: '1',
        name: 'Cuaderno A4 Avon Espiral',
        price: 4700,
        category: 'cuadernos',
        img:'/img/cuadernos/CuadernoAvon.png',
        stock: 100,
        description:'Cuaderno A4 Avon Espiral Tapa Flexible Rayado O Cuadric X 10'
    },
    { 
        id: '2', 
        name: 'Cuaderno A4 Rayado America',
        price: 4600,
        category: 'cuadernos',
        img:'/img/cuadernos/CuadernoAmerica.png',
        stock: 200,
        description:'Cuaderno Universitario 80 Hojas A4 America - Pack X 10 Unid'
    },
    { 
        id: '3',
        name: 'Cuaderno Harry Potter',
        price: 1200,
        category: 'cuadernos',
        img:'/img/cuadernos/CuadernoHarryPotter.png',
        stock: 50,
        description:'Cuaderno Harry Potter Tapa Dura A5 Rayado 96 Hojas Mooving'
    },
    { 
        id: '4',
        name: 'Mochila Espalda Boca',
        price: 4000,
        category: 'mochilas',
        img:'/img/mochilas/MochilaBoca.png',
        stock: 10,
        description:'Mochila Espalda Boca Edición Limitada 12 Creko Art Bo005'
    },
    { 
        id: '5',
        name: 'Mochila + Cartuchera Gamer',
        price: 12000,
        category: 'mochilas',
        img:'/img/mochilas/MochilaPlayStation.png',
        stock: 15,
        description:'Mochila + Cartuchera Gamer Tokyo Original Playstation'
    },
    { 
        id: '6',
        name: 'Mochila Woody',
        price: 5000,
        category: 'mochilas',
        img:'/img/mochilas/MochilaWoody.png',
        stock: 20,
        description:'Mochila Woody Toy Story Escolar 12 Pulgadas'
    },
    { 
        id: '7',
        name: 'Mochila Porta Notebook',
        price: 8000,
        category: 'mochilas',
        img:'/img/mochilas/MochilaPortaNotebook.png',
        stock: 30,
        description:'Mochila Porta Notebook Hasta 17" Urbana Ejecutiva Acolchada Smart Bag Con Usb Para Celular Capacidad Grande Escolar'
    },
    { 
        id: '8',
        name: 'Lapices De Colores Filgo',
        price: 1000,
        category: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicesFilgo.png',
        stock: 60,
        description:'Lapices De Colores Pinto X24 Sin Madera Pn201e24sur Filgo'
    },
    { 
        id: '9',
        name: 'Lapices Faber Castell',
        price: 14000,
        category: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicesFaberCastell.png',
        stock: 28,
        description:'Lapices Faber Castell Supersoft X 100 Colores Ecolapices'
    },
    { 
        id: '10',
        name: 'Lapiz De Madera',
        price: 1200,
        category: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicesMadera.png',
        stock: 40,
        description:'Lapiz De Madera Plantable Souvenir Publicidad X 30 Unidades'
    },
    { 
        id: '11',
        name: 'Boligrafo Cross Bailey',
        price: 20000,
        category: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/BoligrafoCross.png',
        stock: 10,
        description:'Boligrafo Cross Bailey Laca Negro Mate Dia De La Madre'
    },
    { 
        id: '12',
        name: 'Lapiceras Roller Filgo',
        price: 1800,
        category: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicerasRollerFilgo.png',
        stock: 32,
        description:'Kit 3 Lapiceras Roller Filgo Borrax 2g + 3 Repuestos Azul'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(product => {
                return product.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 500)
    })
}