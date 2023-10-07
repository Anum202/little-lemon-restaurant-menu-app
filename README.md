# Little Lemon Restaurant Menu App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Introduction

The Little Lemon Restaurant Menu App is a mobile application developed using React Native. It allows users to browse and search for items on a restaurant's menu. Users can filter menu items by category and search for specific items by name.

## Features

- Browse restaurant menu items by category.
- Search for menu items by name.
- Filter menu items by category.
- Clean and user-friendly interface.
- Data is fetched from a remote API and stored in a local SQLite database for offline access.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Expo CLI installed globally.
- A mobile device or emulator to run the app (e.g., Android/iOS emulator or a physical device).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/little-lemon-restaurant-menu-app.git

   ```

2. Change the directory:

   cd little-lemon-restaurant-menu-app

3. Install the dependencies:

   npm install

4. Start the Expo development server:

   npx expo start

5. Use the Expo client to open the app on your mobile device or emulator.

## Usage

On the app's home screen, you'll see a search bar, category filters, and a list of menu items.
Use the search bar to search for menu items by name. Results will be displayed in real-time as you type.
Use the category filters to filter menu items by category. Selecting a category will update the list of items accordingly.
Scroll through the menu items to view details such as item name and price.

## Folder Structure

The project's folder structure is organized as follows:

little-lemon-restaurant-menu-app/
├── components/ # React Native components
├── database.js # SQLite database setup and queries
├── utils.js # Utility functions and helpers
├── App.js # Main entry point
├── package.json # Dependencies and scripts
└── README.md # Project documentation
