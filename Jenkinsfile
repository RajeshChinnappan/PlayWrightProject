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
   success{
           emailext(body: '${FILE,path="playwright-report/index.html"}', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }
}
   
    }


