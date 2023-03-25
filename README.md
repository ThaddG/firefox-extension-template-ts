# TypeScript-ready Firefox Extension Template

This is a template for creating a Firefox extension using TypeScript. The template includes a basic popup and content script setup. You can use this template as a starting point for your own Firefox extension projects.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (usually bundled with Node.js)

## Getting Started

1. Clone the repository or download the code as a ZIP file and extract it.
2. Open a terminal and navigate to the project's root directory.
3. Run `npm install` to install the required dependencies.

## Development

- To compile the TypeScript files and build the extension, run `npm run build`. The compiled files and necessary assets will be placed in the `dist` directory.
- Load the extension in Firefox:
  1. Go to `about:debugging#/runtime/this-firefox`.
  2. Click "Load Temporary Add-on…".
  3. Select the `manifest.json` file from the `dist` directory.

## Customization

To make this template your own, you will need to modify the following files:

1. `src/manifest.json`: Update the extension name, description, version, permissions, and other metadata as needed.
2. `src/popup.html`: Modify the HTML structure and content of the popup as desired.
3. `src/styles/popup.css`: Update the styles for the popup as needed.
4. `src/popup.ts`: Modify the TypeScript code for the popup's behavior.
5. `src/contentScript.ts`: Update the content script to add functionality when the extension runs on specified domains.

If you need additional resources such as images or other assets, make sure to include them in the `src` directory, and update the `scripts` section of `package.json` to copy the new files to the `dist` directory during the build process.

Don't forget to update the `README.md` file to reflect your project's details.
