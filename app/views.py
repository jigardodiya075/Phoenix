from django.shortcuts import render,redirect
from .models import *
# Create your views here.
def home(request):
    images = Portfolio.objects.all() 
    context = {'images': images}
    return render(request, 'app/index.html',context)


def contact(request):
    if request.method == "POST":
        name= request.POST.get('name','')
        email= request.POST.get('email','')
        subject= request.POST.get('subject','')
        message= request.POST.get('message','')
        Contact(name=name, email=email, subject=subject, message=message).save()
        return redirect("home")

    return render(request, 'app/index.html')
