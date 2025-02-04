export default function Home() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="page home">
            <main>
                <small>The Woke social media app</small>
                <h2>Work in Progress</h2>
                <p>Inspire me, my friend...</p>
            </main>
            <footer>
                <small>copyright &copy; {currentYear} Reed Development</small>
            </footer>
        </section>
    )
}