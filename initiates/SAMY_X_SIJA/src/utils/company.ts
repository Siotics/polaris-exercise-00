export default class Company implements ICompanyClass {
    private Name: string;
    private Workers: ICoworker[] = [];
    private TotalWorker = 0
    private Founder: ILeaderClass

    constructor(name: string, founder: ILeaderClass) {
        this.Name = name;
        this.Founder = founder;
    }

    private validateWorker(worker: IResourceClass): boolean {
        if(this.Workers.find(Dworker => Dworker.Name === worker.getName())) {
            return true
        }
        return false
    }

    addWorker(worker: IResourceClass, type: CoworkerStatusType): string {
        const name = worker.getName();
        if (this.validateWorker(worker)){
            return "Duplicate"
        }
        this.Workers.push({ Name: name, Age: worker.getAge(), Status: type });
        this.TotalWorker++
        return `${name} has been added to ${this.Name}`;
    }

    removeWorker(worker: IResourceClass): string {
        const Name = worker.getName();
        
        if (!this.validateWorker(worker)){
            return "Worker doesn't exist"
        }

        this.Workers.splice(this.Workers.findIndex(Dworker => Dworker.Name === Name), 1);
        this.TotalWorker--
        return `${Name} has been removed from ${this.Name}`;
    }

    modifyWorker(worker: IResourceClass, type: CoworkerStatusType): string {
        const Name = worker.getName();
        const Age = worker.getAge();
        const index = this.Workers.findIndex((worker) => worker.Name === Name);
        if (!this.validateWorker(worker)){
            return "Worker doesn't exist"
        }
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

    getFounder(): string{
        return this.Founder.getName();
    }
}
