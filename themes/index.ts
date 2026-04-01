import {vars} from "nativewind";

export type ThemesVariants = "system" | "light" | "dark" ;

export const themesVariables = {
    light: {
        "--foreground": "240 10% 4%",
        "--background": "0 0% 98%",
        "--primary": "142 71% 45%",
        "--primary-foreground": "138 76% 97%",
        "--primary-background": "0 0% 98%",
        "--secondary": "173 80% 40%",
        "--secondary-foreground": "166 76% 97%",
        "--secondary-background": "170, 76%, 55%",
        "--accent": "240 5% 84%",
        "--accent-foreground": "240 10% 4%",
        "--muted": "240 6% 90%",
        "--muted-foreground": "240 10% 4%",
        "--destructive": "349.72 89.16% 60.2%",
        "--destructive-foreground": "356 100% 97%",
        "--popover": "240 4.76% 95.88%",
        "--popover-foreground": "240 10% 4%",
        "--input": "240 6% 90%",
        "--radius": "0.5",
    },
    dark: {
        "--foreground": "0 0% 98.04%",
        "--background": "240 10% 3.92%",
        "--primary": "270.74 91.01% 65.1%",
        "--primary-foreground": "240 10% 3.92%",
        "--primary-background": "240 10% 3.92%",
        "--secondary": "330.37 81.19% 60.39%",
        "--secondary-foreground": "240 10% 3.92%",
        "--secondary-background": "170, 74%, 40%",
        "--accent": "240 5.2% 33.92%",
        "--accent-foreground": "240 4.76% 95.88%",
        "--muted": "240 5.26% 26.08%",
        "--muted-foreground": "240 5.88% 90%",
        "--destructive": "349.72 89.16% 60.2%",
        "--destructive-foreground": "343.1 87.65% 15.88%",
        "--popover": "240 3.7% 15.88%",
        "--popover-foreground": "0 0% 98.04%",
        "--input": "0 0% 23%",
        "--radius": "0.5",
    },
}

export const themes = {
    light: vars(themesVariables.light),
    dark: vars(themesVariables.dark),
}