import './Header.css'

function Header() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="vite-project/src/components/Header/Header.jsx#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="vite-project/src/components/Header/Header.jsx#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="vite-project/src/components/Header/Header.jsx#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    )
}

export default Header