from django.contrib import admin
from .models import *

# Register your models here
admin.site.register(Task)
admin.site.register(GitHubPullRequest)
admin.site.register(Review)
admin.site.register(Feedback)
admin.site.register(CodeSubmission)
admin.site.register(Criteria)
#s