describe('Cadstro', ()=>{
    it ('Usuario deve se cadastrar para se tornar um entregador', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

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
            metodo_entrega_3: 'Van/Carro'
        }
        
        //Validação de preenchimento de campos pela massa de testes via variavel
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        //Validação de preenchimento de campo via massa de testes por segundo nivel (entregador.endereco)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complento)

        //Validação se os campos estão preenchido corretamenten checkpoint
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        //Selecionando o tipo de veiculo para entrega via contains combinando o seletor css com o texto
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()    
    })
})