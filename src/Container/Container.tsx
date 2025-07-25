import React, { CSSProperties, FC, HTMLProps, Ref } from "react";

/**
 * Props for the Container component
 */
export interface ContainerProps extends HTMLProps<HTMLDivElement> {
    /**
     * The HTML element type to render
     * @default 'div'
     */
    as?: 'div' | 'section' | 'header' | 'footer' | 'article' | 'main' | 'aside' | 'nav';
    
    /**
     * Padding for the container in rem units
     * - `true`: 1rem padding on all sides
     * - `number`: Nrem padding on all sides
     * - `[number, number]`: vertical (top/bottom) and horizontal (left/right) padding
     * - `[number, number, number, number]`: top, right, bottom, left padding
     */
    padding?: boolean | number | [number, number] | [number, number, number, number]
    
    /**
     * Horizontal alignment of children using flexbox justify-content
     * @default 'center'
     */
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    
    /**
     * Reference to the underlying DOM element
     */
    containerRef?: Ref<HTMLDivElement>
    
    /**
     * Enable flex wrapping for children
     * - `true`: wrap normally
     * - `'reverse'`: wrap in reverse order
     */
    wrapContainer?: boolean | 'reverse'
}

/**
 * Base flexbox styles applied to all container components
 */
export const BASE_STYLE: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box'
}

/**
 * Container component that provides a flexible layout wrapper with centered content by default.
 * Uses flexbox for layout and supports various HTML semantic elements.
 * 
 * @example
 * ```tsx
 * <Container padding={2} justify="space-between">
 *   <div>Left content</div>
 *   <div>Right content</div>
 * </Container>
 * ```
 */
const Container: FC<ContainerProps> = ({as = 'div',children, wrapContainer, containerRef, padding, style, className, justify, ...props}) => {
    let _style: CSSProperties = {...BASE_STYLE, ...style}
    const Component = as
    if (padding) {
        if (padding instanceof Array) {
            if (padding.length === 2) {
                _style.padding = `${padding[0]}rem ${padding[1]}rem`;
            } else {
                _style.padding = `${padding[0]}rem ${padding[1]}rem ${padding[2]}rem ${padding[3]}rem`;
            }
        } else if (typeof padding === 'number') {
            _style.padding = `${padding}rem`
        } else {
            _style.padding = `1rem`;
        }
    }

    if (justify) {
        _style.justifyContent = justify
    }

    if (wrapContainer) {
        _style.flexWrap = wrapContainer === 'reverse' ? 'wrap-reverse': 'wrap';
    }
    
    return (
        <Component {...props} ref={containerRef} style={_style} className={className || ''} >
            {children}
        </Component>
    )
}

export default Container