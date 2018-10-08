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
    type: number;
    downloads: number;
    created;
}


export class FilesForCategoryViewModel {
    catId: number;
    catName: string;
    files: FileMetadataModel[];
}
