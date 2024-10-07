const studentData = {
    success: true,
    dataSize: 6,
    timestamp: '2024-03-08T10:40:28.46061',
    data: [
        {
            dailyAssignmentId: 1,
            dailyAssignmentDate: '3월 1일 화요일',
            dailyAssignmentStatus: 'DONE',
            completedWordCount: 24,
            completedPhraseCount: 6,
            completionTime: '00:00',
            completionStamp: '01' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 2,
            dailyAssignmentDate: '3월 2일 수요일',
            dailyAssignmentStatus: 'READY',
            completedWordCount: 2,
            completedPhraseCount: 4,
            completionTime: '02:00',
            completionStamp: '01' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '3월 3일 목요일',
            dailyAssignmentStatus: 'DONE',
            completedWordCount: 5,
            completedPhraseCount: 6,
            completionTime: '01:11',
            completionStamp: '02' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 2,
            dailyAssignmentDate: '3월 2일 수요일',
            dailyAssignmentStatus: 'READY',
            completedWordCount: 4,
            completedPhraseCount: 3,
            completionTime: '04:10',
            completionStamp: '00' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '3월 3일 목요일',
            dailyAssignmentStatus: 'DONE',
            completedWordCount: 2,
            completedPhraseCount: 6,
            completionTime: '05:00',
            completionStamp: '02' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 2,
            dailyAssignmentDate: '3월 2일 수요일',
            dailyAssignmentStatus: 'READY',
            completedWordCount: 2,
            completedPhraseCount: 6,
            completionTime: '01:22',
            completionStamp: '01' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '3월 3일 목요일',
            dailyAssignmentStatus: 'READY',
            completedWordCount: 2,
            completedPhraseCount: 6,
            completionTime: '03:10',
            completionStamp: '01' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 2,
            dailyAssignmentDate: '3월 2일 수요일',
            dailyAssignmentStatus: 'READY',
            completedWordCount: 2,
            completedPhraseCount: 6,
            completionTime: '02:10',
            completionStamp: '01' //00:없음, 01:굿잡, 02:미완료
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '3월 3일 목요일',
            dailyAssignmentStatus: 'READY',
            completedWordCount: 2,
            completedPhraseCount: 6,
            completionTime: '04:10',
            completionStamp: '01' //00:없음, 01:굿잡, 02:미완료
        }
    ]
};

const teacherData = {
    success: true,
    dataSize: 6,
    timestamp: '2024-03-08T10:40:28.46061',
    data: [
        {
            dailyAssignmentId: 1,
            dailyAssignmentDate: '4월 4일 화요일',
            compltedStudents: 18,
            incompleteStudents: 8,
            averageWordsComplted: 4,
            averagePhrasesComplted: 3
        },
        {
            dailyAssignmentId: 2,
            dailyAssignmentDate: '4월 5일 화요일',
            compltedStudents: 20,
            incompleteStudents: 6,
            averageWordsComplted: 5,
            averagePhrasesComplted: 4
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '4월 6일 화요일',
            compltedStudents: 22,
            incompleteStudents: 0,
            averageWordsComplted: 6,
            averagePhrasesComplted: 5
        },
        {
            dailyAssignmentId: 4,
            dailyAssignmentDate: '4월 5일 화요일',
            compltedStudents: 20,
            incompleteStudents: 6,
            averageWordsComplted: 5,
            averagePhrasesComplted: 4
        },
        {
            dailyAssignmentId: 5,
            dailyAssignmentDate: '4월 7일 화요일',
            compltedStudents: 22,
            incompleteStudents: 4,
            averageWordsComplted: 6,
            averagePhrasesComplted: 5
        },
        {
            dailyAssignmentId: 6,
            dailyAssignmentDate: '4월 8일 화요일',
            compltedStudents: 20,
            incompleteStudents: 6,
            averageWordsComplted: 5,
            averagePhrasesComplted: 4
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '4월 9일 화요일',
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
    timestamp: '2024-03-08T10:40:28.46061',
    data: [
        {
            dailyAssignmentId: 1,
            dailyAssignmentDate: '4월 4일 월요일',
            dailyAssignmentWords: "a/p/p/l/e, h/e/l/l/o, b/y/e, w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e"
        },
        {
            dailyAssignmentId: 2,
            dailyAssignmentDate: '4월 5일 월요일',
            dailyAssignmentWords: "h/i, h/e/l/l/o, b/y/e, w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e"
        },
        {
            dailyAssignmentId: 3,
            dailyAssignmentDate: '4월 6일 화요일',
            dailyAssignmentWords: "b/y/e, w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o"
        },
        {
            dailyAssignmentId: 4,
            dailyAssignmentDate: '4월 7일 수요일',
            dailyAssignmentWords: "w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o, b/y/e"
        },
        {
            dailyAssignmentId: 5,
            dailyAssignmentDate: '4월 8일 목요일',
            dailyAssignmentWords: "w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o, b/y/e"
        },
        {
            dailyAssignmentId: 6,
            dailyAssignmentDate: '4월 9일 금요일',
            dailyAssignmentWords: "w/e/a/t/h/e/r, d/r/i/n/k, I/'/m, y/o/u, w/e, t/h/e/y, h/e, h/i, h/e/l/l/o, b/y/e"
        }
    ]
};

const detailRightData = {
    success: true,
    dataSize: 6,
    timestamp: '2024-03-08T10:40:28.46061',
    data: [
        {
            dailyAssignmentDate: '3월 1일 목요일',
            incompleteStudents: [
                {
                    incompleteStudentNumber: 1,
                    incompleteStudentName: '김철수'
                },
                {
                    incompleteStudentNumber: 2,
                    incompleteStudentName: '김영희'
                },
                {
                    incompleteStudentNumber: 3,
                    incompleteStudentName: '박철수'
                }
            ],
            activities: [
                {
                    word: 'apple',
                    correctStudents: [
                        {
                            correctStudentNumber: 1,
                            correctStudentName: '안영학'
                        },
                        {
                            correctStudentNumber: 3,
                            correctStudentName: '박철수'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        },
                        {
                            correctStudentNumber: 2,
                            correctStudentName: '박철민'
                        }
                    ],
                    incorrectStudents: [
                        {
                            incorrectStudentNumber: 1,
                            incorrectStudentName: '김철수'
                        },
                        {
                            incorrectStudentNumber: 2,
                            incorrectStudentName: '김영희'
                        }
                    ]
                },
                {
                    word: 'banana',
                    correctStudents: [
                        {
                            correctStudentNumber: 1,
                            correctStudentName: '김철수'
                        },
                        {
                            correctStudentNumber: 3,
                            correctStudentName: '박철수'
                        }
                    ],
                    incorrectStudents: [
                        {
                            incorrectStudentNumber: 2,
                            incorrectStudentName: '김영희'
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
    timestamp: '2024-03-08T10:40:28.46061',
    data: [
        {
            chapterId: '1',
            chapterNm: 'Lesson 1. How Are You?',
            problemsetId: '1',
            lessonId: '1',
            cntProblemStudent: '20',
            doneCnt: '5',
            nDoneCnt: '5',
            avgCompletion: '50'
        },
        {
            chapterId: '1',
            chapterNm: 'Lesson 2. What is your name?',
            problemsetId: '1',
            lessonId: '1',
            cntProblemStudent: '30',
            doneCnt: '5',
            nDoneCnt: '5',
            avgCompletion: '50'
        },
        {
            chapterId: '4',
            chapterNm: 'Lesson 3. What kind of your jab?',
            problemsetId: '1',
            lessonId: '1',
            cntProblemStudent: '10',
            doneCnt: '5',
            nDoneCnt: '5',
            avgCompletion: '50'
        },
        {
            chapterId: '3',
            chapterNm: 'Lesson 4. I love you?',
            problemsetId: '1',
            lessonId: '1',
            cntProblemStudent: '15',
            doneCnt: '5',
            nDoneCnt: '5',
            avgCompletion: '50'
        },
        {
            chapterId: '2',
            chapterNm: 'Lesson 2. I’m a Pilot',
            problemsetId: '1',
            lessonId: '1',
            cntProblemStudent: '20',
            doneCnt: '15',
            nDoneCnt: '5',
            avgCompletion: '80'
        }
    ]
};

const aiStudentList = {
    success: true,
    dataSize: 6,
    timestamp: '2024-03-08T10:40:28.46061',
    data: [
        {
            chapterId: '1',
            chapterNm: 'Lesson 1. How Are You?',
            lessonData: [
                {
                    lessonId: '1',
                    cntStuDone: 10,
                    cntStuNotDone: 10,
                    cnfStampTpCd: '',
                    isDone: 'Y'
                },
                {
                    lessonId: '2',
                    cntStuDone: 10,
                    cntStuNotDone: 10,
                    cnfStampTpCd: '',
                    isDone: 'Y'
                },
                {
                    lessonId: '3',
                    cntStuDone: 10,
                    cntStuNotDone: 10,
                    cnfStampTpCd: '',
                    isDone: 'Y'
                }
            ]
        },
        {
            chapterId: '2',
            chapterNm: 'Lesson 2. What is your name?',
            lessonData: [
                {
                    lessonId: '1',
                    cntStuDone: 10,
                    cntStuNotDone: 4,
                    cnfStampTpCd: '',
                    isDone: 'N'
                },
                {
                    lessonId: '2',
                    cntStuDone: 10,
                    cntStuNotDone: 10,
                    cnfStampTpCd: '',
                    isDone: 'Y'
                },
                {
                    lessonId: '3',
                    cntStuDone: 10,
                    cntStuNotDone: 4,
                    cnfStampTpCd: '',
                    isDone: 'N'
                }
            ]
        },
        {
            chapterId: '3',
            chapterNm: 'Lesson 3. Do you like milk?',
            lessonData: [
                {
                    lessonId: '1',
                    cntStuDone: 10,
                    cntStuNotDone: 4,
                    cnfStampTpCd: '',
                    isDone: 'N'
                },
                {
                    lessonId: '2',
                    cntStuDone: 10,
                    cntStuNotDone: 10,
                    cnfStampTpCd: '',
                    isDone: 'Y'
                },
                {
                    lessonId: '3',
                    cntStuDone: 10,
                    cntStuNotDone: 4,
                    cnfStampTpCd: '',
                    isDone: 'N'
                }
            ]
        },
        {
            chapterId: '4',
            chapterNm: 'Lesson 4. My intrduce my self.',
            lessonData: [
                {
                    lessonId: '1',
                    cntStuDone: 10,
                    cntStuNotDone: 4,
                    cnfStampTpCd: '',
                    isDone: 'N'
                },
                {
                    lessonId: '2',
                    cntStuDone: 10,
                    cntStuNotDone: 4,
                    cnfStampTpCd: '',
                    isDone: 'N'
                },
                {
                    lessonId: '3',
                    cntStuDone: 10,
                    cntStuNotDone: 10,
                    cnfStampTpCd: '',
                    isDone: 'Y'
                }
            ]
        }
    ]
};

export default defineEventHandler(async event => {
    const body = await readBody(event);
    if (body.type === 'teacher') {
        return teacherData;
    } else if (body.type === 'student') {
        return studentData;
    } else if (body.type === 'everyDetail') {
        return detailData;
    } else if (body.type === 'everyDetailRight') {
        return detailRightData;
    } else if (body.type === 'aiList') {
        // Ai 추천 목록
        return aiList;
    } else if (body.type === 'aiListStudent') {
        // Ai 추천 목록
        return aiStudentList;
    }
});
