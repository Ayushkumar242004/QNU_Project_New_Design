import zlib
import numpy as np

class CompressionTest:
    @staticmethod
    def CompressionTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data or len(data) < 10:
            return -2, False  # Not enough data

        try:
            compressed_size = len(zlib.compress(data.encode(), level=9))
            original_size = len(data)

            compression_ratio = compressed_size / original_size
            expected_ratio = 0.9  # Approximation for random sequences

            p_value = np.exp(-abs(compression_ratio - expected_ratio))

            if verbose:
                print(f"Compression Test - Ratio: {compression_ratio}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
