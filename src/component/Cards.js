import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './Cardsdata'
import "./style.css"
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/action/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data)

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'><i>SAIFI_RESTAURANT MRT</i></h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                      Price : ₹ {element.price}
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>
                      <Button variant="primary" className='col-lg-12' onClick={() => send(element)} >Add to Card</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
      <ToastContainer/>

    </div>
  )
}

export default Cards;