# Delta Force Fan Wiki

README này giới thiệu dự án, cách chạy website và các tính năng chính, trong đó có bản cập nhật hồ sơ nhân vật 1.1. Dự án là mini wiki tiếng Việt do cộng đồng thực hiện, mang tính fan-made và phi thương mại.

## 1. Sản phẩm này là gì?

Đây là website tĩnh giới thiệu Delta Force bằng tiếng Việt. Người đọc có thể xem tổng quan các chế độ chơi, operator và bản đồ. Dự án phù hợp để tra cứu nhanh và làm nền tảng cho việc bổ sung nội dung wiki; hiện chưa có máy chủ, cơ sở dữ liệu hay chức năng tài khoản.

## 2. Demo

Hiện chưa có URL demo công khai được khai báo trong dự án. Có thể chạy website trên máy theo hướng dẫn ở mục 4. Các trang có ảnh chia sẻ mạng xã hội, nhưng thẻ `og:image` vẫn là giá trị chờ cập nhật URL sau khi website được triển khai.

## 3. Tính năng hiện có

- Trang chủ giới thiệu wiki và dẫn tới các phần nội dung.
- Trang chế độ chơi tóm tắt Warfare, Operations và Black Hawk Down.
- Trang operator có danh sách 18 nhân vật, bộ lọc theo chức vụ và hồ sơ tương tác cho từng nhân vật. Chọn một operator để xem tên thật, lớp nhân vật, mùa ra mắt, gợi ý lối chơi và bộ kỹ năng gồm trang bị chiến thuật, hai thiết bị và đặc tính.
- Chức vụ hiển thị bằng tiếng Việt kèm tên gốc: Đột kích (Assault), Công binh (Engineer), Trinh sát (Recon) và Hỗ trợ (Support). Tên kỹ năng giữ nguyên tiếng Anh để tiện tra cứu; phần mô tả được Việt hóa.
- Ảnh nhân vật ở danh sách và hồ sơ chi tiết được hiển thị theo khung chân dung 3:4. Ảnh nguồn nằm ngang được cắt quanh nhân vật.
- Có thể chọn operator bằng bàn phím; trên màn hình nhỏ, hồ sơ có nút quay lại danh sách.
- Trang bản đồ nhóm nội dung theo Operations, Hot Zone, Warfare, Detonation và Black Hawk Down; có ghi chú bản đồ đã rời vòng xoay.
- Giao diện có bố cục thích ứng theo kích thước màn hình, liên kết bỏ qua tới nội dung chính và trạng thái điều hướng bằng bàn phím.
- Ảnh giao diện được lưu trong dự án; hai font chữ được tải từ Google Fonts khi có kết nối mạng.

## 4. Cách mở hoặc chạy

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
├── operators.html             # Danh sách, bộ lọc và hồ sơ operator
├── maps.html                  # Bản đồ và nguồn tham khảo
├── css/
│   └── style.css              # Giao diện dùng chung
├── js/
│   └── operators.js           # Dữ liệu và tương tác hồ sơ operator
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

Nội dung từng trang nằm trong file HTML tương ứng; kiểu dáng dùng chung nằm trong `css/style.css`. Dữ liệu và tương tác hồ sơ operator nằm trong `js/operators.js`. Thanh điều hướng và phần chân trang được viết trực tiếp trong từng trang nên cần cập nhật đồng bộ khi sửa.

## 6. Bản cập nhật hồ sơ nhân vật 1.1

Ngày 14/11/2026, trang Nhân vật được bổ sung hồ sơ tương tác cho toàn bộ 18 operator. Dữ liệu gồm tên thật, chức vụ, mùa ra mắt, mô tả vai trò, gợi ý lối chơi và từng kỹ năng; phần giải thích dùng tiếng Việt, tên kỹ năng giữ bằng tiếng Anh.

Mỗi hồ sơ có liên kết nguồn tham khảo riêng. Liquipedia hiện có trang operator cho 17 nhân vật trong danh sách; Martelo là nhân vật mới của mùa Aurora nên dùng thêm thông báo và bản cập nhật chính thức cùng hướng dẫn kỹ năng. Giao diện hỗ trợ lọc theo chức vụ, chọn bằng bàn phím và quay lại danh sách trên màn hình nhỏ.

Ảnh trong danh sách và hồ sơ cùng dùng khung chân dung 3:4; ảnh nguồn ngang được cắt quanh nhân vật. Chi tiết thay đổi nằm trong [changelog.md](changelog.md).

## 7. Giới hạn / Chưa kiểm tra

- Chưa có bản demo triển khai công khai, tìm kiếm, tài khoản hay dữ liệu lấy trực tiếp từ máy chủ.
- Nội dung game có thể thay đổi theo mùa. Trang Nhân vật liên kết nguồn tại từng hồ sơ; trang chủ và trang chế độ chơi vẫn cần bổ sung nguồn cho nội dung tương ứng.
- URL ảnh Open Graph đang là placeholder cho tới khi có URL triển khai công khai.
- Font Google Fonts cần kết nối mạng; khi ngoại tuyến, trình duyệt sẽ dùng font dự phòng.
- Chưa kiểm tra hiển thị thực tế trên các trình duyệt, thiết bị hoặc công cụ hỗ trợ truy cập.

## 8. Nguồn và khai báo AI (nếu có)

**Nguồn tham khảo trong dự án**

- [Delta Force — trang chính thức](https://playdeltaforce.com/) và [Delta Force Garena Việt Nam](https://deltaforce.garena.vn/).
- Các nguồn về bản đồ được dẫn trực tiếp ở cuối [trang Bản đồ](maps.html), gồm HQ Tool Station và các thông báo mùa từ Delta Force/Garena. Trang này ghi ngày đối chiếu 12/11/2026.
- Nguồn operator được dẫn tại từng hồ sơ trong [trang Nhân vật](operators.html), gồm các trang operator trên Liquipedia. Với Martelo mới ra mắt, trang dùng thêm [thông báo mùa Aurora](https://deltaforce.garena.com/en/news/announcement/STZAUY), [bản cập nhật ngày 12/11](https://deltaforce.garena.com/en/news/all/XZSNPX) và các hướng dẫn kỹ năng hiện có.
- Trang chủ và trang chế độ chơi hiện chưa hoàn tất ghi nguồn; cần bổ sung khi cập nhật hoặc xác minh nội dung ở các trang đó.

**Khai báo AI:** README này được biên soạn với sự hỗ trợ của AI theo yêu cầu của người dùng. Kho mã hiện không ghi nhận nguồn gốc AI hay con người của các ảnh và nội dung game đã có, nên README không khẳng định chúng được tạo bằng AI.

Xem [changelog.md](changelog.md) để biết các mốc thay đổi đã được lưu trong lịch sử Git.
