// Container.tsx
import React, {
    CSSProperties,
    ElementType,
    forwardRef,
    PropsWithChildren,
  } from "react";
    
  // Container's own props, excluding props that would conflict with the rendered element
  interface ContainerOwnProps<E extends ElementType> {
    as?: E;
    padding?: boolean | number | [number, number] | [number, number, number, number];
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    wrapContainer?: boolean | "reverse";
    className?: string;
    style?: CSSProperties;
  }
  
  // Helper type to omit conflicting props
  type PropsToOmit<E extends ElementType, P> = keyof (P & ContainerOwnProps<E>);
  
  // Combine Container's own props with the props of the rendered element, omitting conflicts
  type ContainerProps<E extends ElementType> = ContainerOwnProps<E> &
    Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, ContainerOwnProps<E>>>;
  
  // Base styles for the Container
  const BASE_STYLE: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  };
  
  // Polymorphic Container component
  const Container = forwardRef(
    <E extends ElementType = "div">(
      {
        as,
        children,
        wrapContainer,
        padding,
        style,
        className,
        justify,
        ...rest
      }: PropsWithChildren<ContainerProps<E>>,
      ref: React.Ref<Element>
    ) => {
      const Component: ElementType = as || "div";
  
      // Merge base styles with custom styles
      let _style: CSSProperties = { ...BASE_STYLE, ...style };
  
      // Handle padding
      if (padding) {
        if (Array.isArray(padding)) {
          if (padding.length === 2) {
            _style.padding = `${padding[0]}rem ${padding[1]}rem`;
          } else if (padding.length === 4) {
            _style.padding = `${padding[0]}rem ${padding[1]}rem ${padding[2]}rem ${padding[3]}rem`;
          }
        } else if (typeof padding === "number") {
          _style.padding = `${padding}rem`;
        } else if (padding === true) {
          _style.padding = `1rem`;
        }
      }
  
      // Handle justifyContent
      if (justify) {
        _style.justifyContent = justify;
      }
  
      // Handle flexWrap
      if (wrapContainer) {
        _style.flexWrap = wrapContainer === "reverse" ? "wrap-reverse" : "wrap";
      }
  
      return (
        <Component
          {...rest}
          ref={ref}
          style={_style}
          className={className || ""}
        >
          {children}
        </Component>
      );
    }
  );
  
  Container.displayName = "Container";
  
  export default Container;
  