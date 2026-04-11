
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

    {titulo: "Contador de cliques", descricao: "Projeto desenvolvido com JavaScript utilizando o p5js para contagem de cliques.", link: "https://editor.p5js.org/Nicolasmp12321/full/7xVJyy1qI"},

    {titulo: "Laço de repetição", descricao: "Projeto desenvolvido com JavaScript utilizando o p5js para repetir uma ação em looping. ", link: "https://editor.p5js.org/Nicolasmp12321/full/f6TvSHfUA"},

    {titulo: "Troca de Humor", descricao: "Projeto desenvolvido com JavaScript utilizando o p5js que altera o humor a partir do clique do mouse", link: "https://editor.p5js.org/Nicolasmp12321/full/zw1OPwCd7"}

]

var projectgrid = document.querySelector(".project-grid")


    projetos.forEach(function (projeto) {

        var card = document.createElement("a"); // <a> <a/>
        card.className = "project-card"; // <a class= "project-card"> <a/>
        card.href = projeto.link; // <a class="projet-card" href = "link do projeto"> <a/>
        card.innerHTML = "<h3>" + projeto.titulo + "</h3> <p>" + projeto.descricao; "</p>"
        projectgrid.appendChild(card);


});






