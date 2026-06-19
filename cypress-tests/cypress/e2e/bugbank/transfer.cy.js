describe("Transfer", () => {
  beforeEach(() => {
    cy.visit("http://bugbank.netlify.app/");
    cy.registerUser("joao@teste.com", "joao", "joao123", 1000);
    cy.get("#btnCloseModal").click();
    cy.clearRegisterForm();
    cy.registerUser("pedro@teste.com", "pedro", "pedro123");
    cy.get("#btnCloseModal").click();
  });

  it('CT-018 - Tentativa de transferência para conta inválida deve exibir mensagem de erro "Conta inválida ou inexistente', () => {
    cy.loginUser("joao@teste.com", "joao123");
    cy.get("#btn-TRANSFERÊNCIA").click();

    cy.get(".account__data").within(() => {
      cy.get('input[name="accountNumber"]').type("containvalida");
      cy.get('input[name="digit"]').type("h");
    });
    cy.get('input[name="transferValue"]').type("100");
    cy.get('input[name="description"]').type("teste");
    cy.get('button[type="submit"]').click();

    cy.get("#modalText").should("exist");
    cy.get("#modalText").should(
      "contain.text",
      "Conta inválida ou inexistente",
    );
  });
  it("CT-019 - Não permitir transferência maior que o saldo da conta", () => {
    cy.setUpTransfer(5000);

    cy.get('#modalText').should('exist');
    cy.get('#modalText').should('contain.text', 'Você não tem saldo suficiente para essa transação');
  });
  it('CT-020 - Tentativa de transferência deve informar mensagem de erro "Campo de descrição é obrigatório"', () => {
    cy.setUpTransfer(100);

    cy.get('#modalText').should('not.exist');
    cy.get('#modalText').should('not.contain.text', 'Transferencia realizada com sucesso.');
  })
  it('CT-021 - Tentativa de transferência com número menor ou igual a zero deve informar mensagem de erro', () => {
    const transferValue = -100
    
    cy.setUpTransfer(-100);

    
      cy.get('#modalText').should('exist');
      cy.get('#modalText').should('contain.text', 'Valor da transferência não pode ser 0 ou negativo');
  })
  it('CT-022 - Ao realizar transferência válida valor deve ser debitado corretamente', () => {
    const value = 200;
    cy.setUpTransfer(value);
    cy.get('#btnCloseModal').click();
    cy.get('#btnBack').click();
    cy.get('#textBalance').should('contain', `${1000 - value}`);
  })
  it('CT-023 - Ao realizar transferência válida o usuário deve ser redirecionado para o extrato', () => {
    cy.setUpTransfer(300);
    cy.get('#btnCloseModal').click();
    cy.url().should('include', '/bank-statement');
  })

});
