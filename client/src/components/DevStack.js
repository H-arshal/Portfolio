import React from 'react'
function devStack() {
  return (
    <div className='devstack container n-box2 py-5'>
      <div className='text-center'>
        <h1>My <span>DevStack</span></h1>
        <img src='./images/stack.png' height='250' alt='' />
      </div>

      <div className='row text-center mt-5'>
        <div className='col-md-4'>
          <div className='font-bold'>
            <h3 className='col_name font-bold'>Front-End</h3>
            <hr />
            <p>HTML</p>
            <p>CSS</p>
            <p>React.js</p>
            <p>Bootstrap</p>
            <p>Thymeleaf</p>
            <p>Chakra UI</p>

          </div>
        </div>

        <div className='col-md-4'>
          <div className='font-bold'>
            <h3 className='col_name font-bold'>Tools</h3>
            <hr />
            <p>Python</p>
            <p>Machine Learning</p>
            <p>Natural Language Processing</p>
            <p>JavaScript</p>
            <p>APIs</p>
            <p>JDBC</p>

          </div>
        </div>

        <div className='col-md-4'>
          <div className='font-bold'>
            <h3 className='col_name font-bold'>Back-End</h3>
            <hr />
            <p>Spring Boot</p>
            <p>Spring Security</p>
            <p>Spring Boot JPA</p>
            <p>Node.js</p>
            <p>MySQL</p>
            <p>MongoDB</p>

          </div>
        </div>
      </div>
    </div>
  )
}
export default devStack