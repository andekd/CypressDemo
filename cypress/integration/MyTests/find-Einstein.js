describe('Finding Einstein', function () {
	before(() => {
		//Do nothing
	})
	
	after(()=>{
		//cy.clearCookies()
	})
	
	it('on Google', function() {
		cy.visit('https://www.google.com/search?hl=en')
		cy.get('input[name="q"]').type('Einstein').type('{downarrow}').type('{enter}')
		cy.get('#res #search #rso .r a h3').find('span').first().should('contain', 'Albert')
	})
})