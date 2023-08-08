$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            CPF: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu Nome.',
            CPF: 'Por favor, insira o seu CPF',
            telefone: 'Por favor, insira o seu Telefone',
            email: 'Por favor, insira o seu E-mail',
            endereço: 'Por favor, insira o seu Endereço',
            CEP: 'Por favor, insira o seu CEP'
        },
    });

    const handleSubimit = (event) => {
        event.preventDefault();

        if ($('form').valid()) { // Verifica se o formulário é válido
            const nome = document.querySelector('input[name=nome]').value;
            const CPF = document.querySelector('input[name=CPF]').value;
            const telefone = document.querySelector('input[name=telefone]').value;
            const email = document.querySelector('input[name=email]').value;
            const endereço = document.querySelector('input[name=endereço]').value;
            const CEP = document.querySelector('input[name=CEP]').value;

            const dataHoraEnvio = new Date();
            const dataFormatada = `${dataHoraEnvio.getDate().toString().padStart(2, '0')}/${(dataHoraEnvio.getMonth() + 1).toString().padStart(2, '0')}/${dataHoraEnvio.getFullYear()}`;

            fetch('https://api.sheetmonkey.io/form/qSExyZ8Uk1mPPjNdyJEq3N', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, CPF, telefone, email, endereço, CEP, dataEnvio: dataFormatada }),
            }).then(() => {
                document.getElementById('nome').value = '';
                document.getElementById('CPF').value = '';
                document.getElementById('telefone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('endereço').value = '';
                document.getElementById('CEP').value = '';

                window.open('https://www.youtube.com/watch?v=jfKfPfyJRdk', '_blank');
            });
        }
    }

    document.querySelector('form').addEventListener('submit', handleSubimit);
});






// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Impede o envio padrão do formulário
//     // Limpar campos
    // document.getElementById('nome').value = '';
    // document.getElementById('CPF').value = '';
    // document.getElementById('telefone').value = '';
    // document.getElementById('email').value = '';
    // document.getElementById('endereço').value = '';
    // document.getElementById('CEP').value = '';
//     // Exibir pop-up
//     alert('Formulário enviado com sucesso!');
// });




/*
Anotações do Rafa para Depois - :)

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: 'Ex: (21) 12345-1234' )
    }

    $('#CPF').mask('000.000.000-00',{
        placeholder: 'Ex: 123.456.789-00' )
    }

    $('#CEP').mask('00000-000',{
        placeholder: 'Ex: 12345-678' )
    }

    $('#Aniversario').mask('00/00/000',{
        placeholder: 'Ex: __/__/____' )
    }

    Ou Placa de Carro :)
*/ 
