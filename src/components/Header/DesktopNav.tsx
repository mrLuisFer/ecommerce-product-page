import s from './desktopNav.module.css'

const DesktopNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default DesktopNav
