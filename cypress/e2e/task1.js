
describe('my first task', () => {
    it('tast1', () => {
        cy.visit('https://www.youtube.com/');
        cy.get('[name="search_query"]').type("cypress").click();
        cy.get('[name="search_query"]').type('{enter}');
        cy.get('.style-scope yt-formatted-string').contains('Learn Cypress in 3 Hours').click();
        // cy.scrollTo('top');
        //cy.get('a[aria-label="Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation | LambdaTest by LambdaTest 206,835 views 2 years ago 3 hours, 2 minutes"]').scrollIntoView();
        //cy.get('ytd-browse[class="style-scope ytd-page-manager"]').invoke('scrollTo', 'top');
        cy.get('.YtSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper').find('.YtLikeButtonViewModelHost')
        cy.first();
        //cy.get('[class="yt-spec-button-shape-next__button-text-content"]').invoke('1.7k');
        //cy.get('[class="yt-spec-button-shape-next__button-text-content"]').should('have.class', 'active');
        // cy.get('#top-level-buttons-computed')
    })
})