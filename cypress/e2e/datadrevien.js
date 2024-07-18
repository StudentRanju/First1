describe('test suite', () => {
    it('datadrevientest', () => {
        cy.fixture("datas1.json").then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userdata) => {
                cy.get('input[name="username"]').type(userdata.username);
                cy.get('input[type="password"]').type(userdata.password);
                // cy.wait(3000)
                cy.get('button[type="submit"]').type("click");
                if (userdata.username == "Admin" && userdata.password == "admin123") {
                    cy.get('[class*="oxd-text oxd-text--h6 oxd-topbar"]').should('have.text', userdata.expected);
                    cy.get('.oxd-userdropdown-tab').click();
                    cy.get('.oxd-userdropdown-link').eq(3).click()

                    // cy.get('.oxd-userdropdown-link').last().click()
                    // cy.get('.oxd-userdropdown-link').each(($el, $index, $list) =>
                    // {
                    //   if($el.eq($index).text() == Logout)
                    //     {
                    //     cy.wrap($el.eq($index)).click()
                    //     }
                    // })
                } else {
                    cy.get('[class*="oxd-text oxd-text--p oxd-alert-"]').should('have.text', userdata.expected);
                }
            })
        });
    })
})