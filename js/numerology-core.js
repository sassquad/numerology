/**
 * Numerology Core Module
 * Contains the core calculation logic for numerology
 * @module NumerologyCore
 */

/**
 * Numerology letter groups mapping
 * Based on Indian Astrology numerology system
 */
export const letterGroups = [
    ['A', 'I', 'J', 'Q', 'Y'],  // 1
    ['B', 'K', 'R'],             // 2
    ['C', 'G', 'L', 'S'],        // 3
    ['D', 'M', 'T'],             // 4
    ['E', 'H', 'N', 'X'],        // 5
    ['U', 'V', 'W'],             // 6
    ['O', 'Z'],                  // 7
    ['F', 'P']                   // 8
];

/**
 * Master numbers in numerology (have special significance)
 */
export const masterNumbers = [11, 22, 33];

/**
 * Create optimized lookup map for O(1) letter-to-number conversion
 * @returns {Map<string, number>} Map of letters to their numerological values
 */
export const createLetterMap = () => {
    const map = new Map();
    letterGroups.forEach((group, index) => {
        group.forEach(letter => {
            map.set(letter, index + 1);
        });
    });
    return map;
};

// Create the letter map once
const letterMap = createLetterMap();

/**
 * Calculate the numerological value of a name
 * @param {string} name - The name to calculate
 * @returns {number} The numerological value
 */
export const calculateNumerology = (name) => {
    let total = 0;
    const upperName = name.toUpperCase();

    for (let i = 0; i < upperName.length; i++) {
        const char = upperName.charAt(i);
        const value = letterMap.get(char);
        if (value !== undefined) {
            total += value;
        }
    }

    return total;
};

/**
 * Get breakdown of how each letter contributes to the total
 * @param {string} name - The name to analyze
 * @returns {Array<{letter: string, value: number}>} Array of letter-value pairs
 */
export const getNameBreakdown = (name) => {
    const breakdown = [];
    const upperName = name.toUpperCase();

    for (let i = 0; i < upperName.length; i++) {
        const char = upperName.charAt(i);
        const value = letterMap.get(char);
        if (value !== undefined) {
            breakdown.push({ letter: char, value });
        }
    }

    return breakdown;
};

/**
 * Filter names by desired numerological value
 * @param {Array<string>} names - Array of names to filter
 * @param {number} desiredNumber - The target numerological value
 * @returns {Array<{name: string, value: number}>} Filtered names with values
 */
export const filterNamesByNumerology = (names, desiredNumber) => {
    return names
        .filter(name => name.trim() !== '')
        .map(name => ({
            name: name,
            value: calculateNumerology(name)
        }))
        .filter(item => item.value === desiredNumber);
};

/**
 * Get statistics about numerological distribution
 * @param {Array<string>} names - Array of names to analyze
 * @returns {Map<number, number>} Map of value to count
 */
export const getStatistics = (names) => {
    const stats = new Map();

    names.forEach(name => {
        if (name.trim() !== '') {
            const value = calculateNumerology(name);
            stats.set(value, (stats.get(value) || 0) + 1);
        }
    });

    return stats;
};

/**
 * Check if a number is a master number
 * @param {number} num - The number to check
 * @returns {boolean} True if master number
 */
export const isMasterNumber = (num) => {
    return masterNumbers.includes(num);
};

/**
 * Validate number input
 * @param {string} value - Input value to validate
 * @returns {{valid: boolean, error: string|null}} Validation result
 */
export const validateNumberInput = (value) => {
    if (!value || value.trim() === '') {
        return { valid: false, error: 'Please enter a number' };
    }

    const num = parseInt(value, 10);

    if (isNaN(num)) {
        return { valid: false, error: 'Please enter a valid number' };
    }

    if (num < 1) {
        return { valid: false, error: 'Please enter a positive number' };
    }

    if (num > 200) {
        return { valid: false, error: 'Number is too large (max: 200)' };
    }

    return { valid: true, error: null };
};
