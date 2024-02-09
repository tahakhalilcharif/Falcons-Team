# github_integration/views.py
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from decouple import config
from .models import * 
from .forms import *
from django.core.mail import send_mail
from django.shortcuts import render, get_object_or_404, redirect

#tasks view
def add_task(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('task_list')
    else:
        form = TaskForm()

    return render(request, 'add_task.html', {'form': form})

def task_list(request):
    task_list = Task.objects.all()
    return render(request, 'task_list.html', {'task_list': task_list})

def update_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)

    if request.method == 'POST':
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('task_list')
    else:
        form = TaskForm(instance=task)

    return render(request, 'update_task.html', {'form': form, 'task': task})

def delete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)

    if request.method == 'POST':
        task.delete()
        return redirect('task_list')

    return render(request, 'delete_task.html', {'task': task})


#Criteria views
def add_criteria(request):
    if request.method == 'POST':
        form = CriteriaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('criteria_list')

    else:
        form = CriteriaForm()

    return render(request, 'add_criteria.html', {'form': form})

def update_criteria(request, criteria_id):
    criteria = get_object_or_404(Criteria, id=criteria_id)

    if request.method == 'POST':
        form = CriteriaForm(request.POST, instance=criteria)
        if form.is_valid():
            form.save()
            return redirect('criteria_list')

    else:
        form = CriteriaForm(instance=criteria)

    return render(request, 'update_criteria.html', {'form': form, 'criteria': criteria})

def delete_criteria(request, criteria_id):
    criteria = get_object_or_404(Criteria, id=criteria_id)

    if request.method == 'POST':
        criteria.delete()
        return redirect('criteria_list')

    return render(request, 'delete_criteria.html', {'criteria': criteria})

def criteria_list(request):
    criteria_list = Criteria.objects.all()
    return render(request, 'criteria_list.html', {'criteria_list': criteria_list})

#Github views
#not sure about this part
"""
@csrf_exempt
def github_webhook(request):
    if request.method == 'POST':
        payload = json.loads(request.body.decode('utf-8'))
        event_type = request.headers.get('X-GitHub-Event')

        if event_type == 'pull_request':
            handle_pull_request_event(payload)

        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})

def handle_pull_request_event(payload):
    user = payload['sender']['login']
    repository = payload['repository']['full_name']
    pull_request_number = payload['number']

    github_pr = GitHubPullRequest.objects.create(
        user=user,
        repository=repository,
        pull_request_number=pull_request_number,
    )

    initiate_code_review(github_pr)

def initiate_code_review(github_pr):
    #Implement your code review logic here

    #this is where the model will be
    github_access_token = config('GITHUB_ACCESS_TOKEN')

    headers = {
        'Authorization': f'token {github_access_token}',
        'Accept': 'application/vnd.github.v3+json',
    }

    response = requests.get(
        f'https://api.github.com/repos/{github_pr.repository}/pulls/{github_pr.pull_request_number}',
        headers=headers
    )

    if response.status_code == 200:
        pull_request_data = response.json()

        code_submission = CodeSubmission.objects.create(
            user=github_pr.user,
            code=pull_request_data['body'],#the code is in the body
        )

        review_report = perform_code_review(code_submission)
        review = Review.objects.create(
            code_submission=code_submission,
            report=review_report,
        )

        notify_user(review)
    else:
        pass

def notify_user(review):
    user = review.code_submission.user
    subject = "Code Review Results"
    message = f"Dear {user.username},\n\n{review.report}\n\nSincerely,\nYour Code Review Team"

    send_mail(
        subject,
        message,
        'your_email@example.com', #replace with your emaik
        [user.email],
        fail_silently=False,
    )

"""
