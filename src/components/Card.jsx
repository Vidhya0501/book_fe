import React from 'react'

function Card({data}) {
  return (
    <div className='col wrapper mt-4'>

<div className="card" style={{width: "18rem"}}>
            <div className='image'>
            <img src={data.cover} className="card-img-top" alt="data-image"/>
            </div>
            
            <div className="card-body">
                <h5 className="card-title text-center">{data.title}</h5>
                <p className="card-text">{data.desc}</p>
                <div className='card-text text-secondary'>₹{data.price}</div>
            </div>
            <div className='d-flex justify-content-between p-2'>
            <a href="#" class="btn btn-success">Edit</a>
            <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
</div>

  )
}

export default Card