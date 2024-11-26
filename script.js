const meuObjLista = new XMLHttpRequest();
meuObjLista.open("GET", "https://raw.githubusercontent.com/DS-Senai/json/refs/heads/main/tecnologias.json");
meuObjLista.responseType = "json";
meuObjLista.send();

meuObjLista.onload  = () => {
    let texto = document.querySelector('.json');
    var tec = meuObjLista.response;
    
   tec.tecnologias.forEach((objeto) => {
   texto.innerHTML += `
            ${objeto.nome} </br> 
            ${objeto.tipo}</br>`
    // document.write<hr>
   })
   
};























// function exibir (){
//     var meusLivros = meuObjLista.response;
//     document.write(meusLivros.Livros[0].Título);
// }

// var botao = document.querySelector('.botao'); // Selecionar o elemento e salvar em uma variavel
// botao.addEventListener("click", () => { // 2 Parametros: 1ª Tipo de evento - 2ª A função que vai executar
//     var meusLivros = meuObjLista.response;
//     var livros = meusLivros.Livros[0].Preço;
//     return document.write(livros);
// });

// function exibir (){
//     var meusLivros = meuObjLista.response;
//     var livros = meusLivros.Livros[0].Preço;
//     return document.write(livros);
// }

// function exibir() {
//     var meusLivros = meuObjLista.response;
//     var livros = meusLivros.Livros[0].Preço;
//     var header = document.querySelector("header");
//     var myH2 = document.createElement("h2");
//     myH2.textContent = livros;
//     header.appendChild(myH2);
// }
