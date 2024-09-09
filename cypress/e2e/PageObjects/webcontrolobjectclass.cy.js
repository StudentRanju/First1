export class webcontrol 
{
    static selector =
    {
    visit: "https://rahulshettyacademy.com/AutomationPractice/",
    checkbox1: "#checkBoxOption1",
    checkbox: 'input[type="checkbox"]',
    dropdown: "#dropdown-class-example",
    autocomplete: 'input#autocomplete',
    state: '.ui-menu-item div',
    };
    Visited()
    {
     cy.visit(webcontrol.selector.visit)
    }
    CheckBox1()
    {
        cy.get(webcontrol.selector.checkbox1).check().should('be.checked').and('have.value', 'option1');
    }
    UncheckBox1()
    {
        cy.get(webcontrol.selector.checkbox1).uncheck().should('not.be.checked');
    }
    CheckBox(){
    cy.get(webcontrol.selector.checkbox).check(['option2', 'option3']);
    }
    Dropdown()
    {
        cy.get(webcontrol.selector.dropdown).select('option3').should('have.value', 'option3')
    }
    Autocomplete()
    {
        cy.get(webcontrol.selector.autocomplete).type('ind')
    }
    State()
    {
        cy.get(webcontrol.selector.state).each(($el, index, $list) => {
            const t1 = $el.text();
            if (t1 == "India") {
              $el.click();
            }
    })
    }
    Assertion()
    {
    cy.get(webcontrol.selector.autocomplete).should('have.value', "India");
    }
}
export default new webcontrol()