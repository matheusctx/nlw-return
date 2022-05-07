import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5a8dfa9d909468",
    pass: "bcf93e89fa85c8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Matheus Teixeira <mathcardosoteixeira@gmail.com>',
        subject,
        html: body,
      });
  }
}