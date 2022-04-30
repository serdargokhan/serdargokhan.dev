import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
}

function WrapperContainer({ children }: WrapperProps) {
    return <div>{children}</div>;
}

export default WrapperContainer;
