"use client";
import { useEffect } from "react";

export default function CrispProChat() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (document.querySelector('script[src="https://client.crisp.chat/l.js"]')) return;

        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "1e547150-55b6-4fd9-8a80-e0dbeeca7b96";

        // Crisp ready ayyaka default bubble ni hide chey
        window.CRISP_READY_TRIGGER = function () {
            window.$crisp.push(["do", "chat:hide"]);
            window.$crisp.push(["do", "chat:show"]);
            // default blue bubble hide, only black button untadi
            window.$crisp.push(["config", "hide:on:mobile", true]);
        };

        (function () {
            const d = document;
            const s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();

        // Custom black button click -> chat open
        const style = document.createElement('style');
        style.innerHTML = `
           .crisp-client.cc-tlyw,
           .crisp-client [data-base="bubble"],
           .crisp-client.cc-1x9a {
                display: none!important;
            }
        `;
        document.head.appendChild(style);

    }, []);

    return null;
}