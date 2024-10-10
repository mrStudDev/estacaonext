from rest_framework import serializers
from .models import TagSiteModel, HomeSite

class TagSiteModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagSiteModel
        fields = '__all__'

class HomeSiteSerializer(serializers.ModelSerializer):
    tags = TagSiteModelSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = HomeSite
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None