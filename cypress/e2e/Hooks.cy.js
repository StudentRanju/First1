describe("purchase a product",()=>
{
    it('test cases',()=>
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[class*="form-control ng"]').eq(0).type('Tina');
        cy.get('[class*="form-control ng"]').eq(1).type('tia@123.gmail.com')
        cy.get('[placeholder="Password"]').type('ABC123');
        cy.get('#exampleCheck1').click();
       // cy.get('#exampleFormControlSelect1').select('Female');
        cy.get('select').select('Female');
        cy.get('[id="inlineRadio1"]').click();
        cy.get('.btn.btn-success').click();
        cy.get('[href="/angularpractice/shop"]').click();
        cy.get('.btn.btn-info').eq(1).click();
        cy.get('.nav-link.btn.btn-primary').click();
        cy.get('.btn.btn-success').click();
        cy.get('[id="country"]').type('ind');
        cy.wait(1000);
        cy.get('[class="suggestions"]> ul > li > a').eq(0).click();
        cy.get('[id="checkbox2"]').click({force: true});
        cy.get('.btn.btn-success.btn-lg').click();
        cy.contains('Success!');
    })
})