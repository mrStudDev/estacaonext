from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HomeSiteViewSet, TagSiteModelViewSet

router = DefaultRouter()
router.register(r'homesite', HomeSiteViewSet)
router.register(r'tagsitemodel', TagSiteModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]