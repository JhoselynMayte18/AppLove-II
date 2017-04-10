window.addEventListener('load', function(){

  function addProyect(num){
    for (var i = 1; i <= num; i++) {
      var proyectsContainer = document.getElementById("proyects-container");
    /*  var box = document.createElement("div");
      box.setAttribute("class","div-box");
      principal.appendChild(box);*/

      var figure = document.createElement("figure");
      figure.setAttribute("class","figure-proyect");
      proyectsContainer.appendChild(figure);

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/img-"+ i + ".jpg");
      image.setAttribute("width","300");
      figure.appendChild(image);

      var title = document.createElement("figcaption");
      title.setAttribute("class","name-proyect");
      figure.appendChild(title);

      title.appendChild(document.createTextNode("NOMBRE DEL PROYECTO"));
    }
  }
  addProyect(12);

})
