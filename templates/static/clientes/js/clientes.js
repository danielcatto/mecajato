function add_carro(){

    container = document.getElementById("form-carro")

    html = "<br><div class='row'> <div class='col-md'> <input type='text' placeholder='carro' class='form-comtrol' name='carro'> </div> <div class='col-md'> <input type='text' placeholder='placa' class='form-comtrol' name='placa'></div> <div class='col-md'> <input type='number' placeholder='ano' class='form-control' name='ano'>   </div></div>"
       
    container.innerHTML += html


}

