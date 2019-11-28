
describe('Buy travel insurance', function () {

function disableCookieAcceptPopup() {
        //Set cookie to disable cookie accept popup
        var cookieName = 'OptanonAlertBoxClosed'
        var cookieValue = new Date()
        var futurDate = new Date()
        futurDate.setMonth(futurDate.getMonth() + 12)
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + futurDate + ";path=/"
    }

	it('with Payment Service', function () {

		cy.visit('https://www.atest.if.dk/privat/forsikringer/rejseforsikring')
		.wait(1000)
		disableCookieAcceptPopup()

		//Goto product page and set SSN
		cy.get('span[data-id="BeregnPrisFrontKnapRejse"]').click()
			//.pause()
			//Check that we are on product page
			.get('#STEP-rejse-1').should('contain', 'ejseforsikring')
			.get('#Cpr1').clear().type('010178')
			.get('#Cpr2').clear().type('0001')
			//.pause()
			//Goto coverage page
			.get('#wizardNavigation>button').click()
			//Wait for spinner/calc price
			.get('#super_PoliceButton>div.hiddenBoarder>div.activeDetails>div.dws-beregnerDaekning').should('have.attr', 'style', 'padding: 8px 0px 0px; font-size: 20px; display: none;')
			//Check that we are on coverage page 
			.get('#STEP-rejse-2').should('contain', 'Vælg dækning')
			// Keep default and go to maxicart
			.get('span[data-id = "GaTilIndkobskurv"]').click()
			//Check that we are on maxicart page 
			.get('#dk-pri-webshop-quote-header>header>h1').should('contain', 'Indkøbskurv')
			// Keep default and go to suppl. info page
			.get('button[data-bind = "click:goToCheckout, enable: model.cart().numberOfProducts() > 0"]').click()
			//Check that we are on suppl.info page 
			.get('#STEP-Checkout-1').should('contain', 'Supplerende information')
			.get('#HarTidligereSelskabNej').next().click()
            // Goto personal info page
            .get('button[onclick = "app.wizard.goFwd()"]').click()
			//Check that we are on pers.info page 
            .get('#STEP-Checkout-2').should('contain', 'Personoplysninger')
			//Fill in pers info
			.get('#personligInfo #Fornavn').clear().type('Resekund')
            .get('#personligInfo #Efternavn').clear().type('Atest')
            .get('#selectAddress').clear().type('Kløvervej 20, 7190 Billund').then((elem) => { //fill in complete address
                cy.wait(500)
                cy.get('li.ui-menu-item > div').first().click() // if more than one that matches complete address, click first // if more than one that matches complete address, click first
            })
			.get('#MobilNr').clear().type('12345678')
            .get('#EmailAdr').clear().type('exempel.email@if.se')
            // Goto confirm buy page
            .get('span[data-id = "Koeb"]').click()
			//Check that we are on purchase page 
            .get('#STEP-Checkout-3').should('contain', 'Bekræft køb')
            .get('#AccepterMarketingfalse').should('be.visible').click()
			.get('label[for="PaymentProviderToggle_PS"]').click()
            .get('#BankRegNr').clear().type('1234')
            .get('#BankKontoNr').clear().type('123456789')
			//Perform purchase
            .get('#wizardStep3Body button').click()
			//Check wait message
            .get('div.wizardSection>div>div>h3').should('have.text', 'Vent venligst')
			//wait and check receipt page
            .get('div.wizardStepHeader > h1', { timeout: 45000 }).should('contain', 'Tak fordi du valgte If').then((elem) => {
				cy.get('#koebOversigt').should('contain', 'Rejse')
			})



			



	}) // end it
}) // end describe

