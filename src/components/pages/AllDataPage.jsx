import { Table } from "antd"
import data from '../../data/totalData'
function AllDataPage(){

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
        }
      ];

      const dataSource = data.map( (data,index) => {
        return {
            ...data,
            key:index+1
        }
      } )

    return(
        <Table dataSource={dataSource} columns={columns} />
    )
}

export default AllDataPage