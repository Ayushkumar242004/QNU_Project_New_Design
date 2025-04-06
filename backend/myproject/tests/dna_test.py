# from scipy.stats import chi2  # Import chi2 for the chi-square test
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from collections import defaultdict

# class DNATest:
#     @staticmethod
#     def DNATest(data, verbose=False):
#         data = data.replace(',', '').strip()

#         if not data:
#             return None 
        
#         # Check for empty input data
#         if len(data) == 0:
#             return -2, False
        
#         if not isinstance(data, str) or len(data) < 10:
#             return -2, False
        
#         n = len(data)
#         subsequence_count = defaultdict(int)  # Dictionary to count occurrences of each subsequence

#         # Split data into chunks for parallel processing
#         num_chunks = min(8, (n - 10) // 10 + 1)  # Adjust based on your needs
#         chunk_size = (n - 10) // num_chunks + 1
        
#         def process_chunk(chunk_start, chunk_end):
#             local_count = defaultdict(int)
#             for i in range(chunk_start, chunk_end):
#                 subseq = data[i:i + 10]  # Get the substring of length 10
#                 local_count[subseq] += 1
#             return local_count

#         with ThreadPoolExecutor() as executor:
#             futures = []
#             for i in range(num_chunks):
#                 start_index = i * chunk_size
#                 end_index = min(start_index + chunk_size, n - 9)  # Ensure not to go out of bounds
#                 if start_index < end_index:
#                     futures.append(executor.submit(process_chunk, start_index, end_index))

#             # Aggregate results from all threads
#             for future in as_completed(futures):
#                 local_count = future.result()
#                 for subseq, count in local_count.items():
#                     subsequence_count[subseq] += count

#         observed = len(subsequence_count)  # Count of unique subsequences
#         expected = 1024  # 2^10 = 1024 possible binary subsequences
#         chi_square = ((observed - expected) ** 2) / expected
        
#         # Calculate the p-value
#         p_value = 1 - chi2.cdf(chi_square, 1023)  # 1024-1 = 1023 degrees of freedom
        
#         if verbose:
#             print(f"DNA Test - Chi-square: {chi_square}, p-value: {p_value}")
        
#         return p_value, (p_value >= 0.01)  # Return p-value and pass/fail result


import numpy as np
from scipy.stats import chi2
from concurrent.futures import ThreadPoolExecutor, as_completed, TimeoutError
from collections import defaultdict

class DNATest:
    @staticmethod
    def _compute_unique_patterns(data_chunk):
        """Compute frequency of unique 10-bit patterns in a chunk."""
        local_count = defaultdict(int)
        for i in range(len(data_chunk) - 9):
            local_count[data_chunk[i:i+10]] += 1
        return local_count

    @staticmethod
    def DNATest(data, verbose=False, time_limit=10):
        print("dna")
        """Optimized DNA (Overlapping 10-bit Patterns) test with parallel execution."""
        print("dna")

        # Step 1: Data Preprocessing
        data = ''.join(filter(lambda x: x in '01', data.strip()))  # Keep only '0' and '1'
        n = len(data)
        
        if n < 10:
            return -2, False  # Insufficient data

        subsequence_count = defaultdict(int)
        num_chunks = min(8, max(1, (n - 10) // 10))  # Adjust chunk count based on available data
        chunk_size = (n - 10) // num_chunks

        # Step 2: Parallel Processing
        try:
            with ThreadPoolExecutor() as executor:
                futures = [
                    executor.submit(DNATest._compute_unique_patterns, data[i * chunk_size : min((i + 1) * chunk_size + 9, n)])
                    for i in range(num_chunks)
                ]

                for future in as_completed(futures, timeout=time_limit):
                    for subseq, count in future.result().items():
                        subsequence_count[subseq] += count

        except TimeoutError:
            return -3, False  # Timeout occurred

        # Step 3: Compute Chi-Square Test
        observed = len(subsequence_count)
        expected = 1024  # 2^10 = 1024 possible 10-bit patterns
        chi_square = ((observed - expected) ** 2) / expected
        p_value = 1 - chi2.cdf(chi_square, 1023)  # Degrees of freedom = 1024 - 1

        if verbose:
            print(f"DNA Test - Chi-square: {chi_square}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
