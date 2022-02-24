import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe("Cadstro", () => {
  //   beforeEach(function () {
  //     cy.fixture("deliver").then((massaTeste) => {
  //       this.deliver = massaTeste;
  //     });
  //   });

  it("Usuario deve se cadastrar para se tornar um entregador", function () {
    var deliver = signupFactory.deliver();

    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(deliver);
    signup.submeterFormulario();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";

    signup.modalValidaCadastro(expectedMessage);
  });

  it("CPF Invalido", function () {
    var deliver = signupFactory.deliver();
    deliver.cpf = "0000ASS11";

    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(deliver);
    signup.submeterFormulario();
    signup.menssagemAlerta("Oops! CPF inválido");
  });

  it("E-mail Invalido", function () {
    var deliver = signupFactory.deliver();
    deliver.email = "teste.com.br";

    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(deliver);
    signup.submeterFormulario();
    signup.menssagemAlerta("Oops! Email com formato inválido.");
  });

  //Criando um gancho de validações de cenario forçando a falhar para a msg "e-mail" sem abortar os testes em execução
  context("Campos Obrigatórios", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "cep", output: "É necessário informar o CEP" },
      {
        field: "endereço",
        output: "É necessário informar o número do endereço",
      },
      { field: "metodo_entrega", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ]

    before(function(){
      signup.acessarPaginaBuerEats();
      signup.submeterFormulario();
    })

    messages.forEach(function(msg){
      it(`${msg.field} is required`, function(){
        signup.menssagemAlerta(msg.output)
      })
    })
  });
});
