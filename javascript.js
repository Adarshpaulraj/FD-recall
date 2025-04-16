//  var n = 45
//  let b = 56

//   function add(a,c){
//     return a+c
//   }
//   console.log(add(n,b))

  // var k= 12
  // var m=0

  // while(m<k){
  //   console.log(k)
  //   k--
  // }

  // do{
  //   console.log(k)
  //   k--
  // }while(m<k) ans 1to 12

//   console.log(Math.round(4.4))
//   console.log(Math.ceil(4.4))
//   console.log(Math.floor(4.4))

//   console.log(Math.trunc(Math.random()*1000))



// const a = new Date()
// console.log(a.getHours())


const fruits =["apple","orange","grapes","mongo","tomato"]

// console.log(fruits.splice(1,2,""))
// console.log(fruits)
console.log(fruits.slice(2,4))
console.log(fruits)
console.log(fruits.reverse())


// let f = [3,55,34,4,3,43,5,6,7,4,467,4,678,9,13,46,3,3,]

// let y=(v)=>{
//   var array =[]
//     for (var i=0;i<v.length;i++)
//     {
//       if(v[i]%2==0){
//         array.push(v[i])
//       }
//     }
//     return array
// }
// console.log(y(f))


// let title = "the salvation army matric higher secondary shcool"
// let r= title.split(' ');
// console.log(r);
// let i = r.join(" ")
// console.log(i);



 
// function caps(string){
//     var u=string.split(" ")
//     var w = []
//     for(i=0;i<u.length;i++){
//       w.push(u[i].charAt(0).toUpperCase()+u[i].slice(1))
//     }
//     return w.join(" ")
// }
// console.log(caps(title));

let num =[2,5,34,22,78,65,5,44]
console.log(num.indexOf(20)!==-1);

let fuc = (numb)=>{
  var array =0
  for(i=0;i<numb.length;i++){
    array += numb[i]
    
  }
  return array
}

console.log(fuc(num));
// let arr = [2,4,6,3]

// let y =arr.map((x)=>x*2)
// console.log(y);
// let greater = arr.filter((x)=>x<5)
// console.log(greater);
//  let red = arr.reduce((acc,curr)=>{
//         if(acc<curr){
//           acc=curr
//         }
//         return acc
//  },5)
//  console.log(red);

//  const obj= {
//   name :"adarsh",
//   age :54,
//   occupation :{
//     course:"completed",
//     diploma :"lord jeganath"
//   }
//  }
// obj.occupation.course= "not completed"
//  console.log(obj.age);
//  console.log(obj.occupation.course)




let array = [
  {
    name : "adarsh",
    age : 46
  },
  {
    details :"nagercoil",
    language:"english",
    qulification :{
      dimplome:"lord jegannath",
      course:"mechanical"
    }
  }
]
array[1].qulification.course="computer science"
console.log(array[0].age);
console.log(array[1].qulification);

console.log(array[1].language);



let destrctr =["adarsh",456,"johny"]
console.log(destrctr);

let [k,o,l]=destrctr
console.log(o);
console.log(...destrctr);

// let obj = [
//   {
//     name :"adarsh",
//     books :["the jungle man","the tom and jerry"]
//   },
//   {
//     name :"tommy",
//     books :["the pshycology of money"]
//   },
//   {
//     name :"harish",
//     books:["the science of stupid"]
//   }
// ]


// const f =obj.reduce((acc,curr)=>{
//    return [...acc,...curr.books]
// },[])

//  console.log(f);
 
// const element = document.createElement("div")
//  let ele2=document.createElement("p")
// element.append (ele2)
// element.innerHTML ="hii java demo"
// document.body.append(element)



// const change =(ele)=>{
//   let get= document.getElementById("see")
//    return get.style.background=ele
   
// }
// const fruit = ['Apple', 'Banana', 'Orange'];
// let text = ""
// for (let x of fruit) {
//   console.log(x);
//   text = text + x +" "   
// console.log(text)
   
// }
 const fruit = ['Apple', 'Banana','djv', 'Orange'];

let u = fruit.forEach((e)=>console.log(e))
// function calculateAge(){
//   let dob = new Date(document.getElementById("dob").value)
//   let today= new date()
 
//   if(isNaN(dob.getTime())){
//     document.getElementsByClassName("outp").innerHTML="enter valid date"
//     return ;
//   }

//   let age = today.getFullYear()- dob.getFullYear();
//  const monthDiff = today.getMonth() - dob.getMonth(); 

//  if(monthDiff <0 || (monthDiff ===0 && todaydate.getDate() < dob.getDate()))
// {
//     age--;
// }
//   document.getElementsByClassName("outp").innerHTML="your are age "+ age 
// }

// function calculateAge(){
//   const dob = new Date(document.getElementById("dob").value);
//   const today = new Date();

//  if(isNaN(dob.getTime())){
// //  document.getElementById("output").innerHTML="Please Enter a Valid Date";
// window.alert("enter the valid date")  
// return ;
//   }

// let age = today.getFullYear()- dob.getFullYear();
// const monthDiff = today.getMonth() - dob.getMonth(); 

// if(monthDiff <0 || (monthDiff ===0 && today.getDate() < dob.getDate()))
// {
//   age--;
// }
// document.getElementById("output").innerHTML="You are"+ age + "Years Old.";
// }

//  let button = document.createElement("button")
//  button.addEventListener("alert",zoo)
//  button.innerHTML="click on"
//  document.body.append(button)

//  function zoo(){
//  let res = prompt("enter your AGE")
//  let get = document.getElementById("name")
//  let mul = res*2
//  get.innerHTML=mul
//  }

//  setInterval(() => {
//   setTimeout(()=>console.log(Math.floor(Math.random() * 6)+1),1000)
//  },4000); 

// let res = fetch("https://restcountries.com/v2/all")
// res.then((data)=>data.json()).then((data1)=>{
//   for(var i=0 ; i<data1.length;i=i+1){
//     let text= document.createElement("div")
//     text.innerHTML = ` <div class="card" style="width: 18rem;">
//   <img src=${data1[i].flag} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//     document.body.append(text)

//     }})
  // data1.filter((d)=>{
  //   let text=document. getElementById("result")
  //   text.innerHTML = d.name 
  // console.log(d.name)
  // })

// asyc await
 

// async function asyn(){
//   try {
//     let fet = await fetch("https://restcountries.com/v2/ll")
//   let y = await fet.json()
//   console.log(y);
  
//   } catch (error) {
//     console.log(error.message);
    
//   }
// }
// asyn()
