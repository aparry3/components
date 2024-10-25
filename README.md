// README.md
# React Layout Components

A lightweight library of flexible React layout components written in TypeScript.

## Installation

```bash
npm install @yourusername/react-layout-components
```

## Usage

```tsx
import { Container, Row, Column } from '@yourusername/react-layout-components';

function App() {
  return (
    <Container>
      <Row justify="space-between">
        <Column>Left Content</Column>
        <Column>Right Content</Column>
      </Row>
    </Container>
  );
}
```

## Components

### Container
A centered flex container with configurable alignment.

### Row
A horizontal flex container with left alignment by default.

### Column
A vertical flex container with top alignment by default.

## Props

All components accept the following props:

- `justify`: JustifyContent values ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly')
- `align`: AlignItems values ('flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline')
- `style`: Additional CSS styles
- All standard div props

## License

MIT
