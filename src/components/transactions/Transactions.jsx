import './transactions.css'

const Button = ({type}) =>{
  return(
    <button className={"button "+ type}>{type}</button>
  )
}

const Transactions = () => {
  return (
    <div className='transactions'>
      <h3 className='title'>Latest Transactions</h3>
      <table className='table'>
        <tr>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className='desc'>
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <span className='name'>Roberto John</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.36</td>
          <td className='status'><Button type="approved"/></td>
        </tr>
        <tr>
          <td className='desc'>
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <span className='name'>Roberto John</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.36</td>
          <td className='status'><Button type="pending"/></td>
        </tr>
        <tr>
          <td className='desc'>
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <span className='name'>Roberto John</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.36</td>
          <td className='status'><Button type="declined"/></td>
        </tr>
        <tr>
          <td className='desc'>
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <span className='name'>Roberto John</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.36</td>
          <td className='status'><Button type="pending"/></td>
        </tr>

      </table>
    </div>
  )
}

export default Transactions