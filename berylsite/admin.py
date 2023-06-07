from django.contrib import admin
from .models import navmodel,userDetail,bootmodel,clothmodel,cakemodel,pillowmodel,framemodel,mugmodel,greetingMessage

class navAdminModel(admin.ModelAdmin):
    search_fields = ('title',)
    list_display = ('title','pagelink')
    list_filter = ('title',)
    ordering = ('title',)

class productAdminModel(admin.ModelAdmin):
    list_display = ('name','amount','code','date_added','valid')
    list_filter = ('date_added','valid')
    search_fields = ('name','code')
    readonly_fields = ('date_added',)
    ordering = ('code',)
    
class userAdminModel(admin.ModelAdmin):
    list_display = ('Username','Gender')
    list_filter = ('Username','Gender')
    search_fields = ('Gender','Username')
    ordering = ('Username','Gender')
    #readonly_fields = ('Username',)

admin.site.register(greetingMessage)
admin.site.register(userDetail,userAdminModel)
admin.site.register(navmodel,navAdminModel)
admin.site.register(bootmodel,productAdminModel)
admin.site.register(clothmodel,productAdminModel)
admin.site.register(cakemodel,productAdminModel)
admin.site.register(pillowmodel,productAdminModel)
admin.site.register(framemodel,productAdminModel)
admin.site.register(mugmodel,productAdminModel)
# Register your models here.
