import React, { CSSProperties, FC } from 'react';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'div';
    style?: CSSProperties;
    font?: string;
    size?: number;
    weight?: number | string;
    className?: string;
}

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