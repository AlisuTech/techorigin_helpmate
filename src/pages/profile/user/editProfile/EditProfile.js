import React from 'react'
import profile from '../../../../assets/person_2.jpeg'
import './EditProfile.css'

const EditProfile = () => {
  return (
    <>
      <div className="container-fluid border-red py-5 bg-[#8697c4]">
        <div className="row">
          <div className="col-12 col-lg-4 border-greenx space-y-2 h-[56vh] flex flex-col justify-center items-center">
            <img className="size-[200px]" src={profile} alt="" />
            <h2 className="font-bold">Gideon Edoghotu</h2>
            <h4 className=" font-serif">edoghotugiddy@gmail.com</h4>
            <button className="btn btn-primary mt-5">
              Update Profile Image
            </button>
          </div>
          <div className="col-12 col-lg-5 border-0 space-y-4 set_label">
            <div className="font-bold text-[25px]">Profile Setting</div>
            <div className="flex space-x-3">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="staticFirstName">First Name</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="staticFirstName"
                  value="Gideon"
                  disabled
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="staticLastName">Last Name</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="staticLastName"
                  value="Edoghotu"
                  disabled
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-[50%]">
                <label htmlFor="mobile" className="w-px">
                  Mobile
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="mobile"
                  value="07031170092"
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="staticDob" className="w-[7rem]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  readonly
                  class="form-control"
                  id="staticDob"
                  value="1999-03-11"
                  disabled
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-[50%]">
                <label htmlFor="mobile" className="w-px">
                  Country
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="mobile"
                  value="Nigeria"
                  disabled
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="staticDob" className="w-[7rem]">
                  State of Origin
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="staticDob"
                  value="Rivers"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="pwd" className="w-px">
                Password
              </label>
              <div class="input-group mb-3">
                <input
                  type="password"
                  className="form-control cursor-text"
                  id="pwd"
                  placeholder="Password"
                  value="giddy11"
                  disabled
                />
                <button
                  class="btn btn-secondary"
                  type="button"
                  id="button-addon2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="staticEmail" className="w-px">
                Email
              </label>
              <input
                type="text"
                readonly
                class="form-control"
                id="staticEmail"
                value="edoghotugiddy@gmail.com"
                disabled
              />
            </div>
            <button className="btn btn-primary w-[100%]">
              Update My Profile
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
            <div className="modal-header border-green">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className=" p-3 space-y-3">
              <div className="flex flex-col set_label">
                <label htmlFor="currPwd" className="">
                  Current Password
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="currPwd"
                />
              </div>
              <div className="flex flex-col set_label">
                <label htmlFor="newPwd" className="">
                  New Password
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="newPwd"
                />
              </div>
              <div className="flex flex-col set_label">
                <label htmlFor="newPwdConfirm" className="">
                  Confirm New Password
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="newPwdConfirm"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile