from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Report
from .serializers import ReportSerializer
from google import genai
from google.genai import types
import httpx
import logging
import pathlib

logger = logging.getLogger(__name__)

# Configure Gemini API
client = genai.Client(api_key="AIzaSyA4yim2okmVuLZqFfK9ryUa1HQRtRL2JUs")  # Replace with your actual API key

from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication, TokenAuthentication

class ReportUploadView(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [AllowAny]  # Allow all users to access this endpoint

    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        uploaded_file = request.FILES.get("file")

        if not uploaded_file:
            return Response({"error": "No file uploaded"}, status=400)

        try:
            file_path = pathlib.Path(f"/tmp/{uploaded_file.name}")
            with file_path.open("wb") as f:
                for chunk in uploaded_file.chunks():
                    f.write(chunk)

            print("📄 PDF saved locally for processing.")

            doc_data = file_path.read_bytes()

            prompt = "This file consists of NIST statistical tests and Dieharder tests, which evaluate the randomness of a given number. Each test computes a p-value to determine randomness: if p-value ≤ 0.05, the number is considered non-random; otherwise, it is considered random. Now, analyze this document and perform the following tasks: Explain the purpose of each test and what it measures, summarize the results of each test and assess whether they indicate randomness, identify any patterns or biases in the test outcomes, analyze graphs (if present) and extract key insights, and provide a final conclusion on the overall quality of randomness and whether the numbers meet statistical randomness criteria. Also generates a single table which consists of all the tests and their result yes or no.Extract the graphs persent in the report and send it graph to for better analysis."

            response = client.models.generate_content(
                model="gemini-1.5-flash",
                contents=[
                    types.Part.from_bytes(
                        data=doc_data,
                        mime_type="application/pdf",
                    ),
                    prompt,
                ],
            )

            analysis_text = response.text if hasattr(response, "text") else "No meaningful analysis generated."

            return Response({"analysis": analysis_text}, status=200)

        except Exception as e:
            logger.error(f"Error while processing the request: {str(e)}", exc_info=True)
            return Response({"error": str(e)}, status=500)
