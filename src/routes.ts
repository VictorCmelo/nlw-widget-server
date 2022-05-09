import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repositorys';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedbacks-use-case';

export const routes = express.Router();



routes.post('/feedbacks' , async (req, res) =>{

    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const subtmitFeedbackUsecase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter);

    await subtmitFeedbackUsecase.execute({
        type,
        comment,
        screenshot
    })
   
   

    return res.status(201).send();
})