describe('test suite', () => {
    it('handling web controls', () => {   // automated checked boxes.
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('#alertbtn').click();
        cy.get('input[value="Confirm"]').click();
        cy.on('window:alert', str => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        }
        )
        cy.on('window:confirm', str => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        }
        )
    })
    it('for alerts ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // cy.on('window:alert',function(alertText){
        //     expect(alertText).eq('Click for JS Alert');
        // })
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', str => {
            expect(str).to.equal('I am a JS Alert');
        })
        // cy.get('[onclick="jsConfirm()"]').click();
        // cy.get('[onclick="jsConfirm()"]')
    })
    it(' for confrom', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', str => {
            return false;
            //expect(str).to.equal('I am a JS Confirm');
        }
        )
    })
    it.only('for prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function ($e1) {
            cy.stub($e1, 'prompt').returns('except')
            cy.contains('Click for JS Prompt').click();
        })

    })
})