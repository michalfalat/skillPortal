import { QuestionAddModel } from './QuestionModels';
export class ExamViewModel {
    id: number;
    name: string;
    description: string;
    questionsCount: number;
}


export class ExamAddModel {
    id: number;
    name: string;
    description: string;
    questions: QuestionAddModel[];
}

export class ExamsForCategoryViewModel {
    catId: number;
    catName: string;
    exams: ExamViewModel[];
}

