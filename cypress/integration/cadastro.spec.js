import signup from "../pages/SignupPage"
import signupFactory from "../factories/SignupFactory"

describe("Cadstro", () => {
//   beforeEach(function () {
//     cy.fixture("deliver").then((massaTeste) => {
//       this.deliver = massaTeste;
//     });
//   });

  it("Usuario deve se cadastrar para se tornar um entregador", function () {

    var deliver = signupFactory.deliver()

    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(deliver);
    signup.submeterFormulario();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalValidaCadastro(expectedMessage);
  });

  it("CPF Invalido", function () {

    var deliver = signupFactory.deliver()
    deliver.cpf = '0000ASS11'

    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(deliver);
    signup.submeterFormulario();
    signup.menssagemAlerta("Oops! CPF inválido");
  });

  it("E-mail Invalido", function () {

    var deliver = signupFactory.deliver()
    deliver.email = 'teste.com.br'

    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(deliver);
    signup.submeterFormulario();
    signup.menssagemAlerta("Oops! Email com formato inválido.");
  });
});
