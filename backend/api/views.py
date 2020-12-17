from django.http import JsonResponse
from django.shortcuts import render

from api.views_util import obj_to_post
from notice.models import Notice

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
from django.views.generic.list import BaseListView


@method_decorator(ensure_csrf_cookie, name='dispatch')
class ApiPostLV(BaseListView):
    model = Notice

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        noticeList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=noticeList, safe=False, status=200)