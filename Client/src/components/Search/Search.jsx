import search from '../../assets/search.png';
import searchCss from './Search.module.css';

const Search = () => {
    return (
        <div className={searchCss.topBar}>
            <div id={searchCss.search}>
                <input type="text" class={searchCss.formControl} placeholder="Search" />
                <label><img src={search} alt="seach" class={searchCss.icon} /></label>
            </div>
            <label id={searchCss.empLabel}>List of Employees</label>
        </div>
    )
}

export default Search;