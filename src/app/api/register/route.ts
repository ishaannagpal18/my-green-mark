import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #D6E8D2;border-radius:12px;overflow:hidden;">
        <div style="background:#06402B;padding:24px 32px;">
          <h2 style="color:#F4B942;margin:0;font-size:22px;">🌱 New Green Talent Hunt Registration</h2>
          <p style="color:#A8C5A3;margin:6px 0 0;font-size:13px;">Exam Date: 5 June 2026 · mygreenmark.in</p>
        </div>
        <div style="padding:28px 32px;background:#fff;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${Object.entries(data).map(([key, val]) => `
              <tr style="border-bottom:1px solid #F0F0F0;">
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;width:45%;text-transform:capitalize;">${key.replace(/_/g,' ')}</td>
                <td style="padding:10px 8px;color:#1A1A1A;">${val || '—'}</td>
              </tr>
            `).join('')}
          </table>
        </div>
        <div style="background:#F7EDE2;padding:16px 32px;text-align:center;">
          <p style="color:#06402B;font-size:12px;margin:0;">My Green Mark · info@mygreenmark.in · +91 92179 17695</p>
          <p style="color:#06402B;font-size:12px;margin:4px 0 0;">RZ-41/14, Block B, Sadh Nagar, Palam, New Delhi 110045</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"My Green Mark" <${process.env.SMTP_USER}>`,
      to: 'info@mygreenmark.in',
      subject: `Green Talent Hunt Registration — ${data.full_name} (Class ${data.class_grade})`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
