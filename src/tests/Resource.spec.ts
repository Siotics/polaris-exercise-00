import { assert } from "chai";
import Resource, { LeaderResource } from "#utils/resource";

describe("Resource Class", function () {
    it("It should display the name", function () {
        const Test = new Resource("Test", 0);
        const expect = "Test";
        assert.equal(Test.getName(), expect);
    });
    it("It should display the age", function () {
        const Test = new Resource("Test", 1);
        const expect = 1;
        assert.equal(Test.getAge(), expect);
    });
});

describe("LeaderResource Class", function () {
    it("It should display the name", function () {
        const Leader = new LeaderResource("Reiss", 1, "international");
        const expect = "Reiss";
        assert.equal(Leader.getName(), expect);
    });
    it("It should display the type", function () {
        const Leader = new LeaderResource("Reiss", 1, "international");
        const expect = "international";
        assert.equal(Leader.getLeaderType(), expect);
    });
    it("It can change leader type", function () {
        const Leader = new LeaderResource("Reiss", 1, "national");
        const text = Leader.setLeaderType("international");
        const expect = "Reiss has changed to international";
        assert.equal(text, expect);
    });
});
