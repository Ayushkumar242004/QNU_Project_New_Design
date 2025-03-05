from django.urls import path
from .views import ReportUploadView

urlpatterns = [
    path('upload/', ReportUploadView.as_view(), name='upload_report'),
]
