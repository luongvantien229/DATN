import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import useSWR from "swr";

const Index = () => {
  const fetcher = (...agrs) =>fetch(...agrs).then((res) => res.json());
  const {error: errorCategory, isLoading: isLoadingCategory, } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/categories`, fetcher);
  const router = useRouter();
  const [formValue, setFormValue] = useState();
  const formik = useFormik({
    initialValues:{
      name:"",
      description:"",
      category: "",
      price:0,
      image: null,
    },
    onSubmit:(value) =>{
      setFormValue(value);
      const formData = new FormData();
      formData.append("name", value.name);
      formData.append("description", value.description);
      formData.append("category", value.categoryId);
      formData.append("price", value.price);
      formData.append("image", value.image);
      try{
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        body: formData,
      }).then((res)=>{
        router.push("/admin/product");
      });
    } catch (error) {
      console.log(error);
    }
    },
  });
  if(errorCategory) return <strong>Có lỗi xảy ra</strong>
  if(isLoadingCategory ) return<strong>Đang load dữ liệu...</strong>
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-xl">
          <div className="card mb-6">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Basic info</h5>
              <small className="text-body float-end">Add Product</small>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-fullname">
                    Name Product
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-fullname"
                    placeholder="Cow Milk"
                    // onChange={formik.handleChange}
                  />
                </div>
                <div class="mb-4">
                        <label for="exampleFormControlReadOnlyInput1" class="form-label">Description</label>
                        <input
                          class="form-control"
                          type="text"
                          id="exampleFormControlReadOnlyInput1"
                          placeholder="Description"
                          readonly />
                      </div>
                <div className="mb-6">
                  {/* <label className="form-label" htmlFor="basic-default-company">
                    Categories
                  </label> */}
                  <option> Categories </option>
                  <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Categories menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> 
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-email">
                    Price
                  </label>
                   <input type="number" class="form-control rounded-0"></input>
                  <div className="input-group input-group-merge">
                  </div>
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-phone">
                    Image
                  </label>
                  <div class="mb-3">
                </div>
                  <input class="form-control rounded-0" type="file" id="image" name="image" />
                  <div class="bg-secondary-subtle mb-3 p-2 text-center">
                    <img src="public/assets/img/avatars/1.png" class="w-50"/>
                  </div>
                  </div>
                <button type="submit" className="btn btn-primary">
                  Send
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
