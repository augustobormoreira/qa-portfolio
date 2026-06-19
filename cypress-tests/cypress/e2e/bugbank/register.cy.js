describe("register", () => {
  beforeEach(() => {
    cy.visit("https://bugbank.netlify.app/");
  });
  it("CT-006 - Campo e-mail é obrigatório", () => {
    cy.clickRegister();
    cy.get('.card__register').within(() => {
        cy.get('button[type="submit"]').click({force: true})
        cy.get('.input__warging').eq(0).invoke('text').should((text) => {
                expect(text, 'Campo E-mail').to.eq('É campo obrigatório');
        });
    })
  })
  it("CT-007 - Campo nome é obrigatório", () => {
    cy.clickRegister();
    cy.get('.card__register').within(() => {
        cy.get('button[type="submit"]').click({force: true})
        cy.get('.input__warging').eq(1).invoke('text').should((text) => {
                expect(text, 'Campo Nome').to.eq('É campo obrigatório');
        });
    })
  })
  it("CT-008 - Campo senha é obrigatório", () => {
    cy.clickRegister();
    cy.get('.card__register').within(() => {
        cy.get('button[type="submit"]').click({force: true})
        cy.get('.input__warging').eq(2).invoke('text').should((text) => {
                expect(text, 'Campo Senha').to.eq('É campo obrigatório');
        });
    })
  })
  it("CT-009 - Campo confirmar senha é obrigatório", () => {
    cy.clickRegister();
    cy.get('.card__register').within(() => {
        cy.get('button[type="submit"]').click({force: true})
        cy.get('.input__warging').eq(3).invoke('text').should((text) => {
                expect(text, 'Campo Confirmar Senha').to.eq('É campo obrigatório');
        });
    })
  })
});
