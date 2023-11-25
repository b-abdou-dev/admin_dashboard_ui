
import VisibilityIcon from '@mui/icons-material/Visibility';

import './members.css'


const Members = () => {
  return (
    // <div className='members'>New Joined Members</div>
    <div className='members'>
      <h3 className='title'>New Joined Members</h3>
        <ul className="membersList">
          <li className="memberItem">
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <div className="memberDescription">
              <span className='name'>Roberto John</span>
              <span className='job'>Web Developer</span>
            </div>
            <div className="button">
              <VisibilityIcon/>
              <span>display</span>
            </div>
          </li>
          
          <li className="memberItem">
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <div className="memberDescription">
              <span className='name'>Roberto John</span>
              <span className='job'>Web Developer</span>
            </div>
            <div className="button">
              <VisibilityIcon/>
              <span>display</span>
            </div>
          </li>
          
          <li className="memberItem">
            <div className="imageContainer">
              <img className="image" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMGZhY2UlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar"  />
            </div>
            <div className="memberDescription">
              <span className='name'>Roberto John</span>
              <span className='job'>Web Developer</span>
            </div>
            <div className="button">
              <VisibilityIcon/>
              <span>display</span>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Members