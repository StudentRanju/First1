describe('test suite', () => {
  it('handling web controls', () => {   // automated checked boxes.
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    //  cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
    // static dropdown 
    cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
    // dynamic dropdown
    cy.get('input#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      const t1 = $el.text();
      if (t1 == "India") {
        $el.click();
      }
    })
    cy.get('input#autocomplete').should('have.value', "India");
    // visiblilites
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    // radio buttons
    cy.get('[value="radio2"]').check().should('be.checked').and('have.value', 'radio2');
    cy.get('[value="radio2"]').click();
    cy.get('[value="radio2"],[value="radio2"]');
  })
})