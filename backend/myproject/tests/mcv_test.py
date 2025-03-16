import numpy as np
from scipy.stats import norm
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed

class MostCommonValueTest:
    @staticmethod
    def MostCommonValueTest(data, verbose=False):
        # Sanitize input by removing non-binary characters (e.g., commas, spaces)
        data = data.replace(',', '').replace(' ', '').strip()

        if not data:
            return None
        
        # Ensure that data contains at least one bit (0 or 1)
        if len(data) < 1:
            return -2, False  # Not enough data to perform test

        try:
            # Convert data to a numpy array of integers
            data_array = np.array(list(map(int, data)))

            # Count occurrences of 0s and 1s
            counts = Counter(data_array)
            most_common_freq = max(counts.values())

            n = len(data_array)  # Total number of bits

            # Expected frequency of the most common bit in a random sequence
            expected_freq = n / 2
            variance = n / 4  # Variance for a fair binary sequence

            # Calculate Z-statistic and p-value
            z_statistic = (most_common_freq - expected_freq) / np.sqrt(variance)
            p_value = 2 * (1 - norm.cdf(abs(z_statistic)))  # Two-tailed test

            if verbose:
                print(f"Most Common Value Test - Z-statistic: {z_statistic}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception as e:
            return -4, False  # Catch-all for any unexpected issues
