from django.urls import path
from . import views

urlpatterns = [
    path('example/<str:param1>/<int:param2>/', views.example_view, name='example_view'),
]