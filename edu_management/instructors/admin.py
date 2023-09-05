from django.contrib import admin
from .models import Instructor, Student, Course, Enrollment, Assignment, Submission, Department, Announcement

admin.site.register(Instructor)
admin.site.register(Student)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Assignment)
admin.site.register(Submission)
admin.site.register(Department)
admin.site.register(Announcement)
