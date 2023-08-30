from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, DocumentViewSet, BankViewSet

router = DefaultRouter()  # create a router
router.register(r'users', UserProfileViewSet)
router.register(r'upload/file', DocumentViewSet)
router.register(r'bank', BankViewSet)
urlpatterns = router.urls  # get the generated urls
