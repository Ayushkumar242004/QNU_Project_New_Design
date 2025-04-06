# import numpy as np
# from scipy.stats import chi2
# from concurrent.futures import ProcessPoolExecutor, as_completed

# class Ranks31x31MatricesTest:
#     @staticmethod
#     def process_matrix(matrix_data):
#         """
#         Helper function to calculate the rank of a 31x31 matrix.
#         """
#         matrix = np.reshape(matrix_data, (31, 31))
#         rank = np.linalg.matrix_rank(matrix)
#         if rank == 31:
#             return (1, 0, 0)  # Counts for ranks 31, 30, and less
#         elif rank == 30:
#             return (0, 1, 0)
#         else:
#             return (0, 0, 1)

#     @staticmethod
#     def Ranks31x31MatricesTest(data, verbose=False):
#         data = data.replace(',', '').strip()
#         if not data:
#             return None

#         # Check if data has at least 31x31 elements
#         if len(data) < 31 * 31:
#             return -2, False  # Return (-1, False) if insufficient data

#         try:
#             # Ensure data consists of integers (handling any non-integer characters)
#             data = [int(bit) for bit in data]
#         except ValueError:
#             return -2, False  # Return (-1, False) if conversion to int fails

#         n = len(data) // (31 * 31)  # Number of 31x31 matrices

#         # Divide data into chunks for each 31x31 matrix
#         matrices = [data[i * 31 * 31:(i + 1) * 31 * 31] for i in range(n)]
#         counts = np.zeros(3)  # For ranks 31, 30, and less

#         # Process matrices in parallel
#         with ProcessPoolExecutor() as executor:
#             futures = [executor.submit(Ranks31x31MatricesTest.process_matrix, matrix) for matrix in matrices]
#             for future in as_completed(futures):
#                 rank_counts = future.result()
#                 counts += rank_counts  # Accumulate the counts for ranks 31, 30, and less

#         # Expected proportions for rank 31, 30, and less
#         expected_proportions = np.array([0.2888, 0.5776, 0.1336])
#         expected_counts = n * expected_proportions

#         # Chi-square test
#         chi_square = np.sum((counts - expected_counts) ** 2 / expected_counts)
#         p_value = 1 - chi2.cdf(chi_square, 2)

#         if verbose:
#             print(f"Ranks 31x31 Matrices Test - Chi-square: {chi_square}, p-value: {p_value}")

#         return p_value, (p_value >= 0.01)
import numpy as np
from scipy.stats import chi2
import time

class Ranks31x31MatricesTest:
    @staticmethod
    def Ranks31x31MatricesTest(data, verbose=False):
        print("31")
        """Optimized Ranks 31×31 Matrices Test with efficient rank computation."""
        start_time = time.time()
        
        # Step 1: Data Preprocessing
        data = np.array([int(bit) for bit in data if bit in {'0', '1'}], dtype=np.uint8)

        if len(data) < 31 * 31:
            return -2, False  # Insufficient data

        n = len(data) // (31 * 31)  # Number of matrices
        matrices = data[: n * 31 * 31].reshape(n, 31, 31)  # Reshape into (n, 31, 31)

        # Step 2: Compute Matrix Ranks Efficiently
        try:
            ranks = np.linalg.matrix_rank(matrices, tol=1e-5)  # Vectorized rank computation
        except Exception:
            return -4, False  # Handle unexpected errors

        # Step 3: Count Rank Occurrences
        rank_31 = np.count_nonzero(ranks == 31)
        rank_30 = np.count_nonzero(ranks == 30)
        rank_less = n - (rank_31 + rank_30)  # Remaining matrices

        counts = np.array([rank_31, rank_30, rank_less])

        # Expected proportions for rank 31, 30, and <30
        expected_proportions = np.array([0.2888, 0.5776, 0.1336])
        expected_counts = n * expected_proportions

        # Step 4: Compute Chi-Square Test
        chi_square = np.sum((counts - expected_counts) ** 2 / expected_counts)
        p_value = 1 - chi2.cdf(chi_square, df=2)  # Degrees of freedom = 3 - 1

        if verbose:
            print(f"Ranks 31×31 Matrices Test - Chi-square: {chi_square}, p-value: {p_value}")

        return p_value, (p_value >= 0.01)
