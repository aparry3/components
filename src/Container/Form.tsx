import React, { CSSProperties, FC, HTMLProps, Ref } from "react";
import { BASE_STYLE } from "./Container";

/**
 * Props for the Form component
 */
export interface FormProps extends HTMLProps<HTMLFormElement> {
    /**
     * Padding for the form in rem units
     * - `true`: 1rem padding on all sides
     * - `number`: Nrem padding on all sides
     * - `[number, number]`: vertical (top/bottom) and horizontal (left/right) padding
     * - `[number, number, number, number]`: top, right, bottom, left padding
     */
    padding?: boolean | number | [number, number] | [number, number, number, number]
    
    /**
     * Horizontal alignment of form elements using flexbox justify-content
     * @default 'center'
     */
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    
    /**
     * Reference to the underlying form element
     */
    containerRef?: Ref<HTMLFormElement>
}

/**
 * Form component that provides a flexible layout for form elements.
 * Combines form functionality with flexbox layout capabilities from Container.
 * 
 * @example
 * ```tsx
 * <Form padding={3} onSubmit={(e) => {
 *   e.preventDefault();
 *   handleSubmit();
 * }}>
 *   <input type="text" name="username" />
 *   <input type="password" name="password" />
 *   <button type="submit">Submit</button>
 * </Form>
 * ```
 */
const Form: FC<FormProps> = ({children, containerRef, padding, style, className, justify, onSubmit, ...props}) => {
    const _style: CSSProperties = {...BASE_STYLE, ...style }

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

    return (
        <form {...props} onSubmit={onSubmit} ref={containerRef} style={_style} className={className || ''}>
            {children}
        </form>
    )
}

export default Form