describe('login', () => {

  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
  })

  it('CT-001 — Não preencher Login e Senha deve mostrar que os dois são campos obrigatórios', () => {
    cy.get('.login__buttons').within(() => {
      cy.get('button[type="submit"]').click();
    });
    cy.contains(/é campo obrigatório/i);
  })

  it('CT-002 — Tentativa de acesso sem preencher campos obrigatórios deve exibir a mensagem "Usuário e senha precisam ser preenchidos"', () => {
    cy.get('.login__buttons').within(() => {
      cy.get('button[type="submit"]').click();
    });
    cy.contains(/Usuário e senha precisam ser preenchidos/i);
  }) 

  it('CT-003 — Não deve autorizar o acesso para usuários inválidos ou não cadastrados', () => {
    cy.get('.card__login').within(() => {
      // Invalid User
      cy.get('input[type="email"]').type('test')
      cy.get('input[type="password"]').type('test')
      cy.get('button[type="submit"]').click()
      cy.contains(/formato inválido./i)

      //Not registered user
      cy.get('input[type="email"]').type('test@gmail.com')
      cy.get('button[type="submit"]').click()
    })
    cy.get('#modalText').contains('Usuário ou senha inválido');
  })

  it('CT-004 — Registro de novo usuário', () => {

    //Registering user
    cy.registerUser('ctest@test.com', 'C. Test', 'test')

    //Check if user got registered
    cy.get('#modalText').contains("sucesso")

    //Check if redirected to /home page
    cy.get('#btnCloseModal').click()
    cy.url().should('include', 'home')


  })

  it('CT-005 — Acesso de Usuário existente', () => {

    cy.registerUser('ctest@test.com', 'C. Test', 'test')

    cy.get('#btnCloseModal').click()

    //Login previous registered user
    cy.get('.card__login').within(() => {
      cy.get('input[name="email"]').type("ctest@test.com")
      cy.get('input[name="password"]').type('test')
      cy.get('button[type="submit"]').click()
    })

    cy.url().should('include', 'home')
  })


})