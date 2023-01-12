const button = document.getElementById("botao")

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById("name").value
    const email = document.getElementById("email").value

    

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

    if (nome != "" && email != ""){
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

