const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS inschakelen
app.use(cors());  // Dit staat CORS toe voor alle domeinen (zoals localhost:5500 voor je frontend)

// Je RDW API sleutel-ID en geheim
const KEY_ID = process.env.KEY_ID;
const SECRET_KEY = process.env.SECRET_KEY;

// Route voor het ophalen van kentekeninformatie
app.get('/check-kenteken', async (req, res) => {
    const kenteken = req.query.kenteken;

    if (!kenteken) {
        return res.status(400).json({ error: 'Kenteken is verplicht!' });
    }

    // Normaliseer het kenteken:
    // 1. Verwijder streepjes, spaties en andere tekens
    // 2. Zet het kenteken om naar hoofdletters
    const sanitizedKenteken = kenteken.replace(/[^A-Z0-9]/gi, '').toUpperCase();

    try {
        const response = await axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json', {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(KEY_ID + ':' + SECRET_KEY).toString('base64'),
            },
            params: {
                "$limit": 1,  // Beperk de resultaten tot 1
                "kenteken": sanitizedKenteken,  // Zoek op het genormaliseerde kenteken
            }
        });

        // Log de volledige response van de API
        console.log('API response:', response.data);

        // Als er geen gegevens gevonden zijn
        if (response.data.length === 0) {
            return res.status(404).json({ error: 'Kenteken niet gevonden.' });
        }

        // Stuur de eerste gevonden record door naar de frontend
        res.json(response.data[0]);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het ophalen van kentekeninformatie.' });
    }
});

// Start de server
app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
