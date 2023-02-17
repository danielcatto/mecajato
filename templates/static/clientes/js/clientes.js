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

//essa função usa o ID retornado em clientes.html atualiza-clientes id=clientes-select e faz uma request para o backend 
//com o fetch, esse request é como uma API interna
//o fetch recebe o response pelo .then (cascatiando os then)
//é necessário criar a url em urls.py e fazer o tratamento do response em views.py
function dados_cliente(){
    cliente = document.getElementById('cliente-select')
    csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value
    id_cliente = cliente.value

    //cria um formulario html com javascript
    data = new FormData()
    data.append('id_cliente', id_cliente) 
    //fetch realiza uma request - then() é a response
    fetch("/clientes/atualiza_cliente/",{
        method: "POST",
        headers: {
            'X-CSRFToken': csrf_token,
        },
        body: data
    }).then(function(result){
        return result.json()
    }).then(function(data){
        console.log(data)
        document.getElementById('form-att-cliente').style.display = 'block'
        
        nome = document.getElementById('nome')
        nome.value = data['nome']
    })

}
