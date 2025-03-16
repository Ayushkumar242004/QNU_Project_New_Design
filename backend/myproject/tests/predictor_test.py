import numpy as np

class PredictorTest:
    @staticmethod
    def PredictorTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data or len(data) < 3:
            return -2, False  # Not enough data

        try:
            correct_predictions = 0
            total_predictions = len(data) - 1

            for i in range(1, len(data) - 1):
                predicted = data[i - 1]  # Simple predictor: last value
                if predicted == data[i]:
                    correct_predictions += 1

            prediction_rate = correct_predictions / total_predictions
            expected_rate = 0.5  # Expected for random sequences

            p_value = np.exp(-abs(prediction_rate - expected_rate))

            if verbose:
                print(f"Predictor Test - Prediction Rate: {prediction_rate}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
