import numpy as np
from scipy.stats import norm

class MultiBlockEntropyTest:
    @staticmethod
    def MultiBlockEntropyTest(data, block_size=8, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data or len(data) < block_size:
            return -2, False  # Not enough data

        try:
            n = len(data)
            num_blocks = n // block_size
            blocks = [data[i * block_size: (i + 1) * block_size] for i in range(num_blocks)]
            
            entropy_values = []
            for block in blocks:
                unique_symbols = set(block)
                probabilities = [block.count(symbol) / block_size for symbol in unique_symbols]
                entropy = -sum(p * np.log2(p) for p in probabilities)
                entropy_values.append(entropy)

            mean_entropy = np.mean(entropy_values)
            variance_entropy = np.var(entropy_values)

            z_statistic = (mean_entropy - 1) / np.sqrt(variance_entropy)
            p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

            if verbose:
                print(f"Multi-Block Entropy Test - Mean Entropy: {mean_entropy}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
