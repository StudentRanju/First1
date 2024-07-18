describe('test suite', () => {
    it('handling childtad with the each', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.table-display tr td:nth-child(2)').each(($e1, index, list) => {
            const text = $e1.text();
            if (text.includes('python')) {
                cy.get('.table-display tr:nth-child(8) td:nth-child(3)').then((text) => {
                    expect(text).to.equal('25')
                })
            }
        })

    })
})
