describe('Primeiro Teste', () => {
    it('Acessa o menu forms', async () => {
        await $('Forms').click()
        expect(await $('~text-input')).toBeDisplayed() 
    });
    
});