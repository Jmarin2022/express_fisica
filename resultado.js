const calcular = () =>{
    
    const masa = document.querySelector('#masa').value
    let tierra= masa*9.8
    let luna= masa*1.62
    let marte= masa*3.72
    if(masa==null || masa==''){
       alert('Digite de nuevo la masa')
    }else{
   document.getElementById('luna').innerHTML=('luna es igual a: '+luna)        
       document.getElementById('marte').innerHTML=('marte es igual a: '+marte)  
       document.getElementById('tierra').innerHTML=('tierra es igual a: '+tierra)
    }
}


const buttoCalcular = document.querySelector('#calculo')
buttoCalcular.addEventListener('click',calcular)