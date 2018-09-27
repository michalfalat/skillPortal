import { AnswerAddModel } from './AnswerModels';
export class QuestionAddModel {

    id: number;
    text: string;
    image;
    answers: AnswerAddModel[];
}
