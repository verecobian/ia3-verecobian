import { Selector } from 'testcafe';

fixture `SpeedScore Interactions`
    .page `http://127.0.0.1:5500/index.html`;

test('LoginGoesToActivityFeed', async t => {
    await t
        .typeText('#emailInput', 'hundhaus@wsu.edu')
        .typeText('#passwordInput', '123#Eejl;')
        .click('#loginBtn')
        .expect(Selector('#feedModeDiv').visible).eql(true)
        .expect(Selector('#feedMode').classNames).contains("menuItemSelected")
        .click('#menuBtn')
        .expect(Selector('.feedModeItem').visible).eql(true)
        .expect(Selector('#topBarTitle').textContent).eql("Activity Feed")
});