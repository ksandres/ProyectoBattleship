 class Tablero {

    private datos: String[][]=[];

    constructor() {
        this.inicializarTablero();
    }
    inicializarTablero() {
        this.datos.push(
            [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            ["A", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["B", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["C", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["D", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["E", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["F", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["G", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["H", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["I", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["J", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
        )
    }
    marcarGolpe(fila:number,columna:number){
        this.datos[fila][columna] = "X";
    }

    public getDatos(): String[][]{
        return this.datos;
    }
    public setDatos(datos: string[][]): void{
        this.datos = datos;
    }

 }

 class Coordenada{
     private  fila : number
     private  columna : number

     constructor(fila: number,columna: number) {
         this.fila = fila;
         this.columna = columna;
     }
     getFila():number{
         return this.fila
     }
     getColumna():number{
         return this.columna
     }


     push(coordenadaJ1: Coordenada) {

     }

 }
 class Juego {
     private tableroJ1: Tablero;
     private tableroJ2: Tablero;
     private coorOcupadasJ1: Coordenada[] = [];
     private coorOcupadasJ2: Coordenada[] = [];

     constructor() {
         this.tableroJ1 = new Tablero();
         this.tableroJ2 = new Tablero();
         this.coorOcupadasJ1 = [];
         this.coorOcupadasJ2 = [];

     }
     Tablero1(): Tablero{
         return this.tableroJ1
 }
     Tablero2(): Tablero {
         return this.tableroJ2;
     }
     imprimirTablero1():void{
         console.log("Tablero del Jugador 1:");
         let inicio = "  1 2 3 4 5 6 7 8 9 10";
         console.log(inicio);
         for (let i = 0; i < this.tableroJ1.getDatos().length; i++) {
             let fila = String.fromCharCode(65 + i) + " "; // Convertir números a letras (A-J)
             for (let j = 0; j < this.tableroJ1[i].getDatos()[i].length; j++) {
                 fila += this.tableroJ1.getDatos()[i][j] + " ";
             }
             console.log(fila);
         }

     }
     imprimirTablero2(): void {
         console.log("Tablero del Jugador 2:");
         let inicio = "  1 2 3 4 5 6 7 8 9 10";
         console.log(inicio);
         for (let i = 0; i < this.tableroJ2.getDatos().length; i++) {
             let fila = String.fromCharCode(65 + i) + " "; // Convertir números a letras (A-J)
             for (let j = 0; j < this.tableroJ2[i].getDatos()[i].length; j++) {
                 fila += this.tableroJ2.getDatos()[i][j] + " ";
             }
             console.log(fila);
         }
     }
     iniciarJuego():void{
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
     }
     realizarMovimientoJugador1(): void {
         // Lógica para que el jugador 1 realice un movimiento
         console.log("Jugador 1 está realizando un movimiento.");
         const filaAtaque = 3; // Fila elegida para el ataque
         const columnaAtaque = 4; // Columna elegida para el ataque

         // Verificar si las coordenadas de ataque golpean un objetivo
         for (let i = 0; i < this.coorOcupadasJ2.length; i++) {
             const objetivo = this.coorOcupadasJ2[i];
             if (objetivo.getFila() === filaAtaque && objetivo.getColumna() === columnaAtaque) {
                 console.log("¡El jugador 1 ha golpeado un objetivo!");

                 return;
             }
         }

         console.log("El jugador 1 no ha golpeado ningún objetivo en las coordenadas especificadas.");

     }

 }
const juego = new Juego()
 juego.iniciarJuego()