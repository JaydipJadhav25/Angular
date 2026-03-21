# Angular Components Guide

This document explains the core components that make up an **Angular** application. In Angular, a component is the most basic UI building block.

---

## 🏗️ Anatomy of a Component
Every Angular component consists of four distinct files that work together:

### 1. Component Class (`.ts`)
The **Logic Layer**. It handles data and user interactions.
*   **Decorator:** Uses `@Component()` to define metadata.
*   **Selector:** The custom HTML tag (e.g., `<app-root>`).
*   **Logic:** Contains properties (data) and methods (functions).

### 2. HTML Template (`.html`)
The **View Layer**. Defines the structure of the UI.
*   **Interpolation:** `{{ value }}` displays data from the class.
*   **Directives:** `*ngIf` and `*ngFor` add logic to the layout.

### 3. Styles (`.css` / `.scss`)
The **Design Layer**.
*   **Encapsulation:** Styles are "scoped," meaning they only affect this specific component and won't leak to others.

### 4. Unit Test (`.spec.ts`)
The **Quality Layer**.
*   Used for automated testing to ensure the component behaves correctly.

---

## 🔄 Component Lifecycle Hooks
Angular provides hooks to tap into key moments of a component's life:
*   **`ngOnInit()`**: Run once after the component is initialized (best for API calls).
*   **`ngOnChanges()`**: Run when input properties change.
*   **`ngOnDestroy()`**: Run right before the component is removed (best for cleanup).

---

## 🛠️ CLI Commands
Generate a new component using the Angular CLI:

```bash
# Full command
ng generate component component-name

# Shortcut
ng g c component-name
