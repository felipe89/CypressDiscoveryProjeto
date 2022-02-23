var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            endereco: {
                cep:'08330415',
                rua:'Rua Galáxia',
                numero:'955',
                complento:'Em frente a praça',
                bairro:'Cidade Satélite Santa Bárbara',
                cidade_uf:'São Paulo/SP'
            },
            metodo_entrega:'Moto',
            metodo_entrega_2:'Bicicleta',
            metodo_entrega_3: 'Van/Carro',
            cnh:'cnh_gratuita.jpg'
        }

        return data
    }
}