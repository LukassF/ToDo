export default function formatDate(deadline: Date){
    const deadlineParsed: Date = new Date(deadline)
    return(
        <div>
            &nbsp; {deadlineParsed.toDateString()}
            &nbsp; {String(deadlineParsed.getHours()).padStart(2, '0')} 
            <span style={{fontSize:'0.7em', position:'absolute', marginLeft:'3px'}}>
                {String(deadlineParsed.getMinutes()).padStart(2, '0')}
            </span>
        </div>
    )
}