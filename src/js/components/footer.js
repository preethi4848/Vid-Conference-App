import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <h5>Contact</h5>
          <p>For any help or feedback, please contact <a href='mailto:preethi4848@gmail.com'>preethi4848@gmail.com</a>.</p>
          <p>Any other queries, please get in touch at <a href='https://www.linkedin.com/in/preethig-4848'>Linkedin</a>.</p>
        </div>
        <div className='row'>
          <h5>About</h5>
          <p>Vid-Conference is a free and open source project. Contributions or bug reports are extremely welcome at <a href="https://github.com/preethi4848">https://github.com/preethi4848</a>.</p>
        </div>
        <div className='row'>
          <p>Created by <a href="https://preethig4848.000webhostapp.com/">Preethi.com</a>.</p>
        </div>
      </div>
    </div>
  )

}
