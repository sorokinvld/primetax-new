from rest_framework.routers import DefaultRouter
from .views import EmploymentDetailsView, PensionDetailsView, ExpensesView

router = DefaultRouter()  # create a router
router.register(r'employment', EmploymentDetailsView)
router.register(r'pension', PensionDetailsView)
router.register(r'expenses',ExpensesView)

urlpatterns = router.urls  # get the generated urls
