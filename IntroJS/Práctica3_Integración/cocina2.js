

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos=[{producto: "Espresso", precio: 600, tipo: "bebida", id: 1},
                {producto: "Americano", precio: 50, tipo: "bebida", id: 2},
                {producto: "Cappuccino", precio: 50, tipo: "bebida", id: 3},
                {producto: "Latte", precio: 70, tipo: "bebida", id: 4},
                {producto: "Mocha", precio: 30, tipo: "bebida", id: 5},
                {producto: "Pastel de fresa", precio: 40, tipo: "postre", id: 6},
                {producto: "Pastel de chocolate", precio: 40, tipo: "postre", id: 7}
];

const promociones = new Map();
promociones.set(1, {nombre: "2x1 en Espresso", productos: [1]});
promociones.set(2, {nombre: "3x1 en Cappuccino", productos: [3]});
promociones.set(3, {nombre: "2x1 en Pastel de fresa", productos: [6]});
promociones.set(4, {nombre: "3x1 en Mocha", productos: [5]});


//promociones.set(2, {nombre: "pastel de fresa + cappuccino", productos: [3, 6], precio: 70});




let estado = 0;
menuPrincipal();

//console.log(productos);

function menuPrincipal(){
    console.log(" ");
    console.log("------------- COCINA ---------------");
    console.log("");
    console.log("1 - Mostrar productos");
    console.log("2 - Gestionar productos");
    console.log("3 - Mostrar promociones");
    console.log("4 - Busqueda");
    console.log("5 - Salir");

    rl.question("Seleccione una opcion ", (opcionMenu) => {
        if(opcionMenu <1 || opcionMenu >5){
            console.log("");
            console.log("x- Opcion no valida -x");
            menuPrincipal();
        }else
    if(opcionMenu == 1){
        mostrarProductos();
        menuPrincipal();
    } else if(opcionMenu == 2){
        gestionarProductos();
    }else if(opcionMenu == 3){
        console.log(" ");
        console.log("--------PROMOCIONES---------");
        promociones.forEach((promocion, id) => {
            console.log(promocion.nombre);
        });
        menuPrincipal();
    } else if(opcionMenu == 4){
        filtros();
    }else if(opcionMenu == 5){
        rl.close();
    }
});
}

function filtros(){
    console.log("");
    console.log("--------- BUSQUEDA --------");
    console.log("");
    console.log("1 - Mostrar productos CAROS");
    console.log("2 - Mostrar productos BARATOS");
    console.log("3 - Buscar bebidas");
    console.log("4 - Buscar postres");
    console.log("5 - Buscar producto por coincidencia");
    console.log("6 - Buscar producto especifico");
    console.log("7 - Regresar");

    rl.question("Elija una opcion: ", (opcionBusqueda)=>{
        
        if(opcionBusqueda == 1){
            console.log(" ");
            console.log("----PRODUCTOS CAROS-----");
            const productosCaros = productos.filter(producto => producto.precio > 100);
            productosCaros.forEach((productos, indice)=> {
                console.log(indice+1, " ", productos.producto, " $", productos.precio);
            });
            rl.question("¿Desea editar algun producto? (si no)",(filtroEditar)=>{
                estado = 1;
                if(filtroEditar == "si"){
                    editarProducto(productosCaros);
                }else{
                    filtros();
                }
            });
            
        }else if(opcionBusqueda == 2){
            console.log(" ");
            console.log("----PRODUCTOS BARATOS----");
            const productosBaratos = productos.filter(producto => producto.precio <= 100);
            productosBaratos.forEach((productos, indice)=> {
                console.log(indice+1, " ", productos.producto, " $", productos.precio);
            });
            rl.question("¿Desea editar algun producto? (si no)",(filtroEditar)=>{
                estado = 1;
                if(filtroEditar == "si"){
                    editarProducto(productosBaratos);
                }else{
                    filtros();
                }
            });
        } else if(opcionBusqueda == 3){
            console.log(" ");
            console.log("----BEBIDAS----");
            const bebidas = productos.filter((productos) =>{
                return productos.tipo == "bebida";
            });
            bebidas.forEach((producto, indice)=> {
                console.log(indice+1, " ", producto.producto," $", producto.precio);
            });
            rl.question("¿Desea editar algun producto? (si no)",(filtroEditar)=>{
                estado = 1;
                if(filtroEditar == "si"){
                    editarProducto(bebidas);
                }else{
                    filtros();
                }
            });
        } else if(opcionBusqueda == 4){
            console.log(" ");
            console.log("-----POSTRES----");
            const postre = productos.filter((productos) =>{
                return productos.tipo == "postre";
            });
            postre.forEach((producto, indice)=> {
                console.log(indice+1, " ", producto.producto," $", producto.precio);
            });
            rl.question("¿Desea editar algun producto? (si no)",(filtroEditar)=>{
                estado = 1;
                if(filtroEditar == "si"){
                    editarProducto(postre);
                }else{
                    filtros();
                }
            });
        } else if(opcionBusqueda == 5){
            rl.question("Nombre del producto: ", (productoNoExacto)=>{
                const busquedaNoEx = productos.filter((producto)=>{
                    return producto.producto.toLocaleLowerCase().includes(productoNoExacto.toLocaleLowerCase());
                });
                if(busquedaNoEx.length > 0){
                    busquedaNoEx.forEach((producto, indice)=>{
                        console.log(indice + 1, " ", producto.producto, " $", producto.precio);
                    });
                }else{
                    console.log("No se encontraron productos");
                }
                filtros();
            });
        } else if(opcionBusqueda == 6){
            rl.question("Nombre exacto del producto: ", (productoExacto)=>{
                const busquedaEsp = productos.find((producto)=>{

                    return producto.producto.toLocaleLowerCase() == productoExacto.toLocaleLowerCase();
                    
                });
                if(busquedaEsp){
                        console.log("producto: ", busquedaEsp.producto," $", busquedaEsp.precio);
                        filtros();
                    }else{
                        console.log("Producto no encontrado");
                        filtros();
                    }
            });
        } else if(opcionBusqueda == 7){
            menuPrincipal();
        }

    });

}

function mostrarProductos(){
    console.log(" ");
    console.log("------------ PRODUCTOS -------------");
    productos.forEach((producto, indice) =>{
        console.log(indice + 1, " ", producto.producto, " : $", producto.precio);
    });

}

function agregarProducto(){
    console.log(" ");
    console.log("-------AGREGAR PRODUCTO--------");
    rl.question("¿Que producto desea agregar? ", (nuevoProducto) =>{
        rl.question("¿Cual es el precio del nuevo producto? ", (nuevoPrecio) => {
            rl.question("¿Cual es el tipo del nuevo producto? ", (nuevoTipo) => {
            productos.push({producto: nuevoProducto, precio: Number(nuevoPrecio), tipo: nuevoTipo});
            gestionarProductos(productos);
            });
        });
    });
    
}

function editarProducto(array){
    console.log(" ");
    console.log("------EDITAR PRODUCTOS-----");
    rl.question("¿Que producto desea editar? ", (posicionEditar)=>{
        console.log("1 - Editar nombre de el producto");
        console.log("2 - Editar precio de el producto");
        console.log("3 - Editar tipo de el producto");
        console.log("4 - Editar nombre y precio de el producto");
        console.log("5 - Regresar");

        rl.question("Seleccione una opción  ", (opcionEditar) =>{
            if(opcionEditar< 0|| opcionEditar>5){
                console.log("");
                console.log("x- Opcion no valida -x");
                editarProducto(array);
            }else
            if(opcionEditar == 1){
                rl.question("Ingrese el nuevo nombre del producto: ", (nombreEditado) =>{
                    array[posicionEditar-1].producto = nombreEditado;
                    rl.question("¿Desea editar otro producto? (si no)", (otroEditar) =>{
                        if(otroEditar == "si"){
                            editarProducto(array);
                        }else{
                            if(estado == 1){
                                filtros();
                            }else{
                                gestionarProductos();
                            }
                        }
                    });
                });
            } else if (opcionEditar == 2){
                rl.question("Ingrese el nuevo precio del producto: ", (precioEditado) =>{
                    array[posicionEditar-1].precio = Number(precioEditado);
                    rl.question("¿Desea editar otro producto? (si no)", (otroEditar) =>{
                        if(otroEditar == "si"){
                            editarProducto(array);
                        }else{
                            if(estado == 1){
                                filtros();
                            }else{
                                gestionarProductos();
                            }
                        }
                    });
                });
            } else if(opcionEditar == 3){
                rl.question("Ingrese el nuevo tipo del producto: ", (tipoEditado) =>{
                    array[posicionEditar-1].tipo = tipoEditado;
                    rl.question("¿Desea editar otro producto? (si no)", (otroEditar) =>{
                        if(otroEditar == "si"){
                            editarProducto(array);
                        }else{
                            if(estado == 1){
                                filtros();
                            }else{
                                gestionarProductos();
                            }
                        }
                    });
                });
            } else if(opcionEditar == 4){
                rl.question("Ingrese el nuevo nombre del producto: ", (nombreEditado) =>{
                    rl.question("Ingrese el nuevo precio del producto: ", (precioEditado) =>{
                        array[posicionEditar-1].producto = nombreEditado;
                        array[posicionEditar-1].precio = Number(precioEditado);
                        rl.question("¿Desea editar otro producto? (si no)", (otroEditar) =>{
                            if(otroEditar == "si"){
                                editarProducto(array);
                            }else
                                if(estado == 1){
                                filtros();
                            }else{
                                gestionarProductos();
                            }
                            
                        });
                    });
                });
            } else if(opcionEditar == 5){
                if(estado == 1){
                    filtros();
                }else{
                    gestionarProductos();
                }
                
            }
        });
    });
}

function eliminarProducto(){
    console.log(" ");
    console.log("------ELIMINAR PRODUCTO-----");
    rl.question("¿Cual es el producto que desea eliminar? ", (posicionEliminar)=>{
        productos.splice(posicionEliminar-1, 1);
        gestionarProductos();
    });
}

function gestionarProductos(){
    console.log("");
    console.log("------------ GESTIONAR PRODUCTOS -------------");
    console.log("1 - Agregar producto");
    console.log("2 - Editar producto");
    console.log("3 - Eliminar producto");
    console.log("4 - Listar productos");
    console.log("5 - Regresar");

    rl.question("Seleccione una opcion: ", (opcionGestion) =>{
        if(opcionGestion < 1 || opcionGestion >5){
            console.log("");
            console.log("x- Opcion no valida -x");
            gestionarProductos();
        }else
        if(opcionGestion == 1){
            agregarProducto();
        }else if(opcionGestion == 2){
            estado = 2;
            editarProducto(productos);
        } else if(opcionGestion == 3){
            eliminarProducto();
        } else if(opcionGestion == 4){
            mostrarProductos();
            gestionarProductos(productos);
        } else if(opcionGestion == 5){
            menuPrincipal();
        }
    });

    
}



/* rl.question("Elija una opción", (opcionCocina)=>{

    if(opcionCocina == 1){
        rl.question("¿Que desea agregar?",(p)=>{
            productos.push(p);
            productos.forEach((productos, indice) =>{
            console.log(indice + 1, " " + productos);
});
rl.close();
    });
    
    }
    else
    if(opcionCocina == 2){
        rl.question("¿Cual es la posicion del producto a editar?",(po)=>{
            rl.question("¿Cual es el nuevo producto?",(nuevo)=>{
            productos[po] = nuevo;
            productos.forEach((productos, indice) =>{
            console.log(indice + 1, " " + productos);
});
rl.close();
    });
    
    });
    
    }
    else
    if(opcionCocina == 3){
        rl.question("¿Cual es la posicion del producto a eliminar?",(el)=>{
            productos.splice(el, 1);
            productos.forEach((productos, indice) =>{
            console.log(indice + 1, " " + productos);
});
rl.close();
    });
    
    }
    else
    if(opcionCocina == 4){
        console.log("MENÚ");
        console.log("");

        console.log("1 - Productos baratos");
        console.log("2 - Productos caros");
        console.log("3 - Bebidas");
        console.log("4 - Postres");

        rl.question("Elija una opción", (opcion2)=>{
            if(opcion2 == 1){
                console.log(productosBaratos);
            }else
                if(opcion2 == 2){
                console.log(productosCaros);
            }else
                if(opcionCocina == 3){
                    rl.question("Introduce el nombre",(nomb)=>{
                        function encuentraBebida(bebida){
                            return bebida.producto === nomb;
                        }
                        let mBebida = productos.find(bebida=>encuentraBebida(bebida));
                        console.log(mBebida);
                    });
                }

            rl.close();
        });
        

        


    
    }

});

*/