import numpy as np
from collections import Counter
from scipy.stats import norm

class TTupleTest:
    @staticmethod
    def TTupleTest(data, t=2, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data or len(data) < t:
            return -2, False  # Not enough data

        try:
            counts = Counter([data[i:i+t] for i in range(len(data) - t + 1)])
            most_common_freq = max(counts.values())

            n = len(data) - t + 1
            expected_freq = n / (2 ** t)
            variance = expected_freq / 2  

            z_statistic = (most_common_freq - expected_freq) / np.sqrt(variance)
            p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

            if verbose:
                print(f"t-Tuple Test - Z: {z_statistic}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False

