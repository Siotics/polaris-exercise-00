export default class Resource implements IResourceClass {
    constructor(name: string, age: number) {
        this.Name = name;
        this.Age = age;
    }

    getName(): string {
        return this.Name;
    }

    getAge(): number {
        return this.Age;
    }
}

export class LeaderResource{
    private LeaderType: LeaderType;
    constructor(name: string, age: number, type: LeaderType) {
        this.LeaderType = type;
        this.Name = name;
        this.Age = age;
    }

    getLeaderType(): LeaderType {
        return this.LeaderType;
    }
}
