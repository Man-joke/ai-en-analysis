import { defineEventHandler } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

let data = [
  {
    contentId: "1",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t200316100131986.jpg"
    },
    materialName: "\uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694",
    kofContent: "image"
  },
  {
    contentId: "2",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2130902n2627390.jpg"
    },
    materialName: "\uB367\uC148\uAD6C\uAD6C\uD45C",
    kofContent: "image"
  },
  {
    contentId: "3",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t200316100101561.jpg"
    },
    materialName: "\uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694",
    kofContent: "image"
  },
  {
    contentId: "4",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i4949997.jpg"
    },
    materialName: "[\uC0BD\uD654] \uC0C9\uC5F0\uD544",
    kofContent: "image"
  },
  {
    contentId: "5",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t200311084750296.jpg"
    },
    materialName: "\uB367\uC148\uC744 \uD574 \uBCFC\uAE4C\uC694(1)",
    kofContent: "image"
  },
  {
    contentId: "6",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t200311084710821.jpg"
    },
    materialName: "\uB367\uC148 \uC218\uD559\uC775\uD798",
    kofContent: "image"
  },
  {
    contentId: "7",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t200310034903801.jpg"
    },
    materialName: "\uB367\uC148 \uD574 \uBCFC\uAE4C\uC694",
    kofContent: "image"
  },
  {
    contentId: "8",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t200310034851005.jpg"
    },
    materialName: "\uB367\uC148_\uC218\uD559\uC775\uD798",
    kofContent: "image"
  },
  {
    contentId: "9",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i4950887.jpg"
    },
    materialName: "\uB450 \uAC1C\uC529 \uB124 \uBB36\uC74C",
    kofContent: "image"
  },
  {
    contentId: "10",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i4950434.jpg"
    },
    materialName: "\uB2E4\uC12F\uAC1C\uC529 \uC138 \uBB36\uC74C",
    kofContent: "image"
  },
  {
    contentId: "11",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i4942919.jpg"
    },
    materialName: "\uC0AC\uD0D5\uC758 \uAC1C\uC218 \uBE44\uAD50",
    kofContent: "image"
  },
  {
    contentId: "12",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i493160.jpg"
    },
    materialName: "\uC0C9\uCE60\uB41C \uB9C8\uC6B0\uC2A4",
    kofContent: "image"
  },
  {
    contentId: "13",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i4918232.jpg"
    },
    materialName: "\uC9C0\uCD9C \uB0B4\uC5ED",
    kofContent: "image"
  },
  {
    contentId: "14",
    contObj: {
      thumbnailFileUrlPath: "https://aidtcdn.i-screammedia.com/temp/ai/t2090116i4916263.jpg"
    },
    materialName: "\uC218\uD559 \uAD50\uAD6C",
    kofContent: "image"
  }
];
const aicontents = defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return data;
  }
});

export { aicontents as default };
//# sourceMappingURL=aicontents.mjs.map
