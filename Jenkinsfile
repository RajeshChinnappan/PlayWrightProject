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
   always{
      script {
         allure ([
            includeProperties: false, jdk: '', results: [[path: 'allure-results']]
         ])
      }
           emailext(attachmentsPattern:'allure-report',body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }
}
   
    }


