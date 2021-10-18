import jsPDF from 'jspdf';
import { headerDataURI, checkBox_false, checkBox_true } from './pdfImages';
import { remote } from 'electron';
const { showSaveDialog, showErrorBox } = remote.dialog
import fs from 'fs-extra';

const currency = (value) => 'R ' + (Math.round(value * 100) / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");

const noticeText = "  Should the purchaser be a company, the signatory hereto warrants and binds himself in his personal capacity by virtue\n  of his signature hereto –\ni. that he is duly authorised to sign this acceptance on behalf of the company;\nii. that the company will duly and punctually comply with its payment obligations in terms of this agreement\n"

export const generatePdf = (data, email) => {
    const doc = new jsPDF('p', 'mm', [297, 210]);

    doc.setFontSize(8);
    const margin = 14;
    const blockHeight = 7;

    const font = doc.getFont();

    let cursor = {
        x: margin,
        y: 10,
    }

    const header = () => {
        doc.addImage(headerDataURI, 'PNG', cursor.x, cursor.y, 210 - (margin * 2), 30)
        cursor.y += 34;
    }

    const section = (text, rows, config = {}) => {
        doc.setFillColor(191, 191, 191);
        doc.setFont(font.name, 'normal', 'bold')
        doc.rect(margin, cursor.y, (210 - margin * 2), blockHeight, 'DF');
        doc.text(margin + (config.headerOffset || 2), cursor.y + 4.5, text + '');
        doc.setFont(font.name, 'normal', 'normal')
        cursor.y += blockHeight;
        rows.forEach(r => row(r))
        cursor.y += 4;
    }
    const pageBreak = () => {
        doc.addPage('a4', 'p');
        cursor.y = 10;
    }
    const block = (text, width, config = {}) => {
        doc.rect(cursor.x, cursor.y, width, config.height || blockHeight, 'D');
        if (typeof text === 'string') {
            if (config.bold) doc.setFont(font.name, 'normal', 'bold')

            doc.text(
                cursor.x + (config.offsetX || 2),
                cursor.y + ((config.height / 2) || (config.twoLines ? 2.5 : 4.5)),
                text + '',
                {
                    maxWidth: width,
                    align: config.center ? 'center' : 'left'
                }
            );
            if (!!config.superScript) {
                doc.setFontSize(6);
                doc.text(
                    cursor.x + (config.offsetX || 2) + config.superScript.x,
                    cursor.y + ((config.height / 2) || (config.twoLines ? 3 : 5)) - 1,
                    config.superScript.text + ''
                );
                doc.setFontSize(8);
            }
            if (config.check) {
                checkbox(text === config.check.match, config.check.offsetX)
            }
            if (config.bold) doc.setFont(font.name, 'normal', 'normal')
        }
        if (typeof text === 'boolean') {
            checkbox(text);
        }
        cursor.x += width;
    }
    const row = (blocks) => {
        const width = 210 - (margin * 2)
        let remainingWidth = width;
        let height = blockHeight;
        blocks.forEach((b, i) => {
            if (b[2]?.height) height = b[2].height;
            if (i === blocks.length - 1) {
                block(b[0], remainingWidth, b[2]);
            } else {
                remainingWidth = remainingWidth - b[1];
                block(...b);
            }
        })
        cursor.y += height;
        cursor.x = margin;
    }
    const quoteProductRow = (code, descriptonBlock) => [
        [code, 36, { offsetX: 11 }], descriptonBlock, [currency(data[`quote-${code}-quantity`]), 23],
        [currency(data[`quote-${code}-unit-price`]), 37], [currency(data[`quote-${code}-total`]), 23]
    ]
    const notice = () => {
        cursor.y += 4;
        doc.setFontSize(6);
        doc.text(margin + 3, cursor.y - 1, '1', { lineHeightFactor: 1.7 })
        doc.setFontSize(8);
        doc.text(margin + 3, cursor.y, noticeText, { lineHeightFactor: 1.7 })
        cursor.y += 25
    }
    const checkbox = (checked, offsetX = 0) => {
        doc.addImage(checked ? checkBox_true : checkBox_false, 'PNG', cursor.x + 1.5 + (offsetX), cursor.y + 1.5, 4, 4);
    }

    header()

    section("TOUCH OZONE (PTY) LTD CUSTOMER REGISTRATION AND SALES ORDER PROCESS", [
        [["Existing customer", 39], [data.existingCustomer, 18], ["Search", 35], [data.customer, 89]],
        [["Authorized agent", 39], [data.authorizingAgent, 53], ["Cell number", 38], [data.cellNo, 52]],
    ], { headerOffset: 25 })

    section("CUSTOMER REGISTERED DETAILS", [
        [
            ["(Pty) Ltd", 22, { check: { match: data.companyType, offsetX: 13 } }],
            ["Ltd", 18, { check: { match: data.companyType, offsetX: 7 } }], ["P/Ship", 20, { check: { match: data.companyType, offsetX: 10 } }],
            ["CC", 15, { check: { match: data.companyType, offsetX: 6 } }], ["Sole Prop", 25, { check: { match: data.companyType, offsetX: 15 } }],
            ["Trust", 21, { check: { match: data.companyType, offsetX: 10 } }], ["Ass", 20, { check: { match: data.companyType, offsetX: 8 } }],
            ["Other", 20, { check: { match: data.companyType, offsetX: 10 } }], ["Gov", 20, { check: { match: data.companyType, offsetX: 8 } }]
        ],
        [["Registered Name", 50], [data.registeredName, 130]],
        [["Registration Number", 50], [data.registrationNumber, 44], ["VAT Number", 24], [data.vatNo, 31], ["Non-VAT", 26]],
        [["Trading Name / Division / Department", 50], [data.tradingName, 130]],
        [["Holding Company (if applicable)", 50], [data.holdingCompany, 75], ["Listed", 19], ["Y", 17, { check: { match: data.holdingCompanyListed, offsetX: 4 } }], ["N", 17, { check: { match: data.holdingCompanyListed, offsetX: 4 } }]],
        [["Registration Number", 50], [data.registrationNumber, 130]],
        [["Can our CEO contact you to obtain your latest audited financial results?", 144], ["Y", 17, { check: { match: data.canContact, offsetX: 4 } }], ["N", 17, { check: { match: data.canContact, offsetX: 4 } }]],
        [["Contact Person", 29], ["Initials", 15], [data.initials, 15], ["Surname", 17], [data.surname, 46], ["Telephone\nNo", 20, { twoLines: true }], [data.telNo, 40]],
    ])

    section("CUSTOMER CONTACT DETAILS", [
        [["Physical Address", 42], [data.physicalAddress, 140]],
        [["Code", 42], [data.physicalCode, 140]],
        [["Postal Address same as above", 73], ["Y", 54, { check: { match: data.postalSameAsAbove, offsetX: 4 } }], ["N", 54, { check: { match: data.postalSameAsAbove, offsetX: 4 } }]],
        [["(If no, please complete)", 42], [data.postalAddress, 140]],
        [["Code", 42], [data.postalCode, 140]],
        [["Telephone No", 42], [data.telephoneNo, 52], ["Email address", 35], [data.customerEmail, 54]],
        [["Website", 42], [data.website, 140]],
    ])

    section("BANKING DETAILS", [
        [["Bank", 29], ["Std Bank", 21], [data.bank === "Std Bank", 25], ["FNB", 11], [data.bank === "FNB", 26], ["ABSA", 15], [data.bank === "ABSA", 22], ["Nedbank", 20], [data.bank === "Nedbank", 15]],
        [["Other", 29], [data.otherBank, 140]],
        [["Branch Name", 29], [data.branchName, 55], ["Account Type", 40], [data.accountType, 55]],
        [["Account No", 29], [data.accountNo, 55], ["Account Holder", 40], [data.accountHolder, 55]],
        [["Date Opened", 29], ["Month", 14], [data.dateOpenedMonth, 41], ["Year", 14], [data.dateOpenedYear, 42]],
    ])

    section("CUSTOMER CONTACTS", [
        [["Position", 45], ["Name", 45], ["Telephone", 45], ["Email address", 45]],
        [["Operations (COO)", 45], [data['customerContact-operations-name'], 45], [data['customerContact-operations-telephone'], 45], [data['customerContact-operations-email'], 45]],
        [["SCM - Buyer", 45], [data['customerContact-scmBuyer-name'], 45], [data['customerContact-scmBuyer-telephone'], 45], [data['customerContact-scmBuyer-email'], 45]],
        [["Finance - Creditors", 45], [data['customerContact-financeCreditors-name'], 45], [data['customerContact-financeCreditors-telephone'], 45], [data['customerContact-financeCreditors-email'], 45]],
        [["HR - Health/Compliance", 45], [data['customerContact-HR-name'], 45], [data['customerContact-HR-telephone'], 45], [data['customerContact-HR-email'], 45]],
    ])

    pageBreak();

    section("CUSTOMER QUOTATION / ORDER", [
        [["Part Code", 36, { bold: true, offsetX: 10 }], ["Master Product Description", 52, { bold: true, offsetX: 7 }],
        ["Qty", 23, { bold: true, offsetX: 9 }], ["Unit Price", 37, { bold: true, offsetX: 11 }],
        ["Total", 37, { bold: true, offsetX: 13 }]],
        quoteProductRow('SKU 001', ['Phone and laptop', 52, { offsetX: 15.5 }]),
        quoteProductRow('SKU 002', ['White Office (Boxed', 52, { offsetX: 14 }]),
        quoteProductRow('SKU 003', ['Hand (No box)', 52, { offsetX: 16 }]),
        quoteProductRow('SKU 004', ['Countertop (No box)', 52, { offsetX: 13 }]),
        quoteProductRow('SKU 005', ['Door (No box)', 52, { offsetX: 17 }]),
        quoteProductRow('SKU 007', ['Shoe insert', 52, { offsetX: 18 }]),
        quoteProductRow('SKU 012', ['Small door/trolley handle sticker', 52, { offsetX: 25, center: true }]),
        quoteProductRow('SKU 013', ['Large door/trolley handle sticker', 52, { offsetX: 25, center: true }]),
        [["VAT (if applicable)", 148, { bold: true, offsetX: 60 }], [currency(data['quote-vat']), 37]],
        [["TOTAL - Including Shipping", 148, { bold: true, offsetX: 53 }], [currency(data['quote-total']), 37]],
    ])

    section("CUSTOMER DELIVERY ADDRESS FOR THIS ORDER", [
        [["Building", 46], [data.building, 138]],
        [["Street", 46], [data.street, 138]],
        [["Suburb", 46], [data.suburb, 138]],
        [["City", 46], [data.city, 70], ["Code", 21], [data.code, 40]],
        [["Contact Person", 46], [data.contactPerson, 70], ["Cell No", 21], [data.cell, 40]],
    ])

    section("CUSTOMER ACCEPTANCE", [
        [["Signature", 55, { height: 15 }], ["", 130, { height: 15 }]],
        [["Name", 55], [data.name, 130]],
        [["Authority/Designation", 55, { superScript: { text: '1', x: 27 } }], [data.authorityDesignation, 130]],
        [["Date", 55], [data.acceptanceDate, 130]],
        [["Official Order Number", 55], [data.orderNumber, 130]],
    ])

    notice()

    section("CONFIRMATION OF RECIEPT OF ORDER", [
        [["Touch Ozone Reference Number", 90], [data.refNo, 90]]
    ])

    if (email) {
        // const pdfBase64 = doc.output('datauristring');
        // window.plugin.email.open({
        //     to: [''],
        //     subject: '',
        //     body: '',
        //     isHTML: false,
        //     attachments: [pdfBase64]
        // });
    } else {
        const options = {
            title: "Save as PDF",
            defaultPath: `Agent Pricing - ${data.refNo}.pdf`,
            buttonLabel: "Save",

            filters: [
                { name: 'pdf', extensions: ['pdf'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        };
        showSaveDialog(null, options).then(({ filePath }) => {
            const pdf = doc.output('arraybuffer');
            fs.writeFile(filePath, Buffer.from(pdf), null, (err) => {
                if (err) {
                    showErrorBox("An error occurred while saving PDF", `
                        Please ensure that no antivirus software is blocking this app.
                        \n
                        Error: ${error}
                    `)
                };
            })
            // doc.save(filePath, { returnPromise: true }).then(null, error => {
            //     alert("An error occurred while saving PDF")
            //     console.log(error)
            // });
        });
    }

}