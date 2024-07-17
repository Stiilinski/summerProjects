export default function Employee({number, name, position, salary, status}) {
    if (status == 'Not Active') {
        salary = null;
    }
    return (
        <>
            <tbody>
                <td>{number}</td> 
                <td>{name}</td> 
                <td>{position}</td> 
                <td>{salary}</td> 
                <td>{status}</td>
            </tbody>
        </>
    );
}