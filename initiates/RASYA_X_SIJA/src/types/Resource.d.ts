declare type CoworkerStatusType = "training" | "resigned" | "hired";

declare type LeaderType = "regional" | "national" | "international";

declare interface ICoworker {
    Name: string;
    Age: number;
    Status: CoworkerStatusType;
}

declare interface IResourceClass {
    getName(): string;
    getAge(): number;
}

declare interface ILeader {
    LeaderType: LeaderType;
}

declare interface ILeaderClass extends IResourceClass{
    getLeaderType(): LeaderType;
    setLeaderType(type: LeaderType): string;
}