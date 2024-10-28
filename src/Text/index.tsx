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
    const _style: CSSProperties = { ...style, fontSize: '1rem', fontWeight: 400, fontFamily: 'Arial' };


    const Component = as;
    return (
        <Component 
            className={className} 
            style={_style}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Text;