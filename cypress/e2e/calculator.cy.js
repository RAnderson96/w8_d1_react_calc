describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should show result of aritmatic', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  it('should show result of aritmatic', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  it('should be able to chain multiple operators', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click()
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })

  it('should be able to show negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-subtract').click()
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-10');
  })
  
  it('should show result of Error if infinite number', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    
    cy.get('.display').should('contain','Error');
    
  })






})