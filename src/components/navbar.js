function Navbar(){
    return (
        <header>
    <button class="nav-toggle" aria-label="toggle navigation">
      <span class="sandwich"></span>
    </button>
    <nav class="nav"></nav>
    <ul class="nav__list">
      <li class="nav__item"><a href="#home" class="nav-link">Home</a></li>
      <li class="nav__item"><a href="#services" class="nav-link">My Services</a></li>
      <li class="nav__item"><a href="#work" class="nav-link">Work</a></li>
      <li class="nav__item"><a href="#about" class="nav-link">About Me</a></li>
    </ul>
  </header>
    )

}
export default Navbar