// Question1
let q1 = document.getElementById('text');
    console.log(q1.innerHTML);
// ...................................................................................................
// Question2
 let P =document.getElementsByTagName('h1')
 
    console.log(P [0].innerHTML);
    // ........................................................................................
// // Question3
    let q =document.getElementsByClassName('box');
   console.log(q[0].innerHTML);
  // ......................................................................................................

// Question4
    let A =document.getElementById('h2');
  function tg(){
    console.log(A.innerText);
     A.innerText="hello word";
   }
// .................................................................................................................
  
// Question 5
let t=document.getElementById('text');
 function ta(){
    
 t.innerText= "Welcome to E21 session";
 console.log(t.innerText);
  }
// ...................................................................................................................................
// Question6

let value=document.getElementById('value');
    let change=document.getElementById('change');
    change.addEventListener('click',() =>{
      value.setAttribute('style', 'color:red');
      
    })


//  .............................................................................................

// question 7
let parent = document.getElementById('parent');
let btn = document.getElementById('one');
btn.addEventListener('click', () => {
parent.setAttribute('style', 'flex-direction:column');
})
// ......................................................................................................................................
// Question 9

let input = document.getElementById('input');
    function date(){   
         let time = new Date();
   let hours = time.getHours();    
   let mins = time.getMinutes();
    let sec = time.getSeconds();
     let timeZone =`${hours}  :${mins} : ${sec}`
    input.innerText=timeZone;
    console.log(timeZone);
    }
    setInterval(() => { 
      date()
      } ,1000)
      // ................................................................

      // Question 10
     


      
    


  
    
    

    



