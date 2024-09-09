
describe("SEO",()=> {
    it('performance',()=>{
        cy.visit("https://bayone.com/");
        cy.lighthouse();
    });
});