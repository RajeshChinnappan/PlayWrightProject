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
           emailext(attachmentsPattern:'http://localhost:8080/job/PlayWrightEndToEndTesting/ws/allure-report/index.html',body: '''${SCRIPT, template="allure-report.groovy"}''', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }
}
   
    }


