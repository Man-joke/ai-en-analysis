import { defineEventHandler, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    studentId: "1",
    name: "\uD559\uC0DD1",
    number: 1,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "2",
    name: "\uD559\uC0DD2",
    number: 2,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "3",
    name: "\uD559\uC0DD3",
    number: 3,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "4",
    name: "\uD559\uC0DD4",
    number: 4,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "5",
    name: "\uD559\uC0DD5",
    number: 5,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "6",
    name: "\uD559\uC0DD6",
    number: 6,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "7",
    name: "\uD559\uC0DD7",
    number: 7,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "8",
    name: "\uD559\uC0DD8",
    number: 8,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  },
  {
    studentId: "9",
    name: "\uD559\uC0DD9",
    number: 9,
    profile: "/_nuxt/assets/images/temp/img_st_photo.png",
    micActive: true,
    soundActive: true,
    soundVolume: 50
  }
];
const student = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return data;
  } else if (event.req.method === "POST") {
    const body = await readBody(event);
    data = Object.assign([], body);
    return data;
  }
});

export { student as default };
//# sourceMappingURL=student.mjs.map
