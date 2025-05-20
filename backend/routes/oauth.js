// routes/oauth.js
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { OAuth2Client } from 'google-auth-library';

dotenv.config();
const router = express.Router();

async function getUserData(access_token) {
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
    const data = await response.json();
    return data;
}

router.get('/', async function (req, res) {
    const code = req.query.code;

    if (!code) {
        return res.status(400).json({ error: 'Missing code' });
    }

    try {
        const redirectUrl = 'http://localhost:3000/oauth';

        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );

        const r = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(r.tokens);

        const user = await getUserData(r.tokens.access_token);
        res.json({ user });
    } catch (err) {
        console.error('Error with signing in with Google:', err);
        res.status(500).json({ error: 'Google sign-in failed' });
    }
});

export default router;
