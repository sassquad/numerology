/**
 * Numerology Calculator
 * Calculates the numerological value of names based on Indian Astrology
 * @module NumerologyCalculator
 */

(function () {
    'use strict';

    // Sample names database
    const firstNames = ["Vache", "Vacheil", "Vachel", "Vachelle", "Vadim", "Vail", "Vaile", "Vailintin", "Vaill", "Vaino", "Val", "Valdamar", "Valdemar", "Vale", "Valencio", "Valeno", "Valentijan", "Valentim", "Valentin", "Valentine", "Valentinian", "Valentiniano", "Valentino", "Valentinus", "Valentio", "Valenton", "Valentyn", "Valentin", "Valerian", "Valeriano", "Valerien", "Valerii", "Valerio", "Valerius", "Valery", "Valeryan", "Valeryn", "Valiant", "Valis", "Valle", "Vallis", "Valo", "Valor", "Valter", "Valters", "Valther", "Valtr", "Van", "Vance", "Vandal", "Vander", "Vandyke", "Vane", "Vanechka", "Vanek", "Vanentin", "Vanka", "Vann", "Vanni", "Vannie", "Vanno", "Vanny", "Vano", "Vanusha", "Vanya", "Varan", "Vardaan", "Varden", "Vardon", "Varfolomei", "Vargas", "Varnan", "Varoun", "Varron", "Vartan", "Varun", "Vas", "Vasant", "Vasanth", "Vasaya", "Vasco", "Vasek", "Vaselios", "Vashon", "Vasil", "Vasilak", "Vasile", "Vasili", "Vasilii", "Vasilik", "Vasilios", "Vasilius", "Vasiliy", "Vasilos", "Vasilus", "Vasily", "Vaska", "Vaslek", "Vaso", "Vasos", "Vassili", "Vassily", "Vassos", "Vasya", "Vasyenka", "Vaughan", "Vaughen", "Vaughn", "Vaun", "Vaune", "Vazul", "Ved", "Veer", "Veeti", "Vega", "Vego", "Veit", "Velten", "Ven", "Vencel", "Vencent", "Venceslao", "Venceslau", "Venceslav", "Venceslas", "Venedict", "Venedictos", "Venedikt", "Venediktos", "Venetio", "Venetziano", "Veneziano", "Venezio", "Veniamin", "Venjamin", "Venka", "Venn", "Venturi", "Venturio", "Venturo", "Venya", "Vercy", "Verdan", "Verdi", "Verdon", "Verdun", "Vere", "Vered", "Vereen", "Veren", "Vereno", "Verge", "Vergil", "Vergitio", "Verill", "Verino", "Verl", "Verle", "Verlin", "Verlon", "Verlyn", "Vermont", "Vern", "Vernados", "Vernal", "Verne", "Vernell", "Vernen", "Verner", "Verney", "Vernin", "Vernon", "Vero", "Verrall", "Verrell", "Verrill", "Verroll", "Veryl", "Vesper", "Vester", "Vesuvio", "Vesuvius", "Viaan", "", "Vic", "Vice", "Vicenc", "Vicente", "Vicenzo", "Vicenc", "Vick", "Victa", "Victer", "Victoir", "Victor", "Victoriano", "Victorien", "Victorin", "Victorino", "Victorio", "Victoro", "Vicus", "Vida", "Vidal", "Vidale", "Vidall", "Vidalo", "Vidar", "Videl", "Videlio", "Videll", "Vidor", "Viel", "Viggo", "Vigo", "Vihaan", "Vijay", "Vijun", "Vikram", "Vikrum", "Viktor", "Vila", "Vilek", "Vilem", "Vilfredo", "Vilfrido", "Vilgot", "Vilhelm", "Vilhelms", "Vilho", "Vili", "Viliam", "Viliami", "Viliamu", "Vilis", "Viljami", "Viljo", "Vilko", "Villard", "Ville", "Villem", "Villiers", "Villy", "Vilmo", "Vilmos", "Vilous", "Vilppu", "Vilem", "Vimka", "Vin", "Vince", "Vincence", "Vincens", "Vincent", "Vincentius", "Vincents", "Vincenzio", "Vincenzo", "Vinci", "Vincien", "Vinciente", "Vincint", "Vine", "Ving", "Vinicent", "Vinn", "Vinnee", "Vinney", "Vinni", "Vinnie", "Vinnis", "Vinny", "Vinsent", "Vinsint", "Vinson", "Vinton", "Vinzenz", "Vireo", "Virge", "Virgel", "Virgial", "Virgil", "Virgile", "Virgilio", "Virgle", "Viridian", "Virle", "Viro", "Vischer", "Vishnu", "Visscher", "Vit", "Vital", "Vitale", "Vitalis", "Vitaly", "Vitas", "Vitin", "Vitis", "Vito", "Vitor", "Vittore", "Vittorio", "Vitus", "Vitya", "Vivaan", "Vivaldo", "Vivian", "Viviani", "Viviano", "Vivien", "Vivyan", "Vlad", "Vladamir", "Vladi", "Vladik", "Vladimar", "Vladimeer", "Vladimer", "Vladimere", "Vladimir", "Vladimire", "Vladimyr", "Vladimir", "Vladislav", "Vladjimir", "Vladka", "Vladko", "Vladlen", "Vladmir", "Vlady", "Vladya", "Vlas", "Vlasislava", "Volante", "Volker", "Vollie", "Vollker", "Volney", "Volodimir", "Volodya", "Volya", "Von", "Vonn", "Vonny", "Vougn", "Vova", "Vovka", "Vrai", "Vulcan", "Vyacheslav", "Vyncent", "Vyncint", "Vyncynt", "Vyse", "Vytas", "Vyvian", "Vyvyan", "Vaclav", "Vana", "Vanuska"];

    /**
     * Numerology letter groups mapping
     * Based on Indian Astrology numerology system
     */
    const letterGroups = [
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
     * Create optimized lookup map for O(1) letter-to-number conversion
     * @returns {Map<string, number>} Map of letters to their numerological values
     */
    const createLetterMap = () => {
        const map = new Map();
        letterGroups.forEach((group, index) => {
            group.forEach(letter => {
                map.set(letter, index + 1);
            });
        });
        return map;
    };

    const letterMap = createLetterMap();

    /**
     * Master numbers in numerology (have special significance)
     */
    const masterNumbers = [11, 22, 33];

    /**
     * Calculate the numerological value of a name
     * @param {string} name - The name to calculate
     * @returns {number} The numerological value
     */
    const calculateNumerology = (name) => {
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
    const getNameBreakdown = (name) => {
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
     * @param {boolean} includeMasterNumbers - Whether to preserve master numbers
     * @returns {Array<{name: string, value: number}>} Filtered names with values
     */
    const filterNamesByNumerology = (names, desiredNumber, includeMasterNumbers = false) => {
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
    const getStatistics = (names) => {
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
     * Display names in the UI
     * @param {Array<{name: string, value: number}>} results - Array of name-value pairs
     * @param {HTMLElement} container - Container element to display results
     */
    const displayResults = (results, container) => {
        container.innerHTML = '';

        if (results.length === 0) {
            const noResults = document.createElement('li');
            noResults.className = 'no-results';
            noResults.textContent = 'No matching names found';
            container.appendChild(noResults);
            return;
        }

        // Sort results alphabetically
        const sortedResults = [...results].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        sortedResults.forEach(({ name, value }) => {
            const li = document.createElement('li');
            li.className = 'name-item';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'name-text';
            nameSpan.textContent = name;

            const valueSpan = document.createElement('span');
            valueSpan.className = 'name-value';
            valueSpan.textContent = value;

            // Add master number indicator
            if (masterNumbers.includes(value)) {
                const masterBadge = document.createElement('span');
                masterBadge.className = 'master-number-badge';
                masterBadge.textContent = 'Master';
                masterBadge.title = 'This is a master number in numerology';
                li.appendChild(nameSpan);
                li.appendChild(masterBadge);
                li.appendChild(valueSpan);
            } else {
                li.appendChild(nameSpan);
                li.appendChild(valueSpan);
            }

            container.appendChild(li);
        });
    };

    /**
     * Display breakdown of a name's numerology
     * @param {string} name - The name to break down
     * @param {HTMLElement} container - Container element
     */
    const displayBreakdown = (name, container) => {
        if (!name || name.trim() === '') {
            container.innerHTML = '';
            container.style.display = 'none';
            return;
        }

        const breakdown = getNameBreakdown(name);
        const total = calculateNumerology(name);

        container.style.display = 'block';
        container.innerHTML = `
            <h3>Breakdown for "${name.toUpperCase()}"</h3>
            <div class="breakdown-details">
                ${breakdown.map(({ letter, value }) =>
                    `<span class="breakdown-item">${letter} = ${value}</span>`
                ).join(' + ')}
                <span class="breakdown-total"> = ${total}</span>
            </div>
            ${masterNumbers.includes(total) ?
                '<p class="master-number-info">⭐ This is a master number with special significance in numerology!</p>' :
                ''}
        `;
    };

    /**
     * Display statistics about the name database
     * @param {HTMLElement} container - Container element
     */
    const displayStatistics = (container) => {
        const stats = getStatistics(firstNames);
        const sortedStats = Array.from(stats.entries()).sort((a, b) => a[0] - b[0]);

        container.innerHTML = '<h3>Name Distribution by Number</h3>';
        const statsGrid = document.createElement('div');
        statsGrid.className = 'stats-grid';

        sortedStats.forEach(([value, count]) => {
            const statItem = document.createElement('div');
            statItem.className = 'stat-item';
            statItem.innerHTML = `
                <span class="stat-number ${masterNumbers.includes(value) ? 'master' : ''}">${value}</span>
                <span class="stat-count">${count} name${count !== 1 ? 's' : ''}</span>
            `;
            statsGrid.appendChild(statItem);
        });

        container.appendChild(statsGrid);
    };

    /**
     * Validate number input
     * @param {string} value - Input value to validate
     * @returns {{valid: boolean, error: string|null}} Validation result
     */
    const validateNumberInput = (value) => {
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

    /**
     * Show error message
     * @param {string} message - Error message to display
     * @param {HTMLElement} container - Container element
     */
    const showError = (message, container) => {
        container.textContent = message;
        container.style.display = 'block';
        setTimeout(() => {
            container.style.display = 'none';
        }, 3000);
    };

    /**
     * Initialize the application
     */
    const init = () => {
        // Get DOM elements
        const searchBtn = document.getElementById('btnSearch');
        const numberInput = document.getElementById('yourNumber');
        const nameList = document.querySelector('.name-list');
        const errorContainer = document.querySelector('.error');
        const customNameInput = document.getElementById('customName');
        const calculateCustomBtn = document.getElementById('btnCalculateCustom');
        const breakdownContainer = document.querySelector('.breakdown-container');
        const statsContainer = document.querySelector('.stats-container');
        const showAllBtn = document.getElementById('btnShowAll');
        const showStatsBtn = document.getElementById('btnShowStats');
        const resultCount = document.querySelector('.result-count');

        // Search by number
        const handleSearch = () => {
            const value = numberInput.value;
            const validation = validateNumberInput(value);

            if (!validation.valid) {
                showError(validation.error, errorContainer);
                return;
            }

            const desiredNumber = parseInt(value, 10);
            const results = filterNamesByNumerology(firstNames, desiredNumber);

            displayResults(results, nameList);

            // Update result count
            if (resultCount) {
                resultCount.textContent = `Found ${results.length} name${results.length !== 1 ? 's' : ''} with value ${desiredNumber}`;
                resultCount.style.display = 'block';
            }

            // Clear breakdown when searching
            if (breakdownContainer) {
                breakdownContainer.innerHTML = '';
                breakdownContainer.style.display = 'none';
            }
        };

        // Calculate custom name
        const handleCustomName = () => {
            const name = customNameInput.value.trim();

            if (name === '') {
                showError('Please enter a name', errorContainer);
                return;
            }

            displayBreakdown(name, breakdownContainer);

            // Clear main results
            if (resultCount) {
                resultCount.style.display = 'none';
            }
        };

        // Show all names
        const handleShowAll = () => {
            const allResults = firstNames
                .filter(name => name.trim() !== '')
                .map(name => ({
                    name: name,
                    value: calculateNumerology(name)
                }));

            displayResults(allResults, nameList);

            if (resultCount) {
                resultCount.textContent = `Showing all ${allResults.length} names`;
                resultCount.style.display = 'block';
            }

            // Clear breakdown
            if (breakdownContainer) {
                breakdownContainer.innerHTML = '';
                breakdownContainer.style.display = 'none';
            }
        };

        // Show statistics
        const handleShowStats = () => {
            displayStatistics(statsContainer);

            // Clear main results
            nameList.innerHTML = '';
            if (resultCount) {
                resultCount.style.display = 'none';
            }
            if (breakdownContainer) {
                breakdownContainer.innerHTML = '';
                breakdownContainer.style.display = 'none';
            }
        };

        // Event listeners
        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }

        if (numberInput) {
            numberInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        }

        if (calculateCustomBtn && customNameInput) {
            calculateCustomBtn.addEventListener('click', handleCustomName);
            customNameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleCustomName();
                }
            });
        }

        if (showAllBtn) {
            showAllBtn.addEventListener('click', handleShowAll);
        }

        if (showStatsBtn) {
            showStatsBtn.addEventListener('click', handleShowStats);
        }

        // Initialize with default view (show all names with value 22)
        if (numberInput) {
            numberInput.value = '22';
            handleSearch();
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
