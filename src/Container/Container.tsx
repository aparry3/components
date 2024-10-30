import React, { CSSProperties, FC, HTMLProps, Ref } from "react";

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
    as?: 'div' | 'section' | 'header' | 'footer' | 'article' | 'main' | 'aside' | 'nav';
    padding?: boolean | number | [number, number] | [number, number, number, number]
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    containerRef?: Ref<HTMLDivElement>
    wrapContainer?: boolean | 'reverse'
}

export const BASE_STYLE: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box'
}

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