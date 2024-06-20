import React from 'react'
import user from '../../../../assets/user.png'

const AppointmentHistory = () => {
  return (
    <>
      <div className='border-greenx bg-[#ede8f5]'>
        <div className="border-greenx rounded-[6px] w-[40%] mx-auto flex flex-col">
          <div className="border-yellowx flex items-center pt-3">
            <img
              src={user}
              alt=""
              className="w-[60px] border-greenx rounded-[50%] me-[15px]"
            />
            <h3 className="font-[500]">Mr Richard Stewart</h3>
          </div>
          <hr className="h-[1px] w-[100%] bg-[#ccc] mt-4" />
          <div className="">
            <p className="font-bold border-greenx">
              Date: <span>21/06/2024</span>
            </p>
          </div>
          <div className="">
            <p className="font-bold">
              Time: <span>15:30</span>
            </p>
          </div>
          <div className="border-yellowx text-end">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="border-greenx rounded-[6px] w-[40%] mx-auto flex flex-col">
          <div className="border-yellowx flex items-center pt-3">
            <img
              src={user}
              alt=""
              className="w-[60px] border-greenx rounded-[50%] me-[15px]"
            />
            <h3 className="font-[500]">Mr Richard Stewart</h3>
          </div>
          <hr className="h-[1px] w-[100%] bg-[#ccc] mt-4" />
          <div className="">
            <p className="font-bold border-greenx">
              Date: <span>21/06/2024</span>
            </p>
          </div>
          <div className="">
            <p className="font-bold">
              Time: <span>15:30</span>
            </p>
          </div>
          <div className="border-yellowx text-end">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      

    {/* modal */}
      <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    ...
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">Are you sure you want to cancel Appointment?</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default AppointmentHistory