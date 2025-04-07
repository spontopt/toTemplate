const express = require('express');

const app = express();
const port = 8080;

app.use(express.json());

app.post('/clean-metrics', (req: any, res: any) => {
    const inputJson: any = req.body;

    // Function to clean the integrations field
    const cleanIntegrations = (data: any) => {
        if (data.Metrics && Array.isArray(data.Metrics)) {
            data.Metrics.forEach((metric: any) => {
                metric.integrations = [];
            });
        }
    };

    // Clean the integrations field
    cleanIntegrations(inputJson);

    // Send the modified JSON as the response
    res.json(inputJson);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.post('/order', (req: any, res: any) => {
    const inputJson: any = req.body;


    //function to order the metrics
    const orderMetrics = (data: any) => {
        var i = 0;
        if (data.Metrics && Array.isArray(data.Metrics)) {
            data.Metrics.forEach((metric: any) => {
                metric.index = i;
                i++;
            });
        }
        
        }

    // Clean the integrations field
    orderMetrics(inputJson);

    // Send the modified JSON as the response
    res.json(inputJson);
});