export class alertbuttons {
    static selector =
        {
            visit: "https://rahulshettyacademy.com/AutomationPractice/",
            checkbox1: "#checkBoxOption1",
            alertbutton: '#alertbtn',
            clickbutton: 'input[value="Confirm"]',
            window: 'window:alert',
            visitcalender: "https://rahulshettyacademy.com/seleniumPractise/#/offer",
            button1: '[class*="react-date-picker__calendar-button_"]',
            button2: '[class*="react-calendar__navigation__label_"]',
            year: '[aria-label="August 2024"]',
            date: '[aria-label="August 30, 2024"]',
        };
    Visited() {
        cy.visit(alertbuttons.selector.visit)
    }
    Option1() {
        cy.get(alertbuttons.selector.checkbox1).check().should('be.checked').and('have.value', 'option1');
    }
    Uncheck() {
        cy.get(alertbuttons.selector.checkbox1).uncheck().should('not.be.checked');
    }
    alert() {
        cy.get(alertbuttons.selector.alertbutton).click();
    }
    Confirm() {
        cy.get(alertbuttons.selector.clickbutton).click();
    }
    WindowAlert() {
        cy.on(alertbuttons.selector.window, str => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })
     }
    visits() {
        cy.visit(alertbuttons.selector.visitcalender);
    }
    Buttons1() {
        cy.get(alertbuttons.selector.button1).click();
    }
    Buttons2() {
        cy.get(alertbuttons.selector.button2).click();
    }
    Year() {
        cy.get(alertbuttons.selector.year).click();
    }
    Date() {
        cy.get(alertbuttons.selector.date).click();
    }
}
export default new alertbuttons();
