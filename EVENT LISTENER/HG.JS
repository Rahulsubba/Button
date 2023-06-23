
  
document.getElementById('button').addEventListener('click',function(){
    var find = document.getElementById("image-container")
    var make = find.querySelector('img')
    if(make){
      find.removeChild(make)
    }else{
        make = document.createElement('img')
        make.src = "images/joshua-hanson-e616t35Vbeg-unsplash.jpg";
        make.style.width = "500px";
        make.style.height= "auto"
        find.appendChild(make);

    }
});