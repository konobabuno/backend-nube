const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require("./routes/persona"))

app.listen(process.env.PORT || 3010, () => {
    console.log("Servidor corriendo en el puerto 3010");    
});

module.exports = app;