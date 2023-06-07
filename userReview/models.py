from django.db import models

class review(models.Model):
    name = models.CharField(max_length = 20)
    message = models.TextField(max_length = 100)
    mail = models.EmailField(max_length = 50)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return "{}{}".format(self.message[0:20],'....')
# Create your models here.
