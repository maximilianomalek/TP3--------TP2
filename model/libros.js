const libros = [
    { id: '1', titulo: 'Harry Potter y la Piedra Filosofal', autor: 'J.K. Rowling', anio: 1997 },
    { id: '2', titulo: 'The Theory Of Everything', autor: 'Stephen Hawking', anio: 2014 },
    { id: '3', titulo: 'Palabras cruzadas', autor: 'Gabriel Rolon', anio: 2009 },
    { id: '4', titulo: 'Carrie', autor: 'Stephen King', anio: 1974 }
]

const findLibro = id => {
    return libros.find(libro => libro.id == id)
}


const saveLibro = libro => {
    libro.anio = parseInt(libro.anio)

    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)
    libros.push(libro)

    return libro
}

const findLibros = () => {
    return libros
}


const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    const libro = libros.splice(index, 1)[0]

    return libro
}


const updateLibro = (libro, id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro
}


export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}