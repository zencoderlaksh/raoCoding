import nodemailer from 'nodemailer';

let transporter = null;

const getTransporter = () => {
  if (!transporter && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return transporter;
};

/**
 * Send meeting notification to RAO Technologies and confirmation to attendee
 */
export const sendMeetingEmail = async ({ name, email, phone, meetingType, preferredDate, preferredTime, agenda }) => {
  const mailer = getTransporter();
  if (!mailer) {
    console.warn('⚠️ Mailer not configured. Skipping meeting notification email.');
    return false;
  }

  try {
    // 1. Notify RAO Technologies Team
    const adminMailOptions = {
      from: `"RAO Booking Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📅 New Meeting Booked: ${meetingType} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0b0b0b; color: #ffffff; padding: 24px; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #ff5a28; margin-top: 0;">🚀 New Meeting Request Received</h2>
          <p style="color: #cccccc;">A new meeting has been booked via the RAO Technologies portal.</p>
          <hr style="border: 0; border-top: 1px solid #333333; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; color: #ffffff;">
            <tr><td style="padding: 8px 0; color: #888;">Name:</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff5a28;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Meeting Track:</td><td style="padding: 8px 0; font-weight: bold; color: #10b981;">${meetingType}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Requested Date:</td><td style="padding: 8px 0;">${preferredDate || 'Earliest Available'}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Requested Time:</td><td style="padding: 8px 0;">${preferredTime || 'Flexible'}</td></tr>
          </table>
          ${agenda ? `
            <div style="margin-top: 20px; padding: 14px; background: #161616; border-left: 3px solid #ff5a28; border-radius: 6px;">
              <p style="margin: 0; font-size: 13px; color: #888;">Agenda / Requirements:</p>
              <p style="margin: 6px 0 0 0; color: #eee;">${agenda}</p>
            </div>
          ` : ''}
          <div style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">
            RAO Technologies · Enterprise Tech & Engineering Training
          </div>
        </div>
      `,
    };

    // 2. Send acknowledgment to attendee
    const attendeeMailOptions = {
      from: `"RAO Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Meeting Confirmed: RAO Technologies (${meetingType})`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0b0b0b; color: #ffffff; padding: 24px; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #ff5a28; margin-top: 0;">Meeting Request Received!</h2>
          <p style="color: #cccccc;">Hi <strong>${name}</strong>,</p>
          <p style="color: #cccccc; line-height: 1.6;">
            Thank you for scheduling a session with <strong>RAO Technologies</strong> for <strong>${meetingType}</strong>.
            Our team has received your request and will reach out with calendar invitation links or WhatsApp coordination shortly.
          </p>
          <div style="margin: 20px 0; padding: 16px; background: #161616; border: 1px solid #333; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #ff5a28;">Meeting Summary</p>
            <p style="margin: 4px 0; color: #bbb; font-size: 14px;"><strong>Date:</strong> ${preferredDate || 'Earliest Slot'}</p>
            <p style="margin: 4px 0; color: #bbb; font-size: 14px;"><strong>Time:</strong> ${preferredTime || 'Business Hours'}</p>
            <p style="margin: 4px 0; color: #bbb; font-size: 14px;"><strong>Location:</strong> Google Meet / Direct Call</p>
          </div>
          <p style="color: #888; font-size: 13px;">Need urgent assistance? Reply directly to this email (<a href="mailto:raotechnologies5@gmail.com" style="color: #ff5a28;">raotechnologies5@gmail.com</a>) or WhatsApp us at +91 7906803735.</p>
          <div style="margin-top: 30px; font-size: 12px; color: #666; text-align: center; border-top: 1px solid #222; pt: 16px;">
            RAO Technologies · Jaipur, Rajasthan · raotechnologies5@gmail.com
          </div>
        </div>
      `,
    };

    await Promise.allSettled([
      mailer.sendMail(adminMailOptions),
      mailer.sendMail(attendeeMailOptions),
    ]);
    return true;
  } catch (error) {
    console.error('Mail service error:', error.message);
    return false;
  }
};

export default {
  sendMeetingEmail,
};
