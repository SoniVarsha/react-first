import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './component/table';
import { tab } from '@testing-library/user-event/dist/tab';
import InfoWrapper from './component/info-wrapper';

function App() {

const [tableData, setTableData] = useState([])
const [selectedUser, setselectedUser] = useState("")
const [filteredData, setFilteredData] = useState([])
 

  useEffect(() =>{
    axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
    .then(res=> setTableData(res.data))
},[])


const onChange = (e)=>{
  console.log(e.target.value)
let filterData = tableData.filter(table => table.firstName.toUpperCase().includes(e.target.value.toUpperCase()) ||table.lastName.toUpperCase().includes(e.target.value.toUpperCase()) || table.email.toUpperCase().includes(e.target.value.toUpperCase()))
setFilteredData(filterData)
}




  return (
    
 <>
  <div id="overlay">
        <img src="./img/preloader.gif" alt="Preloader icon" />
    </div>

    <main>

        <div id="table-section">

            <form action="/">
                <img src="./img/search-icon.svg" alt="" />
                <input type="text" placeholder="Enter something" name="search-box" id="search-box" onChange={(e)=>onChange(e)}/>
            </form>

            <div id="table-wrapper">
            <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

          {/* {  tableData && tableData.map((table,index) => <Table  key={index} tableData= {table}   selectedUser={selectedUser} setselectedUser={setselectedUser}  />
          )
          } */}

                {
                    filteredData.length>0 ? filteredData.map((table,index) => <Table  key={index} tableData= {table}   selectedUser={selectedUser} setselectedUser={setselectedUser}  />) : 
                    tableData && tableData.map((table,index) => <Table  key={index} tableData= {table}   selectedUser={selectedUser} setselectedUser={setselectedUser}  />
          )
                    
                }

            </div>

        </div>


        {/* <!-- Details box --> */}

        <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        
        {selectedUser &&  <InfoWrapper selectedUser= {selectedUser}/>}
        </div> 
     
    </main>

 </>
  );
}

export default App;
