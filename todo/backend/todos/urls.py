from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.ListTodos),
    path('<int:pk>/', views.DetailTodo),
]
