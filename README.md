# Angular Project Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## 🚀 Angular CLI (`ng`) Overview
The Angular CLI is a command-line interface tool used to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.

All CLI commands begin with `ng`.

## 🛠️ The `generate` Command (`g`)
The `ng generate` (or `ng g`) command uses schematics to generate or modify files based on a blueprint.

**Syntax:** `ng g <schematic> <name> [options]`

### Commonly Used `generate` Schematics

| Schematic | Alias | Description | Example |
| :--- | :--- | :--- | :--- |
| **component** | `c` | Creates a new component | `ng g c components/user` |
| **module** | `m` | Creates a new module | `ng g m modules/admin` |
| **service** | `s` | Creates a new service | `ng g s services/data` |
| **directive** | `d` | Creates a new directive | `ng g d directives/highlight` |
| **pipe** | `p` | Creates a new pipe | `ng g p pipes/format` |
| **interface** | `i` | Creates a new interface | `ng g i models/user` |
| **class** | `cl` | Creates a new class | `ng g cl models/user` |
| **guard** | `g` | Creates a new route guard | `ng g g guards/auth` |

---

## 📋 Essential Angular CLI Commands

### Development Server
*   `ng serve` (or `ng s`): Builds and serves the application locally, rebuilding on file changes.
*   `ng serve --open` (or `-o`): Serves the app and opens it in the default browser.

### Building & Testing
*   `ng build` (or `ng b`): Compiles the application into an output directory (`dist/` by default).
*   `ng test` (or `ng t`): Runs unit tests via Karma.
*   `ng lint`: Runs linting tools on the code.

### Setup & Maintenance
*   `ng new <project-name>`: Creates a new Angular workspace.
*   `ng add <library>`: Adds support for an external library (e.g., `@angular/material`).
*   `ng update`: Updates your application and its dependencies.
*   `ng version` (or `ng v`): Outputs Angular CLI version.

---

## ⚙️ Useful Flags
*   `--dry-run` (or `-d`): Reports what files would be created without actually writing them to disk.
*   `--skip-tests`: Skips generating spec files (`.spec.ts`).
*   `--flat`: Puts files in the current folder instead of creating a subfolder.
