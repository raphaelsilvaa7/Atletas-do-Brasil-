function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi Encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }
    
  
    let resultados = "";
  
    for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase(); // Assumindo que tags é uma string
  
      // Verificar se a pesquisa está em algum dos campos
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar um atleta ou esporte.</p>"

    }
  
    section.innerHTML = resultados;
  }