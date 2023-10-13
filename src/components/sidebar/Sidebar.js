import './Sidebar.css'
import articles from '../../data/Articles.json'

function Sidebar () {
    return (
        <div className = 'sidebar'>
            <nav>
                <ul>
                    {articles.map(el =>
                    <li>
                        <a href={el.href}>{el.title}</a>
                    </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;