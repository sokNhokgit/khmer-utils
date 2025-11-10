// Pure function: easy to test, no state.
const KHMER_NUMBERS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

/**
 * Converts English (Latin) numbers to Khmer numerals.
 * @param input The number as a string or number.
 * @returns The number represented in Khmer numerals.
 */
export function englishToKhmerNumber(input: string | number): string {
    const str = String(input);
    return str.split('').map(char => {
        const digit = parseInt(char, 10);
        if (isNaN(digit)) {
            return char; // Keep non-digits as is (e.g., dots, commas)
        }
        return KHMER_NUMBERS[digit];
    }).join('');
}