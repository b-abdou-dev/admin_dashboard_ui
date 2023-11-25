import './newUser.css'

const NewUser = () => {
  return (
    <div className="newUser">
        <div className="header">
             <h2 className="title">New User</h2>
        </div>
        <div className="rowsWrapper">
            <div class="rowContainer">
                <div className="left">
                    <label htmlFor="" className="itemLabel">Username</label>
                    <input type="text" className="itemInput" 
                    placeholder='mark_88'/>
                </div>
                <div className="right">
                    <label htmlFor="" className="itemLabel">Full Name</label>
                    <input type="text" className="itemInput" placeholder='Mark Lauren' />
                </div>
            </div>
            <div class="rowContainer">
                <div className="left">
                    <label htmlFor="" className="itemLabel">Email</label>
                    <input type="email" className="itemInput" 
                    placeholder='mark_laur@gmail.com'/>
                </div>
                <div className="right">
                    <label htmlFor="" className="itemLabel">Password</label>
                    <input type="password" className="itemInput" placeholder='password' />
                </div>
            </div>
            <div class="rowContainer">
                <div className="left">
                    <label htmlFor="" className="itemLabel">Phone</label>
                    <input type="text" className="itemInput" 
                    placeholder='+ 1 423 598 79'/>
                </div>
                <div className="right">
                    <label htmlFor="" className="itemLabel">Address</label>
                    <input type="text" className="itemInput" placeholder='4321 Wyatt Street Boca Raton Florida' />
                </div>
            </div>

            <div class="rowContainer">
                <div className="left">
                    <label htmlFor="" className="itemLabel">Gender</label>
                    <div className="genderOptions">
                        <div className='genderChoiceContainer'>
                            <input type="radio" id="genderChoice1"
                            name="male" value="male"/>
                            <label for="genderChoice1">Male</label>
                        </div>

                        <div className='genderChoiceContainer'>
                            <input type="radio" id="genderChoice2"
                            name="female" value="female"/>
                            <label for="genderChoice2">Female</label>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <label htmlFor="" className="itemLabel">Active</label>
                    <select name="active" id="active" className='selectActive'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            <div class="footer">
                <button className="createButton">
                    Create
                </button>
            </div>

        </div>
    </div>
  )
}

export default NewUser