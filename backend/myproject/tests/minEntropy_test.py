import numpy as np
from collections import Counter

class MinEntropyTest:
    @staticmethod
    def MinEntropyTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data:
            return -2, False  # Not enough data

        try:
            counts = Counter(data)
            probabilities = [freq / len(data) for freq in counts.values()]
            min_entropy = -np.log2(max(probabilities))

            p_value = np.exp(-abs(min_entropy - 1))  # Approximation

            if verbose:
                print(f"Min-Entropy Test - Min Entropy: {min_entropy}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
