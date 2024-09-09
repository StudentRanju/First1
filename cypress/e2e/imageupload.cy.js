import 'cypress-file-upload';
describe('File Upload Test', () => {
  it('Uploads a photo', () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#file-upload').selectFile('C:\\Users\\RanjuYadav\\Desktop\\cypress\\cypress\\fixtures\\image.png')
  });
  it.skip('upload photo using fixture ', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.fixture('image.png').then(fileContent => {
      cy.get('#file-upload').selectFile('C:\Users\RanjuYadav\Desktop\cypress\cypress\fixtures\image.png')
      // cy.get('#file-upload').attachFile({
      //   fileContent: fileContent,
      //   fileName: 'image.png',
      //   mimeType: 'image/png'
      // });
    });
  })
});


