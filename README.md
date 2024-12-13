# Tymex Interview Frontend - Hao Nguyen

## Technologies Used

- ReactJS
- NextJS
- Node.js
- TypeScript
- HTML5
- CSS3
- Tailwind CSS (for styling)
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

## Checklist

- [x] Fetch data from the API
- [x] Click "View more" to view more data
- [x] Handle loaded data, empty data returned and error
- [x] System can auto refresh data after 60 seconds
- [x] Write unit tests
- [x] Formatter & Linter

## Test Coverage

| File                                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ----------------------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files                                 | 94.08   | 88.17    | 87.03   | 93.78   |                   |
| app/marketplace/components                | 94.64   | 92.85    | 83.33   | 94.54   |                   |
| category-filter.tsx                       | 100     | 100      | 100     | 100     |                   |
| product-filter-drawer.tsx                 | 100     | 100      | 100     | 100     |                   |
| product-list.tsx                          | 86.36   | 87.5     | 70      | 86.36   | 26-32,99          |
| app/marketplace/components/product-filter | 90.52   | 89.83    | 84      | 90      |                   |
| hooks.ts                                  | 92.3    | 100      | 100     | 92.3    | 19                |
| index.tsx                                 | 91.11   | 95       | 69.23   | 91.11   | 142,163,185,206   |
| schema.ts                                 | 89.18   | 86.84    | 100     | 87.5    | 89,92,99,102      |
| components/product-card                   | 100     | 60       | 100     | 100     |                   |
| index.tsx                                 | 100     | 60       | 100     | 100     | 37-72             |
| skeleton.tsx                              | 100     | 100      | 100     | 100     |                   |
| components/ui/button                      | 100     | 100      | 100     | 100     |                   |
| index.tsx                                 | 100     | 100      | 100     | 100     |                   |
| components/ui/icons                       | 100     | 100      | 100     | 100     |                   |
| ethereum-icon.tsx                         | 100     | 100      | 100     | 100     |                   |
| components/ui/input                       | 100     | 100      | 100     | 100     |                   |
| index.tsx                                 | 100     | 100      | 100     | 100     |                   |
| components/ui/select                      | 100     | 100      | 100     | 100     |                   |
| index.tsx                                 | 100     | 100      | 100     | 100     |                   |
| components/ui/slider                      | 100     | 100      | 100     | 100     |                   |
| index.tsx                                 | 100     | 100      | 100     | 100     |                   |
| lib                                       | 100     | 100      | 100     | 100     |                   |
| query-string.ts                           | 100     | 100      | 100     | 100     |                   |
| models                                    | 100     | 100      | 100     | 100     |                   |
| index.ts                                  | 100     | 100      | 100     | 100     |                   |
| product.ts                                | 100     | 100      | 100     | 100     |                   |

## Demo
- [Demo](https://tymex-interview-frontend-hao-nguyen-pylzx5co4.vercel.app/marketplace)


## Contact

For any questions or inquiries, please contact Hao Nguyen at [your-email@example.com].
