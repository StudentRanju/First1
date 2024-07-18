

// direct access the fixture file
  describe('my test suite',()=>   {
    /*
          it('test',()=> 
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.fixture('datas').then((data)=>{
        
            cy.get('input[name="username"]').type(data.user);
            cy.wait(3000)
            cy.get('input[type="password"]').type(data.password);
            cy.wait(3000)
            cy.get('button[type="submit"]').type("click");
            cy.get('[class*="oxd-text oxd-text--h6 oxd-topbar"]').should('have.text',data.expected);
        })
     }) */

           ////Access through the hook  for multiple it block 

        let userdata;
        before(()=> {  // block
            cy.fixture('datas').then((data)=>{
                userdata = data  // loaded the fixture file
        })
    })
    it('fixturetest',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type(userdata.user);
        cy.get('input[type="password"]').type(userdata.password);
        cy.wait(3000)
        cy.get('button[type="submit"]').type("click");
        cy.get('[class*="oxd-text oxd-text--h6 oxd-topbar"]').should('have.text',userdata.expected);
        })
        it('multiuser',()=>
        {
            cy.visit( "https://app.hubspot.com/login");
            cy.contains('Decline all').click();
            cy.get('#username').type(userdata.user);
            cy.get('#password').type(userdata.password);
            cy.contains('Sign up').click();
        })
    })


  