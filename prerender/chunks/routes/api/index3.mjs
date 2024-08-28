import { defineEventHandler } from 'file:///Users/manjock/Desktop/domfam/aitextbook-en-analysis_frontend/node_modules/h3/dist/index.mjs';

const data = {
  success: true,
  dataSize: 1,
  timestamp: "2024-02-05 09:58:00",
  data: {
    studentId: "24c75743-47bb-4d48-8495-25bda5c05acf",
    originalId: "keenedge4",
    name: "\uD559\uC0DD2",
    number: 2,
    profileUrl: "https://aidtcdn.i-screammedia.com/temp/profile/profile_01.png",
    teacherId: "ba294ecc-0e2b-4fa9-8baa-ecdef82cff92",
    teacherName: "\uC774\uC7AC\uD638",
    schoolId: "7825886d-b04f-11ee-a85f-6045bd452244",
    schoolName: "\uC544\uD06C\uCD08\uB4F1\uD559\uAD50",
    eduOfficeCode: "B10",
    classInfo: {
      classId: "ffb159c8-adbf-11ee-a85f-6045bd452244",
      grade: "E3",
      classNum: 1,
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
//# sourceMappingURL=index3.mjs.map
