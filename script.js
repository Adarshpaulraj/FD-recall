//  function winners(){
//     let win1 = document.getElementById("total1").innerHTML
// let win2 = document.getElementById("total2").innerHTML

//     if(win1 ==30 && win2 == 30 ){
//         prompt("Match Equal")
//     }else if(win1 >= 30 ){
//        document.getElementById("btn1").disabled= true
//        document.getElementById("btn2").disabled= true   
//            alert("Player 1  is winner"+win1)

//     }else if(win2 >= 30 ){
//         document.getElementById("btn1").disabled= true
//         document.getElementById("btn2").disabled= true
//         alert("Player 2  is winner"+win2)

//      }
// }





function player1(){
    let playerone= Math.floor(Math.random()*6)+1
     if(playerone > 0 || playerone <= 6 ){
        setTimeout(()=>{
            document.getElementById("score").innerHTML=playerone
            console.log(playerone);
            
             let y=document.getElementById("total1").innerHTML
             
            let sum = +y +playerone
             document.getElementById("total1").innerHTML=sum
         let imgGet = document.getElementById("img1")
        imgGet.setAttribute("src",`dice${playerone}.png`)
       document.getElementById("btn1").disabled= true
       document.getElementById("btn2").disabled= false
       
       if(sum >=30){
        alert("player 1 is win ")
        document.getElementById("btn1").disabled= true
        document.getElementById("btn2").disabled= true
 
       }
       
        },1000)
        
     }else{
        console.log(playerone);
        
        document.getElementById("score").innerHTML="Error"
     }
     return
}

function player2(){
     let playertwo=Math.floor(Math.random()*6)+1
    if(playertwo > 0 || playertwo <= 6 ){
        setTimeout(()=>{
            document.getElementById("score").innerHTML=playertwo
            console.log(playertwo);
            
             let y=document.getElementById("total2").innerHTML
             
            let sum = +y +playertwo
             document.getElementById("total2").innerHTML=sum
         let imgGet = document.getElementById("img1")
        imgGet.setAttribute("src",`dice${playertwo}.png`)
       document.getElementById("btn2").disabled= true
       document.getElementById("btn1").disabled= false
      
       if(sum >=30){
        alert("player 2 is win ")
        document.getElementById("btn1").disabled= true
        document.getElementById("btn2").disabled= true
 
       }
       
        },1000)
        
     }else{
        console.log(playertwo);
        
        document.getElementById("score").innerHTML="Error"
     }
     return
}

 