interface dataprops{
    practiceQuestionId: number;
    psId: number;
    qId: number;
    choice: string;
    isCorrect: boolean;
    duration: number;
    topic: number;

}

export function findAccuracy(data:dataprops[]){
    const correct = new Set<number>([])
    const correctAns = data.filter((performance) =>{return performance.isCorrect === true})
    correctAns.map(ans => {correct.add(ans.qId)})
    return correct.size

}