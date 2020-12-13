/*
Mysterious Organism
-------------------
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study. 
*/
// Returns a random DNA base
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
};

const pAequorFactory = (num, seq) => {
    return {
        specimenNum: num,
        dna: seq,
        mutate() {
            let idx = Math.floor(Math.random() * 15);
            let x = this.dna[idx];
            let y = '';
            do {
                y = returnRandBase();
            } while (x === y);
            if (x !== y) {
                this.dna.splice(idx, 1, y);
            }
            return this.dna;
        },
        compareDNA(obj) {
            let match = 0
            for (x = 0; x < this.dna.length; x++) {
                if (this.dna[x] === obj[x]) {
                    match++;
                }
            }
            let percenti = match / obj.length * 100
            let percent = (match / obj.length * 100).toFixed(2);
            return `The two DNA strands have ${percent}% DNA in common.`
        },
        willLikelySurvive() {
            let match = 0
            for (x = 0; x < this.dna.length; x++) {
                if (this.dna[x] === 'C' || this.dna[x] === 'G') {
                    match++;
                }
            }
            let percent = match / this.dna.length * 100;
            if (percent < 60) {
                return false;
            }
            return true;
        }
    }
};


let arr = [];
let count = 0
let match = 0;
let counter = 1
let counters = 0
do {
    let test10 = pAequorFactory(counter, mockUpStrand());
    test11 = test10.willLikelySurvive();
    counter++
    if (test11) {
        match++;
        counters++;
        arr.push({
            test: test10.specimenNum,
            completed: counters,
            dna: test10.dna
        })
    }
} while (match < 30);
console.log(arr);