# SchemaBuilder

SchemaBuilder is a React-based application for building complex data schemas with support for nested fields. It allows users to dynamically create and edit fields, define field types, and add nested fields recursively.

## Features

- Create and edit fields with customizable names and types (String, Number, Nested).
- Add nested fields to define complex data structures.
- Visual representation of the schema building process.
- Real-time JSON output reflecting the schema configuration.

## Technologies Used

- React
- Ant Design (for UI components)
- JavaScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/SchemaBuilder.git
```
## Install dependencies:
```bash
cd SchemaBuilder
npm install
```
## Run the application:
```bash
npm run dev
```
The application will open in your default web browser, and you can start building your schemas.

## How to Build a Schema

- Adding Fields: Click the "+ Add Field" button to add a new field. You can specify the field name and select the type (String, Number, Nested) from the dropdown menu.
- Editing Fields: Click on an existing field to edit its name or type.
- Adding Nested Fields: If a field's type is set to "Nested," you can add nested fields to it by clicking the "+ Add Nested Field" button within that field.
- Viewing JSON Output: The JSON tab displays the real-time JSON representation of the schema you're building.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements
- Ant Design for providing the UI components.
