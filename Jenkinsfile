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
           emailext(body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }

   
    }


