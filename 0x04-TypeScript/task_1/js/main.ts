// First two attributes cannot be re-written to after initialization.
// Use `readonly` to achieve this.
// Can add an attribute of any type to the object with this interface without
// specifying what the name will be.
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return firstName[0].concat('. ', lastName)
};

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

function createStudent(
    ctor: StudentConstructor,
    firstName: string,
    lastName: string
): StudentInterface {
    return new ctor(firstName, lastName);
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(f: string, l: string) {
        this.firstName = f;
        this.lastName = l;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}