# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Layout Components library - a lightweight TypeScript library providing flexible layout components (Container, Row, Column, Form, Text).

## Build Commands

- `pnpm run build` - Clean and build the library (creates dist/ with CJS, ESM, and TypeScript declarations)
- `pnpm run clean` - Remove the dist directory
- `pnpm run test` - Run Jest tests
- `pnpm install` - Install dependencies

## Architecture

### Build System
- **Rollup** for bundling with dual CJS/ESM output
- **TypeScript** with strict mode enabled
- Generates type declarations using rollup-plugin-dts
- External dependencies: react, react-dom (peer dependencies)

### Component Structure
```
src/
├── index.ts           # Main export file
├── Container/
│   ├── Container.tsx  # Centered flex container
│   ├── Row.tsx       # Horizontal flex container
│   ├── Column.tsx    # Vertical flex container
│   ├── Form.tsx      # Form container component
│   └── index.ts      # Container module exports
└── Text/
    └── index.tsx     # Text component
```

### Key Technical Details
- All layout components accept `justify`, `align`, `style` props and standard div props
- Components use React 18 with TypeScript
- Library is published as `react-web-layout-components` on npm
- Main entry: `dist/index.js` (CJS), Module: `dist/index.esm.js` (ESM)
- Type definitions: `dist/index.d.ts`