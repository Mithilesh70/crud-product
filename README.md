# Angular Project - Product CRUD

This is an Angular-based project that displays a list of products and a corresponding chart for product data visualization.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- npm (Node Package Manager, comes with Node.js)

### Installation

1. Clone the repository or download the project files.

2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the Angular development server by running the following command:

```bash
npm start
```

Once the server is up and running, the project will automatically open in your default browser at `http://localhost:4200`. If not, you can manually open the URL in your browser.

### Project Overview

- **Initial View**: On starting the project, you will be redirected to the **Product List** component, which displays a table of products with their details like name, price, and category.
- **Toggling Chart View**: To view the chart associated with the product data:
  - At the top of the product list, you'll see a toggle button.
  - Use this button to switch between the **Product List** and the **Chart View**. The chart visualizes product data such as total prices for each product category.

### Additional Features

- Interactive charts for data visualization using `ngx-charts`.

### Project Structure

- **src/app/component**: Contains all the Angular components including the list and chart views.
- **src/app/core/service**: Services used to fetch and manage product data.

### Dependencies

This project utilizes the following major dependencies:

- **Angular**: Core framework.
- **PrimeNG**: UI components for Angular.
- **ngx-charts**: Charting library for data visualization.

### License

This project is licensed under the MIT License.
