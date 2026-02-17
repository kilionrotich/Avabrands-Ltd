from rest_framework import serializers
from .models import NewsPost, PortfolioItem, Rfq, Service


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "title", "description", "order"]


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioItem
        fields = ["id", "title", "category", "summary", "image_url"]


class RfqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rfq
        fields = [
            "id",
            "full_name",
            "company",
            "email",
            "phone",
            "service",
            "budget",
            "message",
            "attachment",
            "created_at"
        ]
        read_only_fields = ["created_at"]


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsPost
        fields = ["id", "title", "slug", "excerpt", "body", "published_at"]
