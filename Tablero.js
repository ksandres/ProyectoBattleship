var Tablero = /** @class */ (function () {
    function Tablero() {
        this.datos = [];
        this.inicializarTablero();
    }
    Tablero.prototype.inicializarTablero = function () {
        this.datos.push([" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ["A", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["B", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["C", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["D", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["E", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["F", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["G", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["H", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["I", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], ["J", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    };
    Tablero.prototype.marcarGolpe = function (fila, columna) {
        this.datos[fila][columna] = "X";
    };
    Tablero.prototype.getDatos = function () {
        return this.datos;
    };
    Tablero.prototype.setDatos = function (datos) {
        this.datos = datos;
    };
    return Tablero;
}());
var Coordenada = /** @class */ (function () {
    function Coordenada(fila, columna) {
        this.fila = fila;
        this.columna = columna;
    }
    Coordenada.prototype.getFila = function () {
        return this.fila;
    };
    Coordenada.prototype.getColumna = function () {
        return this.columna;
    };
    Coordenada.prototype.push = function (coordenadaJ1) {
    };
    return Coordenada;
}());
var Juego = /** @class */ (function () {
    function Juego() {
        this.coorOcupadasJ1 = [];
        this.coorOcupadasJ2 = [];
        this.tableroJ1 = new Tablero();
        this.tableroJ2 = new Tablero();
        this.coorOcupadasJ1 = [];
        this.coorOcupadasJ2 = [];
    }
    Juego.prototype.push = function (coordenadasJ1) {
    };
    Juego.prototype.Tablero2 = function () {
        return this.tableroJ2;
    };
    Juego.prototype.imprimirTablero1 = function () {
        console.log("Tablero del Jugador 1:");
        var inicio = "  1 2 3 4 5 6 7 8 9 10";
        console.log(inicio);
        for (var i = 0; i < this.tableroJ1.getDatos().length; i++) {
            var fila = String.fromCharCode(65 + i) + " "; // Convertir números a letras (A-J)
            for (var j = 0; j < this.tableroJ1[i].getDatos()[i].length; j++) {
                fila += this.tableroJ1.getDatos()[i][j] + " ";
            }
            console.log(fila);
        }
    };
    Juego.prototype.imprimirTablero2 = function () {
        console.log("Tablero del Jugador 2:");
        var inicio = "  1 2 3 4 5 6 7 8 9 10";
        console.log(inicio);
        for (var i = 0; i < this.tableroJ2.getDatos().length; i++) {
            var fila = String.fromCharCode(65 + i) + " "; // Convertir números a letras (A-J)
            for (var j = 0; j < this.tableroJ2[i].getDatos()[i].length; j++) {
                fila += this.tableroJ2.getDatos()[i][j] + " ";
            }
            console.log(fila);
        }
    };
    Juego.prototype.iniciarJuego = function () {
        console.log("¡Comienza el juego!");
        // Lógica para inicializar los tableros y configurar las coordenadas iniciales
        // Inicializar los tableros para ambos jugadores
        this.tableroJ1.inicializarTablero();
        this.tableroJ2.inicializarTablero();
        // Configurar coordenadas iniciales
        this.coorOcupadasJ1.push(new Coordenada(2, 3)); // Ejemplo de coordenadas iniciales para el jugador 1
        this.coorOcupadasJ2.push(new Coordenada(5, 7)); // Ejemplo de coordenadas iniciales para el jugador 2
        // Mostrar los tableros de ambos jugadores
        this.imprimirTablero1();
        this.imprimirTablero2();
        console.log("Se han configurado las coordenadas iniciales.");
        console.log("¡Que empiece la batalla naval!");
        // Ejemplo de llamada a un método de juego
        this.realizarMovimientoJugador1();
    };
    Juego.prototype.realizarMovimientoJugador1 = function () {
        // Lógica para que el jugador 1 realice un movimiento
        console.log("Jugador 1 está realizando un movimiento.");
        var filaAtaque = 3; // Fila elegida para el ataque
        var columnaAtaque = 4; // Columna elegida para el ataque
        // Verificar si las coordenadas de ataque golpean un objetivo
        for (var i = 0; i < this.coorOcupadasJ2.length; i++) {
            var objetivo = this.coorOcupadasJ2[i];
            if (objetivo.getFila() === filaAtaque && objetivo.getColumna() === columnaAtaque) {
                console.log("¡El jugador 1 ha golpeado un objetivo!");
                return;
            }
        }
        console.log("El jugador 1 no ha golpeado ningún objetivo en las coordenadas especificadas.");
    };
    return Juego;
}());
var juego = new Juego();
juego.iniciarJuego();
