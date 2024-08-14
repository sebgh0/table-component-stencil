/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyTableComponentSasegovia1 {
        "apiUrl": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTableComponentSasegovia1Element extends Components.MyTableComponentSasegovia1, HTMLStencilElement {
    }
    var HTMLMyTableComponentSasegovia1Element: {
        prototype: HTMLMyTableComponentSasegovia1Element;
        new (): HTMLMyTableComponentSasegovia1Element;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-table-component-sasegovia1": HTMLMyTableComponentSasegovia1Element;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyTableComponentSasegovia1 {
        "apiUrl"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-table-component-sasegovia1": MyTableComponentSasegovia1;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-table-component-sasegovia1": LocalJSX.MyTableComponentSasegovia1 & JSXBase.HTMLAttributes<HTMLMyTableComponentSasegovia1Element>;
        }
    }
}
