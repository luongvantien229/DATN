import React from "react";

const Index = () => {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        
        <div className="row">
          <div className="col-xxl-8 mb-6 order-0">
            <div className="card">
              <div className="d-flex align-items-start row">
                <div className="col-sm-7">
                  <div className="card-body">
                    <h5 className="card-title text-primary mb-3">
                      Chúc mừng John! 🎉
                    </h5>
                    <p className="mb-6">
                      Bạn đã tăng 72% doanh thu hôm nay.
                      <br />
                      Kiểm tra huy hiệu mới của bạn trong hồ sơ.
                    </p>

                    <a href="" className="btn btn-sm btn-outline-primary">
                      Xem Huy Hiệu
                    </a>
                  </div>
                </div>
                <div className="col-sm-5 text-center text-sm-left">
                  <div className="card-body pb-0 px-0 px-md-6">
                    <img
                      src="../assets/img/illustrations/man-with-laptop.png"
                      height="175"
                      className="scaleX-n1-rtl"
                      alt="Xem Huy Hiệu Người Dùng"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 order-1">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-6 mb-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between mb-4">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="../assets/img/icons/unicons/chart-success.png"
                          alt="Biểu đồ thành công"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="cardOpt3"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded text-muted"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardOpt3"
                        >
                          <a className="dropdown-item" href="\">
                            Xem Thêm
                          </a>
                          <a className="dropdown-item" href="\">
                            Xóa
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1">Lợi nhuận</p>
                    <h4 className="card-title mb-3">$12,628</h4>
                    <small className="text-success fw-medium">
                      <i className="bx bx-up-arrow-alt"></i> +72.80%
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-6 mb-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between mb-4">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="../assets/img/icons/unicons/wallet-info.png"
                          alt="Thông tin ví"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="cardOpt6"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded text-muted"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardOpt6"
                        >
                          <a className="dropdown-item" href="\">
                            Xem Thêm
                          </a>
                          <a className="dropdown-item" href="\">
                            Xóa
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1">Doanh thu</p>
                    <h4 className="card-title mb-3">$4,679</h4>
                    <small className="text-success fw-medium">
                      <i className="bx bx-up-arrow-alt"></i> +28.42%
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-8 order-2 order-md-3 order-xxl-2 mb-6">
            <div className="card">
              <div className="row row-bordered g-0">
                <div className="col-lg-8">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                      <h5 className="m-0 me-2">Tổng Doanh Thu</h5>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="totalRevenue"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded bx-lg text-muted"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="totalRevenue"
                      >
                        <a className="dropdown-item" href="\">
                          Chọn Tất Cả
                        </a>
                        <a className="dropdown-item" href="\">
                          Làm mới
                        </a>
                        <a className="dropdown-item" href="\">
                          Chia sẻ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="totalRevenueChart" className="px-3"></div>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="card-body px-xl-9">
                    <div className="text-center mb-6">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          <script>
                            document.write(new Date().getFullYear() - 1);
                          </script>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="visually-hidden">
                            Chuyển Đổi Danh Sách
                          </span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="\">
                              2021
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="\">
                              2020
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="\">
                              2019
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="growthChart"></div>
                    <div className="text-center fw-medium my-6">
                      62% Tăng Trưởng Công Ty
                    </div>

                    <div className="d-flex gap-3 justify-content-between">
                      <div className="d-flex">
                        <div className="avatar me-2">
                          <span className="avatar-initial rounded-2 bg-label-primary">
                            <i className="bx bx-dollar bx-lg text-primary"></i>
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <small>
                            <script>
                              document.write(new Date().getFullYear() - 1);
                            </script>
                          </small>
                          <h6 className="mb-0">$32.5k</h6>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="avatar me-2">
                          <span className="avatar-initial rounded-2 bg-label-info">
                            <i className="bx bx-wallet bx-lg text-info"></i>
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <small>
                            <script>
                              document.write(new Date().getFullYear() - 2);
                            </script>
                          </small>
                          <h6 className="mb-0">$41.2k</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-12 col-xxl-4 order-3 order-md-2">
            <div className="row">
              <div className="col-6 mb-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between mb-4">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="../assets/img/icons/unicons/paypal.png"
                          alt="Paypal"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="cardOpt2"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded text-muted"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardOpt2"
                        >
                          <a className="dropdown-item" href="\">
                            Xem Thêm
                          </a>
                          <a className="dropdown-item" href="\">
                            Xóa
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1">Số lượng giao dịch</p>
                    <h4 className="card-title mb-3">4,200</h4>
                    <small className="text-success fw-medium">
                      <i className="bx bx-up-arrow-alt"></i> +12%
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between mb-4">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="../assets/img/icons/unicons/cc-visa.png"
                          alt="Visa"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="cardOpt4"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded text-muted"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardOpt4"
                        >
                          <a className="dropdown-item" href="\">
                            Xem Thêm
                          </a>
                          <a className="dropdown-item" href="\">
                            Xóa
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1">Số lượng giao dịch</p>
                    <h4 className="card-title mb-3">2,300</h4>
                    <small className="text-danger fw-medium">
                      <i className="bx bx-down-arrow-alt"></i> -5%
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-6">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between">
                <div className="card-title mb-0">
                  <h5 className="mb-1 me-2">Thống kê Đơn hàng</h5>
                  <p className="card-subtitle">42.82k Tổng doanh thu</p>
                </div>
                <div className="dropdown">
                  <button
                    className="btn text-muted p-0"
                    type="button"
                    id="orederStatistics"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-vertical-rounded bx-lg"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="orederStatistics"
                  >
                    <a className="dropdown-item" href="\">
                      Chọn Tất cả
                    </a>
                    <a className="dropdown-item" href="\">
                      Làm mới
                    </a>
                    <a className="dropdown-item" href="\">
                      Chia sẻ
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div className="d-flex flex-column align-items-center gap-1">
                    <h3 className="mb-1">8,258</h3>
                    <small>Tổng số đơn hàng</small>
                  </div>
                  <div id="orderStatisticsChart"></div>
                </div>
                <ul className="p-0 m-0">
                  <li className="d-flex align-items-center mb-5">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="bx bx-mobile-alt"></i>
                      </span>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Điện tử</h6>
                        <small>Điện thoại, Tai nghe, TV</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0">82.5k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-5">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="bx bx-closet"></i>
                      </span>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Thời trang</h6>
                        <small>Áo, Quần, Giày</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0">23.8k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-5">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-info">
                        <i className="bx bx-home-alt"></i>
                      </span>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Trang trí</h6>
                        <small>Nghệ thuật, Ăn uống</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0">849k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-secondary">
                        <i className="bx bx-football"></i>
                      </span>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-0">Thể thao</h6>
                        <small>Bóng đá, Bộ dụng cụ Cricket</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0">99</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 order-1 mb-6">
            <div className="card h-100">
              <div className="card-header nav-align-top">
                <ul className="nav nav-pills" role="tablist">
                  <li className="nav-item">
                    <button
                      type="button"
                      className="nav-link active"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#navs-tabs-line-card-income"
                      aria-controls="navs-tabs-line-card-income"
                      aria-selected="true"
                    >
                      Doanh thu
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="nav-link" role="tab">
                      Chi phí
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="nav-link" role="tab">
                      Lợi nhuận
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content p-0">
                  <div
                    className="tab-pane fade show active"
                    id="navs-tabs-line-card-income"
                    role="tabpanel"
                  >
                    <div className="d-flex mb-6">
                      <div className="avatar flex-shrink-0 me-3">
                        <img
                          src="../assets/img/icons/unicons/wallet.png"
                          alt="Người dùng"
                        />
                      </div>
                      <div>
                        <p className="mb-0">Tổng số dư</p>
                        <div className="d-flex align-items-center">
                          <h6 className="mb-0 me-1">$459.10</h6>
                          <small className="text-success fw-medium">
                            <i className="bx bx-chevron-up bx-lg"></i>
                            42.9%
                          </small>
                        </div>
                      </div>
                    </div>
                    <div id="incomeChart"></div>
                    <div className="d-flex align-items-center justify-content-center mt-6 gap-3">
                      <div className="flex-shrink-0">
                        <div id="expensesOfWeek"></div>
                      </div>
                      <div>
                        <h6 className="mb-0">Doanh thu tuần này</h6>
                        <small>$39k ít hơn tuần trước</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 order-2 mb-6">
            <div className="card h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title m-0 me-2">Giao dịch</h5>
                <div className="dropdown">
                  <button
                    className="btn text-muted p-0"
                    type="button"
                    id="transactionID"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-vertical-rounded bx-lg"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="transactionID"
                  >
                    <a className="dropdown-item" href="\">
                      28 Ngày gần đây
                    </a>
                    <a className="dropdown-item" href="\">
                      Tháng trước
                    </a>
                    <a className="dropdown-item" href="\">
                      Năm trước
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body pt-4">
                <ul className="p-0 m-0">
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="../assets/img/icons/unicons/paypal.png"
                        alt="Người dùng"
                        className="rounded"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">Giao dịch PayPal</h6>
                        <small className="text-muted">5 giờ trước</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0 text-success">$17.2k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="../assets/img/icons/unicons/stripe.png"
                        alt="Người dùng"
                        className="rounded"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">Giao dịch Stripe</h6>
                        <small className="text-muted">6 giờ trước</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0 text-success">$6.5k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="../assets/img/icons/unicons/visa.png"
                        alt="Người dùng"
                        className="rounded"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">Giao dịch Visa</h6>
                        <small className="text-muted">8 giờ trước</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0 text-success">$8.9k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-6">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="../assets/img/icons/unicons/mastercard.png"
                        alt="Người dùng"
                        className="rounded"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">Giao dịch Mastercard</h6>
                        <small className="text-muted">12 giờ trước</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0 text-success">$5.1k</h6>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0 me-3">
                      <img
                        src="../assets/img/icons/unicons/btc.png"
                        alt="Người dùng"
                        className="rounded"
                      />
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <h6 className="mb-1">Giao dịch Bitcoin</h6>
                        <small className="text-muted">15 giờ trước</small>
                      </div>
                      <div className="user-progress">
                        <h6 className="mb-0 text-success">$4.5k</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
            <div className="text-body">
              ©<script>document.write(new Date().getFullYear());</script>, được
              làm với ❤️ bởi
              <a
                href="https://themeselection.com"
                target="_blank"
                className="footer-link"
              >
                ThemeSelection
              </a>
            </div>
            <div className="d-none d-lg-inline-block">
              <a
                href="https://themeselection.com/license/"
                className="footer-link me-4"
                target="_blank"
              >
                Giấy phép
              </a>
              <a
                href="https://themeselection.com/"
                target="_blank"
                className="footer-link me-4"
              >
                Nhiều chủ đề hơn
              </a>

              <a
                href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                className="footer-link me-4"
              >
                Tài liệu
              </a>

              <a
                href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                className="footer-link"
              >
                Hỗ trợ
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="content-backdrop fade"></div>
    </div>
  );
};

export default Index;
