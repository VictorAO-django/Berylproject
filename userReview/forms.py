from django.forms import ModelForm
from .models import review

class userReview(ModelForm):
    class Meta:
        model = review
        fields = ['name','message','mail']