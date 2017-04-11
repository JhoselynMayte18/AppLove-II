window.addEventListener('load', function(){

var projects = ["TAYMAN GROUP", "NALIA ORGANICS", "BRASS COQ","SUNGENRE", "LIVING BOTANICS",
"FOAM KING", "VOLITION", "ink", "GILKON", "OUTS APPLES", "SHERWOOD", "PLATINUM"];

  function addProject(array){
    projects.forEach(function(e,i){
      var projectsContainer = document.getElementById("projects-container");

      var figure = document.createElement("figure");
      figure.setAttribute("class","figure-project");
      projectsContainer.appendChild(figure);

      var anImg = document.createElement("a");
      anImg.setAttribute("href", "#modal-"+(i+1));
      anImg.setAttribute("class","img-link");
      figure.appendChild(anImg);

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/img-"+ (i+1) + ".jpg");
      image.setAttribute("title",array[i]);
      image.setAttribute("width","300");
      anImg.appendChild(image);

      var name = document.createElement("figcaption");
      name.setAttribute("class","name-project text-uppercase");
      figure.appendChild(name);

      name.appendChild(document.createTextNode(array[i]));
    });
  }
  addProject(projects);

  /*********************Agregando los modales*********************/

  function addModals(array){
    projects.forEach(function(e,i){
      var projectsBig = document.getElementById("projects-big");

      var figureModal = document.createElement("figure");
      figureModal.setAttribute("class", "modal-figure");
      figureModal.setAttribute("id", "modal-" + (i+1));
      projectsBig.appendChild(figureModal);

      var divModal = document.createElement("div");
      divModal.setAttribute("class", "modal-div");
      figureModal.appendChild(divModal);

      var imgModal = document.createElement("img");
      imgModal.setAttribute("src","assets/img/img-"+ (i+1) + ".jpg");
      imgModal.setAttribute("class", "modal-image");
      imgModal.setAttribute("width","728");
      divModal.appendChild(imgModal);

      var cerrarModal = document.createElement("a");
      cerrarModal.setAttribute("class", "close-modal");
      cerrarModal.setAttribute("href", "#projects-container");
      divModal.appendChild(cerrarModal);

      cerrarModal.appendChild(document.createTextNode("x"));
    });
  }
  addModals(projects);

})
