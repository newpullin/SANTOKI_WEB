from django.contrib import admin

# Register your models here.
from notice.models import Notice


@admin.register(Notice)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'modify_dt')

    def get_queryset(self, request):
        return super().get_queryset(request)

