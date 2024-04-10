
const { default: testFunc } = await import("../");

describe("check some possible rgba colours", () => {
    test("should fail not enough values", async () => {
        expect(testFunc([1, 2])).toEqual(false);
    });

    test("should fail too many values", async () => {
        expect(testFunc([1, 2, 3, 4, 5])).toEqual(false);
    });

    test("should accept black", async () => {
        expect(testFunc([0, 0, 0])).toEqual(true);
    });

    test("should accept white", async () => {
        expect(testFunc([255, 255, 255])).toEqual(true);
    });

    test("should accept transparent white", async () => {
        expect(testFunc([255, 255, 255, 0.5])).toEqual(true);
    });

    test("should fail red -3", async () => {
        expect(testFunc([-3, 255, 255, 0.5])).toEqual(false);
    });

    test("should fail green 2555", async () => {
        expect(testFunc([255, 2555, 255, 0.5])).toEqual(false);
    });

    test("should fail blue 256", async () => {
        expect(testFunc([255, 255, 256, 1])).toEqual(false);
    });

    test("should fail alpha 2", async () => {
        expect(testFunc([255, 255, 255, 2])).toEqual(false);
    });
});
