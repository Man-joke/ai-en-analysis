import { defineEventHandler, readBody } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = {
  teacher: [
    {
      id: "progress",
      text: "progress.aside.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC9C4\uB3C4\uD559\uC2B5"
    },
    {
      id: "reference",
      text: "reference.aside.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC218\uC5C5\uC790\uB8CC\uC2E4"
    },
    {
      id: "contents",
      text: "external.aside.contents.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC218\uC5C5\uC790\uB8CC\uC2E4-\uC790\uB8CC\uAC80\uC0C9"
    },
    {
      id: "nuri",
      text: "external.aside.nuri.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC218\uC5C5\uC790\uB8CC\uC2E4-\uB204\uB9AC\uC9D1\uC5F0\uACB0"
    },
    {
      id: "whboard",
      text: "external.aside.whboard.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC218\uC5C5\uC790\uB8CC\uC2E4-\uD654\uC774\uD2B8\uBCF4\uB4DC"
    },
    {
      id: "tool",
      text: "tool.aside.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC218\uC5C5\uB3C4\uAD6C"
    },
    {
      id: "analyze",
      text: "result.aside.analyze.name",
      useYn: true,
      description: "\uD559\uC2B5\uACB0\uACFC-\uD559\uC2B5\uBD84\uC11D"
    },
    {
      id: "record",
      text: "result.aside.record.name",
      useYn: true,
      description: "\uD559\uC2B5\uACB0\uACFC-\uC0DD\uD65C\uAE30\uB85D\uBD80"
    },
    {
      id: "everyday",
      text: "administer.aside.everyday.name",
      useYn: true,
      description: "\uAD50\uBB34\uC218\uCCA9-\uACFC\uC81C\uAD00\uB9AC-\uB9E4\uC77C5\uBD84\uAD00\uC81C"
    },
    {
      id: "recommend",
      text: "administer.aside.recommend.name",
      useYn: true,
      description: "\uAD50\uBB34\uC218\uCCA9-\uACFC\uC81C\uAD00\uB9AC-AI\uCD94\uCC9C\uC790\uB8CC"
    },
    {
      id: "evaluation",
      text: "administer.aside.evaluation.name",
      useYn: true,
      description: "\uAD50\uBB34\uC218\uCCA9-\uACFC\uC81C\uAD00\uB9AC-\uB9DE\uCDA4\uB2E8\uC6D0\uD3C9\uAC00"
    }
  ],
  student: [
    {
      id: "progress",
      text: "progress.aside.name",
      useYn: true,
      description: "\uC624\uB298\uC758\uC218\uC5C5-\uC9C4\uB3C4\uD559\uC2B5"
    },
    {
      id: "touch",
      text: "self.aside.touch.name",
      useYn: true,
      description: "\uC2A4\uC2A4\uB85C\uD559\uC2B5-AI Touch VOCA"
    },
    {
      id: "talk",
      text: "self.aside.talk.name",
      useYn: true,
      description: "\uC2A4\uC2A4\uB85C\uD559\uC2B5-AI CURI Talk"
    },
    {
      id: "level",
      text: "self.aside.level.name",
      useYn: true,
      description: "\uC2A4\uC2A4\uB85C\uD559\uC2B5-AI Level Test"
    },
    {
      id: "analyze",
      text: "result.aside.analyze.name",
      useYn: true,
      description: "\uD559\uC2B5\uACB0\uACFC-\uD559\uC2B5\uBD84\uC11D"
    },
    {
      id: "record",
      text: "result.aside.record.name",
      useYn: true,
      description: "\uD559\uC2B5\uACB0\uACFC-\uC0DD\uD65C\uAE30\uB85D\uBD80"
    },
    {
      id: "everyday",
      text: "administer.aside.everyday.name",
      useYn: true,
      description: "\uAD50\uBB34\uC218\uCCA9-\uACFC\uC81C\uAD00\uB9AC-\uB9E4\uC77C5\uBD84\uAD00\uC81C"
    },
    {
      id: "recommend",
      text: "administer.aside.recommend.name",
      useYn: true,
      description: "\uC54C\uB9BC\uC7A5-\uC624\uB298\uC758\uACFC\uC81C-AI\uCD94\uCC9C\uC790\uB8CC"
    },
    {
      id: "evaluation",
      text: "administer.aside.evaluation.name",
      useYn: true,
      description: "\uC54C\uB9BC\uC7A5-\uC624\uB298\uC758\uACFC\uC81C-\uB9DE\uCDA4\uB2E8\uC6D0\uD3C9\uAC00"
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
