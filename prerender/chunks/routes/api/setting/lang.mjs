import { defineEventHandler, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    id: "ko",
    name: "setting.lang.ko",
    useYn: true,
    description: "\uD55C\uAD6D\uC5B4"
  },
  {
    id: "en",
    name: "setting.lang.en",
    useYn: false,
    description: "\uC601\uC5B4"
  }
];
const lang = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return data;
  } else if (event.req.method === "POST") {
    const body = await readBody(event);
    data = Object.assign([], body);
    return data;
  }
});

export { lang as default };
//# sourceMappingURL=lang.mjs.map
