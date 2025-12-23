const express = require('express');
const { validationResult } = require('express-validator');
const ledgerModel = require('../models/ledger.model');
const commentModel = require('../models/comment.model');
const { body } = require('express-validator');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI_USER);

router.get('/dashboard-admin', async (req, res) => {
    try {
        const [transport, infrastructure, education, healthcare, subsidies, college] = await Promise.all([
            ledgerModel.findOne({ id: 'transport' }),
            ledgerModel.findOne({ id: 'infrastructure' }),
            ledgerModel.findOne({ id: 'education' }),
            ledgerModel.findOne({ id: 'healthcare' }),
            ledgerModel.findOne({ id: 'subsidies' }),
            ledgerModel.findOne({ id: 'college_funds' })
        ]);

        // FETCH COMMENTS HERE
        const comments = await commentModel.find().sort({ createdAt: -1 }).limit(6);

        res.render('dashboard-admin', { 
            transport, infrastructure, education, healthcare, subsidies, college, comments
        });
    } catch (err) {
        res.status(500).send("Error loading dashboard");
    }
});


router.post('/dashboard-admin', 
    body('id').notEmpty(), // Add a hidden input in your form for the ID (e.g., "transport")
    body('title').notEmpty(),
    body('allocation').isNumeric(),
    body('description').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const comments = await commentModel.find().sort({ createdAt: -1 }).limit(6);

        const { id, title, description, allocation } = req.body;
        
        // findOneAndUpdate with upsert ensures we don't get duplicates
        await ledgerModel.findOneAndUpdate(
            { id: id }, 
            { title, description, allocation: Number(allocation) },
            { upsert: true, new: true }
        );

        res.redirect('/dashboard-admin');
    }
);

router.get('/dashboard-public', (req, res) => {
  const username = req.cookies.username
  res.render('dashboard-public', { username: username });
});

router.get('/public-ledger', async (_req, res) => {
    try {
        const ids = ['transport', 'infrastructure', 'education', 'healthcare', 'subsidies', 'college_funds'];
        const results = await Promise.all(ids.map(id => ledgerModel.findOne({ id })));

        // This maps the array into easy-to-use variables for EJS
        res.render('public-ledger', { 
            transport: results[0],
            infrastructure: results[1],
            education: results[2],
            healthcare: results[3],
            subsidies: results[4],
            college: results[5]
        });
    } catch (err) {
        res.status(500).send("Database Error");
    }
});

router.get('/community-feedback', async (_req, res) => {
    try {
        // Change 'Comment' to 'commentModel' to match your POST logic
        const latestComments = await commentModel.find()
            .sort({ createdAt: -1 }) 
            .limit(6);

        res.render('feedback', { comments: latestComments });
    } catch (err) {
        console.error("Error fetching feedback:", err);
        res.render('feedback', { comments: [] });
    }
});

// POST: Save a new comment from the forum
router.post('/community-feedback', async (req, res) => {
    try {
        const { text } = req.body;
        const username = req.cookies.username || 'Anonymous';
        await commentModel.create({ text, username });
        res.redirect('/community-feedback');
    } catch (err) {
        res.status(500).send("Error posting comment");
    }
});

// GET Route: Fetch the transport ledger
router.get('/transport', async (req, res) => {
    try {
        // Find the specific transport ledger
        let ledger = await ledgerModel.findOne({ id: 'transport' });

        // If it doesn't exist in DB yet, create a default one so the page doesn't crash
        if (!ledger) {
            ledger = await ledgerModel.create({
                id: 'transport',
                title: 'Public Transport',
                allocation: 5000000,
                description: 'Management of city transit systems.'
            });
        }

        res.render('transport', { ledger });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// PATCH Route: Update the ledger
// Note: Ensure you have app.use(methodOverride('_method')) in your app.js
router.patch('/transport/:id', async (req, res) => {
    try {
        const { title, allocation, description } = req.body;
        await ledgerModel.findByIdAndUpdate(req.params.id, {
            title,
            allocation: Number(allocation),
            description
        });
        res.redirect('/dashboard-admin');
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Failed");
    }
});

router.get('/college-funds', async (req, res) => {
    try {
        // Find the specific transport ledger
        let ledger = await ledgerModel.findOne({ id: 'college_funds' });

        // If it doesn't exist in DB yet, create a default one so the page doesn't crash
        if (!ledger) {
            ledger = await ledgerModel.create({
                id: 'college_funds',
                title: 'College Funds',
                allocation: 5000000,
                description: 'Scholarships and grants for higher education.'
            });
        }

        res.render('college-funds', { ledger });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.patch('/college-funds/:id', async (req, res) => {
    try {
        const { title, allocation, description } = req.body;
        await ledgerModel.findByIdAndUpdate(req.params.id, {
            title,
            allocation: Number(allocation),
            description
        });
        res.redirect('/dashboard-admin');
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Failed");
    }
});

router.get('/education', async (req, res) => {
    try {
        // Find the specific transport ledger
        let ledger = await ledgerModel.findOne({ id: 'education' });

        // If it doesn't exist in DB yet, create a default one so the page doesn't crash
        if (!ledger) {
            ledger = await ledgerModel.create({
                id: 'education',
                title: 'Education Sector',
                allocation: 5000000,
                description: 'Funding for schools, colleges, and educational programs.'
            });
        }

        res.render('education', { ledger });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.patch('/education/:id', async (req, res) => {
    try {
        const { title, allocation, description } = req.body;
        await ledgerModel.findByIdAndUpdate(req.params.id, {
            title,
            allocation: Number(allocation),
            description
        });
        res.redirect('/dashboard-admin');
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Failed");
    }
});

router.get('/healthcare', async (req, res) => {
    try {
        // Find the specific transport ledger
        let ledger = await ledgerModel.findOne({ id: 'healthcare' });

        // If it doesn't exist in DB yet, create a default one so the page doesn't crash
        if (!ledger) {
            ledger = await ledgerModel.create({
                id: 'healthcare',
                title: 'Healthcare Sector',
                allocation: 5000000,
                description: 'Funding for public healthcare services and infrastructure.'
            });
        }

        res.render('healthcare', { ledger });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.patch('/healthcare/:id', async (req, res) => {
    try {
        const { title, allocation, description } = req.body;
        await ledgerModel.findByIdAndUpdate(req.params.id, {
            title,
            allocation: Number(allocation),
            description
        });
        res.redirect('/dashboard-admin');
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Failed");
    }
});

router.get('/subsidies', async (req, res) => {
    try {
        // Find the specific transport ledger
        let ledger = await ledgerModel.findOne({ id: 'subsidies' });

        // If it doesn't exist in DB yet, create a default one so the page doesn't crash
        if (!ledger) {
            ledger = await ledgerModel.create({
                id: 'subsidies',
                title: 'Subsidies',
                allocation: 5000000,
                description: 'Government subsidies for various sectors.'
            });
        }

        res.render('subsidies', { ledger });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.patch('/subsidies/:id', async (req, res) => {
    try {
        const { title, allocation, description } = req.body;
        await ledgerModel.findByIdAndUpdate(req.params.id, {
            title,
            allocation: Number(allocation),
            description
        });
        res.redirect('/dashboard-admin');
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Failed");
    }
});

router.get('/infrastructure', async (req, res) => {
    try {
        // Find the specific transport ledger
        let ledger = await ledgerModel.findOne({ id: 'infrastructure' });

        // If it doesn't exist in DB yet, create a default one so the page doesn't crash
        if (!ledger) {
            ledger = await ledgerModel.create({
                id: 'infrastructure',
                title: 'Urban Infrastructure',
                allocation: 5000000,
                description: 'Development of public parks, water supply, and sanitation projects.'
            });
        }

        res.render('infrastructure', { ledger });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.patch('/infrastructure/:id', async (req, res) => {
    try {
        const { title, allocation, description } = req.body;
        await ledgerModel.findByIdAndUpdate(req.params.id, {
            title,
            allocation: Number(allocation),
            description
        });
        res.redirect('/dashboard-admin');
    } catch (err) {
        console.error(err);
        res.status(500).send("Update Failed");
    }
});

router.get('/chatbot', (_req, res) => {
  res.render('chatbot');
});

router.get('/', (_req, res) => {
  res.render('home');
});



module.exports = router;
