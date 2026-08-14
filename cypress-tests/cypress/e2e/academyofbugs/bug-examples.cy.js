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

  it.only("all videos should play", () => {
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
});
