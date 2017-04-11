window.addEventListener('load', function(){

var projects = ["TAYMAN GROUP", "NALIA ORGANICS", "BRASS COQ","SUNGENRE","LIVING BOTANICS",
"FOAM KING","VOLITION","INK","GILKON","OUTS APPLES","SHERWOOD","PLATINUM"]

  function addProject(array){
    for (var i = 0; i < array.length; i++) {
      var projectsContainer = document.getElementById("projects-container");
    /*  var box = document.createElement("div");
      box.setAttribute("class","div-box");
      principal.appendChild(box);*/

      var figure = document.createElement("figure");
      figure.setAttribute("class","figure-project");
      projectsContainer.appendChild(figure);

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/img-"+ (i+1) + ".jpg");
      image.setAttribute("title",array[i]);
      image.setAttribute("width","300");
      figure.appendChild(image);

      var name = document.createElement("figcaption");
      name.setAttribute("class","name-project");
      figure.appendChild(name);

      name.appendChild(document.createTextNode(array[i]));
    }
  }
  addProject(projects);

})
