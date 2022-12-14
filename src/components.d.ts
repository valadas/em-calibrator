/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface EmGcode {
    }
    interface EmPreview {
    }
    interface EmSettings {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLEmGcodeElement extends Components.EmGcode, HTMLStencilElement {
    }
    var HTMLEmGcodeElement: {
        prototype: HTMLEmGcodeElement;
        new (): HTMLEmGcodeElement;
    };
    interface HTMLEmPreviewElement extends Components.EmPreview, HTMLStencilElement {
    }
    var HTMLEmPreviewElement: {
        prototype: HTMLEmPreviewElement;
        new (): HTMLEmPreviewElement;
    };
    interface HTMLEmSettingsElement extends Components.EmSettings, HTMLStencilElement {
    }
    var HTMLEmSettingsElement: {
        prototype: HTMLEmSettingsElement;
        new (): HTMLEmSettingsElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "em-gcode": HTMLEmGcodeElement;
        "em-preview": HTMLEmPreviewElement;
        "em-settings": HTMLEmSettingsElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface EmGcode {
    }
    interface EmPreview {
    }
    interface EmSettings {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "em-gcode": EmGcode;
        "em-preview": EmPreview;
        "em-settings": EmSettings;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "em-gcode": LocalJSX.EmGcode & JSXBase.HTMLAttributes<HTMLEmGcodeElement>;
            "em-preview": LocalJSX.EmPreview & JSXBase.HTMLAttributes<HTMLEmPreviewElement>;
            "em-settings": LocalJSX.EmSettings & JSXBase.HTMLAttributes<HTMLEmSettingsElement>;
        }
    }
}
