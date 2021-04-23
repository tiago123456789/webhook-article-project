const express = require("express");
const app = express();
const token = "37b6352c-c951-4b43-993a-78138ede25c5";

// Enable middleware parse data to json
app.use(express.json()); 

app.post("/webhook", (request, response) => {
    const isRequestValid = request.query.token == token
    if (isRequestValid) {
        console.log(request.body);
        return response.sendStatus(200);
    }
    response.sendStatus(401);
});

app.listen(3000, () => console.log(`Server is running in address: http://localhost:3000`));


