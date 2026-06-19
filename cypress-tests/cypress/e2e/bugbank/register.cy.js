describe("register", () => {
  beforeEach(() => {
    cy.visit("https://bugbank.netlify.app/");
  });
  it("CT-006 - Campo e-mail é obrigatório", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get(".input__warging")
        .eq(0)
        .invoke("text")
        .should((text) => {
          expect(text, "Campo E-mail").to.eq("É campo obrigatório");
        });
    });
  });
  it("CT-007 - Campo nome é obrigatório", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get(".input__warging")
        .eq(1)
        .invoke("text")
        .should((text) => {
          expect(text, "Campo Nome").to.eq("É campo obrigatório");
        });
    });
  });
  it("CT-008 - Campo senha é obrigatório", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get(".input__warging")
        .eq(2)
        .invoke("text")
        .should((text) => {
          expect(text, "Campo Senha").to.eq("É campo obrigatório");
        });
    });
  });
  it("CT-009 - Campo confirmar senha é obrigatório", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get(".input__warging")
        .eq(3)
        .invoke("text")
        .should((text) => {
          expect(text, "Campo Confirmar Senha").to.eq("É campo obrigatório");
        });
    });
  });
  it("CT-010 - Tentativa de Registro sem preencher apenas Nome deve exibir mensagem de erro", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get('input[name="email"]').type("teste@teste.com", { force: true });
      cy.get('input[name="password"]').type("teste", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("teste", {
        force: true,
      });
      cy.get('button[type="submit"]').click({ force: true });
    });
    cy.get("#modalText").should('exist');
    cy.get("#modalText").should("contain.text", "Nome não pode ser vazio.");
  });
  it("CT-011 - Tentativa de Registro sem preencher apenas E-Mail deve exibir mensagem de erro", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get('input[name="name"]').type("teste", { force: true });
      cy.get('input[name="password"]').type("teste", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("teste", {
        force: true,
      });
      cy.get('button[type="submit"]').click({ force: true });
    });
    cy.get("#modalText").should('exist');
    cy.get("#modalText").should("contain.text", "Email não pode ser vazio.");
  });
  it("CT-012 - Tentativa de Registro sem preencher apenas Senha deve exibir mensagem de erro", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get('input[name="email"]').type("teste@teste.com", { force: true });
      cy.get('input[name="name"]').type("teste12", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("teste", {
        force: true,
      });
      cy.get('button[type="submit"]').click({ force: true });
    });
    cy.get("#modalText").should('exist');
    cy.get("#modalText").should("contain.text", "Senha não pode ser vazio.");
  });
  it("CT-013 - Tentativa de Registro sem preencher apenas Confirmar Senha deve exibir mensagem de erro", () => {
    cy.clickRegister();
    cy.get(".card__register").within(() => {
      cy.get('button[type="submit"]').click({ force: true });
      cy.get('input[name="email"]').type("teste@teste.com", { force: true });
      cy.get('input[name="name"]').type("teste12", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("teste", { force: true });
      cy.get('button[type="submit"]').click({ force: true });
    });
    cy.get("#modalText").should('exist');
    cy.get("#modalText").should("contain.text", "Confirmar senha não pode ser vazio.");
  });
  it('CT-014 - Deixar ativa a opção "Criar conta com saldo" deve criar conta com saldo R$ 1.000,00', () => {
    cy.registerAndLoginNewUser("teste@teste.com", "teste", "teste123", 1000);

    cy.get('#textBalance').invoke('text').invoke('trim').invoke('replace', /\u00A0/g, ' ').should('eq', 'Saldo em conta R$ 1.000,00');
  });
  it('CT-015 - Deixar inativo a opção "Criar conta com saldo" deve criar conta com saldo de R$ 0,00', () => {
    cy.registerAndLoginNewUser("teste@teste.com", "teste", "teste123");

    cy.get('#textBalance').invoke('text').invoke('trim').invoke('replace', /\u00A0/g, ' ').should('eq', 'Saldo em conta R$ 0,00');
  });
  it('CT-016 - Senhas diferentes exibe mensagem de erro "Senha e confirmação de senha precisam ser iguais"', () => {
    cy.clickRegister();
    cy.get('.card__register').within(() => {
      cy.get('input[name="email"]').type("teste@teste.com", { force: true });
      cy.get('input[name="name"]').type("teste", { force: true });
      cy.get('input[name="password"]').type("password", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("different password", {
        force: true,
      });
      cy.get('button[type="submit"]').click({ force: true });
    })

    cy.get('#modalText').should('exist');
    cy.get('#modalText').should('contain.text', 'As senhas não são iguais');
  }); 
  it('CT-017 - Cadastrar conta com sucesso deve exibir número da conta', () => {
    cy.clickRegister();
    cy.get('.card__register').within(() => {
      cy.get('input[name="email"]').type("teste@teste.com", { force: true });
      cy.get('input[name="name"]').type("teste", { force: true });
      cy.get('input[name="password"]').type("password", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("password", {
        force: true,
      });
      cy.get('button[type="submit"]').click({ force: true });
    })

    cy.get('#modalText').invoke('text').then((text) => {
        cy.get('#btnCloseModal').click();
        const accountNumber = text.split(' ')[2]
        cy.loginUser("teste@teste.com", "password");
        cy.get('#textAccountNumber').should('contain.text', accountNumber);
    })
  });
});
