from django.views.generic import ListView, DetailView

from notice.models import Notice


class NoticeLV(ListView):
    model = Notice


class NoticeDV(DetailView):
    model = Notice
