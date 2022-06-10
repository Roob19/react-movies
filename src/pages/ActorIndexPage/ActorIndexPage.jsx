import './ActorIndexPage.css'

export default function ActorIndexPage(props) {
    
    return (
        <>
            <h1>ActorIndexPage</h1>
            <p>
                {props.movies.cast.map(actor => {
                    return <span>{actor}</span>
                })}
            </p>
        </>
    );
}