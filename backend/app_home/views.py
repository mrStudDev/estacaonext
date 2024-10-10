from rest_framework import viewsets

from .models import HomeSite, TagSiteModel
from .serializers import HomeSiteSerializer, TagSiteModelSerializer

class HomeSiteViewSet(viewsets.ModelViewSet):
    queryset = HomeSite.objects.all()
    serializer_class = HomeSiteSerializer

class TagSiteModelViewSet(viewsets.ModelViewSet):
    queryset = TagSiteModel.objects.all()
    serializer_class = TagSiteModelSerializer
