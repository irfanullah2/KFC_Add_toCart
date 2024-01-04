import React from 'react'


const Cities = [
    {name : 'LAHORE ' ,details: 'THIS IS LAHORE DETAILS '},
    {name : 'KARACHI ' ,details: 'THIS IS KARACHI DETAILS '},
    {name : 'SARGODHA ' ,details: 'THIS IS SARGODHA DETAILS '},
    {name : 'SARGODHA ' ,details: 'THIS IS SARGODHA DETAILS '},
    {name : 'LAHORE ' ,details: 'THIS IS LAHORE DETAILS '},
]
const AccordCities = () => {

  return (
    <>
    <div className="accordion" id='mainDiv'>
        {Cities.map((c,i)=>(
           <div className="accordion-item" key={i}>
              <div className="accordion-button">
                 <a className='accordion-header'
                  data-bs-toggle = 'collapse'
                  href={`#collapse${i}`}
                  aria-expanded= 'true'
                  aria-controls={`collapse${i}`}
                  >
                    {c.name}
                  </a>
              </div>

              <div id={`collapse${i}`} className="accordion-body accordion-collapse collapse" data-bs-parent='#mainDiv'>
                {c.name}
                {c.details}
              </div>
           </div>
        ))}
    </div>
      
    </>
  )
}

export default AccordCities
