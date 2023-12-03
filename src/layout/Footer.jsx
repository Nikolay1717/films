function Footer() {
  return <footer className="page-footer purple darken-3">
    <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="https://github.com/Nikolay1717/films">Repo</a>
      </div>
    </div>
  </footer>
}

export { Footer }