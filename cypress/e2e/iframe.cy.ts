describe('iframe', () => {
  it('should check if a page can be iframed', () => {
    cy.visit('http://localhost:3000');
    
    cy
      .getIframe('iframe')
      .find('input#url-search').type('https://google.com.au');
    cy 
      .getIframe('iframe')
      .find('button').click();
    cy
      .getIframe('iframe')
      .find('#sub-frame-error-details').should('not.exist')
  });
});