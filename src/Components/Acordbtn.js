import React from 'react'


const Accordbtn = () => {
  return (
    <>
      <div className="accordion" id="mainDiv">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button "
       type="button"
        data-bs-toggle="collapse"
         data-bs-target="#CollapseOne"
          aria-expanded="true" 
          aria-controls="CollapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="CollapseOne" className="accordion-collapse collapse"  data-bs-parent="#mainDiv">
      <div className="accordion-body">
      Accord 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat a dolor, recusandae ad quo sapiente praesentium perferendis accusamus quibusdam vero accusantium quae, omnis distinctio deserunt quaerat rem placeat illo!
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button "
       type="button"
        data-bs-toggle="collapse"
         data-bs-target="#CollapseTwo"
          aria-expanded="true" 
          aria-controls="CollapseTwo">
        Accordion Item 2
      </button>
    </h2>
    <div id="CollapseTwo" className="accordion-collapse collapse"  data-bs-parent="#mainDiv">
      <div className="accordion-body">
      Accord 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat a dolor, recusandae ad quo sapiente praesentium perferendis accusamus quibusdam vero accusantium quae, omnis distinctio deserunt quaerat rem placeat illo!
      </div>
    </div>
  </div>
 
</div>
    </>
  )
}

export default Accordbtn
