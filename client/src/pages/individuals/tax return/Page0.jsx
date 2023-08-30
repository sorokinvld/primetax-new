import React from 'react'

const Page0 = ({handleNext}) => {
    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Please answer the following</h4>
                </div>
                <div className="card-body">
                    <div className='form-group' id="other-income">
                        <label className='form-label' htmlFor="other-income">Do you have any other income except employment and pension
                            income?</label>
                            <br />
                        <div className='form-check flex'>
                            <div className='form-check-inline mr-5'>
                                <input className='form-check-input' type="radio" id="yes-income" name="income" value="yes" onClick={handleNext} />
                                <label className="form-check-label mb-2" htmlFor="new">Yes</label>
                            </div>
                            <div className='form-check-inline'>
                                <input className='form-check-input' type="radio" id="no-income" name="income" value="no" onClick={handleNext} />
                                <label className="form-check-label mb-2" htmlFor="no">No</label>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page0