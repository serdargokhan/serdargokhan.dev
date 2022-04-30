interface WebsiteButtonProps {
    href: string;
}

function WebsiteButton({ href }: WebsiteButtonProps) {
    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-white md:w-1/3"
        >
            Visit Website
            <svg
                height="32"
                version="1.1"
                viewBox="0 0 128 128"
                width="32"
                xml-space="preserve"
                fill="#10162f"
                xmlns="http://www.w3.org/2000/svg"
                xmlns-serif="http://www.serif.com/"
                xmlns-xlink="http://www.w3.org/1999/xlink"
            >
                <rect
                    height="128"
                    id="External-Link"
                    fill="none"
                    width="128"
                    x="0.176"
                    y="0.917"
                />
                <path
                    className="group-hover:fill-white"
                    d="M112.846,63.032c1.162,0.505 1.249,0.708 1.33,1.885c0,9.425 0.089,18.85 -0.002,28.274c-0.177,11.25 -9.921,21.614 -21.861,21.726c-18.804,0.056 -37.608,0.174 -56.41,-0.002c-11.232,-0.173 -21.539,-9.831 -21.725,-21.725c-0.171,-18.848 -0.171,-37.698 0,-56.546c0.177,-11.289 9.962,-21.615 21.861,-21.727c0,0 28.137,0 28.137,0c0,0 1.312,0.184 1.776,1.08c0.624,1.204 -0.335,2.821 -1.776,2.92c-9.408,0 -18.816,-0.087 -28.224,0.001c-9.207,0.142 -17.686,8.033 -17.776,17.887c-0.056,18.778 -0.169,37.558 0.001,56.336c0.146,9.243 8.116,17.684 17.887,17.776c18.779,0.056 37.558,0.174 56.336,-0.001c9.213,-0.142 17.681,-8.117 17.776,-17.887c0,0 0,-28.112 0,-28.112c0,0 0.533,-2.483 2.67,-1.885Zm-0.93,-48.115c0.039,-0.001 0.082,-0.001 0.127,0l0.133,0l0.113,0.004l0.03,0.001l0.005,0.001l0.009,0c1.016,0.12 1.803,0.968 1.843,1.994l0,32c-0.081,2.062 -3.886,2.903 -4,0l0,-27.172l-44.586,44.586c-1.718,1.562 -2.656,0.39 -3.122,-0.373c-0.465,-0.764 -0.316,-1.785 0.294,-2.455l44.586,-44.587l-27.329,-0.005c-1.477,-0.175 -1.425,-0.586 -1.691,-1.229c-0.5,-1.207 0.434,-2.71 1.848,-2.765l31.74,0Z"
                    fillRule="nonzero"
                    fill="#10162f"
                />
            </svg>
        </a>
    );
}

export default WebsiteButton;
