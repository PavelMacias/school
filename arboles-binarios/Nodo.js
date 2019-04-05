class Nodo{

    constructor(dato)
    {
        this.dato = dato
        this.hijoIzquierdo = null
        this.hijoDerecho = null
    }

    setDato(dato){
        this.dato = dato
    }

    setHijoIzquierdo(hijoIzquierdo){
        this.hijoIzquierdo = hijoIzquierdo
    }

    setHijoDerecho(hijoDerecho){
        this.hijoDerecho = hijoDerecho
    }

    getDato(){
        return this.dato
    }

    getHijoIzquierdo(){
        return this.hijoIzquierdo
    }

    getHijoDerecho(){
        return this.hijoDerecho
    }

}

export default Nodo
