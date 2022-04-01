from djoser.serializers import (UserSerializer as BaseUserSerializer,
                                UserCreateSerializer as BaseUserCreateSerializer
                                )
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.db import IntegrityError, transaction
from django.conf import settings

from core.models import ProfileModel

User = get_user_model()


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        try:
            user = self.perform_create(validated_data)
            profile = ProfileModel()
            profile.user = user
            profile.save()
            subscriber_group = Group.objects.filter(name="Subscriber").first()
            if subscriber_group:
                subscriber_group.user_set.add(user)
        except IntegrityError:
            self.fail("cannot_create_user")

        return user

    def perform_create(self, validated_data):
        with transaction.atomic():
            user = User.objects.create_user(**validated_data)
            if settings.SEND_ACTIVATION_EMAIL:
                user.is_active = False
                user.save(update_fields=["is_active"])
        return user


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email']