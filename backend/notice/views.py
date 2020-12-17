from django.views.generic import TemplateView

from notice.models import Notice


class NoticeLV(TemplateView):
    template_name = 'notice/notice_list.html'


class NoticeDV(TemplateView):
    template_name = 'notice/notice_detail.html'
