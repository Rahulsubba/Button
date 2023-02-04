// import 'bootstrap/dist/css/bootstrap.min.css';
const app =  document.getElementById('press')
const app2 = document.getElementById('list')

app.addEventListener('click' , function() {
 if(app2.style.display === 'none'){
    app2.style.display = 'block'
 }
 else{
    app2.style.display ='none'
 }
});

// const app = document.getElementById('press')
// const app2 = document.getElementById('list')

// if (app && app2) {
//     app.addEventListener('click' , function() {
//         if(app2.style.display === 'none'){
//             app2.style.display = 'block'
//         } else{
//             app2.style.display ='none'
//         }
//     });
// }
