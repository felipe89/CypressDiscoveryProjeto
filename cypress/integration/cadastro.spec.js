import SignupPage from '../pages/SignupPage'

describe('Cadstro', ()=>{

    //Ganchos do cypress
    before(function() {
        cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes')
    })

    beforeEach(function() {
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })

    after(function() {
        cy.log('Tudo aqui é executado uma unica vez DEPOSI de TODOS os casos de testes')
    })

    afterEach(function() {
        cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    })


    it ('Usuario deve se cadastrar para se tornar um entregador', ()=>{
        
        //Gerando massa de testes para preenchimento de formulario por variavel
        var entregador = {
            nome: 'Felipe',
            cpf: '00011133311',
            email: 'teste@automacao.com.br',
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

        var signup = new SignupPage()

        signup.acessarPaginaBuerEats()
        signup.preencherFormulario(entregador)
        signup.submeterFormulario()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalValidaCadastro(expectedMessage)
    })

it ('CPF Invalido', ()=>{
   
    //Gerando massa de testes para preenchimento de formulario por variavel
    var entregador = {
        nome: 'Felipe',
        cpf: '000111333BF',
        email: 'teste@automacao.com.br',
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

    var signup = new SignupPage()

    signup.acessarPaginaBuerEats()
    signup.preencherFormulario(entregador)
    signup.submeterFormulario()
    signup.menssagemAlerta('Oops! CPF inválido')

    })
})
