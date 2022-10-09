const productos =  [
    { 
        id: '1',
        nombre: 'Cuaderno A4 Avon Espiral',
        precio: 4700,
        categoria: 'cuadernos',
        img:'/img/cuadernos/CuadernoAvon.png',
        stock: 100,
        descripcion:'Cuaderno A4 Avon Espiral Tapa Flexible Rayado O Cuadric X 10'
    },
    { id: '2', 
        nombre: 'Cuaderno A4 Rayado America',
        precio: 4600,
        categoria: 'cuadernos',
        img:'/img/cuadernos/CuadernoAmerica.png',
        stock: 200,
        descripcion:'Descripcion de Samsung s21'
    },
    { id: '3',
        nombre: 'Cuaderno Harry Potter',
        precio: 1200,
        categoria: 'cuadernos',
        img:'/img/cuadernos/CuadernoHarryPotter.png',
        stock: 50,
        descripcion:'Cuaderno Harry Potter Tapa Dura A5 Rayado 96 Hojas Mooving'
    },
    { id: '4',
        nombre: 'Mochila Espalda Boca',
        precio: 4000,
        categoria: 'mochilas',
        img:'/img/mochilas/MochilaBoca.png',
        stock: 10,
        descripcion:'Mochila Espalda Boca Edición Limitada 12 Creko Art Bo005'
    },
    { id: '5',
        nombre: 'Mochila + Cartuchera Gamer',
        precio: 12000,
        categoria: 'mochilas',
        img:'/img/mochilas/MochilaPlayStation.png',
        stock: 15,
        descripcion:'Mochila + Cartuchera Gamer Tokyo Original Playstation'
    },
    { id: '6',
        nombre: 'Mochila Woody',
        precio: 5000,
        categoria: 'mochilas',
        img:'/img/mochilas/MochilaWoody.png',
        stock: 20,
        descripcion:'Mochila Woody Toy Story Escolar 12 Pulgadas'
    },
    { id: '7',
        nombre: 'Mochila Porta Notebook',
        precio: 8000,
        categoria: 'mochilas',
        img:'/img/mochilas/MochilaPortaNotebook.png',
        stock: 30,
        descripcion:'Mochila Porta Notebook Hasta 17" Urbana Ejecutiva Acolchada Smart Bag Con Usb Para Celular Capacidad Grande Escolar'
    },
    { id: '8',
        nombre: 'Lapices De Colores Filgo',
        precio: 1000,
        categoria: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicesFilgo.png',
        stock: 60,
        descripcion:'Lapices De Colores Pinto X24 Sin Madera Pn201e24sur Filgo'
    },
    { id: '9',
        nombre: 'Lapices Faber Castell',
        precio: 14000,
        categoria: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicesFaberCastell.png',
        stock: 28,
        descripcion:'Lapices Faber Castell Supersoft X 100 Colores Ecolapices'
    },
    { id: '10',
        nombre: 'Lapiz De Madera',
        precio: 1200,
        categoria: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicesMadera.png',
        stock: 40,
        descripcion:'Lapiz De Madera Plantable Souvenir Publicidad X 30 Unidades'
    },
    { id: '11',
        nombre: 'Boligrafo Cross Bailey',
        precio: 20000,
        categoria: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/BoligrafoCross.png',
        stock: 10,
        descripcion:'Boligrafo Cross Bailey Laca Negro Mate Dia De La Madre'
    },
    { id: '12',
        nombre: 'Lapiceras Roller Filgo',
        precio: 1800,
        categoria: 'lapiceslapiceras',
        img:'/img/lapiceslapiceras/LapicerasRollerFilgo.png',
        stock: 32,
        descripcion:'Kit 3 Lapiceras Roller Filgo Borrax 2g + 3 Repuestos Azul'
    }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductosPorId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(producto => {
                return producto.id === id
            }))
        }, 500)
    })
}

export const getProductosPorCategoria = (categoriaId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.filter(producto => producto.categoria === categoriaId))
        }, 500)
    })
}