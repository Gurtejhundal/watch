from rest_framework.views import APIView
from rest_framework.response import Response

class CreatePaymentIntentAPIView(APIView):
    def post(self, request):
        return Response({'client_secret': 'dummy_secret_123'})

