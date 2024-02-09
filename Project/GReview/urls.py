from django.urls import path 
from .views import *

urlpatterns = [
    #tasks : 
    path('add/', add_task, name='add_task'),
    path('list/', task_list, name='task_list'),
    path('update/<uuid:task_id>/', update_task, name='update_task'),
    path('delete/<uuid:task_id>/', delete_task, name='delete_task'),

    #Criteria : 
    path('add_criteria/', add_criteria, name='add_criteria'),
    path('update_criteria/<uuid:criteria_id>/', update_criteria, name='update_criteria'),
    path('delete_criteria/<uuid:criteria_id>/', delete_criteria, name='delete_criteria'),
    path('criteria_list/', criteria_list, name='criteria_list'),
]