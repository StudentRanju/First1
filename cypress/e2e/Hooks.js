describe("hooks",()=>
{
    it('test cases',()=>
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('[class*="form-control ng"]').eq(0).type('Tina');
        cy.get('[class*="form-control ng"]').eq(1).type('tia@123.gmail.com')
        cy.get('[placeholder="Password"]').type('ABC123');
        cy.get('#exampleCheck1').click();
        cy.get('#exampleFormControlSelect1').select('Female');
        cy.get('[id="inlineRadio1"]').click();
        cy.get('.btn.btn-success').click();
        cy.get('[href="/angularpractice/shop"]').click();
    })
})