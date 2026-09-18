import type { HTMLProps } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

type NextLinkProps = LinkProps & Omit<HTMLProps<HTMLAnchorElement>, "ref">;

export default function NextLink({ href, children, ...rest }: NextLinkProps) {
    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    );
}
