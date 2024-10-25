import React, { CSSProperties, FC, HTMLProps, Ref } from "react";
import { BASE_STYLE } from "./Container";

export interface FormProps extends HTMLProps<HTMLFormElement> {
    padding?: boolean | number | [number, number] | [number, number, number, number]
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    containerRef?: Ref<HTMLFormElement>
}

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