import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'fisioterapistacaserta@gmail.com', 
        pass: 'wbiz cjvv pjwj jpln', 
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'fisioterapistacaserta@gmail.com', // La tua email di destinazione
      subject: `Nuovo messaggio da ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefono: ${phone}
        Messaggio: ${message}
      `,
    });

    res.status(200).json({ message: 'Email inviata con successo!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante l\'invio dell\'email' });
  }
};

export default sendEmail;
