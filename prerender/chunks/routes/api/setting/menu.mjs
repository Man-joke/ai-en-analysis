import { defineEventHandler, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = {
  teacher: [
    {
      id: "administer",
      text: "header.menu.administer.name",
      useYn: true,
      description: "\uACFC\uC81C\uAD00\uB9AC"
    },
    {
      id: "workbook",
      text: "aside.menu.workbook.name",
      useYn: true,
      description: "\uC218\uD559\uC775\uD798\uBB38\uC81C"
    },
    {
      id: "tool",
      text: "aside.menu.tool.name",
      useYn: true,
      description: "\uC218\uC5C5\uD65C\uB3D9\uB3C4\uAD6C"
    },
    {
      id: "nuri",
      text: "aside.menu.nuri.name",
      useYn: true,
      description: "\uB204\uB9AC\uC9D1\uC5F0\uB3D9"
    },
    {
      id: "contents",
      text: "aside.menu.contents.name",
      useYn: true,
      description: "\uCF58\uD150\uCE20\uC5F0\uB3D9"
    },
    {
      id: "whboard",
      text: "aside.menu.whboard.name",
      useYn: true,
      description: "\uD654\uC774\uD2B8\uBCF4\uB4DC"
    }
  ],
  student: [
    {
      id: "administer",
      text: "header.menu.administer.name",
      useYn: true,
      description: "\uACFC\uC81C\uAD00\uB9AC"
    },
    {
      id: "workbook",
      text: "aside.menu.workbook.name",
      useYn: true,
      description: "\uC218\uD559\uC775\uD798\uBB38\uC81C"
    },
    {
      id: "tip",
      text: "aside.menu.tip.name",
      useYn: true,
      description: "\uAFC0\uD301\uC218\uD559(\uCF54\uC2A4\uC6E8\uC5B4)"
    },
    {
      id: "note",
      text: "aside.menu.note.name",
      useYn: true,
      description: "AI\uC624\uB2F5\uB178\uD2B8(\uCF54\uC2A4\uC6E8\uC5B4)"
    },
    {
      id: "assess",
      text: "aside.menu.assess.name",
      useYn: true,
      description: "AI\uC9C4\uB2E8\uD3C9\uAC00"
    }
  ]
};
const menu = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return data;
  } else if (event.req.method === "POST") {
    const body = await readBody(event);
    data = Object.assign({}, body);
    return data;
  }
});

export { menu as default };
//# sourceMappingURL=menu.mjs.map
