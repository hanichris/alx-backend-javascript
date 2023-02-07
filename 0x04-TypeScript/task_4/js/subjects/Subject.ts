/// <reference path="Teacher.ts" />
namespace Subjects {
    export class Subjects {
        teacher: Teacher;

        set setTeacher(value: Teacher) {
            this.teacher = value;
        }
    }
}
