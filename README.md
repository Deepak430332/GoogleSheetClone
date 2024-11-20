# Google Sheets Clone

## Overview
A web-based spreadsheet application that mimics core functionalities of Google Sheets, built using vanilla JavaScript, HTML, and CSS. This project provides a responsive and interactive spreadsheet interface with rich text formatting capabilities and data import/export features.

## Features
- **Dynamic Spreadsheet Grid**
  - 26 columns (A-Z) and 100 rows
  - Scrollable interface with fixed header and row numbers
  - Editable cells with unique cell identifiers (e.g., A1, B2)

- **Rich Text Formatting**
  - Font family selection (Sans Pro, MonoSpace, Sans Serif)
  - Font size adjustment (8-24px)
  - Text styling (Bold, Italic, Underline)
  - Text alignment (Left, Right, Center)
  - Text color and background color customization
  - Real-time formatting preview

- **Data Management**
  - Export spreadsheet data as JSON
  - Import previously saved spreadsheet data
  - Persistent cell formatting and content
  - Active cell reference display

- **User Interface**
  - Material Icons integration
  - Intuitive toolbar for formatting options
  - Expression/formula input field
  - Responsive design

## Technical Architecture

### Core Components
1. **Grid System** (`script.js`)
   - Dynamically generates the spreadsheet grid
   - Handles cell creation and event listeners
   - Manages row and column headers

2. **Formatting Engine** (`options.js`)
   - Manages cell styling and formatting
   - Handles state management for cell properties
   - Processes toolbar interactions

3. **Data Management** (`export-import.js`)
   - Handles data export/import functionality
   - Manages JSON file creation and download

### Styling
- `style.css`: Core grid and layout styling
- `options.css`: Toolbar and formatting options styling

