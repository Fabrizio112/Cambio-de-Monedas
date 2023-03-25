/// <reference types="Cypress" />

describe('Tests for the projects', () => {

  describe('Basic Test', () => {
    beforeEach('Visit my project pages', () => {
      cy.visit('http://127.0.0.1:8080')
    })
    it('Test if the button "Comparar Divisas" is working', () => {
      cy.get("#comparar").click()
      expect(cy.get('.contenedor-programa-comparar').should("be.exist"))
      expect(cy.get('.contenedor-programa-comparar #titulo-comparador').should("be.exist"))
      expect(cy.get('.contenedor-programa-comparar #label-comparador').should("be.exist"))
      expect(cy.get('.contenedor-programa-comparar #input-divisa').should("be.exist"))
      expect(cy.get('.contenedor-programa-comparar #buscar').should("be.exist"))
    })
    it('Test if the button "Calcular Divisas" is working', () => {
      cy.get("#calcular").click()
      expect(cy.get('.contenedor-programa-calcular').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular h3').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-a-convertir').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-a-convertir label').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-a-convertir input').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-a-convertir #select-a-convertir').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-convertida').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-convertida label').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-convertida input ').should("be.exist"))
      expect(cy.get('.contenedor-programa-calcular .contenedor-cantidad-convertida #select-convertido ').should("be.exist"))
      expect(cy.get('#conversion').should("be.exist"));
    })
  })
  describe('A lot of more difficult Test', () => {
    beforeEach('Visit my project pages', () => {
      cy.visit('http://127.0.0.1:8080')
    })
    it('Test if the button "Buscar" of the Comparate Program is working', () => {
      cy.get("#comparar").click()
      cy.get('#input-divisa').type("ARS")
      cy.get('#buscar').click()
      expect(cy.get('#contenedor-de-divs', { timeout: 10000 }).should('be.exist'))
      expect(cy.get('#contenedor-de-divs .card').should('be.exist'))
      expect(cy.get('#contenedor-de-divs .card p').should('be.exist'))
      expect(cy.get('#contenedor-de-divs .card span').should('be.exist'))
      expect(cy.get("#titulo-divisa").should("be.exist"))
    })
    it('Test if the button "Hacer Conversion" is working', () => {
      cy.get("#calcular").click()
      cy.get("#input-convertir").type(3);
      cy.get("#select-a-convertir").select("USD")
      cy.get("#select-convertido").select("ARS")
      cy.get("#conversion").click();
      expect(cy.get("#input-convertido").should("have.value", 616.200507))
    })
  })
})