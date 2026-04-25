from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Order, Cart, CartItem
from products.models import Product
from .serializers import OrderSerializer, CartSerializer

class AddToCartAPIView(APIView):
    def post(self, request):
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)
        # Dummy session-based cart
        session_id = request.session.session_key or 'dummy_session'
        cart, _ = Cart.objects.get_or_create(session_id=session_id)
        product = Product.objects.get(id=product_id)
        
        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        if not created:
            cart_item.quantity += int(quantity)
        else:
            cart_item.quantity = int(quantity)
        cart_item.save()
        
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)

class UpdateCartAPIView(APIView):
    def patch(self, request):
        cart_item_id = request.data.get('cart_item_id')
        quantity = request.data.get('quantity')
        cart_item = CartItem.objects.get(id=cart_item_id)
        cart_item.quantity = int(quantity)
        cart_item.save()
        return Response({'status': 'updated'})

class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

