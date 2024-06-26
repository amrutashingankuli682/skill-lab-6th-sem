// ///<reference types='Cypress'/>
// ///<reference types='@cypress/xpath'/>
// describe('Automation test store testsuit', () => {
//   it('Contact-Us', () => {
//       cy.visit('https://automationteststore.com/')
//       cy.xpath('//*[text()="Contact Us"])[2]').click()
//       cy.get('#ContactUsFrm_first_name").type("amruta").should('have.value','amruta')
//       cy.get('#ContactUsFrm_email").type("Cypress training is going on")
//       cy.xpath("//button[@title='Submit']").click()
//       cy.xpath('')

//   });
// });


///<reference types='Cypress'/>
///<reference types='@cypress/xpath'/>


describe('automationtest', () => {
  it('contactus', () => {
      cy.visit('https://automationteststore.com/')
      cy.xpath('(//*[text()="Contact Us"])[2]').click()
      cy.get('#ContactUsFrm_first_name').type('amruta').should('have.value','amruta')
      cy.get('#ContactUsFrm_email').type('shingankuliamruta@gmail.com').should('have.attr','name')
      cy.get('#ContactUsFrm_enquiry').type('cypress trining is going on')

      cy.xpath("//button[@title='Submit']").click()
      cy.xpath("//*[contains(text(),'successfully')]").should('have.text',"Your enquiry has been successfully sent to the store owner!")

      cy.log("test completed and registered")
  });
});