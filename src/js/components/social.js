import React from 'react'
import { Twitter } from 'react-feather';

export default (props) => {

  return (
    <div id='social'>
      <div>
        <a className='button' id='tweet' href='http://twitter.com/Preethi_G_4848?s=09' target='_blank'>
          <i />
          <span>Tweet</span>
        </a>
      </div>
      <div>
        <iframe
          src={`https://ghbtns.com/github-btn.html?user=preethi4848&repo=Contribute-4-Better-World&type=star&count=true`}
          scrolling="0"
          width="80"
          height="20"
        />
      </div>
    </div>
  )

}
