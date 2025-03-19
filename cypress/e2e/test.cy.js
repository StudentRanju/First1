it('Clicks on Mobile section and stores the data', () => {
  cy.visit('https://www.amazon.in/');
  cy.get('#nav-hamburger-menu').click();
  cy.contains('Mobiles').click();
  cy.get('[class="a-link-normal dcl-product-link"]').each(($el, index) => {
    cy.log("clicking on product " + index);
    cy.wrap($el).eq(index).click({ force: true });
    cy.wait(3000);
    cy.go(-1);
  });
});

it.only('Clicks on Mobile section and stores the data', () => {
  cy.visit('https://www.amazon.in/');
  cy.get('#nav-hamburger-menu').click();
  cy.contains('Mobiles').click();
  let productLinks = [];
  let productData = [];

  cy.get('[class="a-link-normal dcl-product-link"]').each(($el) => {
    const link = $el.attr('href');
    const fullLink = link.startsWith('http') ? link : `https://www.amazon.in${link}`;
    productLinks.push(fullLink);
    cy.log("Storing product link: " + fullLink);
  }).then(() => {
    productLinks.forEach((link, index) => {
      cy.log("clicking on product " + index + " with link: " + link);
      cy.visit(link);

      cy.get('[class="a-size-large a-spacing-none"]').invoke('text').then((mobileName) => {
        cy.get('[id="tp_price_block_total_price_ww"]').invoke('text').then((mobilePrice) => {

          cy.log(`Mobile Name: ${mobileName}`);
          cy.log(`Mobile Price: ${mobilePrice}`);

          productData.push({ name: mobileName, price: mobilePrice });
          cy.log("Current Product Data: " + JSON.stringify(productData));

          cy.go('back');
          cy.wait(1000);

        });
      });
    });
  });  
});
