import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../dataTable/DataTable'
import './users.scss'
import { useState } from 'react';
import Add_User from '../../components/Add_user/Add_User';
import { useQuery } from '@tanstack/react-query';

 const columns: GridColDef[] = [
   { field: "id", headerName: "ID", width: 90 },
   {
      
     field: "img",
     headerName: "Avatar",
     width: 100,
     renderCell: (params) => {
       return <img src={params.row.img || "/noavatar.png"} alt="" />;
     },
   },
   {
     field: "firstName",
     headerName: "First name",
     width: 150,
   },
   {
     field: "lastName",
     headerName: "Last name",
     width: 150,
   },
   {
     field: "email",
     type: "string",
     headerName: "Email",
     width: 200,
   },
   {
    field: "phone",
    type: "string",
    headerName: "phone",
    width: 200, 
   },
   {
    field: "createdAt",
    headerName: "Create At",
    width: 200,
    type:"string"
   },
   {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean"
   },
 ];
const Users = () => {
  const [open,setOpen] = useState(false)

  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://127.0.0.1:8800/api/users").then((res) => res.json()),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : data && data.length > 0 ? (
        <DataTable slug="users" columns={columns} rows={data} />
      ) : (
        "No data available"
      )}
      {open && <Add_User slug="users" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users
