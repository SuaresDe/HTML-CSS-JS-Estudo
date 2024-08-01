function gerarSenha(comprimento = 12) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇçabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let senha = '';
    const caracteresLength = caracteres.length;
    for (let i = 0; i < comprimento; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresLength);
        senha += caracteres[randomIndex];
    }
    return senha;
}

function mostrarSenha() {
    const senha = gerarSenha(); 
    document.getElementById('senhaDisplay').textContent = senha; 
}
