"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils/cn";

function legacyCopy(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    let copied = false;
    try {
        copied = document.execCommand("copy");
    } catch {
        copied = false;
    }

    document.body.removeChild(textarea);
    return copied;
}

async function copyToClipboard(text: string) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            return legacyCopy(text);
        }
    }

    return legacyCopy(text);
}

export default function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);
    const [swapping, setSwapping] = useState(false);
    const t = useTranslations("Home.ContactSection");

    async function copyEmail() {
        const didCopy = await copyToClipboard(email);

        if (didCopy) {
            setSwapping(true);
            setCopied(true);
            setTimeout(() => setSwapping(false), 160);
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={copyEmail}
                className={cn(
                    "press inline-flex items-center border-2 px-4 py-1.5 font-mono text-xs font-semibold",
                    copied
                        ? "border-blue bg-blue text-white"
                        : "border-ink bg-ink text-white hover:border-blue hover:bg-blue"
                )}
            >
                <span
                    className={cn(
                        "transition-[filter,opacity] duration-150 ease-out",
                        swapping && "opacity-70 blur-[2px]"
                    )}
                >
                    {copied ? t("copied") : t("copy-email")}
                </span>
            </button>
            <span role="status" className="sr-only">
                {copied ? t("copied") : ""}
            </span>
        </>
    );
}
