let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

for(let i = 0; i < atletas.length;i++){
    console.log(`Atleta: ${atletas[i].nome}`)
    console.log(`Notas Obtidas: ${atletas[i].notas.sort()}`)
    let soma = 0
    atletas[i].notas.sort((a,b) => b - a).slice(1,4).forEach(function(num){
        soma += num
    })
    let media = soma / (atletas.length - 1)
    console.log(`Média Válida: ${media}`)
}