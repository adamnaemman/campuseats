function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Campus Eats. All rights reserved.</p>
        </footer>
    )
}