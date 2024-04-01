pipeline {
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            bat 'npm ci'
            bat 'npx playwright test'
         }
      }

   }

   post {
            emailext (
                to: 'recipient@example.com',
                subject: "Build ${currentBuild.fullDisplayName} Status",
                body: "Build Status",
                attachLog: true,
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            )
        }
    }


