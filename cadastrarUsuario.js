const usuarios = [];

function cadastrarUsuario() {

    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;
    const dataNascimento = document.getElementById('nascimentoUsuario').value;

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return false; 
    }

    usuarios.push({ nome, email, dataNascimento });

    document.getElementById('cadastroUsuario').reset();

    alert('Cadastro realizado com sucesso!');

    return false; 
}

function exibirUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');

    listaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${usuario.nome}    |     E-mail: ${usuario.email}    |     Data de Nascimento: ${usuario.dataNascimento}`;
        listaUsuarios.appendChild(li);
    });
}
