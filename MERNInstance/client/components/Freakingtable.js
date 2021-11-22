import React, { useState } from "react";

function FreakingTable(data) {


  async function method1() {
    console.log("I am method 1 and I am running");
}

async function method2() {
  console.log("I am method 2 and I am running");
}

async function method3() {
  console.log("I am method 3 and I am running");
}

async function method4() {
  console.log("I am method 4 and I am running");
}
    



    return (
        <div>
            <p>Average Temperature: {data.data!=null ? data.data[0].temperature: "no data avaliable"} <br />
            <b>The last values 5 values of {data.data!=null ? data.data[0].unit_id : "[Please Select a sensor]"}</b></p>
            <table>
<thead>
  <tr>
    <th onClick={method1}>unit_id</th>
    <th onClick={method2}>created_at</th>
    <th onClick={method3}>temperature</th>
  </tr>
</thead>
<tbody>
<tr>
  <td>{data.data!=null ? data.data[data.data.length - 5].unit_id: ""}</td>
  <td>{data.data!=null ? JSON.stringify(data.data[data.data.length - 5].created_at): ""}</td>
  <td>{data.data!=null ? data.data[data.data.length - 5].temperature: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 4].unit_id: ""}</td>
  <td>{data.data!=null ? JSON.stringify(data.data[data.data.length - 4].created_at): ""}</td>
  <td>{data.data!=null ? data.data[data.data.length - 4].temperature: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 3].unit_id: ""}</td>
  <td>{data.data!=null ? JSON.stringify(data.data[data.data.length - 3].created_at): ""}</td>
  <td>{data.data!=null ? data.data[data.data.length - 3].temperature: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 2].unit_id: ""}</td>
  <td>{data.data!=null ? JSON.stringify(data.data[data.data.length - 2].created_at): ""}</td>
  <td>{data.data!=null ? data.data[data.data.length - 2].temperature: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 1].unit_id: ""}</td>
  <td>{data.data!=null ? JSON.stringify(data.data[data.data.length - 1].created_at): ""}</td>
  <td>{data.data!=null ? data.data[data.data.length - 1].temperature: ""}</td>
  </tr> 
</tbody>
</table>
            
        </div>
    )
}

export default FreakingTable;