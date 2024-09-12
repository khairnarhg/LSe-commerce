const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CorporateGifts = require('../../models/CorporateGifts');
const serverless = require('serverless-http');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());

const url = 'mongodb+srv://hgkhairnar255:Ngu051MeipNLysla@cluster0.541wpl6.mongodb.net/Leather&Style?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');

        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        
        console.log('Collections in the database:');
        collections.forEach(collection => {
            console.log(collection.name);
        });
    })
    .catch(err => {
        console.error('Connection error:', err);
    });
///.netlify/functions/corporate-gifts/api/corporate-gifts
app.post('/.netlify/functions/corporate-gifts', async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            phno,
            company,
            country,
            quantities,
            product_name,
            message
        } = req.body;

        const newGift = new CorporateGifts({
            first_name, 
            last_name, 
            email, 
            phno, 
            company, 
            country, 
            quantities, 
            product_name, 
            message
        });

        await newGift.save();  // Save the new gift
        console.log('Saved Data:', newGift);  // Log the correct variable

        res.status(201).json({ message: 'Corporate gift request submitted successfully!' });
    } catch (error) {
        console.error('Error saving to the database:', error);  // Log the error
        res.status(500).json({ error: 'Failed to submit corporate gift request' });
    }
});

app.get('/.netlify/functions/corporate-gifts', async (req, res) => {
    try {
        const gifts = await CorporateGifts.find(); // Fetch all documents in the collection
        res.status(200).json(gifts);
        console.log(gifts);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch corporate gifts' });
    }
});

// Export as a serverless function
module.exports.handler = serverless(app);

