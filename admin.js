function HandleButton() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
  });
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const valueEmail = email.value;
  console.log(valueEmail);
  const valueSenha = senha.value;
  console.log(valueSenha);
}
HandleButton();
function fazPost(email, senha) {
  let request = new XMLHttpRequest();
  request.open("POST", url, false);
  request.body();

  return request.responseText;
}

function criaLinha(usuario) {
  console.log(usuario);

  let data = console.log(fazGet("https://localhost:7003/api/Admins"));
  let admin = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  admin.forEach((usuario) => {
    let linha = criaLinha(usuario.id);
    tabela.appendChild(linha);
  });
}
function main() {
  console.log(fazGet("https://localhost:7003/api/Admins"));
}
