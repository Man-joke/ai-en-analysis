import { defineEventHandler, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

const studentData = {
  success: true,
  dataSize: 6,
  timestamp: "2024-03-08T10:40:28.46061",
  data: [
    {
      dailyAssignmentId: 1,
      dailyAssignmentDate: "3\uC6D4 1\uC77C \uD654\uC694\uC77C",
      dailyAssignmentStatus: "DONE",
      completedWordCount: 24,
      completedPhraseCount: 6,
      completionTime: "00:00",
      completionStamp: "01"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 2,
      dailyAssignmentDate: "3\uC6D4 2\uC77C \uC218\uC694\uC77C",
      dailyAssignmentStatus: "READY",
      completedWordCount: 2,
      completedPhraseCount: 4,
      completionTime: "02:00",
      completionStamp: "01"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "3\uC6D4 3\uC77C \uBAA9\uC694\uC77C",
      dailyAssignmentStatus: "DONE",
      completedWordCount: 5,
      completedPhraseCount: 6,
      completionTime: "01:11",
      completionStamp: "02"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 2,
      dailyAssignmentDate: "3\uC6D4 2\uC77C \uC218\uC694\uC77C",
      dailyAssignmentStatus: "READY",
      completedWordCount: 4,
      completedPhraseCount: 3,
      completionTime: "04:10",
      completionStamp: "00"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "3\uC6D4 3\uC77C \uBAA9\uC694\uC77C",
      dailyAssignmentStatus: "DONE",
      completedWordCount: 2,
      completedPhraseCount: 6,
      completionTime: "05:00",
      completionStamp: "02"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 2,
      dailyAssignmentDate: "3\uC6D4 2\uC77C \uC218\uC694\uC77C",
      dailyAssignmentStatus: "READY",
      completedWordCount: 2,
      completedPhraseCount: 6,
      completionTime: "01:22",
      completionStamp: "01"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "3\uC6D4 3\uC77C \uBAA9\uC694\uC77C",
      dailyAssignmentStatus: "READY",
      completedWordCount: 2,
      completedPhraseCount: 6,
      completionTime: "03:10",
      completionStamp: "01"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 2,
      dailyAssignmentDate: "3\uC6D4 2\uC77C \uC218\uC694\uC77C",
      dailyAssignmentStatus: "READY",
      completedWordCount: 2,
      completedPhraseCount: 6,
      completionTime: "02:10",
      completionStamp: "01"
      //00:없음, 01:굿잡, 02:미완료
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "3\uC6D4 3\uC77C \uBAA9\uC694\uC77C",
      dailyAssignmentStatus: "READY",
      completedWordCount: 2,
      completedPhraseCount: 6,
      completionTime: "04:10",
      completionStamp: "01"
      //00:없음, 01:굿잡, 02:미완료
    }
  ]
};
const teacherData = {
  success: true,
  dataSize: 6,
  timestamp: "2024-03-08T10:40:28.46061",
  data: [
    {
      dailyAssignmentId: 1,
      dailyAssignmentDate: "4\uC6D4 4\uC77C \uD654\uC694\uC77C",
      compltedStudents: 18,
      incompleteStudents: 8,
      averageWordsComplted: 4,
      averagePhrasesComplted: 3
    },
    {
      dailyAssignmentId: 2,
      dailyAssignmentDate: "4\uC6D4 5\uC77C \uD654\uC694\uC77C",
      compltedStudents: 20,
      incompleteStudents: 6,
      averageWordsComplted: 5,
      averagePhrasesComplted: 4
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "4\uC6D4 6\uC77C \uD654\uC694\uC77C",
      compltedStudents: 22,
      incompleteStudents: 0,
      averageWordsComplted: 6,
      averagePhrasesComplted: 5
    },
    {
      dailyAssignmentId: 4,
      dailyAssignmentDate: "4\uC6D4 5\uC77C \uD654\uC694\uC77C",
      compltedStudents: 20,
      incompleteStudents: 6,
      averageWordsComplted: 5,
      averagePhrasesComplted: 4
    },
    {
      dailyAssignmentId: 5,
      dailyAssignmentDate: "4\uC6D4 7\uC77C \uD654\uC694\uC77C",
      compltedStudents: 22,
      incompleteStudents: 4,
      averageWordsComplted: 6,
      averagePhrasesComplted: 5
    },
    {
      dailyAssignmentId: 6,
      dailyAssignmentDate: "4\uC6D4 8\uC77C \uD654\uC694\uC77C",
      compltedStudents: 20,
      incompleteStudents: 6,
      averageWordsComplted: 5,
      averagePhrasesComplted: 4
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "4\uC6D4 9\uC77C \uD654\uC694\uC77C",
      compltedStudents: 22,
      incompleteStudents: 4,
      averageWordsComplted: 6,
      averagePhrasesComplted: 5
    }
  ]
};
const detailData = {
  success: true,
  dataSize: 6,
  timestamp: "2024-03-08T10:40:28.46061",
  data: [
    {
      dailyAssignmentId: 1,
      dailyAssignmentDate: "4\uC6D4 4\uC77C \uC6D4\uC694\uC77C",
      dailyAssignmentWords: "a/p/p/l/e, h/e/l/l/o, b/y/e, w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e"
    },
    {
      dailyAssignmentId: 2,
      dailyAssignmentDate: "4\uC6D4 5\uC77C \uC6D4\uC694\uC77C",
      dailyAssignmentWords: "h/i, h/e/l/l/o, b/y/e, w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e"
    },
    {
      dailyAssignmentId: 3,
      dailyAssignmentDate: "4\uC6D4 6\uC77C \uD654\uC694\uC77C",
      dailyAssignmentWords: "b/y/e, w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o"
    },
    {
      dailyAssignmentId: 4,
      dailyAssignmentDate: "4\uC6D4 7\uC77C \uC218\uC694\uC77C",
      dailyAssignmentWords: "w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o, b/y/e"
    },
    {
      dailyAssignmentId: 5,
      dailyAssignmentDate: "4\uC6D4 8\uC77C \uBAA9\uC694\uC77C",
      dailyAssignmentWords: "w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o, b/y/e"
    },
    {
      dailyAssignmentId: 6,
      dailyAssignmentDate: "4\uC6D4 9\uC77C \uAE08\uC694\uC77C",
      dailyAssignmentWords: "w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o, b/y/e"
    }
  ]
};
const detailRightData = {
  success: true,
  dataSize: 6,
  timestamp: "2024-03-08T10:40:28.46061",
  data: [
    {
      dailyAssignmentDate: "3\uC6D4 1\uC77C \uBAA9\uC694\uC77C",
      incompleteStudents: [
        {
          incompleteStudentNumber: 1,
          incompleteStudentName: "\uAE40\uCCA0\uC218"
        },
        {
          incompleteStudentNumber: 2,
          incompleteStudentName: "\uAE40\uC601\uD76C"
        },
        {
          incompleteStudentNumber: 3,
          incompleteStudentName: "\uBC15\uCCA0\uC218"
        }
      ],
      activities: [
        {
          word: "apple",
          correctStudents: [
            {
              correctStudentNumber: 1,
              correctStudentName: "\uC548\uC601\uD559"
            },
            {
              correctStudentNumber: 3,
              correctStudentName: "\uBC15\uCCA0\uC218"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            },
            {
              correctStudentNumber: 2,
              correctStudentName: "\uBC15\uCCA0\uBBFC"
            }
          ],
          incorrectStudents: [
            {
              incorrectStudentNumber: 1,
              incorrectStudentName: "\uAE40\uCCA0\uC218"
            },
            {
              incorrectStudentNumber: 2,
              incorrectStudentName: "\uAE40\uC601\uD76C"
            }
          ]
        },
        {
          word: "banana",
          correctStudents: [
            {
              correctStudentNumber: 1,
              correctStudentName: "\uAE40\uCCA0\uC218"
            },
            {
              correctStudentNumber: 3,
              correctStudentName: "\uBC15\uCCA0\uC218"
            }
          ],
          incorrectStudents: [
            {
              incorrectStudentNumber: 2,
              incorrectStudentName: "\uAE40\uC601\uD76C"
            }
          ]
        }
      ]
    }
  ]
};
const aiList = {
  success: true,
  dataSize: 6,
  timestamp: "2024-03-08T10:40:28.46061",
  data: [
    {
      chapterId: "1",
      chapterNm: "Lesson 1. How Are You?",
      problemsetId: "1",
      lessonId: "1",
      cntProblemStudent: "20",
      doneCnt: "5",
      nDoneCnt: "5",
      avgCompletion: "50"
    },
    {
      chapterId: "1",
      chapterNm: "Lesson 2. What is your name?",
      problemsetId: "1",
      lessonId: "1",
      cntProblemStudent: "30",
      doneCnt: "5",
      nDoneCnt: "5",
      avgCompletion: "50"
    },
    {
      chapterId: "4",
      chapterNm: "Lesson 3. What kind of your jab?",
      problemsetId: "1",
      lessonId: "1",
      cntProblemStudent: "10",
      doneCnt: "5",
      nDoneCnt: "5",
      avgCompletion: "50"
    },
    {
      chapterId: "3",
      chapterNm: "Lesson 4. I love you?",
      problemsetId: "1",
      lessonId: "1",
      cntProblemStudent: "15",
      doneCnt: "5",
      nDoneCnt: "5",
      avgCompletion: "50"
    },
    {
      chapterId: "2",
      chapterNm: "Lesson 2. I\u2019m a Pilot",
      problemsetId: "1",
      lessonId: "1",
      cntProblemStudent: "20",
      doneCnt: "15",
      nDoneCnt: "5",
      avgCompletion: "80"
    }
  ]
};
const aiStudentList = {
  success: true,
  dataSize: 6,
  timestamp: "2024-03-08T10:40:28.46061",
  data: [
    {
      chapterId: "1",
      chapterNm: "Lesson 1. How Are You?",
      lessonData: [
        {
          lessonId: "1",
          cntStuDone: 10,
          cntStuNotDone: 10,
          cnfStampTpCd: "",
          isDone: "Y"
        },
        {
          lessonId: "2",
          cntStuDone: 10,
          cntStuNotDone: 10,
          cnfStampTpCd: "",
          isDone: "Y"
        },
        {
          lessonId: "3",
          cntStuDone: 10,
          cntStuNotDone: 10,
          cnfStampTpCd: "",
          isDone: "Y"
        }
      ]
    },
    {
      chapterId: "2",
      chapterNm: "Lesson 2. What is your name?",
      lessonData: [
        {
          lessonId: "1",
          cntStuDone: 10,
          cntStuNotDone: 4,
          cnfStampTpCd: "",
          isDone: "N"
        },
        {
          lessonId: "2",
          cntStuDone: 10,
          cntStuNotDone: 10,
          cnfStampTpCd: "",
          isDone: "Y"
        },
        {
          lessonId: "3",
          cntStuDone: 10,
          cntStuNotDone: 4,
          cnfStampTpCd: "",
          isDone: "N"
        }
      ]
    },
    {
      chapterId: "3",
      chapterNm: "Lesson 3. Do you like milk?",
      lessonData: [
        {
          lessonId: "1",
          cntStuDone: 10,
          cntStuNotDone: 4,
          cnfStampTpCd: "",
          isDone: "N"
        },
        {
          lessonId: "2",
          cntStuDone: 10,
          cntStuNotDone: 10,
          cnfStampTpCd: "",
          isDone: "Y"
        },
        {
          lessonId: "3",
          cntStuDone: 10,
          cntStuNotDone: 4,
          cnfStampTpCd: "",
          isDone: "N"
        }
      ]
    },
    {
      chapterId: "4",
      chapterNm: "Lesson 4. My intrduce my self.",
      lessonData: [
        {
          lessonId: "1",
          cntStuDone: 10,
          cntStuNotDone: 4,
          cnfStampTpCd: "",
          isDone: "N"
        },
        {
          lessonId: "2",
          cntStuDone: 10,
          cntStuNotDone: 4,
          cnfStampTpCd: "",
          isDone: "N"
        },
        {
          lessonId: "3",
          cntStuDone: 10,
          cntStuNotDone: 10,
          cnfStampTpCd: "",
          isDone: "Y"
        }
      ]
    }
  ]
};
const index = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (body.type === "teacher") {
    return teacherData;
  } else if (body.type === "student") {
    return studentData;
  } else if (body.type === "everyDetail") {
    return detailData;
  } else if (body.type === "everyDetailRight") {
    return detailRightData;
  } else if (body.type === "aiList") {
    return aiList;
  } else if (body.type === "aiListStudent") {
    return aiStudentList;
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
