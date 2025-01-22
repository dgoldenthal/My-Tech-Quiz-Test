# Tech Quiz Application

A full-stack MERN application that allows users to test their technical knowledge through an interactive quiz interface. Built with React, MongoDB, Express.js, and Node.js, featuring comprehensive testing with Cypress.

## Links

- [View Tech Quiz Walkthrough Video](https://youtu.be/pHXyQIACl0g)
- [GitHub Repository](https://github.com/dgoldenthal/My-Tech-Quiz-Test)

## Features

- Random quiz questions from a MongoDB database
- Interactive quiz interface with multiple-choice questions
- Immediate feedback on answers
- Score tracking
- Option to restart quiz
- Comprehensive test suite using Cypress

## Application Demo

The walkthrough video demonstrates:
- Application setup and installation
- Running the development environment
- Component testing with Cypress
- End-to-end testing with Cypress
- Complete quiz functionality
- Database seeding and configuration

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Testing**: Cypress (Component & E2E Testing)
- **Other**: TypeScript, Concurrently, Wait-on

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dgoldenthal/My-Tech-Quiz-Test.git
cd My-Tech-Quiz-Test
```

2. Install dependencies:
```bash
npm run install:all
```

3. Set up environment variables:
```bash
cd server
cp .env.EXAMPLE .env
```
Edit `.env` with your MongoDB connection string.

4. Seed the database:
```bash
npm run seed
```

### Running the Application

1. Start the development server:
```bash
npm run start:dev
```

2. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Testing

This application includes both component and end-to-end tests using Cypress.

### Running Tests

- Run all tests:
```bash
npm test
```

- Run component tests only:
```bash
npm run test:component
```

- Run E2E tests only:
```bash
npm run test:e2e
```

- Open Cypress interactive mode:
```bash
npm run cy:open
```

## Project Structure

```
.
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── models/        # TypeScript interfaces
│   │   └── services/      # API services
│   └── package.json
├── cypress/               # Cypress tests
│   ├── component/         # Component tests
│   ├── e2e/              # End-to-end tests
│   ├── fixtures/         # Test fixtures
│   ├── support/          # Test support files
│   │   ├── component.ts  # Component test configuration
│   │   ├── component-index.html  # Component test template
│   │   ├── commands.ts   # Custom commands
│   │   └── e2e.ts       # E2E test configuration
│   └── tsconfig.json     # TypeScript config for tests
├── server/               # Express backend
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   └── seeds/        # Database seeds
│   └── package.json
├── package.json          # Root package.json
├── cypress.config.ts     # Cypress configuration
└── tsconfig.json        # Root TypeScript configuration
```

## API Endpoints

- `GET /api/questions/random`: Retrieves a set of random questions

## User Stories

```
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
```

### Acceptance Criteria

```
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the `package.json` file for details.
