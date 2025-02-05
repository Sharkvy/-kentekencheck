const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors()); 


const KEY_ID = process.env.KEY_ID;
const SECRET_KEY = process.env.SECRET_KEY;


app.get('/check-kenteken', async (req, res) => {
    const kenteken = req.query.kenteken;

    if (!kenteken) {
        return res.status(400).json({ error: 'Kenteken is verplicht!' });
    }

    const sanitizedKenteken = kenteken.replace(/[^A-Z0-9]/gi, '').toUpperCase();

    try {
        const response = await axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json', {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(KEY_ID + ':' + SECRET_KEY).toString('base64'),
            },
            params: {
                "$limit": 1,  
                "kenteken": sanitizedKenteken,  
            }
        });


        console.log('API response:', response.data);


        if (response.data.length === 0) {
            return res.status(404).json({ error: 'Kenteken niet gevonden.' });
        }

        res.json(response.data[0]);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het ophalen van kentekeninformatie.' });
    }
});


app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
