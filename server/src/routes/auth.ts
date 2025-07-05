import express, { Request, Response } from 'express';
import user from '../models/User';
import Log_User from '../models/Log_User';
import Feedback_user from '../models/Feedback_user';


const router = express.Router();

// 🟢 Signup
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const existing = await user.findOne({ email, password });
    if (existing)
      return res.status(409).json({ message: 'User already exists' });

    const newUser = new user({ name, email, password });
    await newUser.save();


    return res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    return res.status(401).json({ message: 'Signup failed PLease Move a /dashboard' });
  }
});


// 🟢 Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // ✅ Field check
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    // ✅ Save new login entry in DB
    const newLogin = new Log_User({ email, password });
    await newLogin.save();


    return res.status(200).json({ message: 'Login successful', });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(401).json({ message: 'Login failed' });
  }
});

// 🟢 Feedback
router.post('/feedback', async (req: Request, res: Response) => {
  try {
    const { name, email, feedback, rating } = req.body;

    if (!name || !feedback) {
      return res.status(400).json({ message: 'Name and feedback are required' });
    }

    const newFeedback = new Feedback_user({ name, email, feedback, rating });
    await newFeedback.save();

    return res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Feedback Error:', error);
    return res.status(500).json({ message: 'Error submitting feedback' });
  }
});


export default router;
