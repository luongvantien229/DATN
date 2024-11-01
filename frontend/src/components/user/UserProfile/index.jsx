import React, { useState } from "react";
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // State để theo dõi tab hiện tại

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Cập nhật tab hiện tại
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
                    <Link to="#download" className={activeTab === "download" ? "active" : ""} onClick={() => handleTabChange("download")}>Download</Link>
                    <Link to="#address-edit" className={activeTab === "address-edit" ? "active" : ""} onClick={() => handleTabChange("address-edit")}>Address</Link>
                    <Link to="#account-info" className={activeTab === "account-info" ? "active" : ""} onClick={() => handleTabChange("account-info")}>Account Details</Link>
                    <Link to="/login-register">Logout</Link>
                  </div>
                </div>
                {/* My Account Tab Menu End */}
                {/* My Account Tab Content Start */}
                <div className="col-lg-8 col-md-8">
                  <div className="tab-content" id="myaccountContent">
                    {/* Dashboard Tab Content */}
                    <div className={`tab-pane fade ${activeTab === "dashboard" ? "show active" : ""}`} id="dashboard" role="tabpanel">
                      <div className="myaccount-content">
                        <div className="welcome">
                          <p>Hello, <strong>Rayed</strong> (Not <strong>Rayed !</strong><Link className='logout' to="/login-register"> Logout</Link>)</p>
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
                    {/* Download Tab Content */}
                    <div className={`tab-pane fade ${activeTab === "download" ? "show active" : ""}`} id="download" role="tabpanel">
                      <div className="myaccount-content">
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>Product</th>
                                <th>Date</th>
                                <th>Expire</th>
                                <th>Download</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Haven - Free Real Estate PSD Template</td>
                                <td>Aug 22, 2018</td>
                                <td>Yes</td>
                                <td><Link to="#" className="check-btn sqr-btn"><i className="fa fa-cloud-download"></i> Download File</Link></td>
                              </tr>
                              <tr>
                                <td>HasTech - Profolio Business Template</td>
                                <td>Sep 12, 2018</td>
                                <td>Never</td>
                                <td><Link to="#" className="check-btn sqr-btn"><i className="fa fa-cloud-download"></i> Download File</Link></td>
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
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="account-info input-style mb-30">
                                  <label>First Name *</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="account-info input-style mb-30">
                                  <label>Last Name *</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="account-info input-style">
                                  <label>Display Name *</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>
                            <span>This will be how your name will be displayed in the account section and in reviews</span>
                            <fieldset>
                              <legend>Password change</legend>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>Current password (leave blank to leave unchanged)</label>
                                    <input type="password" />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>New password (leave blank to leave unchanged)</label>
                                    <input type="password" />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style">
                                    <label>Confirm new password</label>
                                    <input type="password" />
                                  </div>
                                </div>
                              </div>
                            </fieldset>
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
