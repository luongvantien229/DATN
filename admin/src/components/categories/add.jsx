import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-xl">
          <div className="card mb-6">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Bố cục cơ bản</h5>
              <small className="text-body float-end">Nhãn mặc định</small>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-fullname">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-fullname"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-company">
                    Công ty
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-company"
                    placeholder="ACME Inc."
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-email">
                    Email
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="text"
                      id="basic-default-email"
                      className="form-control"
                      placeholder="nguyen.vana"
                      aria-label="nguyen.vana"
                      aria-describedby="basic-default-email2"
                    />
                    <span className="input-group-text" id="basic-default-email2">
                      @example.com
                    </span>
                  </div>
                  <div className="form-text">
                    Bạn có thể sử dụng chữ cái, số & dấu chấm
                  </div>
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-phone">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    id="basic-default-phone"
                    className="form-control phone-mask"
                    placeholder="012 345 6789"
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-message">
                    Tin nhắn
                  </label>
                  <textarea
                    id="basic-default-message"
                    className="form-control"
                    placeholder="Xin chào, bạn có thể nói chuyện bây giờ không?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
