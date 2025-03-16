import numpy as np
from scipy.stats import chi2
from collections import Counter

class ChiSquareTest:
    @staticmethod
    def ChiSquareTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data:
            return -2, False  # Not enough data

        try:
            counts = Counter(data)
            observed_frequencies = np.array(list(counts.values()))
            expected_frequency = len(data) / len(counts)

            chi_square_stat = sum((observed_frequencies - expected_frequency) ** 2 / expected_frequency)
            df = len(counts) - 1
            p_value = 1 - chi2.cdf(chi_square_stat, df)

            if verbose:
                print(f"Chi-Square Test - χ²: {chi_square_stat}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
