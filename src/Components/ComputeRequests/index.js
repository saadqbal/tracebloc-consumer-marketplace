import React from 'react';


const ComputeRequests = () => {

    return (
        <div className="table-responsive col-xs-6 mx-2 my-4 p-0">
        <h3 className="text-left">Compute Requests</h3>
        <table className="table rounded border bg-white">
            <thead className="thead-light">
                <tr>
                <th scope="col">Organization</th>
                <th scope="col">Date</th>
                <th scope="col">Algorithm</th>
                <th scope="col">Status</th>
                <th scope="col">Dateset</th>
                <th scope="col">Fare</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@fare</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fare</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@fare</td>
                        
                </tr>
            </tbody>
            </table>
        </div>

    );
}

export default ComputeRequests;