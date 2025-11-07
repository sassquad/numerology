/**
 * Unit Tests for Numerology Core Module
 * Simple test runner without external dependencies
 */

import {
    calculateNumerology,
    getNameBreakdown,
    filterNamesByNumerology,
    getStatistics,
    isMasterNumber,
    validateNumberInput,
    createLetterMap
} from '../js/numerology-core.js';

// Simple test framework
class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    test(name, fn) {
        this.tests.push({ name, fn });
    }

    async run() {
        console.log('🧪 Running Numerology Tests...\n');

        for (const { name, fn } of this.tests) {
            try {
                await fn();
                this.passed++;
                console.log(`✅ ${name}`);
            } catch (error) {
                this.failed++;
                console.error(`❌ ${name}`);
                console.error(`   ${error.message}\n`);
            }
        }

        console.log('\n' + '='.repeat(50));
        console.log(`Tests completed: ${this.tests.length}`);
        console.log(`Passed: ${this.passed}`);
        console.log(`Failed: ${this.failed}`);
        console.log('='.repeat(50));

        return this.failed === 0;
    }
}

// Assertion helpers
const assert = {
    equal(actual, expected, message = '') {
        if (actual !== expected) {
            throw new Error(
                `${message}\n  Expected: ${expected}\n  Actual: ${actual}`
            );
        }
    },

    deepEqual(actual, expected, message = '') {
        const actualStr = JSON.stringify(actual);
        const expectedStr = JSON.stringify(expected);
        if (actualStr !== expectedStr) {
            throw new Error(
                `${message}\n  Expected: ${expectedStr}\n  Actual: ${actualStr}`
            );
        }
    },

    isTrue(value, message = '') {
        if (value !== true) {
            throw new Error(`${message}\n  Expected true, got ${value}`);
        }
    },

    isFalse(value, message = '') {
        if (value !== false) {
            throw new Error(`${message}\n  Expected false, got ${value}`);
        }
    }
};

// Create test runner
const runner = new TestRunner();

// Tests for createLetterMap
runner.test('createLetterMap creates a valid map', () => {
    const map = createLetterMap();
    assert.isTrue(map instanceof Map, 'Should return a Map');
    assert.equal(map.get('A'), 1, 'A should map to 1');
    assert.equal(map.get('B'), 2, 'B should map to 2');
    assert.equal(map.get('F'), 8, 'F should map to 8');
    assert.equal(map.get('Z'), 7, 'Z should map to 7');
});

// Tests for calculateNumerology
runner.test('calculateNumerology handles single letters', () => {
    assert.equal(calculateNumerology('A'), 1, 'A = 1');
    assert.equal(calculateNumerology('B'), 2, 'B = 2');
    assert.equal(calculateNumerology('F'), 8, 'F = 8');
});

runner.test('calculateNumerology handles multiple letters', () => {
    assert.equal(calculateNumerology('AB'), 3, 'A(1) + B(2) = 3');
    assert.equal(calculateNumerology('ABC'), 6, 'A(1) + B(2) + C(3) = 6');
});

runner.test('calculateNumerology is case insensitive', () => {
    assert.equal(calculateNumerology('abc'), calculateNumerology('ABC'), 'Should be case insensitive');
    assert.equal(calculateNumerology('Victor'), calculateNumerology('VICTOR'), 'Should be case insensitive');
});

runner.test('calculateNumerology handles known names', () => {
    // Test some known values
    assert.equal(calculateNumerology('VALENTINE'), 41, 'Valentine should equal 41');
    assert.equal(calculateNumerology('VAN'), 11, 'Van should equal 11 (master number)');
});

runner.test('calculateNumerology ignores non-letter characters', () => {
    assert.equal(calculateNumerology('A B'), 3, 'Should ignore spaces');
    assert.equal(calculateNumerology('A-B'), 3, 'Should ignore hyphens');
    assert.equal(calculateNumerology('123'), 0, 'Should ignore numbers');
});

runner.test('calculateNumerology handles empty string', () => {
    assert.equal(calculateNumerology(''), 0, 'Empty string should equal 0');
});

// Tests for getNameBreakdown
runner.test('getNameBreakdown returns correct structure', () => {
    const breakdown = getNameBreakdown('AB');
    assert.equal(breakdown.length, 2, 'Should have 2 entries');
    assert.deepEqual(breakdown[0], { letter: 'A', value: 1 }, 'First entry should be A=1');
    assert.deepEqual(breakdown[1], { letter: 'B', value: 2 }, 'Second entry should be B=2');
});

runner.test('getNameBreakdown ignores non-letters', () => {
    const breakdown = getNameBreakdown('A B');
    assert.equal(breakdown.length, 2, 'Should only include letters');
});

runner.test('getNameBreakdown handles empty string', () => {
    const breakdown = getNameBreakdown('');
    assert.equal(breakdown.length, 0, 'Empty string should return empty array');
});

// Tests for filterNamesByNumerology
runner.test('filterNamesByNumerology filters correctly', () => {
    const names = ['VAN', 'VAL', 'VICTOR'];
    const results = filterNamesByNumerology(names, 11);
    assert.equal(results.length, 1, 'Should find 1 match');
    assert.equal(results[0].name, 'VAN', 'Should find VAN');
    assert.equal(results[0].value, 11, 'Should have value 11');
});

runner.test('filterNamesByNumerology handles no matches', () => {
    const names = ['ABC', 'DEF'];
    const results = filterNamesByNumerology(names, 999);
    assert.equal(results.length, 0, 'Should find no matches');
});

runner.test('filterNamesByNumerology filters empty names', () => {
    const names = ['VAN', '', '   ', 'VAL'];
    const results = filterNamesByNumerology(names, 11);
    assert.equal(results.length, 1, 'Should filter out empty strings');
});

// Tests for getStatistics
runner.test('getStatistics calculates correctly', () => {
    const names = ['A', 'A', 'B', 'C'];
    const stats = getStatistics(names);
    assert.equal(stats.get(1), 2, 'Should count two As (value 1)');
    assert.equal(stats.get(2), 1, 'Should count one B (value 2)');
    assert.equal(stats.get(3), 1, 'Should count one C (value 3)');
});

runner.test('getStatistics handles empty names', () => {
    const names = ['A', '', '   ', 'B'];
    const stats = getStatistics(names);
    assert.equal(stats.size, 2, 'Should only count non-empty names');
});

runner.test('getStatistics handles empty array', () => {
    const stats = getStatistics([]);
    assert.equal(stats.size, 0, 'Empty array should return empty map');
});

// Tests for isMasterNumber
runner.test('isMasterNumber identifies master numbers', () => {
    assert.isTrue(isMasterNumber(11), '11 is a master number');
    assert.isTrue(isMasterNumber(22), '22 is a master number');
    assert.isTrue(isMasterNumber(33), '33 is a master number');
});

runner.test('isMasterNumber rejects non-master numbers', () => {
    assert.isFalse(isMasterNumber(1), '1 is not a master number');
    assert.isFalse(isMasterNumber(10), '10 is not a master number');
    assert.isFalse(isMasterNumber(44), '44 is not a master number');
});

// Tests for validateNumberInput
runner.test('validateNumberInput accepts valid numbers', () => {
    const result = validateNumberInput('22');
    assert.isTrue(result.valid, 'Should accept valid number');
    assert.equal(result.error, null, 'Should have no error');
});

runner.test('validateNumberInput rejects empty input', () => {
    const result = validateNumberInput('');
    assert.isFalse(result.valid, 'Should reject empty string');
    assert.isTrue(result.error !== null, 'Should have error message');
});

runner.test('validateNumberInput rejects non-numbers', () => {
    const result = validateNumberInput('abc');
    assert.isFalse(result.valid, 'Should reject non-numbers');
    assert.isTrue(result.error !== null, 'Should have error message');
});

runner.test('validateNumberInput rejects negative numbers', () => {
    const result = validateNumberInput('-5');
    assert.isFalse(result.valid, 'Should reject negative numbers');
    assert.isTrue(result.error !== null, 'Should have error message');
});

runner.test('validateNumberInput rejects zero', () => {
    const result = validateNumberInput('0');
    assert.isFalse(result.valid, 'Should reject zero');
    assert.isTrue(result.error !== null, 'Should have error message');
});

runner.test('validateNumberInput rejects numbers too large', () => {
    const result = validateNumberInput('999');
    assert.isFalse(result.valid, 'Should reject numbers > 200');
    assert.isTrue(result.error !== null, 'Should have error message');
});

runner.test('validateNumberInput accepts boundary values', () => {
    const result1 = validateNumberInput('1');
    assert.isTrue(result1.valid, 'Should accept 1');

    const result200 = validateNumberInput('200');
    assert.isTrue(result200.valid, 'Should accept 200');
});

// Run all tests
runner.run().then(success => {
    if (!success) {
        process.exit(1);
    }
});
