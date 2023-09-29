
const chai = require("chai");
const chaiHTTP = require("chai-http");
const app = require("../index");
const expect = chai.expect;

 chai.use(chaiHTTP);

describe("Unit test Pesona module", () => {
    describe("GET /persona", () => {
        it("Should return a lista of Personas", (done) => {
            chai
            .request(app)
            .get("/persona")
            .end((error, response) => {
                expect(response).to.have.status(200);
                expect(response.body).to.be.an('array');
                // Agregar más "expect"
                done();
            });
        });
    });
});


describe("POST /persona", () =>{
    it("Should insert a new persona", (done) =>{
        const newPersona = {
            nombre: "Prueba",
            apellido: "Unitaria",
            edad: 1
        };

        chai
        .request(app)
        .post("/persona")
        .send(newPersona)
        .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('Added');
            expect(response.body.Added).to.equal(1);
            done();
        })
    })
})