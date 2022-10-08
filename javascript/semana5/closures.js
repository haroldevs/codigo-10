function primeraFuncion(){
    let valor1="valor 1";
    
    function segundaFuncion(){
        console.log(valor1);
        
        function terceraFuncion(){
            console.log("tercera funcion", valor1);

            function cuartaFuncion(){
                console.log("cuarta funcion", valor1 + " hola");
            }
            return cuartaFuncion();
        }
        return terceraFuncion();
    }
    return segundaFuncion();
}

primeraFuncion();