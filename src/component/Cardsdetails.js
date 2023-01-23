import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT , ADD, REMOVE} from '../redux/action/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cardsdetails = () => {
  const [data, setData] = useState([])
  console.log(data)
  const { id } = useParams()
  const history = useNavigate()
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch()

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
  }

// add data
const send = (e) => {
  // console.log(e)
  dispatch(ADD(e));
}

  const dlt = (id) => {
    dispatch(DLT(id))
    history('/');
  }

  // remove one 
const remove = (item) =>{
dispatch(REMOVE(item))
}

  useEffect(() => {
    compare()
  }, [id])


  return (
    <>
      <div className='"container mt-3'>
        <h2 className='text-center'>items Details Page</h2>
        {
          data.map((ele) => {
            return (
              <>
                <div className="iteamsdetails">
                  <div className='items_img'>
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className='details'>
                    <tr>
                      <td>
                        <p><strong>Restaurant :</strong> {ele.rname}</p>
                        <p><strong>Price :</strong> ₹ {ele.price}</p>
                        <p><strong>Dishes :</strong> {ele.address}</p>
                        <p><strong>Total :</strong> ₹ {ele.price * ele.qnty}</p>
                        <div className='mt-5 d-flex justify-content-between align-item-center' style={{ width: 80, cursor:"pointer" }}>
                          <span style={{ fontSize: 24 }} onClick={ ele.qnty <=1 ? ()=>dlt(ele.id) : () => remove(ele)}>-</span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span style={{ fontSize: 24 }} onClick={()=>send(ele)}>+</span>
                        </div>
                      </td>
                      <td>
                        <p><strong>Rating : </strong> <span style={{ background: "green", color: "#fff", padding: "2px ,5px", borderRadius: "5px" }}> {ele.rating} </span></p>
                        <p><strong>Order Review  : </strong> <span > {ele.somedata} </span></p>
                        <p><strong>Remove : </strong> <span className='fas fa-trash' style={{ color: "red", fontSize: "20", cursor: "pointer" }} onClick={() => dlt(ele.id)} > </span></p>
                      </td>
                    </tr>
                  </div>
                </div>
              </>
            )
          })
        }
        <ToastContainer/>
      </div>
      
    </>
  )
}

export default Cardsdetails