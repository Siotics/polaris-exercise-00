export default class Resource implements IResourceClass {
    private Name: string;
    private Age: number;
    
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

export class LeaderResource extends Resource {
    private LeaderType: LeaderType;

    constructor(name: string, age: number, type: LeaderType) {
        super(name, age);
        this.LeaderType = type;
    }
    
    getLeaderType(): LeaderType {
        return this.LeaderType;
    }
    
    setLeaderType(type: LeaderType): string {
        this.LeaderType = type;
        return `${this.getName()} has changed to ${type}`;
    }
    
}