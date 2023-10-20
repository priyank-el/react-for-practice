import { Table } from "antd"
import data from '../../data/totalData'
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
function AllDataPage() {

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
          <Navigate to={"/all"}/>
        }}>Delete</a>
      ),
    },
  ];
  
   let dataSource = data.map((data, index) => {
      return {
        ...data,
        key: index + 1
      }
    })

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default AllDataPage