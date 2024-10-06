import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Dùng cho điều hướng sau các hành động

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/categories/index",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Bao gồm token trong header của yêu cầu
            },
          }
        );
        setCategories(response.data.data); // Điều chỉnh theo cấu trúc của phản hồi API của bạn
      } catch (error) {
        setError("Đã có lỗi xảy ra khi lấy danh mục!");
        console.error(
          "Lỗi khi lấy dữ liệu:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa danh mục này không?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token"); // Lấy token từ local storage
      await axios.delete(`http://localhost:8000/api/categories/destroy/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bao gồm token trong header của yêu cầu
        },
      });
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      setError("Đã có lỗi xảy ra khi xóa danh mục!");
      console.error("Lỗi khi xóa:", error);
    }
  };

  if (loading) {
    return <div>Đang tải danh mục...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
<<<<<<< HEAD
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 className="card-header">Danh sách danh mục</h5>
          <Link to="/add-categories">
            <button type="button" className="btn rounded-pill btn-primary m-6">
              Thêm danh mục
            </button>
          </Link>
=======
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h5 className="card-header">Hàng kẻ sọc</h5>
            <Link to="/add-categories">
              <button type="button" className="btn rounded-pill btn-primary m-6">
                Thêm
              </button>
            </Link>
          </div>
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
        </div>

        <div className="table-responsive text-nowrap">
          <table className="table table-bordered ">
            <thead>
              <tr>
<<<<<<< HEAD
                <th>ID</th>
                <th>Tên</th>
                <th>Slug</th>
=======
                <th>Dự án</th>
                <th>Khách hàng</th>
                <th>Người dùng</th>
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
<<<<<<< HEAD
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>
                    {category.image ? (
                      // Nếu có ảnh, kiểm tra loại URL
                      category.image.includes("http") ? (
                        <img
                          src={category.image} // Trường hợp URL đầy đủ
                          alt={category.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                        />
                      ) : (
                        <img
                          src={`http://localhost:8000/assets/uploads/category/${category.image}`} // Trường hợp đường dẫn tương đối
                          alt={category.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                        />
                      )
                    ) : (
                      // Nếu không có ảnh
                      <p>Image not found</p>
                    )}

                    {/* Hiển thị tên thương hiệu */}
                    {category.name}
                  </td>
                  <td>{category.slug}</td>
                  <td>
                    <span
                      className={`badge ${
                        category.status
                          ? "bg-label-primary"
                          : "bg-label-secondary"
                      }`}
=======
            <tbody className="table-border-bottom-0">
              <tr>
                <td>
                  <i className="bx bxl-angular bx-md text-danger me-4"></i>{" "}
                  <span>Dự án Angular</span>
                </td>
                <td>Albert Cook</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
                    >
                      {category.status ? "Hoạt động" : "Ngưng hoạt động"}
                    </span>
                  </td>
                  <td>
                    {/* <Link
                      to={`/edit-categories/${category.id}`}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
<<<<<<< HEAD
                      <i className="bi bi-pencil-square me-1" style={{ color: "blue" }}></i> Edit
                    </Link>
=======
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <div className="dropdown">
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
                    <button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteCategory(category.id)}
                    >
<<<<<<< HEAD
                      <i className="bi bi-trash me-1" style={{ color: "red" }}></i> Delete
                    </button> */}
                    <div>
                      <Link className="btn btn-sm btn-outline-primary me-2" to={`/edit-categories/${category.id}`}>
                        <i
                          className="bx bx-edit-alt me-1"
                          style={{ color: "blue" }}
                        ></i> Sửa
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        // variant ="outline-danger"
                      
                        onClick={() => deleteCategory(category.id)}
                        // style={{ background: "none", border: "none" }}
                      >
                        <i
                          className="bx bx-trash me-1"
                          style={{ color: "red" }}
                        ></i> Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
=======
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="bx bxl-react bx-md text-info me-4"></i>{" "}
                  <span>Dự án React</span>
                </td>
                <td>Barry Hunter</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-success me-1">Hoàn thành</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="bx bxl-vuejs bx-md text-success me-4"></i>{" "}
                  <span>Dự án VueJs</span>
                </td>
                <td>Trevor Baker</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-info me-1">Đã lên lịch</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="bx bxl-bootstrap bx-md text-primary me-4"></i>{" "}
                  <span>Dự án Bootstrap</span>
                </td>
                <td>Jerry Milton</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-warning me-1">Chưa hoàn thành</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
