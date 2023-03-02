context('TodoMVC - Cypress.io', () => {

    it("Adicionar uma nova tarefa", () => {
        // Visitando a URL
        cy.visit("https://todomvc-app-for-testing.surge.sh/");
        
        // Adicionando uma nova tarefa no campo de texto
        cy.get("input.new-todo").type("Estudar a documentação do Cypress{enter}");

        // Assert (Validação) - Verificando se a tarefa foi adicionada
        cy.get("ul.todo-list li").should("have.length", 1);

        // Assert (Validação) - Verificando se a tarefa foi adicionada corretamente
        cy.get("ul.todo-list li").should("have.text", "Estudar a documentação do Cypress");
    })
});