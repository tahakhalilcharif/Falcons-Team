from django import forms
from .models import *

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['task_name','description', 'completed']

class CriteriaForm(forms.ModelForm):
    class Meta:
        model = Criteria
        fields = ['name', 'description']

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['code_submission', 'report']

class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['review', 'user', 'comment']