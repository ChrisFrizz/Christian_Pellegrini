import './SearchResult.css';

export default function SearchResult(result:string){
    return (
        <div className="search-result">{(result.index)}</div>
    )
}