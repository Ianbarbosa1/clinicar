function enviarMensagem(){
    let nome = document.querySelector('#nome').value
    let veiculo = document.querySelector('#veiculo').value
    let solicitacao = document.querySelector('#solicitacao').value
    let servico = document.querySelector('#produto').value
    let texto = document.querySelector('#textarea').value

    console.log(nome, veiculo, solicitacao, servico, texto )
}


//O próximo objetivo do projeto é colocar uma condicional para que a mensagem vá corretamente para o whatsapp da loja de maneira objetiva e direta!