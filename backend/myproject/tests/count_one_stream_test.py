# import numpy as np
# from scipy.stats import norm
# from math import sqrt
# from concurrent.futures import ThreadPoolExecutor, as_completed

# class CountThe1sStreamTest:
#     @staticmethod
#     def CountThe1sStreamTest(data, verbose=False):
#         # Step 1: Sanitize input data
#         data = data.replace(',', '').strip()
        
#         if not data:
#             return None 

#         # Split the data into chunks for parallel processing
#         chunk_size = max(len(data) // 8, 1)  # Define a chunk size
#         chunks = [data[i:i + chunk_size] for i in range(0, len(data), chunk_size)]

#         ones_count = 0
#         total_count = 0

#         # Parallel processing of each chunk
#         with ThreadPoolExecutor() as executor:
#             futures = [executor.submit(CountThe1sStreamTest.process_chunk, chunk) for chunk in chunks]
#             for future in as_completed(futures):
#                 chunk_ones, chunk_total = future.result()
#                 ones_count += chunk_ones
#                 total_count += chunk_total

#         if total_count == 0:
#             return -2, False  # Handle case when no valid bits were processed

#         # Calculate statistical values
#         expected = total_count / 2
#         variance = total_count / 4  # Variance for a binomial distribution (n/4 for p=0.5)
        
#         if variance <= 0:
#             return -6, False  # Variance must be positive

#         z_statistic = (ones_count - expected) / sqrt(variance)  # Z-statistic calculation
#         p_value = 2 * (1 - norm.cdf(abs(z_statistic)))  # Two-tailed p-value

#         if verbose:
#             print(f"Count-the-1s (Stream) Test - Z-statistic: {z_statistic}, p-value: {p_value}")
        
#         return p_value, (p_value >= 0.01)

#     @staticmethod
#     def process_chunk(chunk):
#         ones_count = sum(1 for bit in chunk if bit == '1')
#         total_count = sum(1 for bit in chunk if bit in ('0', '1'))
#         return ones_count, total_count

import numpy as np
from scipy.stats import norm
from math import sqrt
from concurrent.futures import ThreadPoolExecutor, as_completed, TimeoutError

class CountThe1sStreamTest:
    @staticmethod
    def _count_ones(data_chunk):
        """Count '1's in a given binary chunk."""
        ones_count = np.count_nonzero(np.array(list(data_chunk), dtype='U1') == '1')
        total_count = len(data_chunk)
        return ones_count, total_count

    @staticmethod
    def CountThe1sStreamTest(data, verbose=False, time_limit=5):
        
        """Optimized Count-The-1s Stream Test with parallel processing."""
        print("count1")

        # Step 1: Data Preprocessing
        data = ''.join(filter(lambda x: x in '01', data.strip()))  # Keep only '0' and '1'
        n = len(data)

        if n == 0:
            return -2, False  # No valid bits found

        num_chunks = min(8, max(1, n // 8))  # Adjust chunk count based on data size
        chunk_size = n // num_chunks

        ones_count, total_count = 0, 0

        # Step 2: Parallel Processing
        try:
            with ThreadPoolExecutor() as executor:
                futures = [
                    executor.submit(CountThe1sStreamTest._count_ones, data[i * chunk_size : (i + 1) * chunk_size])
                    for i in range(num_chunks)
                ]

                for future in as_completed(futures, timeout=time_limit):
                    chunk_ones, chunk_total = future.result()
                    ones_count += chunk_ones
                    total_count += chunk_total

        except TimeoutError:
            return -3, False  # Timeout occurred

        if total_count == 0:
            return -2, False  # No valid bits processed

        # Step 3: Statistical Test
        expected = total_count / 2
        variance = total_count / 4  # Variance for a binomial distribution (n/4 for p=0.5)

        if variance <= 0:
            return -6, False  # Variance must be positive

        z_statistic = (ones_count - expected) / sqrt(variance)
        p_value = 2 * (1 - norm.cdf(abs(z_statistic)))  # Two-tailed p-value

        if verbose:
            print(f"Count-the-1s (Stream) Test - Z-statistic: {z_statistic}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
