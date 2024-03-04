
function acentoEspeciais(frase) {
  const expressaoRegularAcento = /[áàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]/;
  const expressaoRegularEspeciais = /[\W_]/;

  return expressaoRegularAcento.test(frase) || expressaoRegularEspeciais.test(frase);
}

function criptografar() {
  let frase = document.getElementById("texto").value.toLowerCase(); // Converter para minúsculas

  frase = frase.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');

  let conteudo = document.getElementById("texto-trocar");

  document.getElementById("imagem").style.display = "none";
  document.getElementById("campo").style.display = "none";
  document.getElementById("adicionar-botao").style.display = "flex";

  if (acentoEspeciais(frase) || /[A-Z]/.test(frase)) { // Verifica se há letras maiúsculas na frase
    document.getElementById("sem-c-especiais").style.display = "block";
    document.getElementById("adicionar-botao").style.display = "none";
    conteudo.innerHTML = ''; // Limpar o conteúdo se não for válido
    
  } else {
    document.getElementById("sem-c-especiais").style.display = "none";
    conteudo.innerHTML = frase;
  }
}

function descriptografar() {
  let frase = document.getElementById("texto").value.toLowerCase(); // Converter para minúsculas

  frase = frase.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');

  let conteudo = document.getElementById("texto-trocar");

  conteudo.innerHTML = frase;

  document.getElementById("imagem").style.display = "none";
  document.getElementById("campo").style.display = "none";
  document.getElementById("adicionar-botao").style.display = "flex";

  if (acentoEspeciais(frase) || /[A-Z]/.test(frase)) { // Verifica se há letras maiúsculas na frase
    document.getElementById("sem-c-especiais").style.display = "block";
    document.getElementById("adicionar-botao").style.display = "none";
    conteudo.innerHTML = ''; // Limpar o conteúdo se não for válido

  } else {
    document.getElementById("sem-c-especiais").style.display = "none";
    conteudo.innerHTML = frase;
  }
}

function copiarTexto() {
  let frase = document.getElementById("texto-trocar").innerHTML;
  copiarCampo(frase);
}

function copiarCampo(valorCampo) {
  let inputTemp = document.createElement("input");
  inputTemp.style = "position: absolute; left: -1000px; top: -1000px";
  inputTemp.value = valorCampo;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
}
