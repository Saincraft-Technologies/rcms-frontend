import React from 'react'

const Account = () => {
  return (
    <>
        <h1 className="text-center mt-3">Account</h1>

        <div className="container">
        <div className="card mt-3 mx-auto" style={{ maxWidth: "700px" }}>
  <div className="card-body">
    {/* account info */}
    <h5 className="card-title custom-text">Account Info</h5>
    <p className="card-text mt-3 custom-text">Name:</p>
    <p className="card-text custom-text">Email:</p>
    <p className="card-text custom-text">Phone:</p>

    <hr />

    {/* account history */}
    <h5 className="card-title custom-text">Change Password</h5>
    <p className="card-text custom-text">Change your Password with OTP</p>
    <button className="btn btn-primary custom-text">Change Password</button>

    {/* <hr /> */}

    {/* delete account */}
    {/* <h5 className="card-title custom-text">Delete Account</h5>
    <p className="card-text custom-text">Delete your account</p>
    <button className="btn btn-danger custom-text">Delete Account</button> */}
  </div>
</div>


        </div>

    </>
  )
}

export default Account