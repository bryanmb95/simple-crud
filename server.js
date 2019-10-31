const express = require('express');
const app = express ();

//Sobe o servidor
app.listen(3000, function () {

    console.log('server running on port 3000');

});

//GET e responde a pagina inicial
app.get('/', (req, res) => {

    res.sendFile('views/index.html', {root: __dirname });

});