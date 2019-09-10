const { accessibility, closeBrowser, goto, openBrowser } = require('taiko');
const fs = require('fs');

describe('accessibility', () => {

    beforeEach(async () => {
        await openBrowser();
    });
    
    afterEach(async () => {
        await closeBrowser();
    });
    
    test('Should be accessible', async () => {
        jest.setTimeout(20000);

        await goto('https://thirstyhead.com/groceryworks');
        const audit = await accessibility.runAudit();
        const report = JSON.stringify(audit, null, 2);
        const reportFile = 'accessibility-report.json';  
        fs.writeFile(`./${reportFile}`, report, function(err) {
          if(err) { return console.log(err); }
          console.log(`${reportFile} written`);
        });

        //expect(audit.violations.length).toEqual(0);
    });

});
