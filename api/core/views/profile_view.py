from django.shortcuts import get_object_or_404, render
from django.conf import settings
from rest_framework import viewsets, mixins, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model

from core.permissions import *
from core.models import *
from core.serializers import *
from core.utils import isAdmin, isSubscriber
from core.pagination import PaginationType1

User = get_user_model()


class ProfileViewSet(
        mixins.RetrieveModelMixin,
        mixins.UpdateModelMixin,
        mixins.DestroyModelMixin,
        mixins.ListModelMixin,
        viewsets.GenericViewSet):
    queryset = ProfileModel.objects.select_related('user').all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAdminOrReadOnly]
    pagination_class = PaginationType1

    # def get_permissions(self):
    #     if self.request.method == "GET":
    #         return [permissions.IsAuthenticated()]
    #     return [permissions.IsAdminUser()]

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return ProfileModel.objects.select_related('user').all()
        else:
            return []

    @decorators.action(detail=False, methods=["GET", "PUT", "DELETE"], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        profile = get_object_or_404(ProfileModel, user_id=request.user.id)
        if request.method == "GET":
            serializer = ProfileSerializer(profile)
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        elif request.method == "PUT":
            serializer = ProfileSerializer(profile, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        elif request.method == "DELETE":
            user = profile.user
            profile.delete()
            user.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)

    @decorators.action(detail=False, methods=["GET"], permission_classes=[permissions.IsAuthenticated])
    def all(self, request):
        profile_queryset = ProfileModel.objects.select_related('user').all()
        serializer = ProfileSerializer(profile_queryset, many=True)
        return response.Response(status=status.HTTP_200_OK, data=serializer.data)
