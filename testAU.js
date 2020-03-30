import { Selector } from 'testcafe';


fixture `Getting Started`
    
    .page `https://www.google.com/`;
    
    

test('Test User', async t => {

    const extend = Selector('span.i0vbXd') 
    const webTottus = Selector('a').withText('Sitio web')
    const searchSucursal = Selector('.rllt__details.lqhpac').nth(2).find('span').withText('La Cisterna')
    

    await t
    //.debug()
        .typeText('input[name="q"]','tottus sucursales')
        .click('input[name="btnK"]')
        .click(extend)
        .click(searchSucursal)
        .click(webTottus)
});

test
    .page `http://www.tottusrecetas.cl`
    ('Test2', async t => {

    const Dificultad = Selector('button').withText('ALTA')
    const searchReceta = Selector('h3').withText('CORONA DE ROLLITOS DE CANELA')
    const findCanela = Selector('#hero').find('p').withText('– 15g canela en polvo')
    const findAzucarRubia = Selector('#hero').find('p').withText('– 125g azúcar rubia')
    const recetaHrd = Selector('div.divRecipe mobile')
    
        await t

    
    .click(Dificultad)
    .click(searchReceta)
    //.expected(recetaHrd().innerText).contains('azúcar rubia')
    // .click(findCanela)
    // .click(findAzucarRubia)
     .expect(Selector('html').textContent).contains('azúcar rubia')
     .expect(Selector('html').textContent).contains('canela');

    });