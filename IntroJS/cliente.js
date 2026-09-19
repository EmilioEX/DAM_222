//Cosas que se necesitan
const array=["Queso", "Pan","Café"];
let pedido=[];
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//***********************
//Se muestra el menú
Menu(array);
do {
    rl.question("Ingrese el número del producto: ", function(producto) {
    pedido.push(producto);
    rl.close();
});
} while (pedido<0 || pedido>array.length);
mostrarProductos(pedido);





function mostrarProductos(array){
    for(let i=0; i<array.length; i++){
        console.log(`Producto ${i+1}: ${array[i]}`);
    }
}
function Menu(array){
    console.log("********** Menú **********");
    mostrarProductos(array);
    console.log("**************************");
}

//frfrf
//Leer desde node


