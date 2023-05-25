describe('Bemenet ellenőrzése', () => {
    it('Sugár: 30 inputként',()=>{
        let act=isGoodInput(30);
        expect(act).toBe(true);
    })
    it('Magasság: 10 inputként',()=>{
        let act=isGoodInput(10);
        expect(act).toBe(true);
    })
    it('Sugár: -30 inputként',()=>{
        let act=isGoodInput(-30);
        expect(act).toBe(false);
    })
    it('Magasság: -10 inputként',()=>{
        let act=isGoodInput(-10);
        expect(act).toBe(false);
    })
    it('Sugár: 12.5 inputként',()=>{
        let act=isGoodInput(12.5);
        expect(act).toBe(true);
    })
    it('Magasság: 24.8 inputként',()=>{
        let act=isGoodInput(24.8);
        expect(act).toBe(true);
    })
    it('Sugár: "a" inputként',()=>{
        let act=isGoodInput("a");
        expect(act).toBe(false);
    })
    it('Magasság: "c" inputként',()=>{
        let act=isGoodInput("c");
        expect(act).toBe(false);
    })
})