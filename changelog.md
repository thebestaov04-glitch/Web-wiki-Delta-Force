# Delta Force Fan Wiki — Nhật ký thay đổi

Tài liệu này tổng hợp các mốc trong lịch sử Git hiện có cùng các cập nhật tài liệu và giao diện đến ngày 14/11/2026. Lịch sử Git của dự án hiện có hai commit mã nguồn ban đầu; các bước phát triển trung gian chưa được lưu lại đầy đủ.

## Update thay đổi nhân vật 1.1 — 14/11/2026

- Chuyển trang Nhân vật từ danh sách thẻ tĩnh sang giao diện chọn operator: danh sách ở một bên, hồ sơ chi tiết ở bên còn lại.
- Bổ sung hồ sơ cho cả 18 operator. Khi chọn nhân vật, trang hiển thị tên thật, chức vụ, mùa ra mắt, tóm tắt, gợi ý lối chơi và đầy đủ bốn mục kỹ năng: trang bị chiến thuật, hai thiết bị và đặc tính.
- Việt hóa tên bốn chức vụ thành Đột kích, Công binh, Trinh sát và Hỗ trợ; giữ tên tiếng Anh cạnh tên tiếng Việt để tiện tra cứu.
- Thêm bộ lọc theo chức vụ, thao tác chọn bằng bàn phím và nút quay lại danh sách trên màn hình nhỏ.
- Chuyển ảnh nhân vật trong danh sách và hồ sơ sang khung chân dung 3:4. Ảnh nguồn nằm ngang được cắt quanh nhân vật để đồng nhất cách hiển thị.
- Bổ sung nguồn tra cứu ngay trong từng hồ sơ. 17 nhân vật có trang operator trên Liquipedia; Martelo là operator mới của mùa Aurora nên hồ sơ dẫn nguồn thông báo và bản vá chính thức cùng hướng dẫn kỹ năng hiện có.
- Thêm `js/operators.js` để lưu dữ liệu hồ sơ và xử lý chọn nhân vật, lọc chức vụ, cập nhật nội dung và cuộn giao diện cho màn hình nhỏ. Không cần máy chủ hay bước build.

### Tệp liên quan

- `operators.html` — danh sách, bộ lọc và vùng hiển thị hồ sơ.
- `css/style.css` — bố cục hai phần, khung ảnh chân dung và giao diện thích ứng.
- `js/operators.js` — dữ liệu tiếng Việt và tương tác hồ sơ.
- `README.md` — mô tả tính năng, cấu trúc và nguồn tham khảo được cập nhật.

## 12/11/2026

### Bổ sung tài liệu dự án

- Viết lại `README.md` để mô tả mục tiêu, các trang, cấu trúc thư mục và cách chạy website tĩnh.
- Thêm `changelog.md` để ghi lại các mốc phát triển có thể xác minh.

### `c1aa6a1` — Add files via upload

- Thêm bộ website mini wiki tiếng Việt gồm trang chủ, trang chế độ chơi, trang operator và trang bản đồ.
- Thêm stylesheet dùng chung tại `css/style.css`.
- Thêm bộ ảnh thương hiệu, hero, operator, bản đồ, favicon và ảnh xem trước mạng xã hội trong `assets/images/`.
- Nội dung hiện tại bao gồm ba chế độ chơi, danh sách 18 operator có bộ lọc lớp, và các nhóm bản đồ theo chế độ.

### `1f1b722` — Initial commit

- Khởi tạo lịch sử Git của dự án.
- Thêm `README.md` ban đầu với tên dự án `Web-wiki-Delta-Force`.

## Trạng thái hiện tại

Tại mốc cập nhật 14/11/2026, dự án là website tĩnh gồm bốn trang HTML, một stylesheet chung và JavaScript phía trình duyệt cho hồ sơ operator tương tác. Không có cấu hình build hoặc phụ thuộc thư viện trong cây dự án. Các trang vẫn có chỗ chờ URL ảnh Open Graph công khai; cập nhật giá trị này sau khi có địa chỉ triển khai chính thức.

