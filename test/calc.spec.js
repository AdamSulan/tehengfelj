describe('Felszínszámítás tesztelése', () => {
    it('Sugár: 30, Magasság: 10-re: Felszín: 7539.82', () => {
        let act=calcSurface(30,10);
        expect(act).toBeCloseTo(7539.82,0.1);
    });
    it('Sugár: 12.5, Magasság: 24.8-re: Felszín: 2929.54', () => {
        let act=calcSurface(12.5,24.8);
        expect(act).toBeCloseTo(2929.54,0.1);
    });
    it('Sugár: 3.14, Magasság: 2-re: Felszín: 101.41', () => {
        let act=calcSurface(3.14,2);
        expect(act).toBeCloseTo(101.41,0.1);
    });
});