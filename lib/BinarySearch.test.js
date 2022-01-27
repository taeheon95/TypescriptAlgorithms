"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinarySearch_1 = __importDefault(require("./BinarySearch"));
describe("binarySearch", () => {
    it('should find', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const idx = BinarySearch_1.default(array, 10, 0, 20);
        expect(idx).toBe(9);
    });
    it('should not find', () => {
    });
});
