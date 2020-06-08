const { sum, sayHello } = require('../functions');

//basic syntax for a test
//takes two arguments 
//a description of what you are testing
// and a callback
// use function expect with desired method attached to 
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('to return hello', () => {
    expect(sayHello()).toMatch(/hello/)
})

//to check the value of an object is toEqual
/* test('object assignment', () => {
    const data = {one: 1}
    data['two] = 2
    expect(data).toEqual({one: 1, two: 2})
}) */

//array testing
let names = ['steve', 'caden', 'peter']
test('Expect steve to be in avengers array', () => {
    expect(names).toContain('steve')
})

//testing with .not
test('add 7 and 2 to equal 9', () => {
    expect(sum(7,2)).toBe(9)
    expect(sum(7,2)).not.toBeNaN()
})
