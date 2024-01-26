export declare const textInputStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    colorVariant: {
        primary: {
            border: `2px solid var(--${string})` | `2px solid var(--${string}, ${string})` | `2px solid var(--${string}, ${number})`;
            ':hover': {
                border: `2px solid var(--${string})` | `2px solid var(--${string}, ${string})` | `2px solid var(--${string}, ${number})`;
            };
            ':focus': {
                border: `2px solid var(--${string})` | `2px solid var(--${string}, ${string})` | `2px solid var(--${string}, ${number})`;
            };
        };
        secondary: {
            backgroundColor: "transparent";
            border: `2px solid var(--${string})` | `2px solid var(--${string}, ${string})` | `2px solid var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            ':hover': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        tertiary: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        disabled: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        danger: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            ':hover': {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        warning: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        success: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        info: {
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    size: {
        s: {
            fontSize: "12px";
        };
        m: {
            fontSize: "16px";
        };
        l: {
            fontSize: "24px";
        };
    };
    hoveredAnimation: {
        true: {};
        false: {};
        none: {};
    };
    paddingVariant: {
        s: {
            padding: "4px 8px";
        };
        m: {
            padding: "8px 16px";
        };
        l: {
            padding: "16px 32px";
        };
        none: {};
    };
}>;
export declare const labelStyle: import("@vanilla-extract/recipes").RuntimeFn<{
    colorVariant: {
        primary: {};
        secondary: {};
        tertiary: {};
        disabled: {};
        danger: {};
        warning: {};
        success: {};
        info: {};
    };
    size: {
        s: {
            fontSize: "12px";
        };
        m: {
            fontSize: "16px";
        };
        l: {
            fontSize: "24px";
        };
    };
    paddingVariant: {
        s: {
            padding: "4px 8px";
        };
        m: {
            padding: "8px 16px";
        };
        l: {
            padding: "16px 32px";
        };
        none: {};
    };
}>;
export declare const containerStyler: string;
