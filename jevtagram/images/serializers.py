from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)
from . import models
from jevtagram.users import models as user_models

class SmallImageSerializer(serializers.ModelSerializer):

    """ Used for the notifications """

    class Meta:
        model = models.Image
        fields = [
            'file'
        ]

class CountImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = [
            'id',
            'file',
            'like_count',
            'comment_count'
        ]

class FeeduserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = [
            'username',
            'profile_image'
        ]

class CommentSerializer(serializers.ModelSerializer):

    creator = FeeduserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = [
            'id',
            'message',
            'creator'
        ]

# class LikeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Like
#         fields = '__all__'

class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    creator = FeeduserSerializer()
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = [
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'like_count',
            'creator',
            'tags',
            'natural_time'
        ]

class InputImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = [
            'file',
            'location',
            'caption',
        ]
