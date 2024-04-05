pipeline {
   agent any
  stages {
      stage('e2e-tests') {
         steps {
           bat 'npm ci'
         //   bat 'npx playwright test'
         }
       }
  }

post {
   always{
      script {

         // allure ([
         //    includeProperties: false, jdk: '', results: [[path: 'allure-results']]   
         // ])
         def reportPath = "C:\\Users\\rajesh.c\\.jenkins\\workspace\\PlaywrightProjectEndToEndTesting\\playwright-report\\index.html";
      // def html_body = bat(script: "type C:\\Users\\rajesh.c\\.jenkins\\workspace\\PlaywrightProjectEndToEndTesting\\playwright-report\\index.html", returnStdout: true).trim()
         echo reportPath
      // emailext(subject: "Subject",to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com',mimeType: 'text/html',body: "${html_body}")
        // echo html_body
         // emailext(attachmentsPattern:'playwright-report/index.html',body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
      }
          
        }

}
    

}
