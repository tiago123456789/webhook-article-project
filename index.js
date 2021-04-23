const express = require("express");
const app = express();

// Enable middleware parse data to json
app.use(express.json()); 

app.post("/webhook", (request, response) => {
    console.log(request.body);
    response.sendStatus(200);
});

app.listen(3000, () => console.log(`Server is running in address: http://localhost:3000`));


