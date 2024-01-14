
# Lendsqr Frontend Test

## Overview
Given the [design.](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0)  which has sample pages to be built. Build the 4 pages Login, Dashboard, User page, User details page. The user pages should pull data from a mock api with 500 records. Use local storage or indexedDB to store and retrieve user details on the user details page. The page must be mobile responsive. Some details are intentionally left out of this instruction set. We feel the candidate should be able to spot and address them

## Technologies Used

- **Next.js 14:** A React framework that enables server-side rendering, static site generation, and more.
- **TypeScript:** A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **SCSS:** A CSS preprocessor that adds features like variables, mixins, and nesting to improve stylesheet maintainability.
- **react-paginate:** A React component for handling pagination.

## Project Structure

The project follows a modular structure with the 7 in 1 SCSS architecture:

- **abstracts:** Contains mixins and variable files.
- **base:** Stores the reset file.
- **components:** Holds styles used by components.
- **pages:** Contains styles primarily used by pages.

The main.scss file, imported into the project root, aggregates these styles.

## Features

1. **Login Page:**
   - Regex form validation for user input.
   - Dummy authentication without sending user data to external servers.

2. **Dashboard Page:**
   - Fixed navbar and sidebar layout.
   - Fetches user details from an API using Next.js fetch function.
   - Implements pagination using the react-paginate component.

3. **User Details Page:**
   - Retrieves user data from local storage.
   - Displays user information on the page.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/lawybanx/lendsqr-fe-test.git
    ```

    ```bash
    cd lendsqr-fe-test
    npm install
    ```

   ```bash
   npm run dev
    ```
## Usage

- Access the login page and provide valid input based on regex validation.
- Upon successful login, navigate to the dashboard page with a fixed navbar and sidebar.
- The dashboard page fetches user details from an API and implements pagination.
- Navigate to the user details page to view user information fetched from local storage.

## Contributions

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
