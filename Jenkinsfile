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
         def allureReportUrl = '$BUILD_URL+allure'
         allure ([
            includeProperties: false, jdk: '', results: [[path: 'buildallure-results']]
            
         ])
          emailext(body: 'PLease find the Allure report at: ${allureReportUrl}', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
      }
          
        }
}
   
    }


