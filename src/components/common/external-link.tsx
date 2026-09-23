import NextLink, { type NextLinkProps } from "@src/components/common/next-link";

type ExternalLinkProps<RouteInferType extends string = string> =
    NextLinkProps<RouteInferType>;

export default function ExternalLink<RouteInferType extends string = string>({
    target = "_blank",
    rel = "noopener noreferrer",
    ...rest
}: ExternalLinkProps<RouteInferType>) {
    return <NextLink target={target} rel={rel} {...rest} />;
}
