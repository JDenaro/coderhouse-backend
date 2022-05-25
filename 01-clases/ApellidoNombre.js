class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.libros = libros,
      this.mascotas = mascotas;
    }
  
    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    }
  
    addMascota(nombre) {
      this.mascotas.push(nombre);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
  
    addBook(nombreLibro, autor) {
      this.libros.push({ nombreLibro, autor });
    }
  
    getBookNames() {
      return this.libros.map((e) => e.nombreLibro);
    }
  }
  
  let julian = new Usuario(
    'Julian',
    'Denaro',
    [
      { nombreLibro: 'The DevOps Handbook', autor: 'Gene Kim' },
      { nombreLibro: 'Site Reliability Engineering: How Google Runs Production Systems', autor: 'Betsy Beyer' },
    ],
    ['Perritou']
  );
  
  julian.getFullName();
  julian.addMascota('Gatitou');
  julian.countMascotas();
  julian.addBook('Harry Potter', 'J. K. Rowling');
  julian.getBookNames();
  console.log(julian);