import {promises as fs} from "fs"

class ProductManager {
    constructor() {
        this.path = "./productos.txt";
        this.products = [];
    }

    static id = 0

    addProduct = async (title, description, price, imagen, code, stock) => {
        ProductManager.id++;
        let newProduct = {
            title,
            description,
            price,
            imagen,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct);

        await fs.writeFile(this.path, JSON.stringify(this.products));
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.path, "utf-8")
        return JSON.parse(respuesta);
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts();
        return console.log(respuesta2);
    }

    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        if(!respuesta3.find(product => product.id === id)){
            console.log("Producto no encontrado")
        }else{
            console.log(respuesta3.find(product => product.id === id));
        } 
    }

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id);
        await fs.writeFile(this.path, JSON.stringify(productFilter));
        console.log("Producto Eliminado")
    }

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductsById(id);
        let produtOld = await this.readProducts();
        let productsModif = [{ ...producto, id }, ...produtOld];
        await fs.writeFile(this.path, JSON.stringify(productsModif));
    }

}

const productos = new ProductManager

// productos.addProduct("titulo1", "description1", "50000", "imagen1", "1011", 120);
// productos.addProduct("titulo2", "description2", "70000", "imagen2", "1050", 100);
// productos.addProduct("titulo3", "description3", "50000", "imagen3", "1080", 150);


// productos.getProducts()

// productos.getProductsById(1)

// productos.deleteProductsById(2)

productos.updateProducts({
    title: "titulo3",
    description: "description3",
    price: "55000",
    imagen: "imagen3",
    code: "1080",
    stock: 150,
    id: 3
})