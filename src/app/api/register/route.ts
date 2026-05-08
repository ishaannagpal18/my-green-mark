import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SECTIONS: Record<string, string[]> = {
  'Candidate Details': ['full_name', 'email', 'class_grade', 'date_of_birth', 'contact_number', 'city', 'postal_address'],
  'School Details': ['school_name', 'school_city', 'school_postal_address'],
  'Parent / Guardian': ['parent_name', 'parent_contact', 'parent_email'],
  'Payment': ['transaction_id_utr'],
}

const LABELS: Record<string, string> = {
  full_name: 'Full Name',
  email: 'Email',
  class_grade: 'Class / Grade',
  date_of_birth: 'Date of Birth',
  contact_number: 'Contact Number',
  city: 'City',
  postal_address: 'Postal Address',
  school_name: 'School Name',
  school_city: 'School City',
  school_postal_address: "School's Postal Address",
  parent_name: 'Parent / Guardian Name',
  parent_contact: "Parent's Contact",
  parent_email: "Parent's Email",
  transaction_id_utr: 'Transaction ID / UTR Number',
}

export async function POST(req: NextRequest) {
  const data = await req.json()

  // Always log the submission so no data is lost
  console.log('=== GREEN TALENT HUNT REGISTRATION ===')
  console.log(JSON.stringify(data, null, 2))
  console.log('======================================')

  // Try to send email — failure does NOT block success response
  if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your_app_password_here') {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const sectionHtml = Object.entries(SECTIONS).map(([section, keys]) => `
        <tr>
          <td colspan="2" style="padding:14px 8px 6px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#3A8A5C;border-bottom:2px solid #D6E8D2;">${section}</td>
        </tr>
        ${keys.map(key => `
          <tr style="border-bottom:1px solid #F7F7F7;">
            <td style="padding:9px 8px;color:#555;font-size:13px;width:42%;font-weight:600;">${LABELS[key] ?? key}</td>
            <td style="padding:9px 8px;color:#1A1A1A;font-size:13px;">${data[key] || '—'}</td>
          </tr>
        `).join('')}
      `).join('')

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #D6E8D2;border-radius:14px;overflow:hidden;">
          <div style="background:#06402B;padding:24px 32px;">
            <h2 style="color:#F4B942;margin:0;font-size:22px;">🌱 New Green Talent Hunt Registration</h2>
            <p style="color:#A8C5A3;margin:6px 0 0;font-size:13px;">Exam: 5 June 2026 · mygreenmark.in</p>
          </div>
          <div style="padding:24px 32px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;">
              ${sectionHtml}
            </table>
          </div>
          <div style="background:#F7EDE2;padding:16px 32px;text-align:center;">
            <p style="color:#06402B;font-size:12px;margin:0;font-weight:600;">My Green Mark</p>
            <p style="color:#06402B;font-size:12px;margin:4px 0 0;">info@mygreenmark.in · +91 92179 17695</p>
            <p style="color:#06402B;font-size:12px;margin:4px 0 0;">RZ-41/14, Block B, Sadh Nagar, Palam, New Delhi 110045</p>
          </div>
        </div>
      `

      await transporter.sendMail({
        from: `"My Green Mark" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL ?? 'info@mygreenmark.in',
        subject: `Green Talent Hunt Registration — ${data.full_name} (${data.class_grade}) · UTR: ${data.transaction_id_utr || 'pending'}`,
        html,
      })

      console.log('Email sent successfully for:', data.full_name)
    } catch (err) {
      // Log email error but don't fail the user's submission
      console.error('Email send failed (registration still recorded above):', err)
    }
  } else {
    console.warn('SMTP not configured — email skipped. Set SMTP_USER and SMTP_PASS in .env.local to enable.')
  }

  // Always return success — data is logged above regardless of email
  return NextResponse.json({ success: true })
}
