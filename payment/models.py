from django.db import models
class payment(models.Model):
    event = models.CharField(max_length=20)
    name = models.CharField(max_length=50)
    itemsdetail = models.TextField(blank=True)
    email = models.EmailField(blank=False)
    tel = models.CharField(max_length=12)
    address = models.TextField(blank=True)
    txref = models.CharField(max_length = 25)
    amount = models.CharField(max_length = 20,blank=False,)
    datetime = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=4,default='fail')

    def __str__(self):
        return str("{} - {}".format(self.name ,self.event))


# Create your models here.
