function Footer() {
    return (
        <footer className="h-16 flex items-center bg-primary-300 text-primary-400 cursor-default">
            <div className="container flex justify-between text-sm">
                <p>Made with ❤️ in Istanbul © {new Date().getFullYear()}</p>
                <p>Serdar Gökhan</p>
            </div>
        </footer>
    );
}

export default Footer;
