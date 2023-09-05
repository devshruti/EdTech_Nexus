from django.db import models

major_choices = [
    ('Computer Science', 'Computer Science'),
    ('Engineering', 'Engineering'),
    ('Business', 'Business'),
    ('Mathematics', 'Mathematics'),
    ('Biology', 'Biology'),
    ('Psychology', 'Psychology'),
]

class Student(models.Model):
    student_id = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    date_of_birth = models.DateField()
    major = models.CharField(max_length=50, choices=major_choices)  # Use the choices list here
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

class Instructor(models.Model):
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    department = models.CharField(max_length=255)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name

# class Student(models.Model):
#     student_id = models.CharField(max_length=10, unique=True)
#     name = models.CharField(max_length=255)
#     gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
#     date_of_birth = models.DateField()
#     major = models.CharField(max_length=50, choices=[('Computer Science', 'Computer Science'), ('Engineering', 'Engineering'), ('Business', 'Business'), ...])
#     email = models.EmailField(unique=True)
#     contact_number = models.CharField(max_length=20, unique=True)

#     def __str__(self):
#         return self.name

class Course(models.Model):
    course_code = models.CharField(max_length=10, unique=True)
    course_name = models.CharField(max_length=255)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)
    credits = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.course_name

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.student} - {self.course}"

class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    due_date = models.DateField()

    def __str__(self):
        return self.title

class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    submission_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('Submitted', 'Submitted'), ('Late', 'Late'), ('Graded', 'Graded')])
    remarks = models.TextField()

    def __str__(self):
        return f"{self.student} - {self.assignment}"

class Department(models.Model):
    department_name = models.CharField(max_length=255)
    # You can add more fields as needed.

    def __str__(self):
        return self.department_name

class Announcement(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    publish_date = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title
