from rest_framework.routers import DefaultRouter
from .views import TaxFilingView

router = DefaultRouter() 
router.register(r'tax', TaxFilingView)

urlpatterns = router.urls 
