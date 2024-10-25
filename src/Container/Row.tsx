import React, { FC } from "react";
import Container, { ContainerProps } from "./Container";

export interface ColumnProps extends ContainerProps {
    
}
const Column: FC<ColumnProps> = ({children, style, ...props}) => {
    return (
        <Container {...props} style={{justifyContent: 'flex-start', ...(style || {})}}>
            {children}
        </Container>
    )
}

export default Column