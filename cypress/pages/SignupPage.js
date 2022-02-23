class SignupPage{

        acessarPaginaBuerEats() {
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    preencherFormulario(entregador){
          //Validação de preenchimento de campos pela massa de testes via variavel
          cy.get('input[name="fullName"]').type(entregador.nome)
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
          
          //Upload de arquivo(instalar a biblioteca no cypress - npm install cypress-file-upload --save-dev)
          //importar o pacote no arquivo index.js (import 'cypress-file-upload')
          cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
    }

    submeterFormulario(){
         //Clicar no botão para "Cadastra-se para fazer entrega" e validar o cadastro de usuário
         cy.get('form button[type="submit"]').click()
    }

    modalValidaCadastro(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    menssagemAlerta(expectedMessage){
        //Validação de alerta de campo invalido
        cy.get('.alert-error').should('have.text',  expectedMessage)
    }
}

export default new SignupPage; 