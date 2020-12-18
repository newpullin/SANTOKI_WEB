from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'home.html'


class RabbitView(TemplateView):
    template_name = 'rabbit.html'


class CarrotView(TemplateView):
    template_name = 'carrot.html'


class AboutView(TemplateView):
    template_name = 'about.html'


class DboxView(TemplateView):
    template_name = 'dbox.html'


