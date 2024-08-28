import { defineEventHandler, getQuery, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    learnId: 1,
    contentsId: 1,
    contentsNumber: 1,
    studentId: "1",
    name: "\uD559\uC0DD1",
    number: 1,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    answer: "http://ai-digital.s3-website.ap-northeast-2.amazonaws.com/assets/img_bk_thumb-eeecb94f.png",
    presenterFlag: true
  },
  {
    learnId: 2,
    contentsId: 1,
    contentsNumber: 1,
    studentId: "2",
    name: "\uD559\uC0DD2",
    number: 2,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    answer: "http://ai-digital.s3-website.ap-northeast-2.amazonaws.com/assets/img_bk_thumb-eeecb94f.png"
  },
  {
    learnId: 3,
    contentsId: 2,
    contentsNumber: 2,
    studentId: "1",
    name: "\uD559\uC0DD1",
    number: 1,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    answer: "http://ai-digital.s3-website.ap-northeast-2.amazonaws.com/assets/img_bk_thumb-eeecb94f.png"
  },
  {
    learnId: 3,
    contentsId: 3,
    contentsNumber: 3,
    studentId: "1",
    name: "\uD559\uC0DD1",
    number: 1,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    answerCount: 1
  },
  {
    learnId: 4,
    contentsId: 3,
    contentsNumber: 3,
    studentId: "2",
    name: "\uD559\uC0DD2",
    number: 2,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    answerCount: 3
  },
  {
    learnId: 5,
    contentsId: 3,
    contentsNumber: 3,
    studentId: "3",
    name: "\uD559\uC0DD3",
    number: 3,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    answerCount: 3
  }
];
const learn = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    const { contentsId, contentsNumber } = getQuery(event);
    let dataTmp = data;
    if (contentsId) {
      dataTmp = dataTmp.filter((e) => e.contentsId == contentsId);
    }
    if (contentsNumber) {
      dataTmp = dataTmp.filter((e) => e.contentsNumber == contentsNumber);
    }
    dataTmp.sort(function(a, b) {
      return b.learnId - a.learnId;
    });
    return dataTmp;
  } else if (event.req.method === "POST") {
    const body = await readBody(event);
    data = data.filter((e) => e.studentId != body.studentId);
    const tempArray = data.map(function(v) {
      return v.learnId;
    });
    const maxValue = Math.max.apply(null, tempArray);
    body.learnId = maxValue + 1;
    data.push(body);
  } else if (event.req.method === "PUT") {
    const body = await readBody(event);
    body.lastModifiedDate = /* @__PURE__ */ new Date();
    data = data.filter((e) => e.learnId != body.learnId);
    data.push(body);
    return data;
  } else if (event.req.method === "DELETE") {
    const body = await readBody(event);
    data = data.filter((e) => e.learnId != body.learnId);
    return data;
  }
});

export { learn as default };
//# sourceMappingURL=learn.mjs.map
