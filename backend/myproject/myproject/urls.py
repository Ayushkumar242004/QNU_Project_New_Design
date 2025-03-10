# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('', include('home.urls')),
#     path('api/', include('user_api.urls')),
# ]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('api/', include('accounts.urls')),
    path('reports/', include('reports.urls')),
]
