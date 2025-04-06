# from math import sqrt
# from scipy.stats import norm
# import numpy as np
# from concurrent.futures import ThreadPoolExecutor, as_completed

# class TestU01LongestRepeatedSubstringTest:
#     @staticmethod
#     def compute_longest_repeated_length(substring, data):
#         return len(substring) if data.count(substring) > 1 else 0

#     @staticmethod
#     def TestU01LongestRepeatedSubstringTest(data, verbose=False):
#         data = data.replace(',', '').strip()

#         if not data:
#             return None 

#         # Generate all unique substrings
#         unique_substrings = set(data)

#         # Use ThreadPoolExecutor to compute longest repeated substring lengths in parallel
#         longest_repeat = 0
#         with ThreadPoolExecutor() as executor:
#             futures = {executor.submit(TestU01LongestRepeatedSubstringTest.compute_longest_repeated_length, substring, data): substring for substring in unique_substrings}
#             for future in as_completed(futures):
#                 longest_repeat = max(longest_repeat, future.result())

#         expected = np.log2(len(data)) if len(data) > 0 else 0
#         variance = np.log2(len(data)) ** 2 if len(data) > 0 else 0
#         z_statistic = (longest_repeat - expected) / sqrt(variance) if variance > 0 else float('inf')  # Handle division by zero
#         p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

#         if verbose:
#             print(f"Longest Repeated Substring Test - Z-statistic: {z_statistic}, p-value: {p_value}")
        
#         return p_value, (p_value >= 0.01)


from math import sqrt, log2
from scipy.stats import norm
import numpy as np
from concurrent.futures import ThreadPoolExecutor, as_completed, TimeoutError

class TestU01LongestRepeatedSubstringTest:
    @staticmethod
    def _build_suffix_array_and_lcp(data):
        """Construct suffix array and longest common prefix (LCP) array."""
        n = len(data)
        suffixes = sorted((data[i:], i) for i in range(n))  # Sort suffixes lexicographically
        suffix_array = [s[1] for s in suffixes]

        # Compute LCP array
        rank = [0] * n
        for i, suffix in enumerate(suffix_array):
            rank[suffix] = i

        lcp = [0] * (n - 1)
        h = 0
        for i in range(n):
            if rank[i] > 0:
                j = suffix_array[rank[i] - 1]
                while i + h < n and j + h < n and data[i + h] == data[j + h]:
                    h += 1
                lcp[rank[i] - 1] = h
                if h > 0:
                    h -= 1

        return suffix_array, lcp

    @staticmethod
    def TestU01LongestRepeatedSubstringTest(data, verbose=False, time_limit=5):
        """Optimized TestU01 Longest Repeated Substring Test."""
        print("uo1longest")

        # Preprocessing
        data = data.strip()
        n = len(data)

        if n < 2:
            return -2, False  # Not enough data for the test

        try:
            with ThreadPoolExecutor() as executor:
                future = executor.submit(TestU01LongestRepeatedSubstringTest._build_suffix_array_and_lcp, data)
                suffix_array, lcp = future.result(timeout=time_limit)
        except TimeoutError:
            return -3, False  # Timeout occurred

        # Find the longest repeated substring using LCP array
        longest_repeat = max(lcp) if lcp else 0

        # Statistical Analysis
        expected = log2(n) if n > 1 else 0
        variance = log2(n) ** 2 if n > 1 else 0

        if variance == 0:
            return 0.0, False  # Avoid division by zero

        z_statistic = (longest_repeat - expected) / sqrt(variance)
        p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

        if verbose:
            print(f"Longest Repeated Substring Test - Z-statistic: {z_statistic}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
