import numpy as np

class CollisionTest:
    @staticmethod
    def CollisionTest(data, verbose=False):
        data = data.replace(',', '').replace(' ', '').strip()
        if not data or len(data) < 2:
            return -2, False  # Not enough data

        try:
            n = len(data)
            seen = set()
            collisions = 0

            for i in range(n - 1):
                pair = data[i:i+2]
                if pair in seen:
                    collisions += 1
                seen.add(pair)

            p_value = np.exp(-collisions / n)  # Approximate probability

            if verbose:
                print(f"Collision Test - Collisions: {collisions}, p-value: {p_value}")

            return p_value, (p_value >= 0.01)

        except Exception:
            return -4, False
