import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component', () => {
  beforeEach(() => {
    // Load mock data from fixture
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions')
    cy.mount(<Quiz />)
  })

  it('should render start button initially', () => {
    cy.get('button')
      .contains('Start Quiz')
      .should('be.visible')
  })

  it('should start quiz and display first question', () => {
    cy.get('button').contains('Start Quiz').click()
    cy.wait('@getQuestions')

    // Verify question display
    cy.get('h2').should('exist')
    
    // Verify numbered answer buttons (1-4)
    cy.get('button').contains('1').should('exist')
    cy.get('button').contains('2').should('exist')
    cy.get('button').contains('3').should('exist')
    cy.get('button').contains('4').should('exist')
  })

  it('should complete quiz and show score', () => {
    cy.get('button').contains('Start Quiz').click()
    cy.wait('@getQuestions')

    // Answer all questions (clicking first answer for each)
    cy.get('button').contains('1').click()
    cy.get('button').contains('1').click()

    // Verify completion screen
    cy.contains('Quiz Completed').should('be.visible')
    cy.contains('Your score:').should('be.visible')
    cy.get('button').contains('Take New Quiz').should('be.visible')
  })

  it('should start new quiz after completion', () => {
    cy.get('button').contains('Start Quiz').click()
    cy.wait('@getQuestions')

    // Complete quiz
    cy.get('button').contains('1').click()
    cy.get('button').contains('1').click()

    // Start new quiz
    cy.get('button').contains('Take New Quiz').click()
    cy.wait('@getQuestions')

    // Verify back to questions
    cy.get('button').contains('1').should('exist')
  })
})