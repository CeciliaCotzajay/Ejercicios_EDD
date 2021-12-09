class nodo{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaCircularDoble{
    constructor(){
        this.primero = null;
    }

    insertar(valor){
        let nuevo = new nodo(valor); 
        if(this.primero == null){
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
            //nuevo.siguiente = this.primero;
            this.primero.anterior = nuevo;
        }
    }
    
    imprimir(){
        let aux = this.primero;
        console.log("***** Lista Doble Circular  *****")
        // SE DEBE RECORRER CON UN DO-WHILE
        while(aux != null){
            console.log("-> " + aux.valor);
            aux = aux.siguiente;
        }
    }
}
    
let listaCircular = new ListaCircularDoble();

listaCircular.insertar(10);
listaCircular.insertar(12);
listaCircular.insertar(7);
listaCircular.insertar(5);
listaCircular.imprimir();