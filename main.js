function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();

  return request.responseText;
}
function criaLinha(admin) {
  let data = console.log(fazGet("https://localhost:7003/api/Admins"));
  let admin = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  admin.forEach((admin) => {
    let linha = criaLinha(admin.id);
    tabela.appendChild(linha);
  });
}
function main() {
  let data = console.log(fazGet("https://localhost:7003/api/Admins"));
  let jogadores = JSON.parse(data);
  let tabela = document.getElementById("tabela");
  jogadores.forEach((jogadores) => {
    let linha = criaLinha(jogadores);
    tabela.appendChild(linha);
  });
}
main();
