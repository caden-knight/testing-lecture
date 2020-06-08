import bankAccount from '../bankAccount';

//better way to organize and structure testing code
describe('Bank account methods and properties', () => {
    //sets functionality to run before tests
    beforeEach(() => {
        bankAccount.balance = 1000
    })
    test('initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    })
    
    test('deposit money function correctly adds to balance', () => {
        bankAccount.depositMoney(1000)
        expect(bankAccount.balance).toBe(2000)
    })

    test('withdraw function correctly alters balance', () => {
        bankAccount.withdrawMoney(500)
        expect(bankAccount.balance).toBe(500)
    })
})