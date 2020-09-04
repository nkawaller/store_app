from django.urls import path

from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

from api import views

urlpatterns = [
    path('profile/', views.ProfileListCreate.as_view()),
    path('products/', views.ProductsListCreate.as_view()),
    path('transactions/', views.TransactionHistoryListCreate.as_view()),
    path('cart/', views.CartListCreate.as_view()),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

