function Header() {
  return <nav className="purple darken-3">
    <div className="nav-wrapper">
      <a href="https://nikolay1717.github.io/films/" className="brand-logo">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/Nikolay1717/films">Repo</a></li>
      </ul>
    </div>
  </nav>
}

export { Header }