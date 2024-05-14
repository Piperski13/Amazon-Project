// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load',()=>{
//   console.log(xhr.response);
// })

// xhr.open('GET','https://supersimplebackend.dev/greeting');
// xhr.send();

//------------------------------------------------------------------------------------------------

// function loadHello(){
//   fetch('https://supersimplebackend.dev/greeting').then((response)=>{
//     return response.text(); 
//   }).then((print)=>{
//     console.log(print);
//   });
// };
// loadHello();

//------------------------------------------------------------------------------------------------

// async function loadHello(){
//   const response = await fetch('https://supersimplebackend.dev/greeting');
//   const hello = await response.text();
//   console.log(hello);
// };
// loadHello();

//------------------------------------------------------------------------------------------------

// async function loadHello(){
//   const response = await fetch('https://supersimplebackend.dev/greeting',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: "Alakazam"
//     })
//   });
//   const helloMsg = await response.text();
//   console.log(helloMsg);
// };
// loadHello();

//------------------------------------------------------------------------------------------------

// async function loadAmazon(){
//   try {
//     const response = fetch('https://amazon.com');
//     const text = await response.text();
//     console.log(text);
//   } catch (error) {
//     console.log('CORS error');
//   }
  
// };
// loadAmazon();

//------------------------------------------------------------------------------------------------

// async function loadPage(){
//   try {
//     const response = await fetch('https://supersimplebackend.dev/greeting',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if(response.status >= 400){
//       throw response;
//     }
//     const test = await response.json();
//     console.log(test);

//   } catch (error) {
//     if (error.status === 400) {
//       const errorMessage = await error.json();
//       console.log(errorMessage);
//     } else {
//       console.log('Network error. Please try again later.');
//     };
//   };
// };
// loadPage();

//------------------------------------------------------------------------------------------------