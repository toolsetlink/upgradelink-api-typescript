"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
describe('Client', () => {
    describe('timeRFC3339', () => {
        let originalDate;
        beforeAll(() => {
            // Save original Date
            originalDate = global.Date;
        });
        afterEach(() => {
            // Restore original Date after each test
            global.Date = originalDate;
        });
        it('should return correct RFC3339 format with positive timezone offset', () => {
            // Mock Date to return fixed values
            const mockDate = new Date('2023-01-15T12:30:45+05:30');
            global.Date = jest.fn(() => mockDate);
            global.Date.prototype.getTimezoneOffset = jest.fn(() => -330); // +05:30
            const result = client_1.Client.timeRFC3339();
            expect(result).toBe('2023-01-15T12:30:45+05:30');
        });
        it('should return correct RFC3339 format with negative timezone offset', () => {
            const mockDate = new Date('2023-06-20T18:15:30-07:00');
            global.Date = jest.fn(() => mockDate);
            global.Date.prototype.getTimezoneOffset = jest.fn(() => 420); // -07:00
            const result = client_1.Client.timeRFC3339();
            expect(result).toBe('2023-06-20T18:15:30-07:00');
        });
        it('should pad single-digit values with zeros', () => {
            const mockDate = new Date('2023-09-05T08:05:09+00:00');
            global.Date = jest.fn(() => mockDate);
            global.Date.prototype.getTimezoneOffset = jest.fn(() => 0); // +00:00
            const result = client_1.Client.timeRFC3339();
            expect(result).toBe('2023-09-05T08:05:09+00:00');
        });
        it('should handle midnight time correctly', () => {
            const mockDate = new Date('2023-12-31T00:00:00+09:00');
            global.Date = jest.fn(() => mockDate);
            global.Date.prototype.getTimezoneOffset = jest.fn(() => -540); // +09:00
            const result = client_1.Client.timeRFC3339();
            expect(result).toBe('2023-12-31T00:00:00+09:00');
        });
        it('should handle end of month correctly', () => {
            const mockDate = new Date('2023-01-31T23:59:59-12:00');
            global.Date = jest.fn(() => mockDate);
            global.Date.prototype.getTimezoneOffset = jest.fn(() => 720); // -12:00
            const result = client_1.Client.timeRFC3339();
            expect(result).toBe('2023-01-31T23:59:59-12:00');
        });
        it('should handle timezone minutes that are not whole hours', () => {
            const mockDate = new Date('2023-03-15T15:45:30+05:45');
            global.Date = jest.fn(() => mockDate);
            global.Date.prototype.getTimezoneOffset = jest.fn(() => -345); // +05:45
            const result = client_1.Client.timeRFC3339();
            expect(result).toBe('2023-03-15T15:45:30+05:45');
        });
    });
});
//# sourceMappingURL=client.test.js.map