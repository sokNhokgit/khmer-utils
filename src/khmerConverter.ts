import { englishToKhmerNumber } from './utils/numberic.js';
import { formatKhmerPhone } from './utils/phone.js'; // Assume this file exists

/**
 * The main service class for all Khmer localization utilities.
 * This class provides a clear, instantiable interface for consumers.
 */
export class KhmerConverter {
    // You can add state here if needed (e.g., preferred phone prefix),
    // but we'll keep it stateless for simplicity.

    /**
     * Converts a string or number to its Khmer numeral representation.
     * @param value - The input value.
     * @returns The value with Khmer numerals.
     */
    public convertNumber(value: string | number): string {
        return englishToKhmerNumber(value);
    }

    /**
     * Formats a raw 9 or 10-digit number into a standard Khmer phone format (e.g., 0xx-xxx-xxx).
     * @param phoneNumber - The raw phone number.
     * @returns The formatted phone number string.
     */
    public formatPhone(phoneNumber: string): string {
        // Assume formatKhmerPhone exists and handles the logic
        return formatKhmerPhone(phoneNumber);
    }
}