const path = require('path');
const HummusRecipe = require('../bin');

describe('Create', () => {
    it('blank pdf', (done) => {
        const output = path.join(__dirname, 'output/blank.pdf');
        const recipe = new HummusRecipe('new', output);
        recipe
            .createPage()
            .endPage()
            .createPage()
            .endPage()
            .endPDF(done);
    });
    it('new pdf', (done) => {
        const output = path.join(__dirname, 'output/new.pdf');
        const recipe = new HummusRecipe('new', output);
        recipe
            // 1st Page
            .createPage('letter-size')
            .circle('center', 100, 30, { stroke: '#3b7721', fill: '#eee000' })
            .polygon([
                [50, 250],
                [100, 200],
                [512, 200],
                [562, 250],
                [512, 300],
                [100, 300],
                [50, 250]
            ], {
                color: [153, 143, 32],
                lineWidth: 5
            })
            .rectangle(240, 400, 50, 50, {
                color: [255, 0, 255]
            })
            .rectangle(322, 400, 50, 50, {
                stroke: [0, 0, 140],
                width: 6
            })
            .rectangle(240, 476, 50, 50, {
                fill: [255, 0, 0]
            })
            .rectangle(322, 476, 50, 50, {
                stroke: '#3b7721',
                fill: '#eee000'
            })
            .moveTo(200, 600)
            .lineTo('center', 650)
            .lineTo(412, 600)
            .text('Welcome to Hummus-Recipe', 'center', 250, {
                color: '066099',
                fontSize: 30,
                align: 'center center'
            })
            .comment('Feel free to open issues to help us!', 'center', 100)
            .endPage()
            // 2nd page
            .createPage('A4', 90)
            .circle(150, 150, 300)
            .endPage()
            .endPDF(done);
    });
});