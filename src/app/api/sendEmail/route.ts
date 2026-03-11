import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
        return NextResponse.json(
            { message: 'Tutti i campi sono obbligatori.' },
            { status: 400 }
        )
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: `"${name}" <${process.env.GMAIL_USER}>`,
            replyTo: email,
            to: process.env.MAIL_TO,
            subject: `Nuovo messaggio da ${name}`,
            text: [
                `Nome: ${name}`,
                `Email: ${email}`,
                `Telefono: ${phone}`,
                `Messaggio: ${message}`,
            ].join('\n'),
        })

        return NextResponse.json(
            { message: 'Email inviata con successo.' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Errore invio email:', error)
        return NextResponse.json(
            { message: "Errore durante l'invio. Riprova o contattaci per telefono." },
            { status: 500 }
        )
    }
}