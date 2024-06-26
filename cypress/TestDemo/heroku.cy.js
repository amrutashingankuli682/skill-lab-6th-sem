///<reference types='Cypress'/>
///<reference types='@cypress/xpath'/>
describe('Heroku', ()=>{
  it('Heroku login',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('input("#username")').type('tosmith')
    cy.get('input("#password")').type('tosmith')
    cy.get("button[@type='submit']").click()
    cy.xpath('//a[@href="/logout"]').click()
    
  });
});