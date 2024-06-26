///<reference types='Cypress'/>
///<reference types='@cypress/xpath'/>

describe('Orangehrm', () => {
  it('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.xpath('//input[@name"username"]').type('Admin')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()

  });
});








// describe('OrangeHrm', ()=>{
//   it('login',()=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')
//     cy.get('button[name="submit"]').click
    
//   });
// });