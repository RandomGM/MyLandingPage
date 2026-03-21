
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

    {titulo: "Projeto 1", descricao: "Laço de repetição", link: "https://editor.p5js.org/Nicolasmp12321/full/f6TvSHfUA"},

    {titulo: "Projeto 2", descricao: "Meu Projeto 2", link: "#"},

    {titulo: "Projeto 3", descricao: "Meu projeto 3", link: "#"}

]

var projectgrid = document.querySelector(".project-grid")


    projetos.forEach(function (projeto) {

        var card = document.createElement("a"); // <a> <a/>
        card.className = "project-card"; // <a class= "project-card"> <a/>
        card.href = projeto.link; // <a class="projet-card" href = "link do projeto"> <a/>
        card.innerHTML = "h3" + projeto.titulo + "<h3> <p>" + projeto.descricao;
        projectgrid.appendChild(card);


});






