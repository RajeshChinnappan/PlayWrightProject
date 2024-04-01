pipeline {

    stages {
        stage('Build') {
            steps {
                // Install dependencies and build Playwright project
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
    }
}