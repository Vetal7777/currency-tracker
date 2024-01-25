# Vue.js Currency Exchange Rate SPA

This Vue.js application serves as a Single Page Application (SPA) designed to display currency exchange rates. It utilizes the National Bank of Ukraine (NBU) API as its data source, fetching information from the NBUStatService endpoint with the date parameter acting as a filter for currency rates on specific dates.

## Key Features

1. **Multiple Pages:**
   - **Home:** Displays current currency exchange rates.
   - **Changed Rates:** Lists currency rates modified by the user.
   - **Search Rates:** Allows users to view currency rates for a selected date, with a date filter.

2. **Navigation:**
   - The site header includes menu items for Home, Changed Rates, and Search Rates.

3. **Currency List Interaction:**
   - Clicking on a currency navigates to its page for editing.
   - Edited currency rates are saved locally and appear on the Changed Rates page.
   - Editing and saving currency rates occur locally without server communication.

4. **Pagination:**
   - Pagination is implemented on pages displaying currency lists, with 10 currencies per page.

5. **Local Search:**
   - Users can search for a currency by its name locally on any page with a currency list.

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn dev
```
