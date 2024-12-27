import "./HeaderComponent.css";

function HeaderComponent(props){
    const {greetingsValue, linksValue} = props;
    
    return (
        <header className="header">
            <h1 className="title">{greetingsValue}</h1>
            <nav>
              <ul className="header-list">
                <li>
                    <a className="link" href='#'>{linksValue.home}</a>
                </li>
                <li>
                    <a className="link" href='#'>{linksValue.news}</a>
                </li>
                <li>
                    <a className="link" href='#'>{linksValue.blog}</a>
                </li>
                <li>
                    <a className="link" href='#'>{linksValue.contact}</a>
                </li>
              </ul>  
            </nav>
        </header>
    )
}

export default HeaderComponent;