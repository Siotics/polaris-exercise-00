export default class Company implements ICompanyClass {
    private Name: string;
    private Workers: any[] = [];
    public TotalWorker = 0

    constructor(name: string, founder: ILeaderClass) {
        this.Name = name;
        this.Founder = founder;
    }

    addWorker(worker: IResourceClass, type: CoworkerStatusType): string {
        const name = worker.getName();
        this.Workers.push({ Name: name, Age: worker.getAge(), Status: type });
        return `${name} has been added to ${this.Name}`;
    }

    removeWorker(worker: IResourceClass): string {
        const name = worker.getName();
        this.Workers.splice(0, 1);
        return `${name} has been removed from ${this.Name}`;
    }

    modifyWorker(worker: IResourceClass, type: CoworkerStatusType): string {
        const Name = worker.getName();
        const Age = worker.getAge();
        const index = this.Workers.findIndex((worker) => worker.Name === Name);
        const newWorker: ICoworker = { Name, Age, Status: type };
        this.Workers.splice(index, 1, newWorker);
        return `${Name} has been changed to ${type}`;
    }

    getWorkers(): ICoworker[] {
        return this.Workers;
    }

    getTotalWorker(): number {
        return this.TotalWorker;
    }
}
