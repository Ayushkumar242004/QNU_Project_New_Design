import numpy as np

class LZ78YTest:
    @staticmethod
    def LZ78YTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data:
            return -2, False  # Not enough data

        try:
            dictionary = {}
            i, count, n = 0, 1, len(data)

            while i < n:
                substring = data[i]
                while substring in dictionary and i < n - 1:
                    i += 1
                    substring += data[i]

                dictionary[substring] = count
                count += 1
                i += 1

            compression_ratio = len(dictionary) / n
            expected_ratio = 0.7  # Approximation for random sequences

            p_value = np.exp(-abs(compression_ratio - expected_ratio))

            if verbose:
                print(f"LZ78Y Test - Dictionary Size: {len(dictionary)}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
