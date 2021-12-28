class NodoExterno {
    constructor(categoria) {
        this.categoria = categoria;
        this.siguiente = null;
        this.anterior = null;
        this.listaInterna = new ListaInterna();
    }
}

class NodoInterno{
    constructor(elemento) {
        this.elemento = elemento;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaExterna {
    constructor() {
        this.primero = null;
    }

    insertar(categoria) {
        let nuevo = new NodoExterno(categoria);
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let aux = this.primero;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    imprimir() {
        let aux = this.primero;
        while (aux != null) {
            console.log("*** " + aux.categoria);
            aux.listaInterna.imprimir();
            aux = aux.siguiente;
        }
    }

    insertarListaInterna(categoria, elemento) {
        let aux = this.primero;
        while (aux != null) {
            if (aux.categoria == categoria) {
                aux.listaInterna.insertar(elemento);
                return;
            }
            aux = aux.siguiente;
        }
        console.log("Error!! No se encontro la categoría en la Lista.");
        return null;
    }
}

class ListaInterna {
    constructor() {
        this.primero = null;
    }

    insertar(elemento) {
        let nuevo = new NodoInterno(elemento);
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let aux = this.primero;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    imprimir() {
        let aux = this.primero;
        while (aux != null) {
            console.log("      - " + aux.elemento);
            aux = aux.siguiente;
        }
    }
}

let listaG = new ListaExterna();

listaG.insertar("Aves");
listaG.insertar("Mamiferos");
listaG.insertar("Reptiles");
listaG.insertar("Peces");

listaG.insertarListaInterna("Aves","Quetzal");
listaG.insertarListaInterna("Mamiferos","Gato");
listaG.insertarListaInterna("Reptiles","Cocodrilo");
listaG.insertarListaInterna("Peces","Salmón");
listaG.insertarListaInterna("Aves","Pato");
listaG.insertarListaInterna("Aves","Gaviota");
listaG.insertarListaInterna("Mamiferos","Perro");
listaG.insertarListaInterna("Reptiles","Lagartija");
listaG.insertarListaInterna("Reptiles","Tortuga");
listaG.insertarListaInterna("Peces","Trucha");
listaG.insertarListaInterna("Aves","Coronado");
listaG.imprimir();