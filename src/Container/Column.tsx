import React, { FC } from "react";
import Container, { ContainerProps } from "./Container";

/**
 * Props for the Column component
 * Inherits all props from ContainerProps
 */
export interface ColumnProps extends ContainerProps {
    
}

/**
 * Column component that creates a vertical flex container with top-aligned content by default.
 * Extends the Container component with vertical layout optimized defaults.
 * 
 * @example
 * ```tsx
 * <Column padding={2} justify="center">
 *   <div>Top item</div>
 *   <div>Middle item</div>
 *   <div>Bottom item</div>
 * </Column>
 * ```
 */
const Column: FC<ColumnProps> = ({children, style, ...props}) => {
    return (
        <Container {...props} style={{flexDirection: 'column', justifyContent: 'flex-start', ...(style || {})}}>
            {children}
        </Container>
    )
}

export default Column