function cadastrarCarro() {

    let carro = {
        id: document.getElementById("idCarro").value,
        marca: document.getElementById("fabricanteCarro").value,
        modelo: document.getElementById("modeloCarro").value,
        cor: document.getElementById("corCarro").value,
        ano: document.getElementById("anoCarro").value
    };

    console.log("Carro cadastrado:");
    console.log("ID:", carro.id);
    console.log("Marca:", carro.marca);
    console.log("Modelo:", carro.modelo);
    console.log("Cor:", carro.cor);
    console.log("Ano:", carro.ano);

}

cadastrarCarro();
