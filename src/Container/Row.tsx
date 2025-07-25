import React, { FC } from "react";
import Container, { ContainerProps } from "./Container";

/**
 * Props for the Row component
 * Inherits all props from ContainerProps
 */
export interface RowProps extends ContainerProps {
    
}

/**
 * Row component that creates a horizontal flex container with left-aligned content by default.
 * Extends the Container component with horizontal layout optimized defaults.
 * 
 * @example
 * ```tsx
 * <Row padding={1} justify="space-between">
 *   <div>Left item</div>
 *   <div>Center item</div>
 *   <div>Right item</div>
 * </Row>
 * ```
 */
const Row: FC<RowProps> = ({children, style, ...props}) => {
    return (
        <Container {...props} style={{justifyContent: 'flex-start', ...(style || {})}}>
            {children}
        </Container>
    )
}

export default Row