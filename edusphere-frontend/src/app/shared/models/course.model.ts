export interface Course {
    id: number;             // Unique identifier for the course
    title: string;          // Title of the course
    description: string;    // Description of the course
    instructorId: number;  // ID of the instructor teaching the course
    startDate: Date;       // Start date of the course
    endDate: Date;         // End date of the course         
    courseName: string;      // Maximum number of students that can enroll in the course
    enrolledStudents: number; // Number of students currently enrolled in the course
    department: string;
    courseCode: number;
    // Add other properties as needed
  }
  