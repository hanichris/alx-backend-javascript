/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/Java.ts' />
/// <reference path='subjects/React.ts' />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Tim',
    lastName: 'Burton',
    experienceTeachingC: 10,
};

cpp.setTeacher = cTeacher;
java.setTeacher = cTeacher;
react.setTeacher = cTeacher;
console.log('C++');
console.log(`${cpp.getRequirements()}\n ${cpp.getAvailableTeacher()}\n`);
console.log('Java');
console.log(`${java.getRequirements()}\n ${java.getAvailableTeacher()}\n`);
console.log('React');
console.log(`${react.getRequirements()}\n ${react.getAvailableTeacher()}\n`);