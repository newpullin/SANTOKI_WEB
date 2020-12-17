from django.urls import path

from notice import views


app_name = 'notice'

urlpatterns = [
    path('list/', views.NoticeLV.as_view(), name='notice_list'),
    path('<int:pk>/', views.NoticeDV.as_view(), name='notice_detail')
]