<div class="alert-wrapper">
    <div class="alert alert-success-custom" role="alert">
        <h4 class="alert-heading">Thành Công!</h4>
        <p>Mật khẩu của bạn đã được đặt lại thành công.</p>
        <hr>
        <p class="mb-2">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
        <a href="http://127.0.0.1:3000/login-register" class="btn btn-primary-custom mt-3">Đi đến trang đăng nhập</a>
    </div>
</div>

<style>
    /* Wrapper for full-screen centering */
    .alert-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f8f9fa; /* Optional: light background color */
        margin: 0;
    }

    /* Alert styles */
    .alert-success-custom {
        background: #e9f7ef;
        border: 1px solid #d4edda;
        color: #155724;
        border-radius: 10px;
        padding: 20px 25px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        font-family: 'Arial', sans-serif;
        max-width: 400px; /* Limit width */
        text-align: center;
    }

    .alert-success-custom .alert-heading {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #0c6c49;
    }

    .alert-success-custom p {
        margin-bottom: 15px;
        font-size: 16px;
    }

    .alert-success-custom hr {
        border-top: 1px solid #c3e6cb;
    }

    /* Button styles */
    .btn-primary-custom {
        background-color: #28a745;
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        transition: all 0.3s ease;
        text-decoration: none;
    }

    .btn-primary-custom:hover {
        background-color: #218838;
        color: #fff;
        text-decoration: none;
    }

    .btn-primary-custom:focus {
        outline: none;
        box-shadow: 0px 0px 5px rgba(0, 128, 0, 0.5);
    }
</style>
