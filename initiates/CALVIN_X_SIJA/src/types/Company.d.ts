declare interface ICompany {
    Name: string;
    TotalWorker: number;
    IsValid: boolean;
    Founder: ILeader;
}

declare interface ICompanyClass {
    addWorker(worker: IResourceClass, type: CoworkerStatusType): string;
    removeWorker(worker: IResourceClass): string;
    modifyWorker(worker: IResourceClass, type: CoworkerStatusType): string;
    getFounder(): string;
    getWorkers(): ICoworker[];
    getTotalWorker(): number;
}
