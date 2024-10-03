import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-xl">
          <div className="card mb-6">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Thêm danh mục</h5>
              {/* <small className="text-body float-end">Nhãn mặc định</small> */}
            </div>
            <div className="card-body">
              <form>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-fullname">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-fullname"
                    placeholder="Nhap ten danh muc"
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-company">
                    Sắp xếp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-company"
                    placeholder="1"
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-email">
                    Chọn danh mục cha
                  </label>
                  <div className="input-group input-group-merge">
                  <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Chọn danh mục cha</option>
                          <option value="1">Ẩn</option>
                        </select>
                  </div>
                  <div className="form-text">
                    Bạn có thể sử dụng chữ cái, số & dấu chấm
                  </div>
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-email">
                    Hiển thị lên trang chủ
                  </label>
                  <div className="input-group input-group-merge">
                  <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Hiển thị</option>
                          <option value="1">Ẩn</option>
                        </select>
                  </div>
                  <div className="form-text">
                    Bạn có thể sử dụng chữ cái, số & dấu chấm
                  </div>
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
