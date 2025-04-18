from numpy import zeros
from scipy.special import gammaincc
from concurrent.futures import ThreadPoolExecutor

class Serial:

    @staticmethod
    def serial_test(binary_data: str, verbose=False, pattern_length=16):
        print("serial")
        """
        Serial Test for randomness based on the NIST documentation.
        Handles invalid input and returns appropriate default values in case of errors.
        
        :param      binary_data:        a binary string
        :param      verbose:            True to display the debug message, False to turn off debug message
        :param      pattern_length:     the length of the pattern (m)
        :return:    (p_value, bool) A tuple which contains the p_value and result of the serial_test (True or False)
        """

        # Sanitize input: Remove all non-binary characters
        binary_data = ''.join(filter(lambda x: x in '01', binary_data))

        # Check for empty or insufficient input data
        if not binary_data or len(binary_data) < pattern_length:
            return -2, False  # Return -1 and False for invalid or insufficient input

        length_of_binary_data = len(binary_data)
        binary_data += binary_data[:(pattern_length - 1)]  # Extend the data for overlapping patterns

        # Get max length one patterns for m, m-1, m-2
        max_pattern = '1' * (pattern_length + 1)

        try:
            # Initialize the frequency arrays for the patterns of length m, m-1, m-2
            vobs_01 = zeros(int(max_pattern[:pattern_length], 2) + 1)
            vobs_02 = zeros(int(max_pattern[:pattern_length - 1], 2) + 1)
            vobs_03 = zeros(int(max_pattern[:pattern_length - 2], 2) + 1)

            # Define a function to count occurrences of each pattern in parallel
            def count_patterns(start, end):
                local_vobs_01 = zeros(int(max_pattern[:pattern_length], 2) + 1)
                local_vobs_02 = zeros(int(max_pattern[:pattern_length - 1], 2) + 1)
                local_vobs_03 = zeros(int(max_pattern[:pattern_length - 2], 2) + 1)

                for i in range(start, end):
                    local_vobs_01[int(binary_data[i:i + pattern_length], 2)] += 1
                    local_vobs_02[int(binary_data[i:i + pattern_length - 1], 2)] += 1
                    local_vobs_03[int(binary_data[i:i + pattern_length - 2], 2)] += 1
                
                return local_vobs_01, local_vobs_02, local_vobs_03

            # Split the data into chunks for parallel processing
            chunk_size = length_of_binary_data // 4  # Adjust number of chunks as needed
            futures = []
            with ThreadPoolExecutor() as executor:
                for i in range(0, length_of_binary_data, chunk_size):
                    end = min(i + chunk_size, length_of_binary_data)
                    futures.append(executor.submit(count_patterns, i, end))

            # Collect results from futures
            for future in futures:
                local_vobs_01, local_vobs_02, local_vobs_03 = future.result()
                vobs_01 += local_vobs_01
                vobs_02 += local_vobs_02
                vobs_03 += local_vobs_03

            vobs = [vobs_01, vobs_02, vobs_03]

            # Compute ψ values (test statistics)
            sums = zeros(3)
            for i in range(3):
                for j in range(len(vobs[i])):
                    sums[i] += pow(vobs[i][j], 2)
                sums[i] = (sums[i] * pow(2, pattern_length - i) / length_of_binary_data) - length_of_binary_data

            # Compute ∇ and P-Value
            nabla_01 = sums[0] - sums[1]
            p_value_01 = gammaincc(pow(2, pattern_length - 1) / 2, nabla_01 / 2.0)

            if verbose:
                print('Serial Test Results:')
                print(f'P-Value 01: {p_value_01}')

            return p_value_01, (p_value_01 >= 0.01)

        except Exception as e:
            # Handle any other exceptions and return -1, False
            print(f"Error during serial test: {e}")
            return -4, False
