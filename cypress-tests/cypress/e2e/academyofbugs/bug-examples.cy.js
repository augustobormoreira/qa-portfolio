describe("academyofbugs-bug_examples", () => {
  it("CT-001 — Clicar no botão de Social Media deve abrir uma página daquela Social Media para poder compartilhar o post", () => {
    cy.visit("https://academybugs.com/articles/");
    cy.get("#square-share-a1").click();
    cy.url().should("not.eq", "https://academybugs.com/articles/");
  });

  it("CT-002 — Formulário deve exibir mensagem de sucesso ao clicar no botão Enviar", () => {
    cy.visit("https://academybugs.com/contact-us-form/");
    cy.get("#first_name").type("john");
    cy.get('input[name="last_name"]').type("jonzz");
    cy.get('input[name="email"]').type("jjonzz@email.com");
    cy.get('input[name="subject"]').type("concern regarding testing");
    cy.get("#input-message").type("concern regarding testing");
    cy.get("#submit-contact-form").click();

    cy.get("#wpforms-confirmation-1122").should(
      "not.contain.text",
      "Oops! Something went wrong.",
    );
  });

  it("CT-003 — Todos os 4 vídeos devem executar normalmente quando o Usuário clicar no botão de Play", () => {
    cy.visit("https://academybugs.com/latest-news/");

    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("unknown error has occurred")) {
        return false;
      }
    });

    //first video player
    cy.get('.svp_player').eq(0).find('button[data-plyr="play"]').first().click()
    cy.get('.svp_player').eq(0).find('video').should('have.prop', 'paused', false)

    // second video player
    cy.get('.svp_player').eq(1).find('button[data-plyr="play"]').first().click()
    cy.get('.svp_player').eq(1).find('video').should('have.prop', 'paused', false)

    // third video player
    cy.get('.svp_player').eq(2).find('button[data-plyr="play"]').first().click()
    cy.get('.svp_player').eq(2).find('video').should('have.prop', 'paused', false)

    // fourth video player
    cy.get('.svp_player').eq(3).find('button[data-plyr="play"]').first().click()
    cy.get('.svp_player').eq(3).find('video').should('have.prop', 'paused', false)


  });

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-86').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-84').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-82').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-80').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-78').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-76').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-74').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it("CT-004 — Todos os 7 artigos devem exibir mais informações ao clicar em 'Read More'", () => {
    cy.visit('https://academybugs.com/articles/');
    cy.get('#post-59').find('div.entry-readmore a').click();

    cy.get('h3.sq-main-title').should('not.contain', '404 Error');
  })

  it.only("should find results after typing in search bar and clicking search button", () => {
    cy.visit('https://academybugs.com/store/dnk-yellow-shoes/');

    cy.get('h1.ec_details_title').invoke('text').then((text) => cy.get('input[name="ec_search"]').type(text));
    cy.get('div.ec_search_widget').find('input').last().click();

    cy.contains('h3.sq-main-title').should('not.exist', '404 Error');
  })

});
