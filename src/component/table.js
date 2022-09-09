import React from "react"

function Table(props){
  const {tableData , selectedUser,setselectedUser} = props

 const onSelectUser=(tableData)=>{
    console.log(tableData)
    setselectedUser(tableData)
 }

return(<>


                <div id="table-data"> 
                    <table>
                        <tbody>
                            <tr className={`${'data-row'} ${selectedUser && selectedUser.id === tableData.id?'active':''}`}  onClick={() => { onSelectUser(tableData) }}>
                                <td className="column1">{tableData.id}</td>
                                <td className="column2">{tableData.firstName}</td>
                                <td className="column3">{tableData.lastName}</td>
                                <td className="column4">{tableData.email}</td>
                                <td className="column5">{tableData.phone}</td>
                            </tr>
                            

                        </tbody>
                    </table>
                </div>

</>)


}

export default Table