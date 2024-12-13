# Tymex Interview Frontend - Hao Nguyen

## Technologies Used

- ReactJS
- NextJS
- Node.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Turborepo (for monorepo)
- Axios (for HTTP requests)
- Jest (for testing)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- pnpm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nmhhao1996/tymex-interview-frontend-HaoNguyen.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tymex-interview-frontend-HaoNguyen
    ```
3. Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Application

Configure the environment variables:

```bash
cp ./apps/web/.env.example .env.local
cp ./apps/tymex-mock-server-nodejs/.env.example .env
```

To start the development server, run:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Running Tests

To run the tests, use:
```bash
pnpm test
```

## Project Structure
- `apps/` - Contains the applications
  - `tymex-mock-server-nodejs/` - Mock server for the frontend
  - `web/` - Frontend application
    - `app/` - App Router and Layout
      - `marketplace` - Marketplace page 
        - `components/` - Components for the marketplace page
        -  `page.tsx` - Marketplace page component
      - `global.css` - Global styles
      - `page.tsx` - Home page component
      - `providers.tsx` - Context providers
      - `template.tsx` - Main template
    - `components/` - Reusable components
      - `ui/` - UI components
      - rest - Other components
    - `lib/` - Utility functions
      - `axios` - Axios instance
      - `query-string` - Query string utility
    - `services/` - API services
      - `products/` - Product service

## Contact

For any questions or inquiries, please contact Hao Nguyen at [your-email@example.com].
