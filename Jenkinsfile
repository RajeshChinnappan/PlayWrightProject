pipeline {
    agent any

    stages {
        stage('Install Playwright') {
            steps {
                // Install dependencies and build Playwright project
                sh 'npx playwright install'
            }
        }
        stage('test') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
    }
}
