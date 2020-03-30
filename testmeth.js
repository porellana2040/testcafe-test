import { Selector } from 'testcafe';

fixture `My fixture`
.page `http://www.example.com/`;

test('Navigate to the main page', async t => {
await t
    .click('#submit-button')
    .navigateTo('http://devexpress.github.io/testcafe');
});