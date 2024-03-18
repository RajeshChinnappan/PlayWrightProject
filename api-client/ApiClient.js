const { expect } = require("@playwright/test");
const endpoints = JSON.parse(JSON.stringify(require("../testdata/endpoints.json")));

exports.ApiClient = class ApiClient {

    constructor(request) {
        this.request = request;
    }

    async makeRequest({ baseUrl = endpoints.baseURL, endPoint = '', data = '', responseStatus = '' }) {
        let response;
        const url = `${baseUrl}${endPoint}`;
        console.log("URL" + " " + url);
        for (const key in data) {
            const payload = data[key];
            console.log(payload);
            response = await this.request.post(url, {
                data: payload,
              headers: { "Accept": "application/json" }
            })
            expect(response.status()).toBe(responseStatus);
        }
        return response;
    }
}





