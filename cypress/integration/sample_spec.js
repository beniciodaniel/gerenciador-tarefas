// import cy from "cypress"

describe('Fluxo de Todo List', function () {
    it ('Visita o localhost', function () {
        cy.visit('http://localhost:3000/')        
    })

    it ('Verifica se o Título aparece', function () {        
        cy.contains('Gerenciador de Tarefas')
    })

    it ('Escreve no Input', function () {        
        cy.get('.task-input')
            .type('hahaha')
            .should('have.value', 'hahaha')
    })

    it ('Adiciona a task ao clicar em Adicionar', function () {        
        cy.get('.add-task-btn').click()
    })

    it ('Deleta a task adicionada', function () {        
        cy.get('.btn-delete').click()
    })
})