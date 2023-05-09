    let in1= document.getElementById('in1')
    let in2= document.getElementById('in2')
    let out= document.getElementById('out')
    let but= document.getElementById('but')


function f1 (){
    let a = in1.value
    let b = in2.value
    r = Math.floor(Math.random() * (b-a+1) +a)

    out.innerHTML = r
  }
but.onclick = f1