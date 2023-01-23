import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { NavigationOutlined } from '@mui/icons-material';
import { DLT } from '../redux/action/actions';


function Header() {
    const [price, setPrice] = useState(0)
    console.log(price)
    const getdata = useSelector((state) => state.cartreducer.carts);
    let itemInCard = getdata != null ? getdata.length : null;

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price + price
        })
        setPrice(price);
    };
    useEffect(()=>{
        total()
    },[total])
    
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add To Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light" >Home</NavLink>
                    </Nav>
                    <Badge badgeContent={itemInCard} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 20, cursur: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photos</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose} >
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)} >
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td>
                                                        <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)} >
                                                         <i className='fas fa-trash largetrash'></i>
                                                        </p>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹ {price}</p>
                                </tbody>
                            </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-between align-item-center'>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursur: "pointer" }}></i>
                                <p style={{ fontsize: 22 }}>Your carts is empty</p>
                            </div>
                    }

                </Menu>
              
            </Navbar>
        </>
    )
}

export default Header