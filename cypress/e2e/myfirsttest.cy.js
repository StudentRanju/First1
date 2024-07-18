//const { setup } = require("mocha")
/// <reference types="cypress"/>  
describe(' my first test', () => // test suite
{
  it('test1', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type("username")
    cy.get('input[type="password"]').type("password")
    cy.wait(3000)

    cy.get('button[type="submit"]').type("click")
    // cy.wait(3000)
    // cy.contains(p[class='oxd-text oxd-text--p orangehrm-login-forgot-header']).click()
    cy.contains('Forgot your password? ').click()
    cy.contains('OrangeHRM, Inc').click()
  })

  it('Test2', () => {
    cy.visit('https://support.lenovo.com/in/en/')
    cy.get('[class="btn btn-default myaccount"]').first().click()
    cy.get('[class="btn btn-default myaccount"]').invoke('show').first().click({ force: true, timeout: 3000 });
    // cy.get('[class="btn btn-default myaccount"]').trigger()
    //cy.get('[class="btn btn-default myaccount"]').first().click({force: true})
    cy.get('class="account-signin"').click();
  })
  it.only('test 3', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //expect(1+1).to.equal('value',2)
    // expect(1+3).not.equal.to.not.equal(2)
    // cy.wait(2000)
    cy.get('input[class="search-keyword"]').type("Ca");
    cy.wait(2000);
    // get act like as find element. // should is assertion
    cy.get('.product:visible').should('have.length', 4);
    // parents child chaining
    //cy.get('[alt ="Cauliflower - 1 Kg"]').click();
    cy.get('.products').as('productlocator') // as act like a variable.
    cy.get('@productlocator').find('.product').should('have.length', 4);
    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
    //cy.get('[alt="Cauliflower - 1 Kg"]').contains('ADD TO CART').click()
    //cy.get('input[class="search-keyword"]').clear()
    cy.get('@productlocator').find('.product').each(($e1, index, $list) => {

      const textveg = $e1.find('h4.product-name').text()
      if (textveg.includes('Cauliflower - 1 Kg')) {
        cy.wrap($e1).find('button').click() // for find method we cannot use the .click()so for that we use cy.wrap 
        // $el.contains('ADD TO CART').click()
        // we can use .contains('ADD TO CART').click()
        // cy.wrap($e1).eq(index).contains('ADD TO CART').click() 
      }
    })

    // assertions have been used here to very the text greenkart
    cy.get('.brand').should('have.text', 'GREENKART');
    //cy.get('brand greenLogo');
    cy.visit('https://www.qaclickacademy.com');

  })
})


