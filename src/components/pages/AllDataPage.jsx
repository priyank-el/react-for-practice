import { Table } from "antd"
import data from '../../data/totalData'
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
function AllDataPage() {

  const [array,setArray] = useState([])

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_) => (
        <a onClick={() => {
          console.log(_);
          const index = data
            .map(function (element) {
              return element.email;
            })
            .indexOf(_.email);
          data.splice(index, 1)
          console.log(data);
          setArray(data)
        }}>Delete</a>
      ),
    },
  ];
    useEffect(()=>{
      let dataSource = data.map((data, index) => {
        return {
          ...data,
          key: index + 1
        }
      })
      setArray(dataSource)
    },[setArray])
   

  return (
    <Table dataSource={array} columns={columns} />
  )
}

export default AllDataPage