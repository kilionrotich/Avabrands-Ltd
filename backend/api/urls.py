from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, PortfolioViewSet, RfqViewSet, ServiceViewSet

router = DefaultRouter()
router.register("services", ServiceViewSet, basename="service")
router.register("portfolio", PortfolioViewSet, basename="portfolioitem")
router.register("news", NewsViewSet, basename="newspost")
router.register("rfqs", RfqViewSet, basename="rfq")

urlpatterns = router.urls
