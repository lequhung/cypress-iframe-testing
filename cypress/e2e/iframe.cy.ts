describe('iframe', () => {
  it('should check if https://google.com.au can be iframed', () => {
    cy.visit('http://localhost:3000');
    
    cy
      .getIframe('iframe')
      .find('input#url-search').type('https://google.com.au');
    cy 
      .getIframe('iframe')
      .find('button').click();

    // getting nested iframe
    cy.get("iframe")
      .its('0.contentDocument.body')
      .find("iframe#iframe-window")
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .find('img[alt="Google"]')
      .should('be.visible');
  });
});