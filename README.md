# Delta Force Fan Wiki

README này giới thiệu dự án theo tám mục: mục tiêu, bản demo, tính năng, cách chạy, cấu trúc, những gì đã rà soát, giới hạn và nguồn tham khảo. Dự án là mini wiki tiếng Việt do cộng đồng thực hiện, mang tính fan-made và phi thương mại.

## 1. Sản phẩm này là gì?

Đây là website tĩnh giới thiệu Delta Force bằng tiếng Việt. Người đọc có thể xem tổng quan các chế độ chơi, operator và bản đồ. Dự án phù hợp để tra cứu nhanh và làm nền tảng cho việc bổ sung nội dung wiki; hiện chưa có máy chủ, cơ sở dữ liệu hay chức năng tài khoản.

## 2. Demo

Hiện chưa có URL demo công khai được khai báo trong dự án. Có thể chạy website trên máy theo hướng dẫn ở mục 4. Các trang có ảnh chia sẻ mạng xã hội, nhưng thẻ `og:image` vẫn là giá trị chờ cập nhật URL sau khi website được triển khai.

## 3. Tính năng hiện có

- Trang chủ giới thiệu wiki và dẫn tới các phần nội dung.
- Trang chế độ chơi tóm tắt Warfare, Operations và Black Hawk Down.
- Trang operator liệt kê 18 nhân vật và lọc theo bốn lớp Assault, Engineer, Recon, Support. Bộ lọc được làm bằng HTML/CSS, không cần JavaScript.
- Trang bản đồ nhóm nội dung theo Operations, Hot Zone, Warfare, Detonation và Black Hawk Down; có ghi chú bản đồ đã rời vòng xoay.
- Giao diện có bố cục thích ứng theo kích thước màn hình, liên kết bỏ qua tới nội dung chính và trạng thái điều hướng bằng bàn phím.
- Ảnh giao diện được lưu trong dự án; hai font chữ được tải từ Google Fonts khi có kết nối mạng.

## 4. Cách mở hoặc chạy thử

Có thể mở `index.html` trực tiếp bằng trình duyệt. Để chạy qua máy chủ cục bộ (cần Python 3), mở terminal tại thư mục gốc dự án và chạy:

```bash
python -m http.server 8000
```

Sau đó mở <http://localhost:8000>. Dừng máy chủ bằng `Ctrl+C` trong cửa sổ terminal.

## 5. Cấu trúc thư mục

```text
.
├── index.html                 # Trang chủ
├── modes.html                 # Chế độ chơi
├── operators.html             # Operator và bộ lọc lớp
├── maps.html                  # Bản đồ và nguồn tham khảo
├── css/
│   └── style.css              # Giao diện dùng chung
├── assets/
│   └── images/
│       ├── brand/             # Logo và nhận diện
│       ├── hero/              # Hình đầu trang
│       ├── maps/              # Hình minh họa và ảnh bản đồ
│       ├── operators/         # Ảnh operator
│       └── social/            # Ảnh chia sẻ mạng xã hội
├── README.md
└── changelog.md               # Lịch sử thay đổi
```

Nội dung từng trang nằm trong file HTML tương ứng; kiểu dáng dùng chung nằm trong `css/style.css`. Thanh điều hướng và phần chân trang được viết trực tiếp trong từng trang nên cần cập nhật đồng bộ khi sửa.

## 6. Đã kiểm tra

Rà soát tĩnh nội dung dự án ngày 12/11/2026:

- Xác nhận có bốn trang HTML, một stylesheet dùng chung và thư mục ảnh.
- Đối chiếu README với nội dung trang: ba chế độ chơi, 18 operator và các nhóm bản đồ.
- Xác nhận bộ lọc operator được triển khai bằng radio input và CSS; không thấy thẻ `<script>` trong các trang HTML.
- Kiểm tra các trang bản đồ/operator có ghi nguồn tham khảo; ghi nhận trang chủ và trang chế độ chơi vẫn còn TODO về nguồn.
- Chưa chạy website trong trình duyệt, kiểm thử tự động hoặc kiểm tra trên nhiều kích thước màn hình trong lần rà soát này.

## 7. Giới hạn / Chưa kiểm tra

- Chưa có bản demo triển khai công khai, tìm kiếm, tài khoản hay dữ liệu lấy trực tiếp từ máy chủ.
- Nội dung game có thể thay đổi theo mùa. Nguồn và ngày đối chiếu hiện được ghi rõ ở trang bản đồ/operator; trang chủ và chế độ chơi cần bổ sung nguồn.
- URL ảnh Open Graph đang là placeholder cho tới khi có URL triển khai công khai.
- Font Google Fonts cần kết nối mạng; khi ngoại tuyến, trình duyệt sẽ dùng font dự phòng.
- Chưa kiểm tra hiển thị thực tế trên các trình duyệt, thiết bị hoặc công cụ hỗ trợ truy cập.

## 8. Nguồn và khai báo AI (nếu có)

**Nguồn tham khảo trong dự án**

- [Delta Force — trang chính thức](https://playdeltaforce.com/) và [Delta Force Garena Việt Nam](https://deltaforce.garena.vn/).
- Các nguồn về bản đồ được dẫn trực tiếp ở cuối [trang Bản đồ](maps.html), gồm HQ Tool Station và các thông báo mùa từ Delta Force/Garena. Trang này ghi ngày đối chiếu 12/11/2026.
- Nguồn về operator được dẫn ở cuối [trang Operator](operators.html), gồm danh sách operator và thông báo S12 Aurora của Garena.
- Trang chủ và trang chế độ chơi hiện chưa hoàn tất ghi nguồn; cần bổ sung khi cập nhật hoặc xác minh nội dung ở các trang đó.

**Khai báo AI:** README này được biên soạn với sự hỗ trợ của AI theo yêu cầu của người dùng. Kho mã hiện không ghi nhận nguồn gốc AI hay con người của các ảnh và nội dung game đã có, nên README không khẳng định chúng được tạo bằng AI.

Xem [changelog.md](changelog.md) để biết các mốc thay đổi đã được lưu trong lịch sử Git.
