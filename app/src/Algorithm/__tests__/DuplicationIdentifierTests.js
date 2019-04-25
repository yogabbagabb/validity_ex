import {
    readData,
    sortData,
    computeSimilarityScore,
    computeMetaphoneFromRows,
    detectSimilarity,
    markIfDuplicates
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
    test('Compute Metaphone from Rows', () => {
        let rowOne = ["1", "Donalt", "Canter", "Gottlieb Group", "dcanter0@nydailynews.com", "9 Homewood Alley", "", "50335", "Des Moines", "Iowa", "IA", "515-601-4495"]
        let rowTwo = ["2", "Daphene", "McArthur", "West, Schimmel and Rath", "dmcarthur1@twitter.com", "43 Grover Parkway", "", "30311", "Atlanta", "Georgia", "GA", "770-271-7837"]
        let rowsToCompare = [1,2]
        let metaphoneArray = computeMetaphoneFromRows(rowOne, rowTwo, rowsToCompare)
        console.log(metaphoneArray)

        rowsToCompare = [5, 6, 7]
        metaphoneArray = computeMetaphoneFromRows(rowOne, rowTwo, rowsToCompare)
        expect(metaphoneArray).toBe(false)
    })

    test("Compute similarity score", () => {
        let metaphoneArray = [ 'TNLTKNTR', 'TFNMKR0R' ]
        let score = computeSimilarityScore(metaphoneArray[0], metaphoneArray[1])
        console.log(score)
        score = computeSimilarityScore(metaphoneArray[0], metaphoneArray[0])
        console.log(score)
        expect(score).toEqual(1)
    })

    test("Compute equality of rows", () => {
        let rowOne = ["4", "Kale", "Gipp", "Klein Group", "kgipp3@360.cn", "4985 Menomonie Drive", "", "94975", "Petaluma", "California", "CA", "707-840-2551"]
        let rowTwo = ["4", "Kale", "Gipp", "The Klein Group", "kgipp3@360.cn", "4985 Menomonie Drive", "", "94975", "Petaluma", "California", "CA", "707-840-2551"]
        let acceptanceThreshold = 0.7
        let rowsToCompare = [[1,2], [4], [5,6,7,8,9,10],[11]]
        let outcome = detectSimilarity(rowOne, rowTwo, acceptanceThreshold, rowsToCompare)
        console.log(outcome)

    })
    test("Mark if duplicates", () => {
        let data = [["4", "Kale", "Gipp", "Klein Group", "kgipp3@360.cn", "4985 Menomonie Drive", "", "94975", "Petaluma", "California", "CA", "707-840-2551"],
            ["4", "Kale", "Gipp", "The Klein Group", "kgipp3@360.cn", "4985 Menomonie Drive", "", "94975", "Petaluma", "California", "CA", "707-840-2551"]]
        let acceptanceThreshold = 0.7
        let overallAccThreshold = 0.4
        let rowsToCompare = [[1,2], [4], [5,6,7,8,9,10],[11]]
        let sets = new StaticDisjointSet(data.length)
        console.log(sets)
        markIfDuplicates(data, 0, 1, acceptanceThreshold, rowsToCompare, overallAccThreshold, sets)
        console.log(sets)

    })
