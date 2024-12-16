import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { slug, id } = useParams(); // Lấy slug và id từ URL
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`/post-detail/${slug}/${id}`);
        setPost(response.data.post); // Gán dữ liệu bài viết chính
        setRelatedPosts(response.data.related_posts); // Gán danh sách bài viết liên quan
      } catch (err) {
        setError("Không thể tải dữ liệu bài viết");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [slug, id]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-details-area padding-30-row-col pt-75 pb-75">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-8">
            <div className="blog-details-wrapper">
              {/* Blog Title and Meta Information */}
              <div className="blog-details-top-content">
                <div className="post-categories">
                  <a href="/blog">
                    {post.category_posts?.name || "Healthcare 5.0"}
                  </a>
                </div>
                <h1>{post.title}</h1>
                <div className="blog-meta-3">
                  <ul>
                    {/* <li><a href="#"><img src={post.user?.profile_image || 'assets/images/blog/blog-author.jpg'} alt="Author" /> {post.user?.name || 'Tác giả ẩn danh'}</a></li>
                                        <li><i className="far fa-calendar"></i> {post.published_at || 'Chưa có ngày đăng'}</li> */}
                    <li>
                      <i className="far fa-eye"></i> {post.view || "0"} views
                    </li>
                    {/* <li><a href="#"><i className="far fa-comment-alt-lines"></i> {post.comment_count || '0'} comments</a></li> */}
                  </ul>
                </div>
              </div>

              {/* Blog Image */}
              <img
                src={post.image || "assets/images/blog/blog-details.jpg"}
                alt="Blog Image"
              />

              {/* Blog Blockquote */}
              {/* <blockquote>
                                <p>{post.quote || 'Dữ liệu không có trích dẫn.'}</p>
                            </blockquote> */}

              {/* Blog Content */}
              <p>{post.description}</p>
              {/* <div className="blog-details-middle-img">
                                <img src={post.middle_image || 'assets/images/blog/blog-details-middle.jpg'} alt="Middle Image" />
                            </div> */}

              <p
                className="blog-details-paragraph-mb"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content || "Nội dung bài viết chưa được cập nhật.",
                }}
              ></p>

              <div className="blog-tag-share-wrap">
                <div className="blog-share-wrap">
                  <div className="blog-share-content">
                    <span>Chia sẻ bài viết</span>
                  </div>
                  <div className="blog-share-icon">
                    <span className="fas fa-share-alt"></span>
                    <div className="blog-share-list tooltip-style-4 blog-share-right-0">
                      <a aria-label="Facebook" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a aria-label="Twitter" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a aria-label="Linkedin" href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a aria-label="Tumblr" href="#">
                        <i className="fab fa-tumblr-square"></i>
                      </a>
                      <a aria-label="Email" href="#">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Information */}
              <div className="blog-author-wrap">
                <div className="blog-author-img">
                  <img
                    src={
                      post.users?.image ||
                      "assets/images/blog/blog-author-2.jpg"
                    }
                    alt="Author"
                  />
                  <div className="blog-author-social tooltip-style-4">
                    <a aria-label="Twitter" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a aria-label="Facebook" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a aria-label="Instagram" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a aria-label="Linkedin" href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="blog-author-content">
                  <h4>{post.users?.name || "Tác giả ẩn danh"}</h4>
                </div>
              </div>

              {/* Previous and Next Posts */}
              {/* <div className="blog-prev-next-wrap">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                                        <div className="blog-prev-next-style blog-prev-position">
                                            <a href={relatedPosts[0]?.link || '#'}>
                                                <img src={relatedPosts[0]?.image || 'assets/images/blog/prev.jpg'} alt="Previous Post" />
                                                <h4>{relatedPosts[0]?.title || 'Previous Post'}</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                                        <div className="blog-prev-next-style blog-next-position">
                                            <a href={relatedPosts[1]?.link || '#'}>
                                                <img src={relatedPosts[1]?.image || 'assets/images/blog/next.jpg'} alt="Next Post" />
                                                <h4>{relatedPosts[1]?.title || 'Next Post'}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-wrapper sidebar-wrapper-mr1">
              <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-2 mb-20">
                <h4 className="sidebar-widget-title">Bài viết phổ biến</h4>
                <div className="sidebar-post-wrap mt-30">
                  {relatedPosts.map((post) => (
                    <div className="single-sidebar-post" key={post.id}>
                      <div className="sidebar-post-img">
                        <a href={post.link}>
                          <img src={post.image} alt="Sidebar Blog" />
                        </a>
                      </div>
                      <div className="sidebar-post-content">
                        <h4>
                          <a href={post.link}>{post.title}</a>
                        </h4>
                        {/* <span>{post.date}</span> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
