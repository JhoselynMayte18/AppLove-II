window.addEventListener('load', function(){

var projects = ["TAYMAN GROUP", "NALIA ORGANICS", "BRASS COQ","SUNGENRE","LIVING BOTANICS",
"FOAM KING","VOLITION","INK","GILKON","OUTS APPLES","SHERWOOD","PLATINUM"];

  function addProject(array){
    for (var i = 0; i < array.length; i++) {
      var projectsContainer = document.getElementById("projects-container");
    /*  var box = document.createElement("div");
      box.setAttribute("class","div-box");
      principal.appendChild(box);*/

      var figure = document.createElement("figure");
      figure.setAttribute("class","figure-project");
      projectsContainer.appendChild(figure);

      var anImg =  document.createElement("a");
      anImg.setAttribute("href", "#modal-"+i);
      anImg.setAttribute("class","img-link");
      figure.appendChild(anImg);

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/img-"+ (i+1) + ".jpg");
      image.setAttribute("title",array[i]);
      image.setAttribute("width","300");
      anImg.appendChild(image);

      var name = document.createElement("figcaption");
      name.setAttribute("class","name-project");
      figure.appendChild(name);

      name.appendChild(document.createTextNode(array[i]));

//++++++++++++++++++
      var divModal = document.createElement("div");
      divModal.setAttribute("class", "modal-conte");
      divModal.setAttribute("id", "modal-" + i);
      figure.appendChild(divModal);

      var figureModal = document.createElement("figure");
      figureModal.setAttribute("class", "modal-figure");
      figureModal.setAttribute("id", "modal-" + i);
      divModal.appendChild(figureModal);

      var imgModal = document.createElement("img");
      imgModal.setAttribute("src","assets/img/img-"+ (i+1) + ".jpg");
      imgModal.setAttribute("width","600");
      figureModal.appendChild(imgModal);

      var cerrarModal = document.createElement("a");
      cerrarModal.setAttribute("class", "close-modal");
      cerrarModal.setAttribute("href", "#projects-container");
      divModal.appendChild(cerrarModal);

      cerrarModal.appendChild(document.createTextNode("X"));

    }
  }
  addProject(projects);

})
