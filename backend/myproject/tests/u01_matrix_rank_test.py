# import numpy as np
# from scipy.stats import norm  # For normal distribution
# from math import sqrt
# from concurrent.futures import ThreadPoolExecutor, as_completed

# class TestU01MatrixRankTest:
#     @staticmethod
#     def compute_rank(matrix_data, m):
#         # Convert the chunk to a numpy array and reshape it into a matrix
#         matrix = np.array(list(map(int, matrix_data))).reshape(m, m)
#         return np.linalg.matrix_rank(matrix)  # Compute the rank of the matrix

#     @staticmethod
#     def TestU01MatrixRankTest(data, m=32, verbose=False):
#         data = data.replace(',', '').strip()

#         if not data:
#             return None 
        
#         # Ensure there is enough data to form matrices
#         if len(data) < m * m:
#             return -2, False

#         n = len(data) // (m * m)  # Number of matrices
        
#         full_rank_count = 0  # To keep count of full rank matrices

#         # Process data in chunks to avoid excessive memory usage
#         matrix_data_chunks = [data[i * m * m:(i + 1) * m * m] for i in range(n)]

#         # Use ThreadPoolExecutor to compute matrix ranks in parallel
#         with ThreadPoolExecutor() as executor:
#             futures = {executor.submit(TestU01MatrixRankTest.compute_rank, chunk, m): chunk for chunk in matrix_data_chunks}
#             for future in as_completed(futures):
#                 rank = future.result()
#                 if rank == m:
#                     full_rank_count += 1  # Count if it's a full rank matrix

#         expected = 0.2888 * n  # Approximation for 32x32 matrices
#         variance = n * 0.2888 * (1 - 0.2888)
#         z_statistic = (full_rank_count - expected) / sqrt(variance)
#         p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

#         if verbose:
#             print(f"Matrix Rank Test - Z-statistic: {z_statistic}, p-value: {p_value}")

#         return p_value, (p_value >= 0.01)


import numpy as np
from scipy.stats import norm
from math import sqrt
from concurrent.futures import ThreadPoolExecutor, as_completed, TimeoutError

class TestU01MatrixRankTest:
    @staticmethod
    def compute_rank(matrix_data, m):
        """Compute rank of an m×m matrix."""
        matrix = np.array(list(map(int, matrix_data)), dtype=int).reshape(m, m)
        return np.linalg.matrix_rank(matrix)

    @staticmethod
    def TestU01MatrixRankTest(data, m=32, verbose=False, time_limit=5):
        """Optimized TestU01 Matrix Rank Test."""
        print("uo1matrix")

        # Preprocessing
        data = data.strip()
        n = len(data) // (m * m)  # Number of matrices

        if n == 0:
            return -2, False  # Not enough data to form a single matrix

        # Prepare matrix chunks
        matrix_data_chunks = [data[i * m * m:(i + 1) * m * m] for i in range(n)]
        full_rank_count = 0  # Count full-rank matrices

        try:
            with ThreadPoolExecutor() as executor:
                futures = [executor.submit(TestU01MatrixRankTest.compute_rank, chunk, m) for chunk in matrix_data_chunks]
                
                for future in as_completed(futures, timeout=time_limit):
                    if future.result() == m:
                        full_rank_count += 1

        except TimeoutError:
            return -3, False  # Timeout occurred

        # Statistical Analysis
        expected = 0.2888 * n  # Approximate expected full-rank matrices
        variance = n * 0.2888 * (1 - 0.2888)

        if variance == 0:
            return 0.0, False  # Avoid division by zero

        z_statistic = (full_rank_count - expected) / sqrt(variance)
        p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

        if verbose:
            print(f"Matrix Rank Test - Z-statistic: {z_statistic}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
