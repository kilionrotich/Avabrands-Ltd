from rest_framework import mixins, viewsets
from rest_framework.permissions import AllowAny
from .models import NewsPost, PortfolioItem, Rfq, Service
from .permissions import IsInGroup
from .serializers import NewsSerializer, PortfolioSerializer, RfqSerializer, ServiceSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ServiceSerializer
    
    def get_queryset(self):
        return Service.objects.all().order_by("order")


class PortfolioViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PortfolioSerializer
    
    def get_queryset(self):
        return PortfolioItem.objects.all()


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = NewsSerializer
    
    def get_queryset(self):
        return NewsPost.objects.all().order_by("-published_at")


class RfqViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = RfqSerializer
    
    def get_queryset(self):
        return Rfq.objects.all().order_by("-created_at")

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]
        permission = IsInGroup()
        permission.required_groups = ["admin", "manager"]
        return [permission]
