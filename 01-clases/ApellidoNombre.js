class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros,
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre + " " + this.apellido}`
    }
    AddMascota(mascota) {
        this.mascotas.push(mascota)
    }
    countMascotas() {
        return (this.mascotas.length)
    }
    addBook(nombre, autor) {
        this.libros.push({ nombreLibro, autor })
    }
    getBookNames(){
        return this.libros.map((e) => e.nombreLibro)
    }
}