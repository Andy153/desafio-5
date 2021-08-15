    var nombre = prompt("Introduce nombre titular");
    var apellido = prompt("Introducie apellido titular");
    var saldo = prompt ("introduce saldo");
    
    var cuentaBancaria = new crearObjetoCuenta(nombre,apellido,saldo);
    cuentaBancaria.mostrarCuenta();
    
    function crearObjetoCuenta(nombreCB,apellidoCB,saldoCB){
        this.nombreCuenta = nombreCB;
        this.apellidoCuenta = apellidoCB;
        this.saldoCuenta = saldoCB;
        this.mostrarCuenta = function (){
                    var msg = "Se ha creado una cuenta bancaria, esto son sus datos: \n" +
                            "Nombre: " + this.nombreCuenta +
                            "\nApellido: " + this.apellidoCuenta +
                            "\nSaldo: " + this.saldoCuenta;
                            alert(msg);
                            }
    }

    


                    
