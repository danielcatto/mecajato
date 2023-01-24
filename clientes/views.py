from django.shortcuts import render
from  django.http import HttpResponse
from .models import Cliente, Carro
import re
# Create your views here.
def clientes(request):
    if request.method == "GET":
        return render(request, 'clientes.html') 
    elif request.method == "POST":
        nome = request.POST.get('nome')
        sobrenome = request.POST.get('sobrenome')
        email = request.POST.get('email')
        cpf = request.POST.get('cpf')
        carros = request.POST.getlist('carro') 
        placas = request.POST.getlist('placa') 
        anos = request.POST.getlist('ano') 
        
        #verifica se o cliente existe - pelo cpf
        cliente = Cliente.objects.filter(cpf=cpf)
        if cliente.exists():
            return render(request, "clientes.html", {'nome': nome, 'sobrenome': sobrenome, 'email': email, 'carros': zip(carros, placas, anos)} )

        #valida o email no backend - 
        if not re.fullmatch(re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+'), email):
            #TODO: Adicionar mensagens
            render(request, "clientes.html", {'nome': nome, 'sobrenome': sobrenome, 'cpf':cpf, 'carros': zip(carros, placas, anos)} )


        cliente = Cliente(
            nome = nome,
            sobrenome = sobrenome,
            email = email,
            cpf = cpf
        )
        cliente.save()

        for carro, placa, ano in zip(carros, placas, anos):
            car = Carro(carro=carro, placa=placa, ano=ano, cliente=cliente)
            car.save()


        
    return render(request, "clientes.html", {'nome': nome, 'sobrenome': sobrenome, 'cpf':cpf, 'carros': zip(carros, placas, anos)})

