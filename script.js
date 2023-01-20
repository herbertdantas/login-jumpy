const button = document.getElementById("botao")

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById("name").value
    const email = document.getElementById("email").value
    const tel = document.getElementById("tel").value
    const cpf = document.getElementById("cpf").value
    const senha = document.getElementById("senha").value
    
    if (nome == ""){

        document.getElementById("campo-nome").style.display = "block"
        
        
    } else{
        document.getElementById("campo-nome").style.display = "none"
    }

    if (email == ""){

        document.getElementById("campo-email").style.display = "block"
    }else{
        document.getElementById("campo-email").style.display = "none"
    }

    if (tel == ""){

        document.getElementById("campo-tel").style.display = "block"
    }else{
        document.getElementById("campo-tel").style.display = "none"
    }

    if (cpf == ""){

        document.getElementById("campo-cpf").style.display = "block"
    }else{
        document.getElementById("campo-cpf").style.display = "none"
    }

    if (senha == ""){

        document.getElementById("campo-senha").style.display = "block"
    }else{
        document.getElementById("campo-senha").style.display = "none"
    }





    if (nome != "" && email != "" && tel != "" && cpf != "" && senha != "" ){
        document.getElementById("campo-obg").innerHTML = "Sucesso"
        document.getElementById("campo-obg").style.display = "block"
        document.getElementById("campo-obg").style.color = "green"
        limpar()
        
    
    }else{

        document.getElementById("campo-obg").style.display = "block"
        document.getElementById("campo-obg").innerHTML = "Campos obrigatórios não registrados"
        document.getElementById("campo-obg").style.color = "#E73550"
    }
    

})

function limpar(){
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("tel").value = ""
    document.getElementById("cpf").value = ""
    document.getElementById("senha").value = ""
    
}

