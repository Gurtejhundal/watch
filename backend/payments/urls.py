from django.urls import path
from .views import CreatePaymentIntentAPIView

urlpatterns = [
    path('create-intent/', CreatePaymentIntentAPIView.as_view(), name='payment-intent'),
]
