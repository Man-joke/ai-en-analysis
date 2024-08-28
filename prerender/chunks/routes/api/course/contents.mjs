import { defineEventHandler, getQuery, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    contentsId: 1,
    periodId: 4,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 1,
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000033/E03-001_A_02_01_0019_t.html",
    learnActivityFlag: true,
    learnActivityType: "image",
    learningStageCd: "01"
  },
  {
    contentsId: 2,
    periodId: 4,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 2,
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000034/E03-001_A_02_01_0020_t.html",
    learnActivityFlag: true,
    learnActivityType: "descriptive",
    learningStageCd: "02"
  },
  {
    contentsId: 3,
    periodId: 4,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 3,
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000020/E03-001_A_02_01_0006_t.html",
    learnActivityFlag: true,
    learnActivityType: "choice",
    questionCount: 5
  },
  {
    contentsId: 4,
    periodId: 3,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 1,
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000015/E03-001_A_02_01_0001_t.html"
  },
  {
    contentsId: 5,
    periodId: 3,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 2,
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000017/E03-001_A_02_01_0003_t.html"
  },
  {
    contentsId: 6,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 1,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (1)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000015/thumbnail/MC00000015_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000015/E03-001_A_02_01_0001_t.html",
    learningStageCd: "01",
    textbookPage: "1"
  },
  {
    contentsId: 7,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 2,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (2)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000016/thumbnail/MC00000016_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000016/E03-001_A_02_01_0002_t.html",
    learningStageCd: "01",
    textbookPage: "3"
  },
  {
    contentsId: 8,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 3,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (3)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000017/thumbnail/MC00000017_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000017/E03-001_A_02_01_0003_t.html",
    learningStageCd: "02",
    textbookPage: "5"
  },
  {
    contentsId: 9,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 4,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (4)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000018/thumbnail/MC00000018_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000018/E03-001_A_02_01_0004_t.html",
    learningStageCd: "02",
    textbookPage: "7"
  },
  {
    contentsId: 10,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 5,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (5)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000019/thumbnail/MC00000019_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000019/E03-001_A_02_01_0005_t.html",
    learningStageCd: "04",
    textbookPage: "11"
  },
  {
    contentsId: 11,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 6,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (6)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000020/thumbnail/MC00000020_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000020/E03-001_A_02_01_0006_t.html",
    learningStageCd: "04",
    textbookPage: "13"
  },
  {
    contentsId: 12,
    periodId: 1,
    periodStep: "1",
    contentsKind: "iframe",
    contentsNumber: 7,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (7)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000021/thumbnail/MC00000021_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000021/E03-001_A_02_01_0007_t.html",
    learningStageCd: "04",
    textbookPage: "15"
  },
  {
    contentsId: 13,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 1,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (1)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000022/thumbnail/MC00000022_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000022/E03-001_A_02_01_0008_t.html",
    learningStageCd: "01",
    textbookPage: "1"
  },
  {
    contentsId: 14,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 2,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (2)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000023/thumbnail/MC00000023_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000023/E03-001_A_02_01_0009_t.html",
    learningStageCd: "01",
    textbookPage: "3"
  },
  {
    contentsId: 15,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 3,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (3)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000024/thumbnail/MC00000024_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000024/E03-001_A_02_01_0010_t.html",
    learningStageCd: "01",
    textbookPage: "5"
  },
  {
    contentsId: 16,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 4,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (4)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000025/thumbnail/MC00000025_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000025/E03-001_A_02_01_0011_t.html",
    learningStageCd: "01",
    textbookPage: "7"
  },
  {
    contentsId: 17,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 5,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (5)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000026/thumbnail/MC00000026_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000026/E03-001_A_02_01_0012_t.html",
    learningStageCd: "02",
    textbookPage: "9"
  },
  {
    contentsId: 18,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 6,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (6)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000027/thumbnail/MC00000027_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000027/E03-001_A_02_01_0013_t.html",
    learningStageCd: "02",
    textbookPage: "11"
  },
  {
    contentsId: 19,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 7,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (7)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000028/thumbnail/MC00000028_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000028/E03-001_A_02_01_0014_t.html",
    learningStageCd: "02",
    textbookPage: "13"
  },
  {
    contentsId: 20,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 8,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (8)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000029/thumbnail/MC00000029_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000029/E03-001_A_02_01_0015_t.html",
    learningStageCd: "02",
    textbookPage: "15"
  },
  {
    contentsId: 21,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 9,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (9)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000030/thumbnail/MC00000030_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000030/E03-001_A_02_01_0016_t.html",
    learningStageCd: "02",
    textbookPage: "17"
  },
  {
    contentsId: 22,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 10,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (10)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000031/thumbnail/MC00000031_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000031/E03-001_A_02_01_0017_t.html",
    learningStageCd: "02",
    textbookPage: "19"
  },
  {
    contentsId: 23,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 11,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (11)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000032/thumbnail/MC00000032_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000032/E03-001_A_02_01_0018_t.html",
    learningStageCd: "02",
    textbookPage: "21"
  },
  {
    contentsId: 24,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 12,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (12)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000033/thumbnail/MC00000033_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000033/E03-001_A_02_01_0019_t.html",
    learningStageCd: "02",
    textbookPage: "23"
  },
  {
    contentsId: 25,
    periodId: 2,
    periodStep: "2",
    contentsKind: "iframe",
    contentsNumber: 13,
    contentsInfo: "\uC138 \uC790\uB9AC \uC218\uC758 \uBE84\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694 (13)",
    contentsThumbnail: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000034/thumbnail/MC00000034_Teacher.PNG",
    teacherContentsMeta: "https://aidtcdn.i-screammedia.com/contents/resources/math/concept_contents/MC00000034/E03-001_A_02_01_0020_t.html",
    learningStageCd: "04",
    textbookPage: "25"
  }
];
const contents = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    let dataTmp = data;
    let totalCnt = 0;
    const { periodId, periodStep, page } = getQuery(event);
    if (periodId && periodStep) {
      dataTmp = dataTmp.filter((e) => e.periodId == periodId);
      dataTmp = dataTmp.filter((e) => e.periodStep == periodStep);
    }
    if (page) {
      totalCnt = dataTmp.length;
      dataTmp = dataTmp.filter((e) => e.contentsNumber == page);
      return {
        totalCnt,
        data: dataTmp.length > 0 ? dataTmp[0] : {}
      };
    } else {
      return dataTmp;
    }
  } else if (event.req.method === "PUT") {
    const body = await readBody(event);
    if (body.data) {
      for (let index = 0; index < body.data.length; index++) {
        const element = body.data[index];
        if (element.contentsId) {
          data = data.map((item) => item.contentsId == element.contentsId ? element : item);
        } else {
          const tempArray = data.map(function(v) {
            return v.contentsId;
          });
          const maxValue = Math.max.apply(null, tempArray);
          element.contentsId = maxValue + 1;
          data.push(element);
        }
      }
    } else {
      data = data.filter((e) => e.contentsId != body.contentsId);
      data.push(body);
    }
    return data;
  }
});

export { contents as default };
//# sourceMappingURL=contents.mjs.map
