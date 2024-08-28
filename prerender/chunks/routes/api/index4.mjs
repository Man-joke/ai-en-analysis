import { defineEventHandler } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

const data = {
  success: true,
  dataSize: 1,
  timestamp: "2024-02-04 01:33:02",
  data: {
    teacherId: "ba294ecc-0e2b-4fa9-8baa-ecdef82cff92",
    originalId: "keenedge",
    name: "\uC774\uC7AC\uD638",
    role: "H",
    schoolId: "7825886d-b04f-11ee-a85f-6045bd452244",
    schoolName: "\uC544\uD06C\uCD08\uB4F1\uD559\uAD50",
    eduOfficeCode: "B10",
    profileUrl: "https://aidtcdn.i-screammedia.com/temp/profile/profile_01.png",
    classInfo: {
      classId: "ffb159c8-adbf-11ee-a85f-6045bd452244",
      grade: "E3",
      classNum: "1",
      firstTeacherId: "ba294ecc-0e2b-4fa9-8baa-ecdef82cff92",
      secondTeacherId: null,
      schoolId: "7825886d-b04f-11ee-a85f-6045bd452244",
      schoolName: "\uC544\uD06C\uCD08\uB4F1\uD559\uAD50",
      gradeShortIntValue: 3,
      gradeSchoolValue: "\uCD08\uB4F1"
    }
  }
};
const index = defineEventHandler((event) => {
  return data;
});

export { index as default };
//# sourceMappingURL=index4.mjs.map
