declare type CoworkerStatusType = "training" | "resigned" | "hired";

declare type LeaderType = "regional" | "national" | "international";

declare interface ICoworker {
    Name: string;
    Age: number;
    Status: CoworkerStatusType;
}

declare interface ILeader extends ICoworker {
    LeaderType: LeaderType;
}

declare interface IResourceClass {
    getName(): string;
    getAge(): number;
}

declare interface ILeaderClass {
    getLeaderType(): LeaderType;
    setLeaderType(type: LeaderType): string;
}

declare interface ILeaderClass extends IResourceClass {}
