import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Index = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-xl">
          <div className="card mb-6">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Thêm sản phẩm</h5>
              {/* <small className="text-body float-end">Nhãn mặc định</small> */}
            </div>
            <div className="card-body">
              <form>
                <div className="mb-6">
                  <label
                    className="form-label"
                    htmlFor="basic-default-fullname"
                  >
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-fullname"
                    placeholder="Nhap ten sản phẩm"
                  />
                </div>
                <div className="mb-6">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-company">
                    Giá
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-company"
                    placeholder="100.000đ"
                  />
                </div>
                <div className="mb-6">
                  <label for="exampleFormControlSelect2" class="form-label">
                    Chọn danh mục
                  </label>
                  <select
                    multiple
                    class="form-select"
                    id="exampleFormControlSelect2"
                    aria-label="Multiple select example"
                  >
                    <option value="pain-relievers">Giảm đau</option>
                    <option value="antibiotics">Kháng sinh</option>
                    <option value="vitamins">Vitamin</option>
                    <option value="herbal">Thảo dược</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label for="exampleFormControlSelect2" class="form-label">
                    Chọn thương hiệu
                  </label>
                  <select
                    multiple
                    class="form-select"
                    id="exampleFormControlSelect2"
                    aria-label="Multiple select example"
                  >
                    <option selected>Chọn thương hiệu</option>
                <option value="panadol">Panadol</option>
                <option value="amoxicillin">Amoxicillin</option>
                <option value="vitamin-c">Vitamin C</option>
                  </select>
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
