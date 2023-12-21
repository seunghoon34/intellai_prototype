import { getUser } from "@/actions/get-user"
import { db } from "@/lib/db"
import { findAccuracy } from "./findAccuracy"
import questions from "@/lib/questions"
import { findTime } from "./findTime"

export default async function getUserProgress(){
    const user = await getUser()
  const userId = user!.id
  const data = await  db.practiceSession.findMany({
    where:{
      userId: userId,
    }
    
  })
  const practiceids = []
  const practiceSessions = data.map(i => practiceids.push(i.practiceSessionId))
  const section1id: number[] = []
 data.filter((x) => x.section === 1).map(i => section1id.push(i.practiceSessionId))
 const section2id: number[] = []
 data.filter((x) => x.section === 2).map(i => section2id.push(i.practiceSessionId))

  
  
  const performances = await db.practiceQuestion.findMany({
    where:{
      psId: {in: practiceSessions}

    }
  }
  
  )

const section1 = performances.filter(x=> section1id.includes(x.psId))
const section2 = performances.filter(x=> section2id.includes(x.psId))
const s1t1 = section1.filter(x => x.topic === 1)
const s1t2 = section1.filter(x => x.topic === 2)
const s1t3 = section1.filter(x => x.topic === 3)
const s2t1 = section2.filter(x => x.topic === 1)
const s2t2 = section2.filter(x => x.topic === 2)
const s2t3 = section2.filter(x => x.topic === 3)

  

  const overallScore = findAccuracy(performances)/questions.length*100
  const section1Score = findAccuracy(section1)/questions.filter(x => x.section === 1).length*100
  const section2Score = findAccuracy(section2)/questions.filter(x => x.section === 2).length*100
const s1t1Score = findAccuracy(s1t1)/questions.filter(x => x.Topic === 1).length*100
const s1t2Score = findAccuracy(s1t2)/questions.filter(x => x.Topic === 2).length*100
const s1t3Score = findAccuracy(s1t3)/questions.filter(x => x.Topic === 3).length*100
const s2t1Score = findAccuracy(s2t1)/questions.filter(x => x.Topic === 1).length*100
const s2t2Score = findAccuracy(s2t2)/questions.filter(x => x.Topic === 2).length*100
const s2t3Score = findAccuracy(s2t3)/questions.filter(x => x.Topic === 3).length*100

  const overallCorrectTime = findTime(performances).correct
  const overallInorrectTime = findTime(performances).incorrect
  const section1CorrectTime = findTime(section1).correct
  const section1IncorrectTime = findTime(section1).incorrect
  const section2CorrectTime = findTime(section2).correct
  const section2IncorrectTime = findTime(section2).incorrect
  const s1t1CorrectTime = findTime(s1t1).correct
 const s1t1IncorrectTime = findTime(s1t1).incorrect
 const s1t2CorrectTime = findTime(s1t2).correct
 const s1t2IncorrectTime = findTime(s1t2).incorrect
 const s1t3CorrectTime = findTime(s1t3).correct
 const s1t3IncorrectTime = findTime(s1t3).incorrect
 const s2t1CorrectTime = findTime(s2t1).correct
 const s2t1IncorrectTime = findTime(s2t1).incorrect
 const s2t2CorrectTime = findTime(s2t2).correct
 const s2t2IncorrectTime = findTime(s2t2).incorrect
 const s2t3CorrectTime = findTime(s2t3).correct
 const s2t3IncorrectTime = findTime(s2t3).incorrect
  

  return {overallScore: overallScore, 
    overallCorrectTime: overallCorrectTime, 
    overallInorrectTime:overallInorrectTime,  
    section1Score: section1Score, 
    section1CorrectTime: section1CorrectTime,
    section1IncorrectTime:section1IncorrectTime,
    section2Score: section2Score,
    section2CorrectTime: section2CorrectTime,
    section2IncorrectTime:section2IncorrectTime,
    s1t1Score: s1t1Score,
    s1t1CorrectTime: s1t1CorrectTime,
    s1t1IncorrectTime: s1t1IncorrectTime,
    s1t2Score: s1t2Score,
    s1t2CorrectTime: s1t2CorrectTime,
    s1t2IncorrectTime: s1t2IncorrectTime,
    s1t3Score: s1t3Score,
    s1t3CorrectTime: s1t3CorrectTime,
    s1t3IncorrectTime: s1t3IncorrectTime,
    s2t1Score: s2t1Score,
    s2t1CorrectTime: s2t1CorrectTime,
    s2t1IncorrectTime: s2t1IncorrectTime,
    s2t2Score: s2t2Score,
    s2t2CorrectTime: s2t2CorrectTime,
    s2t2IncorrectTime: s2t2IncorrectTime,
    s2t3Score: s2t3Score,
    s2t3CorrectTime: s2t3CorrectTime,
    s2t3IncorrectTime: s2t3IncorrectTime,


}
 
}