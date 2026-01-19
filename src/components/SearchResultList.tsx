import SearchResult from './SearchResult';
import './SearchResultList.css';

export default function SearchResultList(results: Array<{id: string}>) {
    return (
        <div className="results-list">
        {
            results.map((result) => {
                return <SearchResult result={result.id} key={result.id}/>
            })
        }
    </div>
    )
}