import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom"
import { productRows } from '../../data';
import { useState } from 'react'

import './productList.css'


const ProductList = () => {

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 250, renderCell: (params) =>{
      return(
          <div className='productListProduct'>
          <img className='productListProductImage' src={params.row.image} alt="product" />
          {params.row.name}
      </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
  
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params)=>{
          return(
              <div className='productListEdit'>
                  <Link to={`/product/${params.row.id}`}>
                      <button className="productListProductEdit">Edit</button>
                  </Link>
                  <DeleteOutlineIcon className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
              </div>
          )
      }
  
    },
  ];

const [data, setData] = useState(productRows)

// deleting item from data
const handleDelete = (id) =>{
    setData(data.filter((item)=> item.id !== id ))
}
  

return (
    <div className='productList'>
        <div className="header">
          <h2 className="title">Products List</h2>
          <Link to="/newProduct">
                  <button className="editButton">Create</button>
          </Link>
        </div>
        <div className='table'>
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    </div>
  
);
}

export default ProductList