"use client";

import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@src/utils/cn";

function Switch({
    className,
    ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            className={cn(
                "peer data-[state=checked]:bg-yellow inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <SwitchPrimitive.Thumb
                data-slot="switch-thumb"
                className={cn(
                    "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform duration-150 ease-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                )}
            />
        </SwitchPrimitive.Root>
    );
}

export { Switch };
