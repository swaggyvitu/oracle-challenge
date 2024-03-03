function acentoEspeciais(frase) {
  const words = frase.split(/\s+/);
  const expressaoRegularAcento = /[áàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]/;
  const expressaoRegularEspeciais = /[\W_]/;

  for (const word of words) {
    if (
      expressaoRegularAcento.test(word) ||
      expressaoRegularEspeciais.test(word)
    ) {
      return true;
    }
  }

  return false;
}

function criptografar() {
  let frase = document.getElementById("texto").value;

  frase = frase.replace("e", 'enter');
  frase = frase.replace("i", 'imes');
  frase = frase.replace("a", 'ai');
  frase = frase.replace("o", 'ober');
  frase = frase.replace("u", 'ufat');

  let conteudo = document.getElementById("texto-trocar");

  document.getElementById("imagem").style.display = "none";
  document.getElementById("campo").style.display = "none";
  document.getElementById("adicionar-botao").style.display = "flex";

  if (acentoEspeciais(frase) || frase === frase.toUpperCase()) {
    document.getElementById("sem-c-especiais").style.display = "block";
    document.getElementById("adicionar-botao").style.display = "none";
    conteudo.innerHTML = ''; // Limpar o conteúdo se não for válido
    
  } else {
    document.getElementById("sem-c-especiais").style.display = "none";
    conteudo.innerHTML = frase;
  }
}

function descriptografar() {
  let frase = document.getElementById("texto").value;

  frase = frase.replace("enter", 'e');
  frase = frase.replace("imes", 'i');
  frase = frase.replace("ai", 'a');
  frase = frase.replace("ober", 'o');
  frase = frase.replace("ufat", 'u');

  let conteudo = document.getElementById("texto-trocar");

  conteudo.innerHTML = frase;

  document.getElementById("imagem").style.display = "none";
  document.getElementById("campo").style.display = "none";
  document.getElementById("adicionar-botao").style.display = "flex";

  if (acentoEspeciais(frase) || frase === frase.toUpperCase()) {
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


