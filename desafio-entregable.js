class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, stock, code) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Error: Todos los campos son requeridos");
        return;
      }
  
      if (this.products.some((product) => product.code === code)) {
        console.log("Error producto con el mismo codigo ya existe");
        return;
      }
  
      let id_producto = this.getProducts().length;
      console.log(id_producto);
      let producto = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        id: ++id_producto,
        stock: stock,
      };
  
      this.products.push(producto);
      return this.products;
    }
  
    getProductById(id_prod) {
      let product = this.products.find((prod) => prod.id === id_prod);
      console.log("clg product " + product);
      if (product) {
        return console.log(product);
      } else {
        return console.log("Product not found");
      }
    }
  }
  
  const productos = new ProductManager();
  productos.addProduct("Nike Air Force 1", "Mayor comodidad", 50000, "N",200, 1019, 200);
  productos.addProduct("Nike Jordan", "Muestra tu estilo", 42000, "N",200, 1011, 200);
  
  productos.getProductById(1);







///////////////////////////////////////////////////////////////////////


// class TicketManager{

//     constructor(){
//         this.eventos = []
//     }

//     static precioBaseDeGanancia = 1.15;

//     getEventos(){
//         return this.eventos
//     }

//     agregarEvento(nombre, lugar, precio){
//         let id_evento = (this.getEventos()).length;

//         let evento = {
//             nombre: nombre,
//             lugar: lugar,
//             precio: precio * TicketManager.precioBaseDeGanancia,
//             capacidad: 50,
//             fecha: Date(),
//             participantes: [],
//             id: ++id_evento
//         }

//         this.eventos.push(evento);
//         return this.eventos;
//     }

//     traerEvento(id_evento){
//         let evento = this.eventos.find(evento => evento.id == id_evento)

//         if(evento){
//             return evento;
//         }else{
//             return null
//         }
//     }

//     estaRegistrado(id_evento, id_usuario){
//         let evento = this.traerEvento(id_evento);
//         if(evento == null){
//             return 'El evento no existe'
//         }
//         let registro = evento.participantes.find(idParticipante => idParticipante === id_usuario)
//         if(registro === null){
//             return true
//         }else{
//             return false
//         }
//     }

//     agregarUsuario(id_evento, id_usuario){
//         let evento = this.traerEvento(id_evento);
//         if(evento == null){
//             return 'El evento no existe';
//         }
//         if(this.estaRegistrado(id_evento,id_usuario)){
//             evento.participantes.push(id_usuario)
//             return evento;
//         }else{
//             return 'La persona ya está registada'
//         }

//     }

//     ponerEventoEnGira(id_evento, nLocalidad, nFecha){
//         let evento = this.traerEvento(id_evento);
//         let contEventos = (this.getEventos()).length
        
//         if(!evento){
//             return 'El evento no existe';

//         }

//         let nuevoEvento = {...evento};
//         nuevoEvento.lugar = nLocalidad;
//         nuevoEvento.fecha = nFecha;
//         nuevoEvento.id = ++contEventos;
//         nuevoEvento.participantes = []

//         this.eventos.push(nuevoEvento)
//         return this.eventos
//     }
// }

// const ticketManager = new TicketManager();

// ticketManager.agregarEvento('Marcasa', 'Argentin', 1500);
// let eventos = ticketManager.agregarEvento('Monte Castro', 'Monte Castro', 1500);

// console.log(ticketManager.traerEvento(1))

// console.log(eventos);

// console.log(ticketManager.agregarUsuario(1,1))
// console.log(ticketManager.agregarUsuario(3,1))





