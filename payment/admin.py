from django.contrib import admin
from .models import payment

class paymentAdmin(admin.ModelAdmin):
    list_display = ('__str__','datetime',)
    list_filter = ('datetime','id')
    search_field = ('datetime','id','name')
    readonly_fields = ('datetime',)
    ordering = ('id',)

admin.site.register(payment,paymentAdmin)
# Register your models here.
