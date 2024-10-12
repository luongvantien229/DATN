<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Db::table('roles')->insert([
            [
                'name' => 'Admin',
                'status' => '1'
            ],
            [
                'name' => 'User',
                'status' => 1
            ],
            [
                'name' => 'Manager',
                'status' => 1
            ]
        ]);

        DB::table('users')->insert([
            [
                'name' => 'User',
                'password' => bcrypt('user1234'),

                'address' => '',
                'email' => 'user@gmail.com',
                'phone' => '0975372345',
                'lock' => '0',
                'points' => '50',
                'image' => '',
                'role_id' => 2
            ],
            [
                'name' => 'Admin',
                'password' => bcrypt('admin1234'),

                'address' => '',
                'email' => 'admin@gmail.com',
                'phone' => '0975372345',
                'lock' => '0',
                'points' => '100',
                'image' => '',
                'role_id' => 1
            ],
            // [
            //     'name' => 'Doctor',
            //     'password' => bcrypt('doctor1234'),
            //     'address' => '',
            //     'email' => 'doctor@gmail.com',
            //     'phone' => '0975372345',
            //     'lock' => 'No',
            //     'points' => '100',
            //     'image' => '',
            //     'role_id' => 3
            // ],
            [
                'name' => 'Manager',
                'password' => bcrypt('manager1234'),

                'address' => '',
                'email' => 'manager@gmail.com',
                'phone' => '0975372345',
                'lock' => '0',
                'points' => '100',
                'image' => '',
                'role_id' => 3
            ]
        ]);

        Db::table('brands')->insert([
            [
                'name' => 'Pharmacity',
                'slug' => 'pharmacity',
                'image' => 'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240621025440-0-newlogopharmacity.png',
                'status' => '1'
            ],
            [
                'name' => 'Remos',
                'slug' => 'remos',
                'image' => 'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240617090803-0-Remos.png',
                'status' => '1'
            ],
            [
                'name' => '82X',
                'slug' => '82x',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/82X.png',
                'status' => '1'
            ],
            [
                'name' => 'Nature`S Way',
                'slug' => 'nature-s-way',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/80_Nature_way.png',
                'status' => '1'
            ],
            [
                'name' => 'L`oreal',
                'slug' => 'l-oreal',
                'image' => 'https://www.pharmacity.vn/thuong-hieu/loreal',
                'status' => '1'
            ],
            [
                'name' => 'Sanofi CHC import',
                'slug' => 'sanofi-chc-import',
                'image' => 'https://prod-cdn.pharmacity.io/e-com/images/product/20240703034117-0-Sanofi%20CHC.png',
                'status' => '1'
            ],
            [
                'name' => 'Nature Gift',
                'slug' => 'nature-gift',
                'image' => 'https://www.pharmacity.vn/thuong-hieu/nature-gift',
                'status' => '1'
            ],
            [
                'name' => 'Dr.Frei',
                'slug' => 'dr-frei',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/dr_frei.png',
                'status' => '1'
            ],
            [
                'name' => 'Greenbird',
                'slug' => 'greenbird',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/Greenbird.png',
                'status' => '1'
            ],
            [
                'name' => 'Goodhealth',
                'slug' => 'goodhealth',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/16_Goodhealth.png',
                'status' => '1'
            ],
            [
                'name' => 'Pharmacist Formulators',
                'slug' => 'pharmacist-formulators',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/PF_1.png',
                'status' => '1'
            ],
            [
                'name' => 'Henry Blooms',
                'slug' => 'henry-blooms',
                'image' => 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/brand-images/Henry_Blooms.png',
                'status' => '1'
            ],

        ]);

        $list_categories = ['Thuốc', 'Thực phẩm chức năng', 'Chăm sóc cá nhân', 'Chăm sóc sắc đẹp', 'Mẹ và bé', 'Thiết bị y tế'];
        $list_categories_images = [
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240311064426-0-Medicine.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240311064636-0-Functional%20food.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240311064636-0-Personal%20care.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240311064635-0-Beauty%20care.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240311064636-0-Mom&baby.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240311064636-0-Medical%20equipment.png'

        ];
        for ($i = 0; $i < count($list_categories); $i++) {
            // $slug = str_slug($list_categories[$i]); // Generate slug using a helper function
            $slug = Str::slug($list_categories[$i]);
            DB::table('categories')->insert(
                [
                    'name' => $list_categories[$i],
                    'slug' => $slug,
                    'sort_order' => $i,
                    'image' => $list_categories_images[$i],
                    'status' => 1,
                    'parent_id' =>  mt_rand(1, 3),
                    'showHome' => true
                ]
            );
        }

        // $list_sub_categories = [
        //     ['name' => 'Thuốc không kê đơn', 'parent' => 'Thuốc'],
        //     ['name' => 'Thuốc kê đơn', 'parent' => 'Thuốc'],
        //     ['name' => 'Chăm sóc sắc đẹp', 'parent' => 'Chăm sóc sắc đẹp'],
        //     ['name' => 'Nhóm tim mạch', 'parent' => 'Thuốc'],
        //     ['name' => 'Nhóm hô hấp', 'parent' => 'Thuốc'],
        //     ['name' => 'Vitamin tổng hợp và khoáng chất', 'parent' => 'Thực phẩm chức năng']
        // ];

        // $list_sub_categories_images = [
        //     'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223191727-0-P00126_5.png',
        //     'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223191446-0-P00218_1_l.png',
        //     'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223202521-0-P22606_1.png',
        //     'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223202411-0-P14461_1.png',
        //     'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223202316-0-P20156_1.png',
        //     'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223201820-0-P22621_1.png'
        // ];

        // // Lấy id của các danh mục cha
        // $list_categories_products = DB::table('categories')->pluck('name', 'id', );

        // for ($i = 0; $i < count($list_sub_categories); $i++) {
        //     $slug = Str::slug($list_sub_categories[$i]['name']);
        //     // $parent_category_name = $list_sub_categories[$i]['parent'];

        //     DB::table('sub_categories')->insert([
        //         'name' => $list_sub_categories[$i]['name'],
        //         'slug' => $slug,
        //         // 'category_id' => $parent_categories[$parent_category_name] ?? 1,
        //         'category_id' => mt_rand(1, count($list_categories_products)), // Lấy category_id theo danh mục cha
        //         'image' => $list_sub_categories_images[$i],
        //         'status' => 1,
        //         'showHome' => 'YES'
        //     ]);
        // }



        Db::table('product_types')->insert([
            [
                'name' => 'Thuốc vĩ',
                'slug' => 'thuoc-vi',
                'status' => '1'
            ],
            [
                'name' => 'Thuốc nước',
                'slug' => 'thuoc-nuoc',
                'status' => '1'
            ],
            [
                'name' => 'Thuốc nhuyễn',
                'slug' => 'thuoc-nhuyen',
                'status' => '1'
            ],
        ]);

        $faker = Faker::create();

        // for ($i = 0; $i < 10; $i++) {
        //     $name = $faker->word . ' ' . $faker->randomElement(['Product', 'Item', 'Goods']);
        //     $slug = Str::slug($name);
        //     $price = $faker->numberBetween(10000, 100000); // Giá ngẫu nhiên từ 100,000 VNĐ đến 10,000,000 VNĐ
        //     $numericPrice = str_replace(['.', ' ₫'], '', $price);  // Định dạng giá theo kiểu VNĐ
        //     $description = $faker->sentence(20); // Mô tả ngẫu nhiên
        //     $brand_id = mt_rand(1, 5); // Brand id ngẫu nhiên, bạn có thể điều chỉnh theo thực tế
        //     $category_id = mt_rand(1, 6); // Category id ngẫu nhiên

        //     $favorite = mt_rand(0, 1); // 0 hoặc 1 cho yêu thích
        //     $view = mt_rand(100, 10000); // Số lượng view ngẫu nhiên
        //     $sku = strtoupper(Str::random(10)); // Tạo mã SKU ngẫu nhiên
        //     $product_type_id = mt_rand(1, 3); // Id của loại sản phẩm ngẫu nhiên
        //     $image = $faker->imageUrl(300, 300, 'products', true); // Link ảnh giả lập
        //     $uses = $faker->sentence(10); // Công dụng sản phẩm
        //     $user_manual = $faker->paragraph(2); // Hướng dẫn sử dụng
        //     $ingredient = $faker->words(5, true); // Thành phần sản phẩm
        //     $barcode = $faker->ean13(); // Mã barcode
        //     $track_qty = mt_rand(0, 1); // Theo dõi số lượng: 0 - không, 1 - có
        //     $qty = mt_rand(1, 100); // Số lượng sản phẩm
        //     $status = 1; // Trạng thái: 1 - active, 0 - inactive

        //     DB::table('products')->insert([
        //         'name' => $name,
        //         'slug' => $slug,
        //         'price' => $numericPrice, // Ghi giá đã định dạng
        //         'description' => $description,
        //         'brand_id' => $brand_id,
        //         'category_id' => $category_id,

        //         'favorite' => $favorite,
        //         'view' => $view,
        //         'sku' => $sku,
        //         'product_type_id' => $product_type_id,
        //         'image' => $image,
        //         'uses' => $uses,
        //         'user_manual' => $user_manual,
        //         'ingredient' => $ingredient,
        //         'barcode' => $barcode,
        //         'track_qty' => $track_qty,
        //         'qty' => $qty,
        //         'status' => $status,
        //     ]);
        // }

        $list_products = [
            'Dung dịch xịt mũi người lớn XISAT (xanh) giúp vệ sinh mũi, ngừa sổ mũi (75ml)',
            'Viên nén Tiffy trị các triệu chứng cảm thông thường (25 vỉ x 4 viên)',
            'Viên uống Bình Vị Thái Minh hỗ trợ giảm acid dịch vị (Hộp 20 viên)',
            'Thuốc nhỏ mắt Osla mỏi mắt, khô mắt, phòng ngừa các bệnh về mắt (chai 15ml)',
            'Siro ăn ngon plus cho trẻ từ 2 tuổi Ích Nhi (Chai 100ml)',
            'THAI MINH Duong Nao (Hop 2Vi * 10Vien)',
            'Viên ngậm Strepsils Original goi (mau do) trị đau họng (100 gói x 2 viên)',
            'Gel Salonpas giảm đau cơ, đau lưng, đau khớp, cứng vai (tuýp 30g)',
            'Viên uống Thái Minh Tràng Phục Linh Plus hỗ trợ ngăn ngừa hội chứng ruột kích thích (2 vỉ x 10 viên)',
            'Viên nén Lessenol 500mg giảm đau, hạ sốt (10 vỉ x 10 viên)'
        ];

        $list_product_images = [
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P08799.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P00424.png',
            'https://prod-cdn.pharmacity.io/e-com/images/product/500x500/20240802071626-0-P19531_01.jpg',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P00541.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/20240906030300-0-P26284.jpg',
            'https://prod-cdn.pharmacity.io/e-com/images/product/500x500/20240802072040-0-P26478_01.jpg',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P00207.png',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P00072.png',
            'https://prod-cdn.pharmacity.io/e-com/images/product/500x500/20240802072319-0-P04081_01.jpg',
            'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18687_1_l.webp',
        ];


        for ($i = 0; $i < count($list_products); $i++) {
            $slug = Str::slug($list_products[$i]);

            $price = $faker->numberBetween(10000, 100000); // Giá ngẫu nhiên từ 100,000 VNĐ đến 10,000,000 VNĐ

            $description = $faker->sentence(20); // Mô tả ngẫu nhiên
            $brand_id = mt_rand(1, 5); // Brand id ngẫu nhiên, bạn có thể điều chỉnh theo thực tế
            $category_id = mt_rand(1, 6); // Category id ngẫu nhiên
            $favorite = mt_rand(0, 1); // 0 hoặc 1 cho yêu thích
            $view = mt_rand(100, 10000); // Số lượng view ngẫu nhiên
            $sku = strtoupper(Str::random(10)); // Tạo mã SKU ngẫu nhiên
            $product_type_id = mt_rand(1, 3); // Id của loại sản phẩm ngẫu nhiên
            $image = $list_product_images[$i]; // Link ảnh giả lập
            $uses = $faker->sentence(10); // Công dụng sản phẩm
            $user_manual = $faker->paragraph(2); // Hướng dẫn sử dụng
            $ingredient = $faker->words(5, true); // Thành phần sản phẩm
            $barcode = $faker->ean13(); // Mã barcode
            $track_qty = mt_rand(0, 1); // Theo dõi số lượng: 0 - không, 1 - có
            $qty = mt_rand(1, 100); // Số lượng sản phẩm
            $status = 1; // Trạng thái: 1 - active, 0 - inactive
            DB::table('products')->insert([
                'name' => $list_products[$i],
                'slug' => $slug,
                'price' => $price, // Ghi giá đã định dạng
                'description' => $description,
                'brand_id' => $brand_id,
                'category_id' => $category_id,
                'favorite' => $favorite,
                'view' => $view,
                'sku' => $sku,
                'product_type_id' => $product_type_id,
                'image' => $image,
                'uses' => $uses,
                'user_manual' => $user_manual,
                'ingredient' => $ingredient,
                'barcode' => $barcode,
                'track_qty' => $track_qty,
                'qty' => $qty,
                'status' => $status,

            ]);
        }

        // Function to replicate slug generation in PHP similar to the JavaScript version
        // function str_slug($text)
        // {
        //     // Convert to lowercase
        //     $text = mb_strtolower($text);

        //     // Replace accented characters with non-accented equivalents
        //     $text = preg_replace("/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/", 'a', $text);
        //     $text = preg_replace("/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/", 'e', $text);
        //     $text = preg_replace("/i|í|ì|ỉ|ĩ|ị/", 'i', $text);
        //     $text = preg_replace("/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/", 'o', $text);
        //     $text = preg_replace("/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/", 'u', $text);
        //     $text = preg_replace("/ý|ỳ|ỷ|ỹ|ỵ/", 'y', $text);
        //     $text = preg_replace("/đ/", 'd', $text);

        //     // Remove special characters
        //     $text = preg_replace("/[\'\"\`\~\!\@\#\$\%\^\&\*\(\)\+\=\[\]\{\}\|\\\;\:\,\.\/\?\>\<\-\_]/", '', $text);

        //     // Replace spaces with dashes
        //     $text = preg_replace('/\s+/', '-', $text);

        //     // Replace multiple dashes with a single dash
        //     $text = preg_replace('/-+/', '-', $text);

        //     // Trim dashes from the beginning and end
        //     $text = trim($text, '-');

        //     return $text;
        // }



    }
}
