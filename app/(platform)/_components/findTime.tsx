interface dataprops{
    practiceQuestionId: number;
    psId: number;
    qId: number;
    choice: string;
    isCorrect: boolean;
    duration: number;
    topic: number;

}

export function findTime(data:dataprops[]){
    function findSum(myNums:number[]){
        let sum = 0
        myNums.forEach( num => {
          sum += num;
        })
        return sum;
      }
    const correct: number[] = []
    const inCorrect: number[] = []
    const cr = data.filter(x => x.isCorrect === true)
    cr.map(x => correct.push(x.duration))
    const icr = data.filter(x => x.isCorrect === false)
    icr.map(x => inCorrect.push(x.duration))
    const correctTIme = Math.round(findSum(correct)/correct.length)
    const incorrectTIme = Math.round(findSum(inCorrect)/icr.length)
    return {correct: correctTIme, incorrect: incorrectTIme}

}