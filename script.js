document.addEventListener('DOMContentLoaded', function() {
  const cepInput = document.getElementById("cep");

  // Adiciona máscara ao campo de CEP
  cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
  });
});

async function buscarCEP() {
  const cep = document.getElementById("cep").value.replace(/\D/g, '');
  const loadingSpinner = document.getElementById("loading");
  const statusDiv = document.getElementById("status");
  const resultadoDiv = document.getElementById("resultado");
  
  // Resetar campos
  statusDiv.className = "status";
  statusDiv.textContent = "";
  resultadoDiv.style.display = "none";
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  
  if (cep.length !== 8) {
    statusDiv.className = "status error";
    statusDiv.textContent = "CEP inválido! Digite 8 números.";
    return;
  }

  try {
    // Mostrar loading
    loadingSpinner.style.display = "inline-block";
    
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    // Esconder loading
    loadingSpinner.style.display = "none";

    if (data.erro) {
      statusDiv.className = "status error";
      statusDiv.textContent = "CEP não encontrado.";
    } else {
      // Mostrar sucesso
      statusDiv.className = "status success";
      statusDiv.textContent = "Endereço encontrado!";
      
      // Exibir div de resultado
      resultadoDiv.style.display = "block";
      
      // Preenche os campos com os dados retornados
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("estado").value = data.uf;
    }
  } catch (error) {
    // Esconder loading e mostrar erro
    loadingSpinner.style.display = "none";
    statusDiv.className = "status error";
    statusDiv.textContent = "Erro ao buscar o CEP. Verifique sua conexão.";
  }
}
