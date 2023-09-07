// models/student.model.ts
export class Student {
    id!: number;
    name!: string;
    gender!: string;
    dateOfBirth!: Date;
    department!: string;
    email!: string;
    contactNumber!: string; 
    rollNumber!: number;// Non-null assertion operator
  
    constructor() {
      // Constructor logic if needed
    }
  }
  
  