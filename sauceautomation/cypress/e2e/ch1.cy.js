describe('Challenge 1: Add product with maximum price to cart', () => {
  it('should add product with maximum price to cart', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()


    cy.get('.inventory_item').should('have.length.gt', 0)


    cy.get('.inventory_item_price').then(($prices) => {

      const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')))


      const maxPriceIndex = prices.indexOf(Math.max(...prices))

    
      cy.get('.inventory_item_name').eq(maxPriceIndex).invoke('text').then((name) => {
        cy.get('.inventory_item_desc').eq(maxPriceIndex).invoke('text').then((description) => {

          cy.get('.btn_inventory').eq(maxPriceIndex).click()

         
          cy.log(`Added product with maximum price to cart:\nName: ${name}\nDescription: ${description}`)
        })
      })
    })
  })
})
