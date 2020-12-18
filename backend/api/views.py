from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic.detail import BaseDetailView

from api.views_util import obj_to_post, prev_next_post
from notice.models import Notice


# Create your views here.
from django.views.generic.list import BaseListView


class ApiPostLV(BaseListView):
    model = Notice
    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        noticeList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=noticeList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Notice
    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        return JsonResponse(data=post, safe=False, status=200)