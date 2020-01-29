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
		cy.get('#search #rso div.g').first().should('contain', 'Albert')
	})
})