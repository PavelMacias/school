import Nodo from './Nodo.js'
import ArbolBinario from './ArbolBinario.js'


let arbol = new ArbolBinario()



document.getElementById("form1").onsubmit = (e) =>{
    e.preventDefault()

    let nodo = new Nodo(document.getElementById('node').valueAsNumber)

    arbol.agregar(nodo)

    document.getElementById('node').value = null
}

document.getElementById("form2").onsubmit = (e) =>{
    e.preventDefault()

    document.getElementById("inorder").innerHTML = arbol.inOrder(arbol.raiz)
}

document.getElementById("form3").onsubmit = (e) =>{
    e.preventDefault()

    document.getElementById("preorder").innerHTML = arbol.preOrder(arbol.raiz)
}
document.getElementById("form4").onsubmit = (e) =>{
    e.preventDefault()

    document.getElementById("postorder").innerHTML = arbol.postOrder(arbol.raiz)
}
