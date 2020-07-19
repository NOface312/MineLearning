from rest_framework import serializers
from .models import Lesson


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = '__all__'

    def create(self, validated_data):
        return Lesson.objects.create(**validated_data)
