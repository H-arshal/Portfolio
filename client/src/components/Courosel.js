import React from 'react'
import { FaReact, FaPython, FaJava, FaNode } from 'react-icons/fa'
import { SiSpring,SiMysql } from 'react-icons/si';
function Courosel() {
    return (
        <div>
            <div className='courosel-parent position-relative' id='techStack'>
                <h1 className='head position-absolute top-0 start-0 end-0 text-center mt-5'>Technologies Known</h1>
                <div className='gallery '>
                    <span style={{ '--i': 1 }}>
                        <FaNode color='#8ac300' />
                    </span>
                    <span style={{ '--i': 2 }}>
                        <FaReact color='#00CDF2' />
                    </span>
                    <span style={{ '--i': 3 }}>
                        <FaPython color='#fbd13f' />
                    </span>
                    <span style={{ '--i': 4 }}>

                        <SiSpring color='green' />
                    </span>

                    <span style={{ '--i': 5 }}>
                        <FaJava color='white' />
                    </span>
                    <span style={{ '--i': 6 }}>
                        <SiMysql color='#0d567b' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Courosel
