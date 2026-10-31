const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from server/.env (and fallback to root if present)
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Portfolio Email Server is running' });
});

app.get('/api/health', (req, res) => {
    res.json({ ok: true, status: 'healthy', timestamp: new Date().toISOString() });
});

// Nodemailer Transporter configured for Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: (process.env.MAIL_APP_PASSWORD || '').replace(/\s+/g, ''),
    },
});

// Verify connection on startup
transporter.verify((error) => {
    if (error) {
        console.warn('⚠️  Nodemailer transporter check: Gmail credentials not yet active or invalid.');
        console.warn('👉 Update MAIL_USER and 16-character MAIL_APP_PASSWORD in server/.env');
    } else {
        console.log('✅ Nodemailer is connected and ready to send emails via Gmail SMTP');
    }
});

// POST /api/contact endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
        return res.status(400).json({
            ok: false,
            error: 'Name, email, and message are required fields.',
        });
    }

    const recipient = process.env.MAIL_TO || process.env.MAIL_USER;
    const emailSubject = `Portfolio Message: ${subject || 'New Inquiry'} from ${name}`;

    const mailOptions = {
        from: `"${name} (Portfolio Contact)" <${process.env.MAIL_USER}>`,
        to: recipient,
        replyTo: email,
        subject: emailSubject,
        text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
        html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 10px; background-color: #ffffff; color: #18181b;">
                <h2 style="color: #16a34a; margin-top: 0; border-bottom: 2px solid #22c55e; padding-bottom: 12px;">New Portfolio Contact Message</h2>
                <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                <div style="margin-top: 20px; padding: 16px; background-color: #f4f4f5; border-radius: 8px; border-left: 4px solid #22c55e;">
                    <strong style="color: #3f3f46;">Message:</strong>
                    <p style="white-space: pre-wrap; margin: 10px 0 0 0; line-height: 1.6; color: #18181b;">${message}</p>
                </div>
                <hr style="margin-top: 28px; border: 0; border-top: 1px solid #e4e4e7;" />
                <p style="font-size: 13px; color: #71717a; margin-bottom: 0;">
                    💡 Simply click <strong>Reply</strong> in your email client to respond directly to <strong>${name}</strong> (${email}).
                </p>
            </div>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`✉️  Email successfully sent for ${email} (Message ID: ${info.messageId})`);
        return res.status(200).json({ ok: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error('❌ Nodemailer send error:', err);
        return res.status(500).json({
            ok: false,
            error: err.message || 'Failed to send email. Check Gmail credentials.',
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
});
