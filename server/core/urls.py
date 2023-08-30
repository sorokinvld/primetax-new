from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("api/auth/", include("authentication.urls")),
    path("admin/", admin.site.urls),
    path('api/',include("users.urls")),
    path('api/', include("chatbot.urls")),
    path('api/',include("employment.urls")),
    path('api/',include("tax.urls"))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
