import { getCurrencies } from './getCurrencies';
describe('getCurrencies', () => {
    it('should return the spported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('INR');
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
    });
});