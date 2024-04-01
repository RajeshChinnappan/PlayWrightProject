pipeline {
    agent any

    stages {
        stage('Install Playwright') {
            steps {
                // Install dependencies and build Playwright project
                bat 'npx playwright install'
            }
        }
        stage('test') {
            steps {
                // Run Playwright tests
                bat 'npx playwright test'
            }
        }
    }
}
