async function buscarCEP(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado!");
      return;
    }

    const tabela = document.getElementById("resultadocep");

    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${dados.cep}</td>
      <td>${dados.logradouro}</td>
      <td>${dados.bairro}</td>
      <td>${dados.localidade}</td>
      <td>${dados.ddd}</td>
      <td>${dados.uf}</td>
    `;

    tabela.appendChild(linha);

  } catch (erro) {
    console.error("Erro na consulta", erro);
  }
}

document.getElementById("btn_cep").onclick = () => {
  const cep = document.getElementById("cep").value.trim();
  if (cep) {
    buscarCEP(cep);
  }
};

async function buscarCNPJ(cnpj) {
  try {
    const resposta = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CNPJ não encontrado!");
      return;
    }

    const tabela = document.getElementById("resultadocnpj");

    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${dados.situacao}</td>
      <td>${dados.porte}</td>
      <td>${dados.cnpj}</td>
      <td>${dados.nome}</td>
      <td>${dados.fantasia}</td>
      <td>${dados.atividade_principal[0].text}</td>
      <td>${dados.atividades_secundarias.map(a => a.text).join('; ')}</td>
      <td>${dados.logradouro}</td>
      <td>${dados.numero}</td>
      <td>${dados.complemento}</td>
      <td>${dados.bairro}</td>
      <td>${dados.municipio}</td>
      <td>${dados.cep}</td>
      <td>${dados.telefone}</td>
      <td>${dados.email}</td>
      <td>${dados.uf}</td>
      <td>${dados.abertura}</td>
      <td>${dados.data_situacao}</td>
    `;

    tabela.appendChild(linha);

  } catch (erro) {
    console.error("Erro na consulta", erro);
  }
}

document.getElementById("btn_cnpj").onclick = () => {
  const cnpj = document.getElementById("cnpj").value.trim();
  if (cnpj) {
    buscarCNPJ(cnpj);
  }
};