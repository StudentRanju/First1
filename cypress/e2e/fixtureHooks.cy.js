/// < reference type = "cypress"/>
describe('fixture and hooks',()=>
{
    before(function(){
        // runs once befor all it block 
        cy.fixture('data11').then(function(data)
    {
    this.data=data
    })
    it (" test suite",()=>
    {
      cy.visit('https://rahulshettyacademy.com/angularpractice/');
      cy.get('[class*="form-control ng"]').eq(0).type(this.data.name);
      cy.get('select').select(this.select);
      
    })
     })
    })