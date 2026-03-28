
function alerta123(){
    alert("Erro")

}

function alerta321(){
    alert("@*$$#$*@&$*")

}


//document.addEventListener('click',alerta123)

//document.addEventListener('dblclick', alerta321)

//document.addEventListener('DOMContentLoaded')


let projetos = [

    {titulo: "Projeto 1", descricao: "Contador de cliques", link: "https://editor.p5js.org/Nicolasmp12321/full/7xVJyy1qI"},

    {titulo: "Projeto 2", descricao: "Meu Projeto 2", link: "#"},

    {titulo: "Projeto 3", descricao: "Meu projeto 3", link: "#"}

]

var projectgrid = document.querySelector(".project-grid")


    projetos.forEach(function (projeto) {

        var card = document.createElement("a"); // <a> <a/>
        card.className = "project-card"; // <a class= "project-card"> <a/>
        card.href = projeto.link; // <a class="projet-card" href = "link do projeto"> <a/>
        card.innerHTML = "<h3>" + projeto.titulo + "</h3> <p>" + projeto.descricao; "</p>"
        projectgrid.appendChild(card);


});






