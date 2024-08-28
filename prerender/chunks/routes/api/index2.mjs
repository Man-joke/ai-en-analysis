import { defineEventHandler, getQuery, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    teachingMeterialsId: 1,
    materialName: "\uB450 \uC790\uB9AC \uC218 \uB367\uC148\uC744 \uC5B4\uB824\uC6CC \uD55C \uBC30\uCD94 \uC7A5\uC218 \uC774\uC57C\uAE30(1).pdf",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "1",
    chapterName: "1. \uB367\uC148\uACFC \uBE84\uC148",
    periodId: 1,
    periodStep: "1",
    periodName: "\uB2E8\uC6D0 \uB3C4\uC785",
    meterialTypeCode: "contents",
    meterialStoreUrl: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    kofContent: "pdf",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 2,
    materialName: "\uB450 \uC790\uB9AC \uC218 \uB367\uC148\uC744 \uC5B4\uB824\uC6CC \uD55C \uBC30\uCD94 \uC7A5\uC218 \uC774\uC57C\uAE30(2).pdf",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "1",
    chapterName: "1. \uB367\uC148\uACFC \uBE84\uC148",
    periodId: 1,
    periodStep: "1",
    periodName: "\uB2E8\uC6D0 \uB3C4\uC785",
    meterialTypeCode: "contents",
    meterialStoreUrl: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    kofContent: "pdf",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 3,
    materialName: "\uB450 \uC790\uB9AC \uC218 \uB367\uC148\uC744 \uC5B4\uB824\uC6CC \uD55C \uBC30\uCD94 \uC7A5\uC218 \uC774\uC57C\uAE30(3).pdf",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "1",
    chapterName: "1. \uB367\uC148\uACFC \uBE84\uC148",
    periodId: 2,
    periodStep: "2",
    periodName: "\uC138 \uC790\uB9AC \uC218\uC758 \uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694(1) - \uBC1B\uC544\uC62C\uB9BC\uC774 \uC5C6\uB294 \uACBD\uC6B0",
    meterialTypeCode: "contents",
    meterialStoreUrl: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    kofContent: "pdf",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 4,
    materialName: "\uC0BC\uAC01\uD615 \uADF8\uB9AC\uAE30(1)",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "2",
    chapterName: "2. \uD3C9\uBA74\uB3C4\uD615",
    periodId: 3,
    periodStep: "1",
    periodName: "\uD3C9\uBA74\uB3C4\uD615\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uBCFC\uAE4C\uC694",
    meterialTypeCode: "whboard",
    meterialStoreUrl: "https://cdn.ctool.kr/template/template002.png",
    kofContent: "image",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 5,
    materialName: "\uC0BC\uAC01\uD615 \uADF8\uB9AC\uAE30(2)",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "2",
    chapterName: "2. \uD3C9\uBA74\uB3C4\uD615",
    periodId: 3,
    periodStep: "1",
    periodName: "\uD3C9\uBA74\uB3C4\uD615\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uBCFC\uAE4C\uC694",
    meterialTypeCode: "whboard",
    meterialStoreUrl: "https://cdn.ctool.kr/template/template003.png",
    kofContent: "image",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 6,
    materialName: "\uC0BC\uAC01\uD615 \uADF8\uB9AC\uAE30(3)",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "2",
    chapterName: "2. \uD3C9\uBA74\uB3C4\uD615",
    periodId: 4,
    periodStep: "2",
    periodName: "\uC120\uBD84,\uBC18\uC9C1\uC120,\uC9C1\uC120\uC744 \uC54C\uC544\uBCFC\uAE4C\uC694.",
    meterialTypeCode: "whboard",
    meterialStoreUrl: "https://cdn.ctool.kr/template/template001.png",
    kofContent: "image",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 7,
    materialName: "\uB124\uC774\uBC84(1)",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "3",
    chapterName: "3. \uB098\uB217\uC148",
    periodId: 5,
    periodStep: "1",
    periodName: "\uC5B4\uB9BC \uC148\uC744 \uD65C\uC6A9\uD574 \uBCFC\uAE4C\uC694..",
    meterialTypeCode: "nuri",
    meterialStoreUrl: "https://www.naver.com/",
    kofContent: "www",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 8,
    materialName: "\uB124\uC774\uBC84(2)",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "3",
    chapterName: "3. \uB098\uB217\uC148",
    periodId: 5,
    periodStep: "1",
    periodName: "\uC5B4\uB9BC \uC148\uC744 \uD65C\uC6A9\uD574 \uBCFC\uAE4C\uC694..",
    meterialTypeCode: "nuri",
    meterialStoreUrl: "https://www.naver.com/",
    kofContent: "www",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 9,
    materialName: "\uB124\uC774\uBC84(3)",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "3",
    chapterName: "3. \uB098\uB217\uC148",
    periodId: 5,
    periodStep: "1",
    periodName: "\uC5B4\uB9BC \uC148\uC744 \uD65C\uC6A9\uD574 \uBCFC\uAE4C\uC694..",
    meterialTypeCode: "nuri",
    meterialStoreUrl: "https://www.naver.com/",
    kofContent: "www",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 10,
    materialName: "\uB0AE\uC7A0 \uC790\uB294 \uC0AC\uC790",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "1",
    chapterName: "1. \uB367\uC148\uACFC \uBE84\uC148",
    periodId: 1,
    periodStep: "1",
    periodName: "\uB2E8\uC6D0 \uB3C4\uC785",
    meterialTypeCode: "contents",
    meterialStoreUrl: "https://erbankcdn.i-scream.co.kr/data/erbank/origin_img/2005/08/27/2050827r0019768.jpg?e=1704245258527&h=89465c0854e0ee7d31ccca7f077743fc",
    kofContent: "image",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 11,
    materialName: "\uBD81\uCCAD \uC0AC\uC790\uB180\uC74C/\uC911\uC694 \uBB34\uD615\uBB38\uD654\uC7AC \uC81C15\uD638/\uC11C\uC6B8\uC2DC",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "1",
    chapterName: "1. \uB367\uC148\uACFC \uBE84\uC148",
    periodId: 1,
    periodStep: "1",
    periodName: "\uB2E8\uC6D0 \uB3C4\uC785",
    meterialTypeCode: "contents",
    meterialStoreUrl: "https://erbankcdn.i-scream.co.kr/data/erbank/origin_img/2008/12/22/2081222s265368.JPG?e=1704245258528&h=d70f0511a02f9ece9b91d78e814e373f",
    kofContent: "image",
    grade: "3",
    semester: "1"
  },
  {
    teachingMeterialsId: 12,
    materialName: "\uC870\uC6A9\uC870\uC6A9 \uC0AC\uC790 \uC655\uC774 \uC878\uB9AC\uB300\uC694",
    subjectId: "1",
    subjectName: "\uC218\uD559",
    chapterId: "1",
    chapterName: "1. \uB367\uC148\uACFC \uBE84\uC148",
    periodId: 1,
    periodStep: "1",
    periodName: "\uB2E8\uC6D0 \uB3C4\uC785",
    meterialTypeCode: "contents",
    meterialStoreUrl: "https://erbankcdn.i-scream.co.kr/data/erbank/origin_img/2013/08/07/2130807q3038390.mp4?e=1704245258714&h=cdcfb1ab2d45d8bf4c29a6993d57a3c4",
    kofContent: "vod",
    grade: "3",
    semester: "1"
  }
];
const index = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    const { pageNum, pageSize, chapter, period, search, id } = getQuery(event);
    if (id) {
      return data.filter((e) => e.teachingMeterialsId == id)[0];
    } else {
      let dataTmp = data;
      const page = pageNum;
      const size = pageSize;
      const offset = (page - 1) * size;
      if (chapter) {
        dataTmp = dataTmp.filter((e) => e.chapterId == chapter);
      }
      if (period) {
        dataTmp = dataTmp.filter((e) => e.periodId == period);
      }
      if (search) {
        dataTmp = dataTmp.filter((e) => e.materialName.indexOf(`${search}`) > -1);
      }
      dataTmp.sort(function(a, b) {
        return b.teachingMeterialsId - a.teachingMeterialsId;
      });
      if (page != void 0) {
        return {
          totalCnt: dataTmp.length,
          data: dataTmp.slice(offset).slice(0, size)
        };
      } else {
        return {
          totalCnt: dataTmp.length,
          data: dataTmp
        };
      }
    }
  } else if (event.req.method === "POST") {
    const tempArray = data.map(function(v) {
      return v.teachingMeterialsId;
    });
    const maxValue = Math.max.apply(null, tempArray);
    const body = await readBody(event);
    body.teachingMeterialsId = maxValue + 1;
    body.sendToStudentFlag = "N";
    body.createdDate = /* @__PURE__ */ new Date();
    body.lastModifiedDate = /* @__PURE__ */ new Date();
    data.push(body);
    return data;
  } else if (event.req.method === "PUT") {
    const body = await readBody(event);
    body.lastModifiedDate = /* @__PURE__ */ new Date();
    data = data.filter((e) => e.teachingMeterialsId != body.teachingMeterialsId);
    data.push(body);
    return data;
  } else if (event.req.method === "DELETE") {
    const body = await readBody(event);
    data = data.filter((e) => e.teachingMeterialsId != body.teachingMeterialsId);
    return data;
  }
});

export { index as default };
//# sourceMappingURL=index2.mjs.map
