import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  
  const handleTabChange = (tab) => {
    setActiveTab(tab); 
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('/auth/your_profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    // Validate password fields
    if (newPassword !== confirmPassword) {
      setPasswordError("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("Mật khẩu mới phải có ít nhất 6 ký tự.");
      return;
    }

    setPasswordError(""); // Clear previous error

    try {
      // Send password change request to the API
      const response = await axios.post('/auth/reset', {
        email,
        currentPassword,
        newPassword,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      console.log("🚀 ~ handlePasswordChange ~ response:", response)

      // if (response.data.success) {
      //   setUpdateMessage("Mật khẩu đã được thay đổi thành công.");
      //   setCurrentPassword("");
      //   setNewPassword("");
      //   setConfirmPassword("");
      // } else {
      //   setUpdateMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
      // }
    } catch (error) {
      console.log("🚀 ~ handlePasswordChange ~ error:", error);
      
      // console.error("Error during password change:", error);
      // setUpdateMessage("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('/auth/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      
      localStorage.removeItem('token');
      localStorage.removeItem('user_name');
      Swal.fire({
        title: 'Đăng xuất thành công!',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/'); 
      });
    } catch (error) {
      Swal.fire({
        title: 'Lỗi!',
        text: 'Đã xảy ra lỗi khi đăng xuất. Vui lòng thử lại.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="my-account-area pt-75 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* My Account Page Start */}
            <div className="myaccount-page-wrapper">
              {/* My Account Tab Menu Start */}
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="myaccount-tab-menu nav" role="tablist">
                    <Link to="#dashboard" className={activeTab === "dashboard" ? "active" : ""} onClick={() => handleTabChange("dashboard")}>Dashboard</Link>
                    <Link to="#orders" className={activeTab === "orders" ? "active" : ""} onClick={() => handleTabChange("orders")}>Orders</Link>
                    <Link to="#address-edit" className={activeTab === "address-edit" ? "active" : ""} onClick={() => handleTabChange("address-edit")}>Address</Link>
                    <Link to="#account-info" className={activeTab === "account-info" ? "active" : ""} onClick={() => handleTabChange("account-info")}>Account Details</Link>
                    <Link
                      to='/'
                    >
                      Thoát
                    </Link>
                  </div>
                </div>
                
                <div className="col-lg-8 col-md-8">
                  <div className="tab-content" id="myaccountContent">
                    {/* Dashboard Tab Content */}
                    <div className={`tab-pane fade ${activeTab === "dashboard" ? "show active" : ""}`} id="dashboard" role="tabpanel">
                      <div className="myaccount-content">
                        <div className="welcome">
                          <p>Hello, <strong>{localStorage.getItem('user_name')}</strong> (Not <strong>{localStorage.getItem('user_name')} !</strong><Link className='logout' to="/login-register"> Logout</Link>)</p>
                        </div>
                        <p className="mb-0">From your account dashboard you can view your <Link to="#">recent orders</Link>, manage your <Link to="#">shipping and billing addresses</Link>, and <Link to="#">edit your password and account details</Link>.</p>
                      </div>
                    </div>
                    {/* Orders Tab Content */}
                    <div className={`tab-pane fade ${activeTab === "orders" ? "show active" : ""}`} id="orders" role="tabpanel">
                      <div className="myaccount-content">
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Aug 22, 2018</td>
                                <td>Pending</td>
                                <td>$3000</td>
                                <td><Link className='check-btn sqr-btn' to='cart.html'>View</Link></td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>July 22, 2018</td>
                                <td>Approved</td>
                                <td>$200</td>
                                <td><Link className='check-btn sqr-btn' to='cart.html'>View</Link></td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>June 12, 2017</td>
                                <td>On Hold</td>
                                <td>$990</td>
                                <td><Link className='check-btn sqr-btn' to='cart.html'>View</Link></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Address Edit Tab Content */}
                    <div className={`tab-pane fade ${activeTab === "address-edit" ? "show active" : ""}`} id="address-edit" role="tabpanel">
                      <div className="myaccount-content myaccount-address">
                        <p>The following addresses will be used on the checkout page by default.</p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                            <div className="myaccount-address-wrap">
                              <h3>Billing address</h3>
                              <div className="myaccount-address-content">
                                <h4>Alex Tuntuni</h4>
                                <p>1355 Market St, Suite 900 <br />San Francisco, CA 94103</p>
                                <p>Mobile: (123) 456-7890</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                            <div className="myaccount-address-wrap">
                              <h3>Shipping address</h3>
                              <div className="myaccount-address-content">
                                <h4>Alex Tuntuni</h4>
                                <p>1355 Market St, Suite 900 <br />San Francisco, CA 94103</p>
                                <p>Mobile: (123) 456-7890</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Account Info Tab Content */}
                    <div className={`tab-pane fade ${activeTab === "account-info" ? "show active" : ""}`} id="account-info" role="tabpanel">
                      <div className="myaccount-content">
                        <div className="account-details-form">
                          <form onSubmit={handlePasswordChange}>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="account-info input-style mb-30">
                                  <label>Name *</label>
                                  <input type="text" value={user.name} readOnly />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="account-info input-style">
                                  <label>Email</label>
                                  <input type="email" value={user.email} readOnly />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="account-info input-style">
                                  <label>Phone</label>
                                  <input type="number" value={user.phone} readOnly />
                                </div>
                              </div>
                            </div>

                            <fieldset>
                              <legend>Password Change</legend>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>Current Password</label>
                                    <input 
                                      type="password" 
                                      value={currentPassword} 
                                      onChange={(e) => setCurrentPassword(e.target.value)} 
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>New Password</label>
                                    <input 
                                      type="password" 
                                      value={newPassword} 
                                      onChange={(e) => setNewPassword(e.target.value)} 
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style">
                                    <label>Confirm New Password</label>
                                    <input 
                                      type="password" 
                                      value={confirmPassword} 
                                      onChange={(e) => setConfirmPassword(e.target.value)} 
                                    />
                                  </div>
                                </div>
                              </div>
                            </fieldset>

                            {/* Display Error or Success Messages */}
                            {passwordError && <div style={{ color: "red", marginTop: "10px" }}>{passwordError}</div>}
                            {updateMessage && <div style={{ color: "green", marginTop: "10px" }}>{updateMessage}</div>}

                            <div className="account-info-btn">
                              <button type="submit">Save Changes</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
            
                  </div> {/* My Account Tab Content End */}
                </div>
              </div>
            </div> {/* My Account Page End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
