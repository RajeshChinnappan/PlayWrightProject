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
                to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com',
                subject: "Build ${currentBuild.fullDisplayName} Status",
                body: "Build Status",
                attachLog: true,
            )
        }
    }


