import { ExamViewModel } from './ExamModels';

export class CategoryAddModel {
    id: number;
    name: string;
    description: string;
}

export class CategoryViewModel {
    id: number;
    name: string;
    description: string;
    examsCount: number;
    filesCount: number;
    ratingsCount: number;
    rating: number;
    exams: ExamViewModel;
}
