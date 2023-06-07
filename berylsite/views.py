from django.shortcuts import render
from django.http import HttpResponse,HttpRequest,HttpResponseRedirect
from django import http
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy

from userReview.forms import userReview
from payment.models import payment
from .models import navmodel,bootmodel,clothmodel,cakemodel,pillowmodel,framemodel,mugmodel,greetingMessage,userDetail
from .forms import userInfo


class Register(CreateView):
    template_name = 'registration/register.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('register-success')
    def form_valid(self,form):
        form.save()
        return HttpResponseRedirect(self.success_url)



counts = ['one','two','three','four','five','six','seven','seven','eight','nine','ten','elelven','twelve']

#View to be used by the catalogue
def mainview(request,pagename): 
    template = 'berylsite/navtemplate.html'
    submitted = False
    if request.method == 'POST':
        form = userReview(request.POST)
        if form.is_valid():
            form.save()
        return HttpResponseRedirect("{}?submitted=true".format(pagename))
    else:
        form = userReview()
        if 'submitted' in request.GET:
            submitted = True
    message = ''
    context = {
        'greeting':[],
        'pagedetail':navmodel.objects.get(pagelink = '/'),
        'alldetail':navmodel.objects.all,
        'form':form,
        'submitted':submitted,
        'boot':[],
        'cloth':[],
        'TransactionHistory':[]
    }
    
    for i in greetingMessage.objects.all():
        context['greeting'].append(i.message)

    for i in userDetail.objects.all():
            if i.Username == request.user.username:
                context['detail'] = i 
                break

    for i in counts:
        try:
            Ocookies = request.COOKIES[i].split('-')
            if(Ocookies[0] == 'boot'):
                context['boot'].append(bootmodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
            elif(Ocookies[0] == 'cloth'):
                context['cloth'].append(clothmodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
        except Exception as err:
            message += "" 

    for i in payment.objects.all():
        if i.name == request.user.username:
            context['TransactionHistory'].append(i) 
        else:
            continue

    return render(request,template,context=context)



def productListView(request,pagename):
    #comment form
    submitted = False
    if request.method == 'POST':
        form = userReview(request.POST)
        if form.is_valid():
            form.save()
        return HttpResponseRedirect("{}?submitted=true".format(pagename))
    else:
        form = userReview()
        if 'submitted' in request.GET:
            submitted = True

    message = ''
    context = {
        'greeting':[],
        'alldetail':navmodel.objects.all,
        'boot':[],
        'cloth':[],
        'cake':[],
        'frame':[],
        'pillow':[],
        'mug':[],
        'submitted':submitted,
        'form':form,
        'TransactionHistory':[]
    }
    template = 'berylsite/productTemplate.html'
    ##THIS IS TO DETERMINE THE CONTENT DELIVERED TO THE PAGE
    if(pagename == 'boot'):
        context['products'] = bootmodel.objects.all
        context['pagedetail'] = navmodel.objects.get(pagelink = '/boot')
        context['category'] = '/boot'
        context['productclass'] = 'boot'
    elif(pagename == 'cloth'):
        context['products'] = clothmodel.objects.all
        context['pagedetail'] = navmodel.objects.get(pagelink = '/cloth')
        context['category'] = '/cloth'
        context['productclass'] = 'cloth'
    elif(pagename == 'cake'):
        context['products'] = cakemodel.objects.all
        context['pagedetail'] = navmodel.objects.get(pagelink = '/cake')
        context['category'] = '/cake'
        context['productclass'] = 'cake'
    elif(pagename == 'frame'):
        context['products'] = framemodel.objects.all
        context['pagedetail'] = navmodel.objects.get(pagelink = '/frame')
        context['category'] = '/frame'
        context['productclass'] = 'frame'
    elif(pagename == 'pillow'):
        context['products'] = pillowmodel.objects.all
        context['pagedetail'] = navmodel.objects.get(pagelink = '/pillow')
        context['category'] = '/pillow'
        context['productclass'] = 'pillow'
    elif(pagename == 'mug'):
        context['products'] = mugmodel.objects.all
        context['pagedetail'] = navmodel.objects.get(pagelink = '/mug')
        context['category'] = '/mug'
        context['productclass'] = 'mug'
    
    for i in greetingMessage.objects.all():
        context['greeting'].append(i.message)

    for i in userDetail.objects.all():
            if i.Username == request.user.username:
                context['detail'] = i 
                break

    ##THIS IS TO SORT SOPPING CART ITEM ,TO APPEAR ON PAGE ON EVERY REQUEST
    for i in counts:
        try:
            Ocookies = request.COOKIES[i].split('-')
            if(Ocookies[0] == 'boot'):
                context['boot'].append(bootmodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
            elif(Ocookies[0] == 'cloth'):
                context['cloth'].append(clothmodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
            elif(Ocookies[0] == 'cake'):
                context['cake'].append(cakemodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
            elif(Ocookies[0] == 'frame'):
                context['frame'].append(framemodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
            elif(Ocookies[0] == 'pillow'):
                context['pillow'].append(pillowmodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
            elif(Ocookies[0] == 'mug'):
                context['mug'].append(mugmodel.objects.get(code=request.COOKIES[i]))
                context['valid']=True
        except Exception as err:
            message += ""

    for i in payment.objects.all():
        if i.name == request.user.username:
            context['TransactionHistory'].append(i) 
        else:
            continue
    return render(request,template,context=context)


def settingView(request):
    template = 'berylsite/settingTemplate.html'
    context={}
    check = ''
    if request.method == 'POST':
        for i in userDetail.objects.all():
            if i.Username == request.POST['Username']:
                i.Gender = request.POST['Gender']
                i.MobileNo =  request.POST['MobileNo']
                i.Email =  request.POST['Email']
                i.Address=  request.POST['Address']
                i.save()
                check = 'True'
                break
            else:
                check = 'False'
                continue
        if(check == 'False'):
            form = userInfo(request.POST)
            if form.is_valid():
                form.save()

        return HttpResponseRedirect(reverse_lazy('Rootpage'))
    else:
        for i in userDetail.objects.all():
            if i.Username == request.user.username:
                context['detail'] = i 
                break
            else:
                form = userInfo()
                context['form'] = form
                continue
    return render(request,template,context=context)
# Create your views here.

