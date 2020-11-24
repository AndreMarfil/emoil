import { inject, injectable } from 'tsyringe';
import nodemailer from 'nodemailer';

import IOilChangeRepository from '../../OilChange/interfaces/repositories/IOilChangeRepository';

@injectable()
class SendMailService {
  constructor(
    @inject('OilChangeRepository')
    private oilChangeRepository: IOilChangeRepository,
  ) {}

  public async execute(): Promise<void> {
    const date = new Date();

    const todayExpirationOilChange = await this.oilChangeRepository.getOilChangeByDate(
      date,
    );

    const sender = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'mensagememoil@gmail.com',
        pass: 'emoil12345',
      },
    });

    if (todayExpirationOilChange.length <= 0) {
      console.log('Não há email para ser enviado.');
      return;
    }

    todayExpirationOilChange.forEach(async oilChange => {
      const emailToBeSent = {
        to: oilChange.customer.email,
        subject: 'Troca de óleo',
        text: `Olá ${oilChange.customer.name}, somos a emoil e estamos passando para avisar que seu produto ${oilChange.oil.name} está prestes a vencer. Que tal dar uma passadinha nas redes credenciadas? `,
      };
      console.log(`Enviando para ${oilChange.customer.email}`);
      await sender.sendMail(emailToBeSent);
    });
  }
}

export default SendMailService;
