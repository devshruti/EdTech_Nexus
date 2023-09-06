export interface Enrollment {
    id: number;             // Unique identifier for the enrollment
    studentId: number;     // ID of the enrolled student
    courseId: number;      // ID of the course in which the student is enrolled
    enrollmentDate: Date; // Date when the enrollment was made
    status: string;       // Status of the enrollment (e.g., "Enrolled," "Completed," "Dropped," etc.)
    // Add other properties as needed
  }
  