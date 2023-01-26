function add_carro(){

    container = document.getElementById("form-carro")

    html = "<br><div class='row'> <div class='col-md'> <input type='text' placeholder='carro' class='form-comtrol' name='carro'> </div> <div class='col-md'> <input type='text' placeholder='placa' class='form-comtrol' name='placa'></div> <div class='col-md'> <input type='number' placeholder='ano' class='form-control' name='ano'>   </div></div>"
       
    container.innerHTML += html
}


function exibir_form(tipo){
    add_clientes = document.getElementById('adicionar-cliente')
    att_cliente = document.getElementById('att-cliente')

    if(tipo == '1'){
        att_cliente.style.display ="none"
        add_clientes.style.display = 'block'
    }
    else if(tipo == '2'){
        att_cliente.style.display ="block"
        add_clientes.style.display = 'none'
    }
}


function dados_cliente(){
    cliente = document.getElementById('cliente-select')
    console.log(cliente.value)
}