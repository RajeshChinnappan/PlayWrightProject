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
   always {
                script {
                def reportPath = "${WORKSPACE}/playwright-report/index.html"
                echo "HTML report path: ${reportPath}"

            }
           emailext(body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }
}
   
    }


