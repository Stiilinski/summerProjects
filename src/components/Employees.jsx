import Employee from "./Employee";

export default function Employees() {
    const employees = [
        {name: 'Darren Reales', position: 'CEO', salary: 25000, status: 'Active'},
        {name: 'Emma Watson', position: 'CFO', salary: 20000, status: 'Active'},
        {name: 'Louis Partridge', position: 'Marketing Director', salary: 16000, status: 'Active'},
        {name: 'Sabrina Carpenter', position: 'HR Manager', salary: 15000, status: 'Active'},
        {name: 'Gabriel Guevara', position: 'Customer Support Lead', salary: 15500, status: 'Not Active'},
        {name: 'Thylane Blondeau', position: 'Operations Manager', salary: 17000, status: 'Active'},
        {name: 'Rey Palmer', position: 'Sales Director', salary: 19000, status: 'Active'},
        {name: 'Jeno Lee', position: 'Product Manager', salary: 17500, status: 'Active'},
        {name: 'Felecity Smoak', position: 'IT Manager', salary: 16500, status: 'Active'},
        {name: 'Linda Robinson', position: 'Research Analyst', salary: 14500, status: 'Not Active'}
    ]; 

    return (
        <div>
            <h1>Employees</h1>
            <table>
                <thead>
                    <th>No.</th>
                    <th>Employee Names</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Status</th>
                </thead>
                    {employees.map((employee, index) => (
                        <Employee key={index} number={index + 1} name={employee.name} position={employee.position} salary={employee.salary} status={employee.status} />
                    ))}  
            </table>
        </div>
    );
}




