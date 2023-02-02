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