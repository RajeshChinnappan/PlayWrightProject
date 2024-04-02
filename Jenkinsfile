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
         bat "zip -r allure-report.zip allure-report"
      }
           emailext(attachmentsPattern:'allure-report.zip',body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }
}
   
    }


