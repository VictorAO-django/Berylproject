from django.contrib import admin

from .models import review

class reviewAdmin(admin.ModelAdmin):
    list_display = ('name','__str__','date')
    ordering = ('date',)
    search_fields = ('date','name','__str__')
    list_filter = ('date',)

admin.site.register(review,reviewAdmin)
# Register your models here.
