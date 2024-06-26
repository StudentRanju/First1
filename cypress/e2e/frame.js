  
 import 'cypress-iframe'  // package 

describe('test suite',()=>
{
    it(' handling frame in cypress ',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // its a method for get the frame
        cy.frameLoaded('#courses-iframe') // its a method use to load the frame in cypress 
        // to switch into the iframe mode 
         cy.iframe('#courses-iframe').find('a[href="mentorship"]').eq(0).click(); // it will switch to the iframe in cypress 
        // cy.iframe().find('[class="inner-box"] h1').should('have.text', 'Mentorship');

    })
}) 