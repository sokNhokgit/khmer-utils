// src/utils/phone.ts

/**
 * Removes non-digit characters and ensures the number starts with '0'.
 * @param phoneNumber - The raw phone number string.
 * @returns A clean, digit-only string starting with '0'.
 */
function cleanPhoneNumber(phoneNumber: string): string {
    // Remove all non-digit characters
    let clean = phoneNumber.replace(/\D/g, '');

    // Common issue: users might input 855 (country code) instead of 0
    if (clean.startsWith('855')) {
        clean = '0' + clean.substring(3); // Replace '855' with '0'
    }

    return clean;
}

/**
 * Formats a raw Khmer phone number into a standard, readable pattern (e.g., 0xx-xxx-xxx).
 * This logic is simplified for illustrative purposes.
 * @param phoneNumber - The raw phone number (string).
 * @returns The formatted phone number string, or the original if invalid.
 */
export function formatKhmerPhone(phoneNumber: string): string {
    const cleanNum = cleanPhoneNumber(phoneNumber);
    const length = cleanNum.length;

    // A typical Cambodian mobile number is 9 or 10 digits long, starting with 0.
    if (length < 9 || length > 10) {
        // Return original or throw error for invalid length
        return phoneNumber; 
    }

    // Example logic for 10-digit number (e.g., 0123456789) -> 012-345-6789
    if (length === 10) {
        const prefix = cleanNum.substring(0, 3);
        const middle = cleanNum.substring(3, 6);
        const suffix = cleanNum.substring(6, 10);
        return `${prefix}-${middle}-${suffix}`;
    }

    // Example logic for 9-digit number (e.g., 097345678) -> 097-345-678
    if (length === 9) {
        const prefix = cleanNum.substring(0, 3);
        const middle = cleanNum.substring(3, 6);
        const suffix = cleanNum.substring(6, 9);
        return `${prefix}-${middle}-${suffix}`;
    }

    return phoneNumber; // Fallback
}