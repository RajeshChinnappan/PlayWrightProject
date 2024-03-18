const { test, expect } = require("@playwright/test");
const ExcelJS = require('exceljs');
exports.CommonMethodsPage = class CommonMethodsPage {


    static getRandomNumber() {
        const maxNumber = 1000000;
        return Math.floor(Math.random() * maxNumber);
    }

    static getCurrentMonth() {
        const date = new Date();
        return date.getMonth();
    }

    static getCurrentYear() {
        const date = new Date();
        return date.getFullYear();
    }

    static getCurrentDate() {
        const date = new Date();
        console.log(date);
        return date.getDate();
    }

    static async readCellValueByHeader(data) {
        const fileName = "testdata/testdata.xlsx";
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(fileName);
        const worksheet = workbook.getWorksheet(data.sheetName);
        const headerRow = worksheet.getRow(1);
        const columnIndex = headerRow.values.findIndex((value) => value === data.header);
        if (columnIndex === 0) {
            throw new Error(`Header '${data.header}' not found in the Excel file.`);
        }
        const cell = worksheet.getCell(2, columnIndex);
        const value = cell.value;
        return value;
    }
    
}
