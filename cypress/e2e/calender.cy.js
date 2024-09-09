import  alertbuttons from "./PageObjects/Objectclass";
describe(' test suite', () => {
    it('handle calander', () =>
         {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('[class*="react-date-picker__calendar-button_"]').click();
        cy.get('[class*="react-calendar__navigation__label_"]').click();
        cy.get('[aria-label="August 2024"]').click();
        cy.get('[aria-label="August 30, 2024"]').click();
    })
    it('using POM',()=>
        {
        alertbuttons.visits();
        alertbuttons.Buttons1();
        alertbuttons.Buttons2();
        alertbuttons.Year();
        alertbuttons.Date();
    })
})