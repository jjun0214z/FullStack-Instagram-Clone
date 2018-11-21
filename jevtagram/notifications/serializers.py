from rest_framework import serializers
from . import models
from jevtagram.users import serializers as user_serializers
from jevtagram.images import serializers as images_serializers

class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = images_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'
