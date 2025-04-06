# import numpy as np
# from scipy.stats import norm
# from sklearn.neighbors import KDTree
# from concurrent.futures import ThreadPoolExecutor, as_completed

# class MinimumDistanceTest:
#     @staticmethod
#     def MinimumDistanceTest(data, verbose=False):
#         # Sanitize input by removing non-binary characters (e.g., commas, spaces)
#         data = data.replace(',', '').replace(' ', '').strip()

#         if not data:
#             return None
        
#         # Ensure that data length is even (to split into 2D coordinates)
#         if len(data) < 4 or len(data) % 2 != 0:
#             return -2, False  # Not enough data to form at least 2 points

#         try:
#             n = len(data) // 2  # Number of 2D points

#             # Create 2D points directly as numpy array
#             points = np.array([[int(data[2 * i]), int(data[2 * i + 1])] for i in range(n)])
#         except ValueError:
#             return -2, False  # Return failure if data contains invalid characters

#         try:
#             # Use KDTree for efficient nearest neighbor search
#             tree = KDTree(points)

#             # Helper function to calculate nearest neighbor distances for a batch of points
#             def calculate_distances(indices):
#                 distances, _ = tree.query(points[indices], k=2)
#                 return distances[:, 1]

#             # Split indices into batches for parallel processing
#             batch_size = max(1, n // 8)  # Adjust batch size based on data size
#             indices_batches = [range(i, min(i + batch_size, n)) for i in range(0, n, batch_size)]

#             min_distances = []
#             with ThreadPoolExecutor() as executor:
#                 futures = {executor.submit(calculate_distances, batch): batch for batch in indices_batches}
#                 for future in as_completed(futures):
#                     min_distances.extend(future.result())

#             min_distances = np.array(min_distances)

#             # Expected distance and variance from test literature
#             expected = np.sqrt(2 / (np.pi * n))
#             variance = 0.07  # Approximation from literature

#             # Calculate Z-statistic and p-value
#             z_statistic = (np.mean(min_distances) - expected) / np.sqrt(variance)
#             p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

#             if verbose:
#                 print(f"Minimum Distance Test - Z-statistic: {z_statistic}, p-value: {p_value}")

#             return p_value, (p_value >= 0.01)

#         except Exception as e:
#             return -4, False  # Catch-all for any unexpected issues

import numpy as np
from scipy.stats import norm
from sklearn.neighbors import KDTree

class MinimumDistanceTest:
    @staticmethod
    def MinimumDistanceTest(data, verbose=False):
        print("minm")
        data = np.array([int(ch) for ch in data if ch.isdigit()], dtype=int)  

        if len(data) < 4 or len(data) % 2 != 0:
            return -2, False  

        n = len(data) // 2  
        points = data.reshape(n, 2)  

        try:
            # Use BallTree (faster for Euclidean distances) or keep KDTree
            tree = KDTree(points, leaf_size=40)  

            # Query all points at once to avoid multiple tree traversals
            distances, _ = tree.query(points, k=2)  
            min_distances = distances[:, 1]  

            # Expected distance for randomness
            expected = np.sqrt(2 / (np.pi * n))
            variance = 0.07  

            # Compute Z-statistic using NumPy vectorization
            z_statistic = (np.mean(min_distances) - expected) / np.sqrt(variance)
            p_value = 2 * (1 - norm.cdf(abs(z_statistic)))

            if verbose:
                print(f"Minimum Distance Test - Z-statistic: {z_statistic}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False  
