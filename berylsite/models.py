from django.db import models

class navmodel(models.Model):
    title = models.CharField(max_length=20)
    pagelink = models.CharField(max_length=10)
    pagecontent = models.TextField(blank=True)

    def __str__(self):
        return self.title

class bootmodel(models.Model):
    validity = (
        ("Y","Available"),
        ("N","Not Available"),
    )
    name = models.CharField(max_length=30)
    picture = models.CharField(max_length=50,default="/static/boot/")
    amount = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)
    valid = models.CharField(max_length=15,choices=validity)
    code = models.CharField(max_length = 20,default="boot-",unique=True)
    description = models.TextField(max_length = 100)

    def __str__(self):
        return self.name

class clothmodel(models.Model):
    validity = (
        ("Y","Available"),
        ("N","Not Available"),
    )
    name = models.CharField(max_length=30)
    picture = models.CharField(max_length=50,default="/static/cloth/")
    amount = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)
    valid = models.CharField(max_length=15,choices=validity)
    code = models.CharField(max_length = 20,default="cloth-", unique=True)
    description = models.TextField(max_length = 100)

    def __str__(self):
        return self.name

class cakemodel(models.Model):
    validity = (
        ("Y","Available"),
        ("N","Not Available"),
    )
    name = models.CharField(max_length=30)
    picture = models.CharField(max_length=50,default="/static/cake/")
    amount = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)
    valid = models.CharField(max_length=15,choices=validity)
    code = models.CharField(max_length = 20,default="cake-",unique=True)
    description = models.TextField(max_length = 100)

    def __str__(self):
        return self.name

class pillowmodel(models.Model):
    validity = (
        ("Y","Available"),
        ("N","Not Available"),
    )
    name = models.CharField(max_length=30)
    picture = models.CharField(max_length=50,default="/static/pillow/")
    amount = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)
    valid = models.CharField(max_length=15,choices=validity)
    code = models.CharField(max_length = 20,default="pillow-",unique=True)
    description = models.TextField(max_length = 100)

    def __str__(self):
        return self.name

class framemodel(models.Model):
    validity = (
        ("Y","Available"),
        ("N","Not Available"),
    )
    name = models.CharField(max_length=30)
    picture = models.CharField(max_length=50,blank=True)
    amount = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)
    valid = models.CharField(max_length=15,choices=validity)
    code = models.CharField(max_length = 20,default="frame-",unique=True)
    description = models.TextField(max_length = 100)

    def __str__(self):
        return self.name

class mugmodel(models.Model):
    validity = (
        ("Y","Available"),
        ("N","Not Available"),
    )
    name = models.CharField(max_length=30, default="Mug Cup")
    picture = models.CharField(max_length=50,default="/static/mug/")
    amount = models.IntegerField()
    date_added = models.DateField(auto_now_add=True)
    valid = models.CharField(max_length=15,choices=validity)
    code = models.CharField(max_length = 20,default="mug-",unique=True)
    description = models.TextField(max_length = 100,default="Mug Cup || Available in color []")

    def __str__(self):
        return self.name

class greetingMessage(models.Model):
    message = models.TextField(max_length=120)

    def __str__(self):
        return "{}{}".format(self.message[0:20],".....")

class userDetail(models.Model):
    availableGender = (
        ("M","Male"),
        ("F","Female"),
    )
    Username = models.CharField(max_length = 20)
    Gender = models.CharField(max_length = 7,choices=availableGender,blank=True)
    MobileNo = models.CharField(max_length=15,blank=True)
    Email = models.EmailField(max_length = 50,blank=True)
    Address = models.CharField(max_length = 100,blank=True)
# Create your models here.
