export class webPage 
{
     static Selectors =
   {
    visit: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    username: 'input[name="username"]',
    password: 'input[type="password"]',
    submit: 'button[type="submit"]',
    assert: '[class*="oxd-text oxd-text--h"]',
    
};
visited() {
  cy.visit(webPage.Selectors.visit);
}
username() {
  cy.get(webPage.Selectors.username).type("Adin");
}
 password() {
  cy.get(webPage.Selectors.password).type("adin123"); 
}
submit() {
  cy.get(webPage.Selectors.submit).click(); 
}
Assertion() 
{
cy.get(webPage.Selectors.assert).should('have.text', 'Dashboard');
}
}
export default new webPage()





 
  