import React, { CSSProperties, FC } from 'react';

/**
 * Props for the Text component
 */
interface TextProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The HTML element type to render
     * @default 'span'
     */
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'div';
    
    /**
     * Additional CSS styles to apply
     */
    style?: CSSProperties;
    
    /**
     * Font family (currently not implemented in styles)
     */
    font?: string;
    
    /**
     * Font size in rem units
     */
    size?: number;
    
    /**
     * Font weight - can be numeric (100-900) or string ('normal', 'bold', etc.)
     * @default 400
     */
    weight?: number | string;
    
    /**
     * CSS class name to apply
     */
    className?: string;
}

/**
 * Text component for rendering typography with consistent styling.
 * Supports various HTML text elements and provides easy control over size and weight.
 * 
 * @example
 * ```tsx
 * <Text as="h1" size={2.5} weight="bold">
 *   Page Title
 * </Text>
 * 
 * <Text as="p" size={1} weight={300}>
 *   Light body text with custom size
 * </Text>
 * ```
 */
const Text: FC<TextProps> = ({
    as = 'span',
    children, 
    style, 
    font, 
    className, 
    size, 
    weight, 
    ...props
}) => {
    const _style: CSSProperties = { ...style, fontSize: size ?`${size}rem` : '', fontWeight: weight || 400 };


    const Component = as;
    return (
        <Component 
            style={_style}
            className={className} 
            {...props}
        >
            {children}
        </Component>
    );
};

export default Text;