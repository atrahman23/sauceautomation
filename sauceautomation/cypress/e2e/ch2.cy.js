describe('Challenge 2: Add product with minimum price to cart', () => {
    it('should add product with minimum price to cart', () => {
      cy.visit('https://www.saucedemo.com/')
  
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      cy.get('.inventory_item').should('have.length.gt', 0)
  

      cy.get('.inventory_item_price').then(($prices) => {
        
        const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')))
  
        
        const minPriceIndex = prices.indexOf(Math.min(...prices))
  
      
        cy.get('.inventory_item_name').eq(minPriceIndex).invoke('text').then((name) => {
          cy.get('.inventory_item_desc').eq(minPriceIndex).invoke('text').then((description) => {
        
            cy.get('.btn_inventory').eq(minPriceIndex).click()
  
            
            cy.log(`Added product with minimum price to cart:\nName: ${name}\nDescription: ${description}`)
          })
        })
      })
    })
  })
  