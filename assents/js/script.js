function enviarMensagem(){
    let nome = document.querySelector('#nome').value;
    let veiculo = document.querySelector('#veiculo').value;
    let solicitacao = document.querySelector('#solicitacao').value;
    let servico = document.querySelector('#produto').value;
    let texto = document.querySelector('#textarea').value;

    /*VERIFICAÇÕES*/
    if(nome.length < 5 || nome.length > 50){
        alerta("O nome está incorreto!");
        return;
    }
    else if (veiculo.length < 5 || veiculo.length > 60){
        alerta("Verifique o nome do veículo!");
        return;
    }
    else if(solicitacao == 'x'){
        alerta("Escolha uma solicitação de serviço válida!");
        return;
    }
    else if(servico == 'x'){
        alerta("Escolha um serviço válido!");
        return;
    }
    else if(texto.length > 250){
        alerta("Texto longo demais!");
        return;
    }

    let frase = "";
    let time = ""
    let numero = "21972172552";

    let horario = new Date().getHours();
    function hora() {
        if (horario >= 0 && horario <= 13) {
          time = "Bom+dia";
        } else if (horario >= 13 && horario <= 18) {
          time = "Boa+tarde";
        } else if (horario >= 18 && horario <= 23) {
          time = "Boa+noite";
        }
        return time;
    }

    time = hora();

    switch (solicitacao) {
        case 'fazer um orcamento':
            frase = `${time}, gostaria de ${solicitacao} para o serviço de ${servico} no ${veiculo}.`;
        break;

        case 'agendar um servico':
            frase = `${time}, gostaria de ${solicitacao} de ${servico} no ${veiculo}, quais são as datas disponiveis?`;
        break;

        case 'tirar uma dúvida':
            frase = `${time}, gostaria de ${solicitacao} sobre o servico de ${servico} que será feito no meu ${veiculo}!`;
        break;

        case 'avaliar um problema no':
            frase = `${time}, gostaria de ${solicitacao} no meu ${veiculo}!`;
        break;

        case 'outros':
            frase = `${time}, gostaria de falar com a atendente!`;
        break;
    
        default:
            alert("Selecione uma das opções válidas!")
        break;
    }

    let url = 'http://wa.me/55' + numero + '?text='
        + "*CLINI'CAR SERVICOS AUTOMOTIVOS*" + '%0a'
        + '%0a'
        + '*Cliente*: '+ nome + '%0a'
        + frase + '%0a'
        + texto + '%0a'
        window.open(url, '_blank').focus()
}


function alerta(texto){
    let container = document.querySelector('.aviso');
    let painel = document.querySelector('#aviso');
    container.style.display = 'flex';
    painel.style.opacity = '1';
    painel.style.zIndex = '+99';
    painel.innerHTML = texto;
    painel.style.transform = 'translateY(0px)';

    setTimeout(() => {
        painel.style.zIndex = '-99';
        painel.style.opacity = '0';
        painel.style.transform = 'translateY(50px)';
    }, 6000);
}