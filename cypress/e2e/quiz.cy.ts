describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should complete full quiz flow', () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').click()

    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      // Wait for question to be visible
      cy.get('h2').should('be.visible')
      
      // Click first answer for each question
      cy.get('button').contains('1').click()
    }

    // Verify completion screen
    cy.contains('Quiz Completed').should('be.visible')
    cy.contains('Your score:').should('be.visible')
    cy.get('button').contains('Take New Quiz').should('be.visible')
  })

  it('should allow starting a new quiz after completion', () => {
    // Start and complete quiz
    cy.get('button').contains('Start Quiz').click()
    
    // Answer all questions quickly
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click()
    }

    // Start new quiz
    cy.get('button').contains('Take New Quiz').click()

    // Verify new quiz started
    cy.get('h2').should('be.visible')
    cy.get('button').contains('1').should('be.visible')
  })

  it('should display score correctly', () => {
    cy.get('button').contains('Start Quiz').click()

    // Answer all questions
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('2').click() // Always choosing option 2
    }

    // Verify score format
    cy.contains(/Your score: \d+\/10/).should('be.visible')
  })

  it('should render each question with 4 numbered options', () => {
    cy.get('button').contains('Start Quiz').click()

    // Verify first question structure
    cy.get('h2').should('be.visible') // Question text
    cy.get('button').contains('1').should('be.visible')
    cy.get('button').contains('2').should('be.visible')
    cy.get('button').contains('3').should('be.visible')
    cy.get('button').contains('4').should('be.visible')
  })
})