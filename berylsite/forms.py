from django.forms import ModelForm
from .models import userDetail

class userInfo(ModelForm):
    class Meta:
        model = userDetail
        fields = ['Username','Gender','MobileNo','Email','Address']