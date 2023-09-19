const express = require("express");
const router = express.Router();

const dotenv = require("dotenv");
dotenv.config();

const {conn} = require("../config.db");

const getPersonas = (request, response) => {
    conn.query("SELECT * FROM persona",
        (error, results) => {
            if(error)
                throw error;
            response.status(200).json(results);
        }
    );

};

const postPersonas = (request, response) => {
    const {apellido, nombre, edad} = request.body;
    conn.query("INSERT INTO persona(apellido, nombre, edad) VALUES(?,?,?)",
        [apellido, nombre, edad],
        (error, results) => {
            if(error)
                throw error;
            response.status(201).json({"Añadio: ": results.affectedRows});
        }
    );
};

const deletePersona = (request, response) => {
    const id = request.params.id;
    
    conn.query("DELETE FROM persona WHERE persona_id = ?",
        [id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(202).json({"Eliminado: ": results.affectedRows});
        }
    );
};



router.get("/persona", getPersonas);
router.post("/persona", postPersonas);
router.delete("/persona/:id", deletePersona);


module.exports = router;
