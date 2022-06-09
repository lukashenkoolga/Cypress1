describe('Book add', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.login("test@test.com", "test");

    });

    it("Should be add new book", () => {
        cy.addBook("1984", "Dystopia", "George Orwell");
        cy.contains("George Orwell").should("be.visible");
    });

    it("Should be add book with favorite", () => {
        cy.addBookWithFavorite("Faust", "Еragedy", "Johann Wolfgang von Goethe");
        cy.contains("Johann Wolfgang von Goethe").should("be.visible");
    });

    it("Should be delete book from favorite", () => {
        cy.addBookWithFavorite("O Alquimista", "Novel", "Paulo Coelho");
        cy.get("h4").click();
        cy.deleteBookFromFavoriteForTitle("O Alquimista");
        cy.contains("O Alquimista").should("not.exist");
    });

});