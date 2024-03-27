/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            body: ["Noto Sans KR",]
        },
        /** border-radius setting */
        borderRadius: {
            // "primary-button": "5px",
            "button-default": "5px",
            "tag-button": "17.5px",
        },
        fontSize: {
            xs: [
                "12px", {
                    lineHeight: "18px",
                    letterSpacing: "0",
                    fontWeight: "400",
                }
            ],
            sm: [
                "14px", {
                    lineHeight: "21px",
                    letterSpacing: "0",
                    fontWeight: "400",
                }
            ],
            base: [
                "16px",
                {
                    lineHeight: "24px",
                    letterSpacing: "0",
                    fontWeight: "400"
                },
            ],
            xl: ["20px", "30px"],
            "2xl": [
                "24px",
                {
                    lineHeight: "36px",
                    letterSpacing: "0",
                    fontWeight: "700"
                }
            ]
        },
        colors: {
            primary: "#1D2745",
            secondary: "#1DE5D4",
            tertiary: "#F52C50",
            white: "#FFFFFF",
            mono100: "#F1F1F1",
            mono200: "#BEBEBE",
            mono300: "#D6D7D9",
            error: "#D01E1E",
            social: "#395997",
            "darkOpacity": "rgba(255, 255, 255, 0.1)"
        },
    },
    plugins: [],
}

