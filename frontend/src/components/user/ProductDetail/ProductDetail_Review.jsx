import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail_Review() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [commentReplies, setCommentReplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const loadComments = async () => {
      try {
        const response = await axios.get(`/load_comments`, {
          params: { product_id: id },
        });
        setComments(response.data.comments || []);
        setCommentReplies(response.data.comment_reply || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/send_comment",
        { ...formData, product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments([...comments, formData]);
      setFormData({ name: "", email: "", message: "" });
      alert("Comment submitted successfully!");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="pro-details-review-wrap">
      <div className="entry-product-section-heading">
        <h2>Đánh giá ({comments ? comments.length : 0})</h2>
      </div>
      <div className="pro-details-review">
        <p>
          <span>5.00</span> trung bình dựa trên {comments ? comments.length : 0}{" "}
          đánh giá.
        </p>

        {loading ? (
          <p>Đang tải đánh giá...</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="single-pro-details-review">
              <div className="review-img">
                <img src="assets/images/client/default-avatar.jpg" alt="" />
              </div>
              <div className="review-content">
                <div className="review-name-rating">
                  <div className="review-name">
                    <h6>{comment.name || "Ẩn danh"}</h6>
                  </div>
                </div>
                <p>{comment.message}</p>
                <div className="review-date-btn">
                  <div className="review-date">
                    <span>
                      {new Date(comment.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                </div>

                {/* Hiển thị danh sách câu trả lời */}

                {commentReplies
                  .filter((reply) => reply.parent_id === comment.id) // Only show replies with parent_id matching the comment's id
                  .map((reply, replyIndex) => (
                    <div
                      key={replyIndex}
                      className="reply-content row"
                      style={{
                        margin: "10px 20px",
                        backgroundColor:
                          "#e0f7fa" /* Lighter aquamarine for a softer background */,
                        borderRadius:
                          "8px" /* Rounded corners for a modern look */,
                        padding: "15px" /* Added padding for spacing */,
                        boxShadow:
                          "0 2px 8px rgba(0, 0, 0, 0.1)" /* Subtle shadow for depth */,
                      }}
                    >
                      <div className="col-md-2">
                        <img
                          width="80%"
                          src="https://png.pngtree.com/background/20230525/original/pngtree-anime-style-girl-with-red-flower-on-her-head-picture-image_2734504.jpg"
                          alt="User Avatar"
                          className="img img-responsive img-thumbnail"
                          // style={{
                          //   borderRadius: "50%" /* Make the avatar round */,
                          //   border:
                          //     "2px solid #007bff" /* Blue border around avatar */,
                          // }}
                        />
                      </div>
                      <div className="col-md-10">
                        <p style={{ color: "#007bff", fontWeight: "bold" }}>
                          {reply.name}
                        </p>
                        <p
                          style={{
                            color: "#333",
                            fontSize: "1rem",
                            lineHeight: "1.5",
                          }}
                        >
                          {reply.message}
                        </p>
                        <span style={{ fontSize: "0.875rem", color: "#888" }}>
                          {new Date(reply.date).toLocaleDateString("vi-VN")}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}

        {isLoggedIn ? (
          <div className="ratting-form-wrapper">
            <h3>Thêm một đánh giá </h3>
            <p>
              Địa chỉ email của bạn sẽ không được công khai. Các trường bắt buộc
              được đánh dấu{" "}
            </p>

            <div className="rating-form-style">
              <form onSubmit={handleSubmit}>
                <div className="comment-form-rating-wrap">
                  <span>Đánh giá của bạn: *</span>
                  <div className="comment-form-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      placeholder="Tên *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="email"
                      placeholder="Email *"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <textarea
                      placeholder="Đánh giá của bạn"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-submit">
                  <input type="submit" value="Gửi" />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <p>
            Bạn phải{" "}
            <a href="/login-register" className="text-blue-500">
              <span>đăng nhập</span>
            </a>{" "}
            để thêm đánh giá.
          </p>
        )}
      </div>
    </div>
  );
}
