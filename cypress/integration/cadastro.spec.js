import signup from "../pages/SignupPage";

describe("Cadstro", () => {
  beforeEach(function () {
    cy.fixture("deliver").then((massaTeste) => {
      this.deliver = massaTeste;
    });
  });

  it("Usuario deve se cadastrar para se tornar um entregador", function () {
    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(this.deliver.signup);
    signup.submeterFormulario();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalValidaCadastro(expectedMessage);
  });

  it("CPF Invalido", function () {
    signup.acessarPaginaBuerEats();
    signup.preencherFormulario(this.deliver.cpf_invalido);
    signup.submeterFormulario();
    signup.menssagemAlerta("Oops! CPF inválido");
  });
});
