describe('Group name', () => {

    it("Should be open page", () => {
        cy.visit("http://localhost:3000");
    });

    it("Should be able to login with correct email and password", () => {
        cy.visit("http://localhost:3000");
        cy.login("test@test.com", "test");
        cy.contains("Добро пожаловать test@test.com").should("be.visible");   
    });

    it("Should not be able to login with empty email", () => {
        cy.visit("http://localhost:3000");
        cy.login(" ", "123");
        cy.get("#mail").then(($el) => cy.log($el));
        cy.get("#mail")
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it("Should not be able to login with empty password", () => {
        cy.visit("http://localhost:3000");
        cy.login("bropet@mail.ru", " ");
        cy.contains("Неправильая почта или пароль");
    });

});