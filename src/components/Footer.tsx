export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <small>copyright &copy; {currentYear} Reed Development</small>
        </footer>
    )
}