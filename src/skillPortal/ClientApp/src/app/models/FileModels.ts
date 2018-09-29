export class FileAddModel {
    id: number;
    catId: number;
    name: string;
    description: string;
    file;
}

export class FileMetadataModel {
    id: number;
    name: string;
    description: string;
    Created;
}


export class FilesForCategoryViewModel {
    catId: number;
    catName: string;
    files: FileMetadataModel[];
}
