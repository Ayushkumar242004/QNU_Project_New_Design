# import numpy as np
# from scipy.stats import chi2
# from concurrent.futures import ThreadPoolExecutor, as_completed

# class BitstreamTest:
#     @staticmethod
#     def BitstreamTest(data, verbose=False):
#         data = data.replace(',', '').strip()

#         if not data:
#             return None 
        
#         # Clean the input string: keep only '0' and '1'
#         clean_data = ''.join(filter(lambda x: x in '01', data))
        
#         if len(clean_data) < 8:
#             return -2, False  # Return a default value if no valid binary data

#         # Convert the cleaned string of binary data to a list of integers (0s and 1s)
#         data_array = np.array([int(bit) for bit in clean_data], dtype=int)  # Convert to integer array
        
#         # Check if all elements are either 0 or 1
#         if np.any((data_array < 0) | (data_array > 1)):
#             raise ValueError("Data should contain only binary values (0 or 1).")
        
#         n = len(data_array)
#         expected = n / 256  # Expected frequency per byte value
#         num_chunks = min(8, len(data_array) // 8)  # Use 8 or fewer chunks
#         chunk_size = len(data_array) // num_chunks
        
#         # Parallel bit-packing and counting of byte values
#         counts = np.zeros(256, dtype=int)
#         with ThreadPoolExecutor() as executor:
#             futures = [
#                 executor.submit(BitstreamTest.process_chunk, data_array[i * chunk_size:(i + 1) * chunk_size])
#                 for i in range(num_chunks)
#             ]
#             for future in as_completed(futures):
#                 chunk_counts = future.result()
#                 counts += chunk_counts  # Aggregate counts from each chunk
        
#         # Calculate chi-square and p-value
#         chi_square = np.sum((counts - expected) ** 2 / expected)  # Chi-square statistic
#         p_value = 1 - chi2.cdf(chi_square, 255)  # Degrees of freedom = 256 - 1

#         if verbose:
#             print(f"Bitstream Test - Chi-square: {chi_square}, p-value: {p_value}")

#         return p_value, (p_value >= 0.01)

#     @staticmethod
#     def process_chunk(chunk):
#         # Pack bits into bytes and count occurrences
#         packed_chunk = np.packbits(chunk)  # Pack the bits into bytes
#         return np.bincount(packed_chunk, minlength=256)  # Count occurrences of each byte value


import numpy as np
from scipy.stats import chi2
import time

class BitstreamTest:
    @staticmethod
    def BitstreamTest(data, verbose=False):
        print("bit")
        """Optimized Bitstream Test using vectorized NumPy operations."""
        start_time = time.time()

        # Step 1: Data preprocessing
        data = data.replace(',', '').strip()
        clean_data = ''.join(filter(lambda x: x in '01', data))  # Keep only '0' and '1'

        if len(clean_data) < 8:
            return -2, False  # Insufficient data

        try:
            data_array = np.array([int(bit) for bit in clean_data], dtype=np.uint8)
        except ValueError:
            return -2, False  # Invalid data

        n = len(data_array)
        expected = n / 256  # Expected frequency per byte value

        # Step 2: Convert binary data into bytes and count occurrences
        if n % 8 != 0:
            data_array = np.pad(data_array, (0, 8 - n % 8), mode='constant')  # Ensure multiple of 8
        packed_bytes = np.packbits(data_array)  # Convert bits to bytes
        counts = np.bincount(packed_bytes, minlength=256)  # Count occurrences of each byte value

        # Step 3: Compute Chi-Square Test
        chi_square = np.sum((counts - expected) ** 2 / expected)
        p_value = 1 - chi2.cdf(chi_square, 255)  # Degrees of freedom = 256 - 1

        if verbose:
            print(f"Bitstream Test - Chi-square: {chi_square}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
