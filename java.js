
var button = document.querySelector('#button1');
button.addEventListener('click',function(){
  var sueldo = parseInt(document.querySelector('#sueldo').value)
  document.getElementById("parrafo").innerHTML = newSueldo(sueldo)
  console.log(newSueldo(sueldo));
});

var button2 = document.querySelector('#button2')
button2.addEventListener('click',function(){
  var num = document.querySelector('#num').value
  document.getElementById("parrafo2").innerHTML = array(num)
  document.getElementById("parrafo3").innerHTML = cola(array(num))
})




let newSueldo = (sueldo)=> {

  if(sueldo >= 0 && sueldo <= 1000 ) return sueldo += sueldo*.15
  else if(sueldo >= 1001 && sueldo <= 1200 ) return sueldo += sueldo*.12
  else if(sueldo >= 1201 && sueldo <= 1400 ) return sueldo += sueldo*.10
  else if(sueldo >= 1401 && sueldo <= 1500 ) return sueldo += sueldo*.08
  else if(sueldo > 1500) return sueldo += sueldo*.05
}

let array = (a) =>{
  let array = []
  let n = 1
  let x = 2
  while(n<=a){
    array.push(x)
    x+=2
    n+=1
  }
  return array
}

  let cola = (array) =>{
    array.unshift(array.pop())
    return array
}
