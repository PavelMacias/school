class ArbolBinario {

    constructor(){
        this.raiz = null
    }

    agregar(nodo){

        if(this.raiz == null)
            this.raiz = nodo
        else{
            this.agregate(nodo, this.raiz)
        }
    }

    agregate(nodo, raiz){
        if(nodo.dato < raiz.dato)
        {
            if(raiz.hijoIzquierda == null)
                raiz.hijoIzquierda = nodo
            else
                this.agregate(nodo, raiz.hijoIzquierda)
        }
        else if(nodo.dato > raiz.dato)
        {
            if(raiz.hijoDerecha == null)
                raiz.hijoDerecha = nodo
            else
                this.agregate(nodo, raiz.hijoDerecha)
        }
    }

    inOrder(raiz){
        let cadena = ""
        if(raiz.hijoIzquierda != null){
            cadena = this.inOrder(raiz.hijoIzquierda)
        }

        cadena += " " + raiz.dato + " "

        if(raiz.hijoDerecha != null){
            cadena += this.inOrder(raiz.hijoDerecha)
        }

        return cadena;
    }
    
    postOrder(raiz){
        let cadena = " "
        
        if(raiz.hijoIzquierda != null){
            cadena = this.postOrder(raiz.hijoIzquierda)
        }
        cadena += " "

        if(raiz.hijoDerecha != null){
            cadena += this.postOrder(raiz.hijoDerecha)
        }
        cadena += " " + raiz.dato
        
        return cadena
    }
    preOrder(raiz){
        
        let cadena = ""
        cadena += raiz.dato + " "
        if(raiz.hijoIzquierda != null){
            cadena = this.preOrder(raiz.hijoIzquierda)
        }
        cadena += " "
        if(raiz.hijoDerecha != null){
            cadena += this.preOrder(raiz.hijoDerecha)
        }

        return cadena;
    }
 
}

export default ArbolBinario
