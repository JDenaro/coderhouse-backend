const fs = require('fs')

class Contenedor{
    constructor(rutaArchivo){
        this.nombre= rutaArchivo;
        fs.promises.writeFile(`./${rutaArchivo}`,"")
    }
    async save(objeto){
        try {
            let data = await fs.promises.readFile(this.nombre)
            if(data.length ==0){
                let id = {'id':1}
                let newObject=Object.assign(objeto,id)
                const jsonData = [newObject]
                await fs.promises.writeFile(this.nombre, JSON.stringify(jsonData))
                return id
            }else{    
                const contenido = JSON.parse(data)
                let lastIndex= contenido.length
                let newId= lastIndex+1
                let newObject=Object.assign(objeto,{'id':newId})
                contenido.push(newObject)
                await fs.promises.writeFile(this.nombre, JSON.stringify(contenido))
                return newId
            }
  
        } catch (error) {
            console.log("ERROR")
            console.log(error)    
        }
       
    }
    async load(){
       return JSON.parse(await fs.promises.readFile( this.nombre ,'utf-8'))
    }
    async getById(id){
        try {
            const contenido = await this.load()
            let objeto = contenido.find(el=>el.id==id)
            if(objeto== undefined){return null} 
            return objeto
        } catch (error) {
            console.log(`Error en getById:${error}`)
        }
        
    }
    async getAll(){
        try {
            const contenido = await this.load()
            return contenido
        } catch (error) {
            console.log(`Error en getAll:${error}`)
        }
    }
    async deleteById(id){
        try {
            const contenido = await this.load()
            let objeto = contenido.filter(item=>item.id!=id)
            await fs.promises.writeFile(this.nombre,JSON.stringify(objeto))          
            
        } catch (error) {
            console.log(`Error en getById:${error}`)
        }
    }
    async deleteAll(){
        try {
            await fs.promises.writeFile( this.nombre,"") 
        } catch (error) {
            console.log(`Error en deleteAll:${error}`)
        }
         
    }

}

const product =new Contenedor('productos.txt')

async function test(){
    
    await product.save(
        {                                                                                                                                                    
        'title': 'Escuadra',                                                                                                                                 
        'price': 123.45 ,
        'url': 'https://media.istockphoto.com/photos/wooden-ruler-with-clipping-path-on-white-background-picture-id467910099?k=20&m=467910099&s=612x612&w=0&h=ZNseA-PNb5dRgyvOmLmGivyWMztFhrJbqZOt5U8nW2o='                                                                                                                               
      }
    )
    await product.save(
        {                                                                                                                                                    
        'title': 'Calculadora',                                                                                                                                 
        'price': 234.56 ,
        'url': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Casio_fx-85WA_20050529.jpg'                                                                                                                               
      }
    )
    await product.save(
        {                                                                                                                                                    
        'title': 'Globo Terraqueo',                                                                                                                                 
        'price': 345.67 ,
        'url': 'https://cdn.shopify.com/s/files/1/1086/1234/products/257W_opt_1024x1024.jpg?v=1579740224'                                                                                                                               
      }
    )
    console.log("getById:", await product.getById(2))   
    console.log("getAll", await product.getAll())
    console.log(`productdeleteById: ${await product.deleteById(1)}`)
    console.log("getById:", await product.getById(1))
    console.log(`productdeleteById: ${await product.deleteById(1)}`) 
    console.log(`productdeleteAll: ${await product.deleteAll()}`)

}

test()