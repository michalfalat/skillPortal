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
}

export class ExamsForCategoryViewModel {
    catId: number;
    catName: string;
    exams: ExamViewModel[];
}

