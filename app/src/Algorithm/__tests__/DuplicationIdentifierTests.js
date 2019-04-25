import {
    readData,
    sortData,
} from "../DuplicationIdentifier";

describe('my beverage', () => {
    test('is yum', () => {
        expect(1).toBe(1);
    })
})

describe('Duplication Identifier Methods', () => {
    test('Reads Data Correctly', () => {
        let data = readData()
        console.log(data)
    })
    test('Sorts data correctly', () => {
        let data = sortData()
        console.log(data)
    })
