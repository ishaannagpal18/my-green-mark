import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const data = await req.json()

  console.log('=== NEW CONTACT FORM SUBMISSION ===')
  console.log(JSON.stringify(data, null, 2))
  console.log('===================================')

  if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your_16_char_app_password_here') {
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

      const html = `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #D6E8D2;border-radius:14px;overflow:hidden;">
          <div style="background:#06402B;padding:24px 32px;">
            <h2 style="color:#F4B942;margin:0;font-size:22px;">📩 New Contact Form Enquiry</h2>
            <p style="color:#A8C5A3;margin:6px 0 0;font-size:13px;">mygreenmark.in · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
          <div style="padding:28px 32px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr style="border-bottom:1px solid #F0F0F0;">
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;width:38%;">Name</td>
                <td style="padding:10px 8px;color:#1A1A1A;">${data.name || '—'}</td>
              </tr>
              <tr style="border-bottom:1px solid #F0F0F0;">
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;">Company / Org</td>
                <td style="padding:10px 8px;color:#1A1A1A;">${data.company || '—'}</td>
              </tr>
              <tr style="border-bottom:1px solid #F0F0F0;">
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;">Email</td>
                <td style="padding:10px 8px;color:#1A1A1A;"><a href="mailto:${data.email}" style="color:#06402B;">${data.email || '—'}</a></td>
              </tr>
              <tr style="border-bottom:1px solid #F0F0F0;">
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;">Phone</td>
                <td style="padding:10px 8px;color:#1A1A1A;">${data.phone || '—'}</td>
              </tr>
              <tr style="border-bottom:1px solid #F0F0F0;">
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;">Interested In</td>
                <td style="padding:10px 8px;color:#1A1A1A;font-weight:600;color:#06402B;">${data.service || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 8px;color:#3A8A5C;font-weight:600;vertical-align:top;">Message</td>
                <td style="padding:10px 8px;color:#1A1A1A;line-height:1.6;">${data.message || '—'}</td>
              </tr>
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
        from: `"My Green Mark Website" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL ?? 'satpalswaroop@gmail.com',
        replyTo: data.email,
        subject: `New Enquiry: ${data.service || 'General'} — ${data.name}`,
        html,
      })

      // Confirmation email to the user
      if (data.email) {
        const confirmHtml = `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #D6E8D2;border-radius:14px;overflow:hidden;">
            <div style="background:#06402B;padding:28px 32px;text-align:center;">
              <h1 style="color:#F4B942;margin:0;font-size:24px;">My Green Mark</h1>
              <p style="color:#A8C5A3;margin:8px 0 0;font-size:13px;">mygreenmark.in</p>
            </div>
            <div style="padding:32px;background:#fff;">
              <h2 style="color:#06402B;font-size:20px;margin:0 0 12px;">Thank you, ${data.name || 'there'}! 🌿</h2>
              <p style="color:#3A8A5C;font-size:15px;line-height:1.7;margin:0 0 20px;">
                We've received your enquiry about <strong style="color:#06402B;">${data.service || 'our services'}</strong> and will get back to you within <strong style="color:#06402B;">24–48 hours</strong>.
              </p>
              <div style="background:#F7EDE2;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
                <p style="color:#06402B;font-size:13px;margin:0 0 6px;font-weight:700;">Your message summary:</p>
                <p style="color:#3A8A5C;font-size:13px;margin:0;line-height:1.6;">${data.message || '—'}</p>
              </div>
              <p style="color:#555;font-size:13px;line-height:1.7;margin:0 0 24px;">
                In the meantime, feel free to explore our services or reach out to us directly:
              </p>
              <div style="text-align:center;margin-bottom:28px;">
                <a href="https://mygreenmark.in" style="display:inline-block;background:#06402B;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;">Visit Our Website →</a>
              </div>
              <table style="width:100%;font-size:13px;color:#3A8A5C;">
                <tr>
                  <td style="padding:4px 0;">📧</td>
                  <td style="padding:4px 8px;"><a href="mailto:info@mygreenmark.in" style="color:#06402B;">info@mygreenmark.in</a></td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">📱</td>
                  <td style="padding:4px 8px;"><a href="tel:+919217917695" style="color:#06402B;">+91 92179 17695</a></td>
                </tr>
              </table>
            </div>
            <div style="background:#F7EDE2;padding:16px 32px;text-align:center;">
              <p style="color:#06402B;font-size:12px;margin:0;font-weight:600;">My Green Mark · Building a Transparent Future Through Sustainability</p>
              <p style="color:#06402B;font-size:11px;margin:4px 0 0;opacity:0.7;">RZ-41/14, Block B, Sadh Nagar, Palam, New Delhi 110045</p>
            </div>
          </div>
        `
        await transporter.sendMail({
          from: `"My Green Mark" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: `We've received your enquiry — My Green Mark`,
          html: confirmHtml,
        })
      }

      console.log('Contact email sent for:', data.name)
    } catch (err) {
      console.error('Contact email failed (data logged above):', err)
    }
  }

  return NextResponse.json({ success: true })
}
