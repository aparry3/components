# React Web Layout Components

A lightweight library of flexible React layout components written in TypeScript.

## Installation

```bash
npm install react-web-layout-components
```

## Usage

```tsx
import { Container, Row, Column, Form, Text } from 'react-web-layout-components';

function App() {
  return (
    <Container padding={2}>
      <Row justify="space-between">
        <Column>
          <Text as="h1" size={2} weight="bold">Welcome</Text>
          <Text>Left Content</Text>
        </Column>
        <Column>Right Content</Column>
      </Row>
    </Container>
  );
}
```

## API Reference

### Container

A flexible container component that centers content and provides consistent spacing.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'div' \| 'section' \| 'header' \| 'footer' \| 'article' \| 'main' \| 'aside' \| 'nav'` | `'div'` | The HTML element to render |
| `padding` | `boolean \| number \| [number, number] \| [number, number, number, number]` | - | Padding in rem units. `true` = 1rem, number = Nrem, array for directional padding |
| `justify` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around'` | `'center'` | Horizontal alignment of children |
| `containerRef` | `Ref<HTMLDivElement>` | - | Reference to the container element |
| `wrapContainer` | `boolean \| 'reverse'` | - | Enable flex wrapping. `'reverse'` for wrap-reverse |
| `style` | `CSSProperties` | - | Additional CSS styles |
| `className` | `string` | - | CSS class name |
| ...props | `HTMLProps<HTMLDivElement>` | - | All standard div props |

#### Example

```tsx
<Container 
  as="section" 
  padding={[2, 3]} 
  justify="space-between"
  wrapContainer
>
  <div>Child 1</div>
  <div>Child 2</div>
</Container>
```

### Row

A horizontal flex container that extends Container with left-aligned content by default.

#### Props

Inherits all props from Container. The main difference is that `justify` defaults to `'flex-start'` instead of `'center'`.

#### Example

```tsx
<Row padding={1} justify="space-between">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Row>
```

### Column

A vertical flex container that extends Container with top-aligned content by default.

#### Props

Inherits all props from Container. The main differences are:
- `flexDirection` is set to `'column'`
- `justify` defaults to `'flex-start'` instead of `'center'`

#### Example

```tsx
<Column padding={2} justify="center">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</Column>
```

### Form

A form component with flex layout capabilities.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `boolean \| number \| [number, number] \| [number, number, number, number]` | - | Padding in rem units. Same as Container |
| `justify` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around'` | `'center'` | Horizontal alignment of form elements |
| `containerRef` | `Ref<HTMLFormElement>` | - | Reference to the form element |
| `style` | `CSSProperties` | - | Additional CSS styles |
| `className` | `string` | - | CSS class name |
| `onSubmit` | `FormEventHandler<HTMLFormElement>` | - | Form submit handler |
| ...props | `HTMLProps<HTMLFormElement>` | - | All standard form props |

#### Example

```tsx
<Form 
  padding={3} 
  justify="flex-start"
  onSubmit={(e) => {
    e.preventDefault();
    // Handle form submission
  }}
>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <button type="submit">Submit</button>
</Form>
```

### Text

A flexible text component for rendering various text elements with consistent styling.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `'p' \| 'span' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'label' \| 'div'` | `'span'` | The HTML element to render |
| `size` | `number` | - | Font size in rem units |
| `weight` | `number \| string` | `400` | Font weight (100-900 or 'normal', 'bold', etc.) |
| `font` | `string` | - | Font family (currently not implemented in styles) |
| `style` | `CSSProperties` | - | Additional CSS styles |
| `className` | `string` | - | CSS class name |
| ...props | `HTMLAttributes<HTMLElement>` | - | All standard HTML attributes |

#### Example

```tsx
<Text as="h1" size={2.5} weight="bold">
  Main Heading
</Text>

<Text as="p" size={1.1} weight={300}>
  Body paragraph with light weight text.
</Text>

<Text as="label" weight="600">
  Form Label
</Text>
```

## Layout Examples

### Basic Page Layout

```tsx
import { Container, Row, Column, Text } from 'react-web-layout-components';

function PageLayout() {
  return (
    <Container as="main" padding={[2, 4]}>
      <Column>
        <Text as="h1" size={3} weight="bold">Dashboard</Text>
        
        <Row padding={[2, 0]} justify="space-between" wrapContainer>
          <Column padding={1} style={{ flex: 1, minWidth: '300px' }}>
            <Text as="h2" size={1.5}>Section 1</Text>
            <Text>Content goes here...</Text>
          </Column>
          
          <Column padding={1} style={{ flex: 1, minWidth: '300px' }}>
            <Text as="h2" size={1.5}>Section 2</Text>
            <Text>More content...</Text>
          </Column>
        </Row>
      </Column>
    </Container>
  );
}
```

### Form Layout

```tsx
import { Form, Column, Row, Text } from 'react-web-layout-components';

function LoginForm() {
  return (
    <Form padding={3} onSubmit={(e) => e.preventDefault()}>
      <Column>
        <Text as="h2" size={2} weight="600">Login</Text>
        
        <Column padding={[1, 0]}>
          <Text as="label" weight="500">Email</Text>
          <input type="email" required />
        </Column>
        
        <Column padding={[1, 0]}>
          <Text as="label" weight="500">Password</Text>
          <input type="password" required />
        </Column>
        
        <Row padding={[2, 0]} justify="space-between">
          <button type="submit">Login</button>
          <Text size={0.9}>Forgot password?</Text>
        </Row>
      </Column>
    </Form>
  );
}
```

## TypeScript Support

All components are fully typed with TypeScript. Import the prop interfaces if needed:

```tsx
import { ContainerProps, RowProps, ColumnProps, FormProps } from 'react-web-layout-components';
```

## License

MIT
