exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async launchApp() {
        await this.page.goto("");
    }

    async loginToApplication(username, password) {
        await this.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}
