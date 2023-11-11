export default class Company implements ICompanyClass {
    private Name: string;
    private Workers: ICoworker[] = [];
    private Founder: ILeaderClass;
    public TotalWorker = 0

    constructor(name: string, founder: ILeaderClass) {
        this.Name = name;
        this.Founder = founder;
    }

    addWorker(worker: IResourceClass, type: CoworkerStatusType): string {
        const name = worker.getName();

        if (this.Workers.find(oldWorker => oldWorker.Name === name)){
            return `${name} already exists in ${this.Name}`;
        }
        
        this.Workers.push(
            { 
                Name: name, 
                Age: worker.getAge(), 
                Status: type
            }
        );

        this.TotalWorker++
        return `${name} has been added to ${this.Name}`;
    }

    removeWorker(worker: IResourceClass): string {
        const name = worker.getName();

        if (!this.Workers.find(oldWorker => oldWorker.Name === name)){
            return "Worker doesn't exist";
        }

        this.Workers.splice(this.Workers.findIndex(worker => {
            worker.Name === name;
        }), 1);
        this.TotalWorker--
        return `${name} has been removed from ${this.Name}`;
    }

    modifyWorker(worker: IResourceClass, type: CoworkerStatusType): string {
        const name = worker.getName();
        
        if (!this.Workers.find(oldWorker => oldWorker.Name === name)){
            return "Worker doesn't exist";
        }
        this.Workers.splice(
            this.Workers.findIndex((worker) => worker.Name === name), 
            1, 
            { 
                Name: name, 
                Age: worker.getAge(), 
                Status: type 
            }
        );
        return `${name} has been changed to ${type}`;
    }

    getWorkers(): ICoworker[] {
        return this.Workers;
    }

    getTotalWorker(): number {
        return this.TotalWorker;
    }

    getFounder(): string {
        return this.Founder.getName()
    }
}
