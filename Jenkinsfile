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

                def htmlToImage = """
                    const { chromium } = require('playwright');

                    (async () => {
                        const browser = await chromium.launch();
                        const page = await browser.newPage();
                        await page.goto('${reportPath}');
                        await page.screenshot({ path: 'screenshot.png' });
                        await browser.close();
                    })();
                """
                bat "node -e \"${htmlToImage}\""
            }
           emailext(attachmentsPattern:'screenshot.png',body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
        }
}
   
    }


