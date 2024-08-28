import { defineEventHandler, getQuery, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    groupId: 1,
    contentsId: 4,
    contentsNumber: 1,
    groupNumber: 1,
    groupState: false,
    mainDevice: "1",
    student: [
      {
        studentId: "1",
        name: "\uD559\uC0DD1",
        number: 1,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      },
      {
        studentId: "2",
        name: "\uD559\uC0DD2",
        number: 2,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      },
      {
        studentId: "3",
        name: "\uD559\uC0DD3",
        number: 3,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      },
      {
        studentId: "4",
        name: "\uD559\uC0DD4",
        number: 4,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      },
      {
        studentId: "5",
        name: "\uD559\uC0DD5",
        number: 5,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: true,
        mainDeviceFlag: "N"
      }
    ]
  },
  {
    groupId: 2,
    contentsId: 4,
    contentsNumber: 1,
    groupNumber: 2,
    groupState: true,
    mainDevice: "6",
    groupActivityTypeCd: "image",
    groupActivityContext: "http://ai-digital.s3-website.ap-northeast-2.amazonaws.com/assets/img_bk_thumb-eeecb94f.png",
    student: [
      {
        studentId: "6",
        name: "\uD559\uC0DD6",
        number: 6,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      },
      {
        studentId: "7",
        name: "\uD559\uC0DD7",
        number: 7,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: true,
        mainDeviceFlag: "N"
      },
      {
        studentId: "8",
        name: "\uD559\uC0DD8",
        number: 8,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      },
      {
        studentId: "9",
        name: "\uD559\uC0DD9",
        number: 9,
        profile: "/_nuxt/assets/images/temp/img_st_photo.png",
        prePresenterFlag: false,
        RealPresenterFlag: false,
        mainDeviceFlag: "N"
      }
    ]
  }
];
const group = defineEventHandler(async (event) => {
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
      return a.groupNumber - b.groupNumber;
    });
    return dataTmp;
  } else if (event.req.method === "POST") {
    const body = await readBody(event);
    if (body.contentsId && body.contentsNumber) {
      data = data.filter((e) => !(e.contentsId == body.contentsId && e.contentsNumber == body.contentsNumber));
    }
    for (let index = 0; index < body.count; index++) {
      const tempArray = data.map(function(v) {
        return v.groupId;
      });
      const maxValue = tempArray.length == 0 ? 0 : Math.max.apply(null, tempArray);
      const temp = {
        groupId: maxValue + 1,
        contentsId: body.contentsId,
        contentsNumber: body.contentsNumber,
        groupNumber: index + 1
      };
      data.push(temp);
    }
  } else if (event.req.method === "PUT") {
    const body = await readBody(event);
    if (Array.isArray(body)) {
      for (let index = 0; index < body.length; index++) {
        const item = body[index];
        data.filter(
          (e1) => e1.contentsId == item.contentsId && e1.contentsNumber == item.contentsNumber && e1.groupNumber == item.groupNumber
        ).forEach((e2) => e2.student = item.student);
      }
    } else {
      data = data.filter((e) => e.groupId != body.groupId);
      data.push(body);
    }
    return data;
  } else if (event.req.method === "DELETE") {
    const body = await readBody(event);
    if (body.contentsId && body.contentsNumber) {
      data = data.filter((e) => !(e.contentsId == body.contentsId && e.contentsNumber == body.contentsNumber));
    }
    return data;
  }
});

export { group as default };
//# sourceMappingURL=group.mjs.map
