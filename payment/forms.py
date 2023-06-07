from django.forms import ModelForm
from .models import payment

class orders(ModelForm):
    class Meta:
        model = payment
        fields = ['event','name','amount','email','tel','itemsdetail','address']