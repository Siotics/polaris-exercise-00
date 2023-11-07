import { assert } from "chai";
import Resource, { LeaderResource } from "#utils/resource";
import Company from "#utils/company";

const Founder = new LeaderResource("Reiss", 25, "national");
const Worker1 = new Resource("Abibi", 15);
const Worker2 = new Resource("Shamael", 25);

describe("Company Class", function () {
    it("It should display Founder name", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        const expect = "Reiss";
        assert.equal(ParadisCompany.getFounder(), expect);
    });

    it("It should add worker", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        ParadisCompany.addWorker(Worker1, "hired");
        const expect = 1;
        assert.equal(ParadisCompany.getTotalWorker(), expect);
    });

    it("It should not add duplicate worker", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        ParadisCompany.addWorker(Worker1, "hired");
        ParadisCompany.addWorker(Worker1, "resigned");
        const expect = 1;
        assert.equal(ParadisCompany.getTotalWorker(), expect);
    });

    it("It should remove worker", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        ParadisCompany.addWorker(Worker1, "hired");
        ParadisCompany.addWorker(Worker2, "training");
        ParadisCompany.removeWorker(Worker2);
        const expect = 1;
        assert.equal(ParadisCompany.getTotalWorker(), expect);
    });

    it("It should modify worker", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        ParadisCompany.addWorker(Worker1, "training");
        ParadisCompany.modifyWorker(Worker1, "hired");
        const expect: ICoworker = { Name: "Abibi", Age: 15, Status: "hired" };
        assert.deepEqual(ParadisCompany.getWorkers()[0], expect);
    });

    it("It shouldn't remove inexisting worker", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        const text = ParadisCompany.removeWorker(Worker1);
        const expect = "Worker doesn't exist";
        assert.equal(text, expect);
    });

    it("It shouldn't modify inexisting worker", function () {
        const ParadisCompany = new Company("ParadisCompany", Founder);
        const text = ParadisCompany.modifyWorker(Worker1, "resigned");
        const expect = "Worker doesn't exist";
        assert.equal(text, expect);
    });
});
