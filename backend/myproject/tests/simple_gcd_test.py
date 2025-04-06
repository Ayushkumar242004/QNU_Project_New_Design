# import numpy as np
# import math
# from scipy.stats import chi2
# from concurrent.futures import ThreadPoolExecutor

# class MarsagliaTsangSimpleGCDTest:
#     @staticmethod
#     def MarsagliaTsangSimpleGCDTest(data, verbose=False):

#         # Clean and validate the input data
#         data = data.replace(',', '').strip()
#         if not data:
#             return None
#         if data is None or len(data) == 0:
#             return -2, False

#         try:
#             # Preprocess the input data to remove invalid characters
#             cleaned_data = []
#             for item in data:
#                 cleaned_items = ''.join(filter(str.isdigit, item)).split()
#                 for cleaned_item in cleaned_items:
#                     cleaned_data.append(int(cleaned_item))

#             # Convert to numpy array of integers
#             data = np.array(cleaned_data, dtype=int)

#             # Ensure the input data length is even for pairing
#             if len(data) % 2 != 0:
#                 raise ValueError("Input data length must be even.")

#             # Function to compute GCD for a given pair index
#             def compute_gcd_for_pair(i):
#                 gcd_val = math.gcd(data[i], data[i + 1])
#                 return 1 if gcd_val == 1 else 0

#             # Use ThreadPoolExecutor to parallelize GCD computation
#             with ThreadPoolExecutor() as executor:
#                 gcd_counts = list(executor.map(compute_gcd_for_pair, range(0, len(data), 2)))

#             # Expected probability that GCD of two random integers is 1
#             expected_prob = 6 / (np.pi ** 2)

#             # Calculate observed and expected counts of GCD=1
#             observed_gcd_1 = np.sum(gcd_counts)
#             total_pairs = len(gcd_counts)
#             expected_gcd_1 = expected_prob * total_pairs

#             # Variance based on binomial distribution
#             variance = total_pairs * expected_prob * (1 - expected_prob)

#             # Calculate chi-square statistic
#             chi_square = ((observed_gcd_1 - expected_gcd_1) ** 2) / variance
#             p_value = 1 - chi2.cdf(chi_square, 1)

#             if verbose:
#                 print(f"Marsaglia-Tsang Simple GCD Test - Chi-square: {chi_square}, p-value: {p_value}")

#             # Return p-value and pass/fail based on the p-value threshold
#             return p_value, (p_value >= 0.01)

#         except ValueError as e:
#             print(f"ValueError: {e}")
#             return -7, False  # Return -1 if there's a ValueError
#         except Exception as e:
#             print(f"Error: {e}")
#             return -4, False  # Return -1 for any other error


import numpy as np
import math
from scipy.stats import chi2
from concurrent.futures import ThreadPoolExecutor, as_completed, TimeoutError

class MarsagliaTsangSimpleGCDTest:
    @staticmethod
    def _compute_gcd_for_pairs(data_chunk):
        """Compute GCD for all pairs in a given data chunk."""
        return np.array([1 if math.gcd(data_chunk[i], data_chunk[i+1]) == 1 else 0 for i in range(0, len(data_chunk), 2)])

    @staticmethod
    def MarsagliaTsangSimpleGCDTest(data, verbose=False, time_limit=5):
        """Optimized Marsaglia-Tsang Simple GCD Test with parallel execution."""
        print("simplegcd")

        # Step 1: Data Preprocessing
        data = np.array([int(char) for char in data.strip() if char.isdigit()], dtype=np.uint64)
        n = len(data)

        if n == 0 or n % 2 != 0:
            return -2, False  # Invalid input (empty or not even length)

        num_pairs = n // 2
        num_chunks = min(8, num_pairs)  # Use up to 8 parallel threads
        chunk_size = (num_pairs // num_chunks) * 2  # Ensuring even-sized chunks

        gcd_counts = []

        # Step 2: Parallel GCD Computation
        try:
            with ThreadPoolExecutor() as executor:
                futures = [
                    executor.submit(
                        MarsagliaTsangSimpleGCDTest._compute_gcd_for_pairs,
                        data[i * chunk_size : (i + 1) * chunk_size]
                    )
                    for i in range(num_chunks)
                ]

                for future in as_completed(futures, timeout=time_limit):
                    gcd_counts.extend(future.result())

        except TimeoutError:
            return -3, False  # Timeout occurred

        # Step 3: Statistical Test
        expected_prob = 6 / (np.pi ** 2)
        observed_gcd_1 = np.sum(gcd_counts)
        expected_gcd_1 = expected_prob * num_pairs
        variance = num_pairs * expected_prob * (1 - expected_prob)

        # Compute chi-square statistic
        chi_square = ((observed_gcd_1 - expected_gcd_1) ** 2) / variance
        p_value = 1 - chi2.cdf(chi_square, 1)

        if verbose:
            print(f"Marsaglia-Tsang Simple GCD Test - Chi-square: {chi_square}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
