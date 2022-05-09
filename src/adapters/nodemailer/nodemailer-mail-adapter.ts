import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "93c1088f4e11dd",
      pass: "2c4696d722c8d2"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
 async  sendMail({subject , body}: SendMailData) {
        await  transport.sendMail({
            from: 'Equipe do Vitão <victor@bm.rs.gov.br>',
            to: 'Victor <crbm-ssas@bm.rs.gov.br>',
            subject,
            html: body,
        })
  };
}