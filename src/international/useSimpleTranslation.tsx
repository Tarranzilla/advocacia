import { useRouter } from "next/router";
import { WebStructure } from "@/types/WebStructure";

import portugueseWebStructure from "./portugueseWebStructure";
import englishWebStructure from "./englishWebStructure";
import { useMemo } from "react";

export function useSimpleTranslation(): WebStructure {
    const router = useRouter();
    const { locale } = router;

    const t = useMemo(() => {
        let defaultLang = englishWebStructure; // Default to English if locale is undefined
        if (locale === "pt-BR" || locale === "pt") {
            defaultLang = portugueseWebStructure;
        }
        return defaultLang;
    }, [locale]);

    return t;
}
