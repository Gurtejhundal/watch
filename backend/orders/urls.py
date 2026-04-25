from django.urls import path
from .views import AddToCartAPIView, UpdateCartAPIView, OrderListCreateAPIView

urlpatterns = [
    path('cart/add/', AddToCartAPIView.as_view(), name='cart-add'),
    path('cart/update/', UpdateCartAPIView.as_view(), name='cart-update'),
    path('create/', OrderListCreateAPIView.as_view(), name='order-create'),
    path('', OrderListCreateAPIView.as_view(), name='order-list'),
]
