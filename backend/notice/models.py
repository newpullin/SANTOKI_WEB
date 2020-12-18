from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
from django.urls import reverse


class Notice(models.Model):
    title = models.CharField(verbose_name='TITLE', max_length=50)
    content = models.TextField('CONTENT')
    created_at = models.DateTimeField('CREATE DATE', auto_now_add=True)
    modify_dt = models.DateTimeField('MODIFY DATE', auto_now=True)
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('notice:post_detail', args=(self.id,))

    def get_prev(self):
        return self.get_previous_by_modify_dt()

    def get_next(self):
        return self.get_next_by_modify_dt()