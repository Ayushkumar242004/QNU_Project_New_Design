# from concurrent.futures import ThreadPoolExecutor, as_completed
# from scipy.special import gammaincc, erfc
# from numpy import array, where, clip, sum, sqrt, count_nonzero, cumsum
# from collections import Counter

# class RandomExcursions:
#     PI_VALUES = {
#         -4: 0.000671, -3: 0.008911, -2: 0.037507, -1: 0.124931,
#          0: 0.242731,  1: 0.124931,  2: 0.037507,  3: 0.008911,  4: 0.000671
#     }

#     @staticmethod
#     def get_pi_value(uu):
#         return RandomExcursions.PI_VALUES.get(uu, 0)

#     @staticmethod
#     def random_excursions_test(binary_data: str, target_state=-1):
#         try:
#             # Convert binary string to +1 and -1 steps
#             li_data = [1 if bit == '1' else -1 for bit in binary_data]
#             cumulative_sum = [0] + list(cumsum(li_data))

#             cycles, start_idx = [], 0
#             for i in range(1, len(cumulative_sum)):
#                 if cumulative_sum[i] == 0:
#                     cycles.append(array(cumulative_sum[start_idx:i+1]))
#                     start_idx = i
            
#             if not cycles:
#                 return -4, 0.0, False
            
#             def calculate_state_counts(cycles_batch):
#                 return [count_nonzero(cycle == target_state) for cycle in cycles_batch]
            
#             batch_size = max(1, len(cycles) // 8)
#             cycles_batches = [cycles[i:i + batch_size] for i in range(0, len(cycles), batch_size)]
#             state_count = []

#             if len(cycles) > 1000:
#                 with ThreadPoolExecutor() as executor:
#                     futures = [executor.submit(calculate_state_counts, batch) for batch in cycles_batches]
#                     for future in as_completed(futures):
#                         state_count.extend(future.result())
#             else:
#                 for batch in cycles_batches:
#                     state_count.extend(calculate_state_counts(batch))

#             state_count = clip(array(state_count), 0, 5)
#             su = [(state_count == cycle).sum() for cycle in range(6)]
#             num_cycles = len(cycles)
#             pi = array([RandomExcursions.get_pi_value(uu) for uu in range(6)])
#             inner_term = num_cycles * pi
            
#             epsilon = 1e-10
#             xObs = sum((array(su) - inner_term) ** 2 / (inner_term + epsilon))
#             p_value = gammaincc(2.5, xObs / 2.0)
            
#             return xObs, p_value, p_value >= 0.01
#         except Exception as e:
#             print(f"Error in random_excursions_test: {e}")
#             return -4, 0.0, False

#     @staticmethod
#     def variant_test(binary_data: str, target_state=1):
#         li_data = [1 if bit == '1' else -1 for bit in binary_data]
#         cumulative_sum = [0] + list(cumsum(li_data))
#         unique_states = set(cumulative_sum)
#         frequency_counter = Counter(li_data)
        
#         def calculate_p_values(counts_batch):
#             j = frequency_counter[0] + 1
#             return [
#                 erfc(abs(frequency_counter[count] - j) / sqrt(2 * j * (4 * abs(count) - 2)))
#                 for count in counts_batch if count != 0
#             ]
        
#         batch_size = max(1, len(unique_states) // 8)
#         index_batches = [list(unique_states)[i:i + batch_size] for i in range(0, len(unique_states), batch_size)]
#         p_values = []
        
#         with ThreadPoolExecutor() as executor:
#             futures = [executor.submit(calculate_p_values, batch) for batch in index_batches]
#             for future in as_completed(futures):
#                 p_values.extend(future.result())
        
#         state_count = [frequency_counter[cycle] for cycle in range(6)]
#         num_cycles = len(li_data)
#         pi = array([RandomExcursions.get_pi_value(uu) for uu in range(6)])
#         inner_term = num_cycles * pi
        
#         epsilon = 1e-10
#         xObs = sum((array(state_count) - inner_term) ** 2 / (inner_term + epsilon))
#         p_value = gammaincc(2.5, xObs / 2.0)
        
#         return xObs, p_value, p_value >= 0.01
    
from concurrent.futures import ThreadPoolExecutor, as_completed
from scipy.special import gammaincc, erfc
from numpy import array, where, clip, sum, sqrt, count_nonzero, cumsum
from collections import Counter
import time

class RandomExcursions:
    PI_VALUES = {
        -4: 0.000671, -3: 0.008911, -2: 0.037507, -1: 0.124931,
         0: 0.242731,  1: 0.124931,  2: 0.037507,  3: 0.008911,  4: 0.000671
    }

    @staticmethod
    def get_pi_value(uu):
        return RandomExcursions.PI_VALUES.get(uu, 0)

    @staticmethod
    def random_excursions_test(binary_data: str, target_state=-1):
        start_time = time.time()
        try:
            # Convert binary string to +1 and -1 steps
            li_data = [1 if bit == '1' else -1 for bit in binary_data]
            cumulative_sum = [0] + list(cumsum(li_data))

            cycles, start_idx = [], 0
            for i in range(1, len(cumulative_sum)):
                if cumulative_sum[i] == 0:
                    cycles.append(array(cumulative_sum[start_idx:i+1]))
                    start_idx = i
            
            if not cycles:
                return -4, 0.0, False
            
            def calculate_state_counts(cycles_batch):
                if time.time() - start_time > 5:
                    return -1, False
                return [count_nonzero(cycle == target_state) for cycle in cycles_batch]
            
            batch_size = max(1, len(cycles) // 8)
            cycles_batches = [cycles[i:i + batch_size] for i in range(0, len(cycles), batch_size)]
            state_count = []

            if len(cycles) > 1000:
                with ThreadPoolExecutor() as executor:
                    futures = [executor.submit(calculate_state_counts, batch) for batch in cycles_batches]
                    for future in as_completed(futures):
                        if time.time() - start_time > 5:
                            return -1, False
                        state_count.extend(future.result())
            else:
                for batch in cycles_batches:
                    if time.time() - start_time > 5:
                        return -1, False
                    state_count.extend(calculate_state_counts(batch))

            state_count = clip(array(state_count), 0, 5)
            su = [(state_count == cycle).sum() for cycle in range(6)]
            num_cycles = len(cycles)
            pi = array([RandomExcursions.get_pi_value(uu) for uu in range(6)])
            inner_term = num_cycles * pi
            
            epsilon = 1e-10
            xObs = sum((array(su) - inner_term) ** 2 / (inner_term + epsilon))
            p_value = gammaincc(2.5, xObs / 2.0)
            
            return xObs, p_value, p_value >= 0.01
        except Exception as e:
            print(f"Error in random_excursions_test: {e}")
            return -4, 0.0, False

    @staticmethod
    def variant_test(binary_data: str, target_state=1):
        start_time = time.time()
        li_data = [1 if bit == '1' else -1 for bit in binary_data]
        cumulative_sum = [0] + list(cumsum(li_data))
        unique_states = set(cumulative_sum)
        frequency_counter = Counter(li_data)
        
        def calculate_p_values(counts_batch):
            if time.time() - start_time > 5:
                return -1, False
            j = frequency_counter[0] + 1
            return [
                erfc(abs(frequency_counter[count] - j) / sqrt(2 * j * (4 * abs(count) - 2)))
                for count in counts_batch if count != 0
            ]
        
        batch_size = max(1, len(unique_states) // 8)
        index_batches = [list(unique_states)[i:i + batch_size] for i in range(0, len(unique_states), batch_size)]
        p_values = []
        
        with ThreadPoolExecutor() as executor:
            futures = [executor.submit(calculate_p_values, batch) for batch in index_batches]
            for future in as_completed(futures):
                if time.time() - start_time > 5:
                    return -1, False
                p_values.extend(future.result())
        
        state_count = [frequency_counter[cycle] for cycle in range(6)]
        num_cycles = len(li_data)
        pi = array([RandomExcursions.get_pi_value(uu) for uu in range(6)])
        inner_term = num_cycles * pi
        
        epsilon = 1e-10
        xObs = sum((array(state_count) - inner_term) ** 2 / (inner_term + epsilon))
        p_value = gammaincc(2.5, xObs / 2.0)
        
        return xObs, p_value, p_value >= 0.01