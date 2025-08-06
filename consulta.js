async function buscarCEP(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado!");
      return;
    }

    const tabela = document.getElementById("resultado");

    // Cria uma nova linha
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${dados.cep}</td>
      <td>${dados.logradouro}</td>
      <td>${dados.bairro}</td>
      <td>${dados.localidade}</td>
      <td>${dados.ddd}</td>
      <td>${dados.uf}</td>
    `;

    // Adiciona a linha no final da tabela (mantendo as anteriores)
    tabela.appendChild(linha);

  } catch (erro) {
    console.error("Erro na consulta", erro);
  }
}

document.getElementById("btn").onclick = () => {
  const cep = document.getElementById("cep").value.trim();
  if (cep) {
    buscarCEP(cep);
  }
};