const express = require("express");
const app = express();
const token = "37b6352c-c951-4b43-993a-78138ede25c5";

// Enable middleware parse data to json
app.use(express.json()); 

app.post("/webhook", (request, response) => {
    const isRequestValid = request.query.token == token
    if (isRequestValid) {
        console.log(request.body);
        return response.status(200).json({
            "statusCode": 200,
            "message": "Webhook is processed"
        });
    }
    return response.status(401).json({
        "statusCode": 401,
        "message": "Webhook is not processed"
    });
});

app.listen(3000, () => console.log(`Server is running in address: http://localhost:3000`));


