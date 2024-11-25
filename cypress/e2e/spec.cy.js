describe('template spec', () => {
  it('agregar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  })
})



describe('template spec', () => {
  it('desmarcar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
  })
})


describe('template spec', () => {
  it('editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
  
  })
})

  describe('template spec', () => {
    it('agregar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
      cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")

    })
})


describe('template spec', () => {
  it('agregar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
  })
})


describe('template spec', () => {
  it('agregar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type ("sacar al perro{enter}")
    cy.get('[data-testid="text-input"]').type("dar de comer al perro{enter}")

  })
})



describe('template spec', () => {
  it('borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type ("sacar al perro{enter}")
    cy.get('[data-testid="text-input"]').type("dar de comer al perro{enter}")
  })
})


describe('template spec', () => {
  it('filtrar tareas completadas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type ("sacar al perro{enter}")
    cy.get('[data-testid="text-input"]').type("dar de comer al perro{enter}")
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()

  })
})


describe('template spec', () => {
  it('filtrar tareas no completadas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type ("sacar al perro{enter}")
    cy.get('[data-testid="text-input"]').type("dar de comer al perro{enter}")
    cy.get(':nth-child(2) > a').click()
  })
})


describe('template spec', () => {
  it('filtrar todas tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type ("sacar al perro{enter}")
    cy.get('[data-testid="text-input"]').type("dar de comer al perro{enter}")
    cy.get('.selected').click()
  })
})



describe('template spec', () => {
  it('borrar tareas completadas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("sacar la basura{enter}")
    cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type ("sacar al perro{enter}")
    cy.get('[data-testid="text-input"]').type("dar de comer al perro{enter}")
    cy.get('.clear-completed').click()
    
  })
})