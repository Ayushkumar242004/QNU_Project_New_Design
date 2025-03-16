import numpy as np

class MarkovTest:
    @staticmethod
    def MarkovTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data or len(data) < 2:
            return -2, False  # Not enough data

        try:
            transitions = np.zeros((2, 2))

            for i in range(len(data) - 1):
                current = int(data[i])
                next_state = int(data[i + 1])
                transitions[current, next_state] += 1

            row_sums = transitions.sum(axis=1, keepdims=True)
            transition_probabilities = transitions / row_sums

            stationary_dist = np.linalg.matrix_power(transition_probabilities, 100)[0]

            p_value = 1 - abs(stationary_dist[0] - stationary_dist[1])

            if verbose:
                print(f"Markov Test - Transition Matrix: {transition_probabilities}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
