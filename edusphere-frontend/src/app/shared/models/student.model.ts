// models/student.model.ts
export class Student {
    id!: number;
    name!: string;
    gender!: string;
    dateOfBirth!: Date;
    major!: string;
    email!: string;
    contactNumber!: string; // Non-null assertion operator
  
    constructor() {
      // Constructor logic if needed
    }
  }
  
  