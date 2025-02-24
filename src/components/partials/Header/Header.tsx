import './Header.scss';

interface HeaderType {
    className ?: string
}

const Header : React.FC<HeaderType> = () => {
    return (
        <header className="header">
            <h1 className='title-page'>Header</h1>
        </header>
    )
}

export default Header;