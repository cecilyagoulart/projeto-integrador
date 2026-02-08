document.addEventListener("DOMContentLoaded", function () {

    controlarMenu();
    ativarLinkAtual();

});



function controlarMenu() {

    const menu = document.getElementById("menu");
    if (!menu) return;

    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            // Remove ativo de todos
            links.forEach(l => l.classList.remove("ativo"));

            // Ativa o clicado
            this.classList.add("ativo");

        });

    });

}


function ativarLinkAtual() {

    const paginaAtual = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll("#menu a");

    links.forEach(function (link) {

        const destino = link.getAttribute("href");

        if (destino === paginaAtual) {
            link.classList.add("ativo");
        }

    });

}
