# Numerology Calculator

A modern, interactive numerology calculator that calculates the numerological value of names based on Indian Astrology principles. This application has been completely redesigned with modern JavaScript, a beautiful UI, and extensive features.

## Features

### Core Functionality
- **Search by Number**: Find all names in the database that match a specific numerological value
- **Calculate Any Name**: Enter any custom name to see its numerological value and letter-by-letter breakdown
- **Master Numbers**: Special highlighting for master numbers (11, 22, 33) which have significance in numerology
- **Breakdown View**: See exactly how each letter contributes to the total numerological value

### Additional Features
- **Show All Names**: View the entire database of names with their values
- **Statistics**: See the distribution of names across different numerological values
- **Input Validation**: Comprehensive validation with helpful error messages
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support
- **No Dependencies**: Built with pure vanilla JavaScript - no jQuery or other libraries needed

## About Numerology

Numerology is a belief system that assigns mystical significance to numbers. This calculator is based on Indian Astrology numerology, where each letter of the alphabet corresponds to a specific number (1-8).

**Letter Mapping:**
- **1**: A, I, J, Q, Y
- **2**: B, K, R
- **3**: C, G, L, S
- **4**: D, M, T
- **5**: E, H, N, X
- **6**: U, V, W
- **7**: O, Z
- **8**: F, P

**Master Numbers** (11, 22, 33) are considered to have special spiritual significance and are highlighted in the application.

**Disclaimer:** Numerology is used for informational and entertainment purposes only. No scientific proof exists to back up claims made by numerology supporters.

## Installation and Running

### Prerequisites

You will need the following installed on your computer:

- **Git** - for cloning the repository
- **Python** (2.7+ or 3.x) - for running the local web server
  - Already installed on macOS and most Linux distributions
  - Windows users can download from [python.org](https://www.python.org/)
- **Node.js** (optional) - only needed if you want to run tests

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd numerology
   ```

2. **Start the web server**

   **Option A: Using Python 3**
   ```bash
   python3 -m http.server 8000
   ```

   **Option B: Using Python 2**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   **Option C: Using npm script (if Node.js is installed)**
   ```bash
   npm start
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## Usage

### Searching for Names by Number

1. Enter a number (1-200) in the "Search by Number" field
2. Click "Search" or press Enter
3. View all names that match that numerological value
4. Results show the count and are sorted alphabetically
5. Master numbers (11, 22, 33) are specially marked

### Calculating Custom Names

1. Enter any name in the "Calculate Any Name" field
2. Click "Calculate" or press Enter
3. See the breakdown showing each letter's contribution
4. The total value is calculated and displayed
5. Master numbers are highlighted with a special indicator

### Viewing All Names

- Click "Show All Names" to see the complete database
- Names are displayed with their numerological values
- Scroll through to explore different names

### Viewing Statistics

- Click "Show Statistics" to see the distribution
- View how many names correspond to each number
- Master numbers are highlighted in the statistics view
- Helps understand which numerological values are most common

## Project Structure

```
numerology/
├── css/
│   └── styles.css              # Modern, responsive styles
├── js/
│   ├── app.js                  # Main application code
│   └── numerology-core.js      # Core calculation logic (modular)
├── tests/
│   └── numerology-core.test.js # Unit tests
├── index.html                  # Main HTML file
├── package.json                # npm configuration
├── README.md                   # This file
└── LICENSE                     # License file
```

## Technology Stack

### Built With Modern JavaScript
- **ES6+ Features**: const/let, arrow functions, template literals, Map objects
- **No jQuery**: Pure vanilla JavaScript for better performance
- **Optimized Performance**: O(1) letter lookup using Map data structure
- **Comprehensive JSDoc**: Well-documented code for easy maintenance

### Styling
- **CSS3**: Modern CSS with variables for easy theming
- **Responsive Design**: Mobile-first approach with flexbox and grid
- **Smooth Animations**: Polished transitions and user feedback
- **Accessibility**: WCAG compliant with proper ARIA labels

### Code Quality
- **Modular Architecture**: Separated concerns for maintainability
- **Unit Tests**: Comprehensive test coverage of core functions
- **Input Validation**: Robust error handling
- **Clean Code**: Well-structured and commented

## Development

### Running Tests

If you have Node.js installed, you can run the unit tests:

```bash
npm test
```

The tests cover:
- Letter to number mapping
- Numerology calculations
- Name filtering
- Statistics generation
- Input validation
- Edge cases and error handling

### Code Structure

The application is organized into modules:

- **numerology-core.js**: Core calculation logic (can be reused in other projects)
- **app.js**: UI logic and DOM manipulation
- **styles.css**: All styling in one place with CSS variables

### Contributing

This project is open for improvements! Areas for potential contribution:

1. **Additional Features**
   - Add more name databases (surnames, international names)
   - Export results to PDF or CSV
   - Save favorite names
   - Compare multiple names

2. **Enhancements**
   - Dark mode toggle
   - More numerology systems (Pythagorean, Chaldean, etc.)
   - Name suggestions based on desired characteristics
   - Social sharing features

3. **Testing**
   - Integration tests for UI
   - Browser compatibility testing
   - Performance benchmarking

## Browser Support

The application works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** ES6 modules are used, so very old browsers (IE11 and below) are not supported.

## Performance

- **Optimized Algorithm**: O(1) letter lookup instead of O(n²) nested loops
- **No External Dependencies**: Faster load times without jQuery
- **Efficient DOM Manipulation**: Only updates what changed
- **Small Bundle Size**: < 50KB total (HTML + CSS + JS)

## Accessibility

The application follows WCAG 2.1 Level AA guidelines:
- ✅ Keyboard navigation support
- ✅ Screen reader compatible with ARIA labels
- ✅ High contrast ratio for text
- ✅ Focus indicators for interactive elements
- ✅ Semantic HTML structure
- ✅ Responsive and mobile-friendly

## Version History

### Version 2.0.0 (Current)
- Complete rewrite with modern JavaScript (ES6+)
- Removed jQuery dependency
- Added comprehensive UI with multiple features
- Implemented responsive design
- Added unit tests
- Improved accessibility
- Optimized performance with better algorithms
- Added modular architecture
- Full JSDoc documentation

### Version 1.0.0 (Legacy)
- Original implementation with jQuery
- Basic filtering by number 22
- Simple list display

## Credits

This calculator is based on the Indian Astrology numerology system. Special thanks to the original creator's acquaintance who shared knowledge about this numerology tradition.

## License

This project is available under the MIT License. See the LICENSE file for more details.

## Future Roadmap

Potential future enhancements:
- [ ] Add more name databases (international names, surnames, etc.)
- [ ] Implement different numerology systems (Pythagorean, Chaldean)
- [ ] Add name meaning/origin information
- [ ] Create API endpoints for programmatic access
- [ ] Build a Progressive Web App (PWA) version
- [ ] Add user accounts to save favorite names
- [ ] Implement advanced filtering and search
- [ ] Create visualizations of numerological patterns

---

**Note:** This is a fun, educational tool. Numerology is not scientifically validated and should be used for entertainment purposes only.
