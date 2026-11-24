# Delta Force Fan Wiki — Nhật ký thay đổi

Tài liệu này ghi các mốc phát triển có thể đối chiếu với lịch sử Git và các tệp hiện có trong kho mã. Những commit thuộc cùng một giai đoạn được tóm tắt chung để giúp người đọc theo dõi website được hình thành và thay đổi ra sao.

## Website được xây dựng như thế nào

Phiên bản hiện tại là một website tĩnh, gồm bốn trang HTML và một stylesheet dùng chung:

- `index.html` là trang vào chính; các liên kết điều hướng mở trực tiếp `modes.html`, `operators.html` và `maps.html`. Website không dùng router phía máy khách.
- Nội dung từng trang được viết trực tiếp trong HTML. Thanh điều hướng và chân trang lặp lại ở từng trang.
- `css/style.css` định nghĩa giao diện chung, nền, thành phần và các bố cục thích ứng theo kích thước màn hình.
- Danh sách operator và bộ lọc nằm trong HTML của `operators.html`. Cùng tệp đó có một thẻ `<script>` chứa dữ liệu hồ sơ và JavaScript dựng hồ sơ khi người dùng chọn operator. Mã hiện tại lọc theo bốn chức vụ, hỗ trợ chọn bằng bàn phím và có nút quay lại danh sách trên màn hình nhỏ.
- Ảnh logo, nền, nhân vật và bản đồ được lưu cục bộ trong `assets/images/`. Hai phông Barlow Condensed và Inter được tải từ Google Fonts khi có kết nối mạng.
- Không có máy chủ ứng dụng, cơ sở dữ liệu, trình quản lý gói, thư viện giao diện hay bước biên dịch trong kho mã. Có thể mở `index.html` trực tiếp hoặc phục vụ thư mục gốc bằng máy chủ tĩnh. GitHub Pages có thể xuất bản thư mục gốc nếu chủ kho bật cấu hình Pages; changelog này không khẳng định website đã được triển khai công khai.

Nội dung game được biên tập thủ công từ nguồn tham khảo, không được tải trực tiếp từ API. Khi cập nhật mùa mới, cần sửa nội dung HTML hoặc dữ liệu operator, cập nhật liên kết nguồn/ngày đối chiếu liên quan, rồi ghi mốc thay đổi tại đây.

## 25/11/2026 — Rà soát tài liệu dự án

- Mở rộng changelog để mô tả kiến trúc website hiện tại và ghi lại các mốc có thể đối chiếu với Git.
- Rà lại `docs/ai_log.md` và `docs/evidence-index.md` theo cấu trúc mã hiện tại; chỉnh chỉ mục để trỏ tới JavaScript nhúng trong `operators.html`, không còn trỏ tới tệp `js/operators.js` đã bị xóa.
- Tách dữ kiện về game, cách website hiển thị dữ liệu và giới hạn nguồn thành các phần riêng trong chỉ mục bằng chứng.
- Đây là đợt cập nhật tài liệu; không sửa HTML, CSS, ảnh hoặc hành vi của website.

## 25/11/2026 — Làm rõ README cho người xem và người đóng góp

- Viết lại README theo hướng giới thiệu mini wiki, giải thích ba trải nghiệm Warfare, Operations và Black Hawk Down, rồi chỉ đường tới từng trang.
- Bổ sung cách tải mã nguồn, mở website trên máy, chạy máy chủ cục bộ bằng Python và cấu hình GitHub Pages từ nhánh `main` / thư mục gốc.
- Thêm hướng dẫn fork, sửa nội dung, đính kèm nguồn và gửi Pull Request.
- Giữ nguyên nội dung nguồn tham khảo và khai báo AI vốn có trong README theo yêu cầu của chủ dự án.
- Ghi rõ kho mã chưa có tệp `LICENSE`; không gán giấy phép mã nguồn mở cho ảnh, logo hay thương hiệu của game.

## 24/11/2026 — Điều chỉnh cho màn hình và thiết bị hẹp

**Commit:** `453ee40` — `toi uu giao dien cho cac dong may`

- Điều chỉnh `css/style.css` để trang chủ, thanh điều hướng và các thẻ nội dung thích ứng tốt hơn với chiều rộng nhỏ.
- Dùng kích thước hero co giãn theo viewport, cho phép phần thân trang co nhỏ, và chuyển điều hướng thành lưới hai cột ở màn hình rất hẹp.
- Giới hạn hiệu ứng hover cho thiết bị có con trỏ phù hợp; tiếp tục tôn trọng thiết lập giảm chuyển động của hệ điều hành.
- Thay đổi này tập trung vào CSS, không thêm phụ thuộc hoặc bước build.

## 22/11/2026 — Đưa tương tác operator vào cùng tệp HTML

**Commit:** `6777cd1` — `bo javascript`

- Chuyển dữ liệu 18 hồ sơ operator và mã tương tác từ `js/operators.js` vào thẻ `<script>` trong `operators.html`.
- Xóa JavaScript ngoài và thư mục `js/` khỏi phiên bản hiện tại. Dữ liệu hồ sơ, dựng chi tiết, lọc chức vụ, chọn operator và cuộn tới hồ sơ cùng nằm trong trang Nhân vật.
- Website tiếp tục chạy mà không cần máy chủ ứng dụng hay quá trình biên dịch.

## 22/11/2026 — Dọn ảnh không còn được sử dụng

**Commit:** `cb6831b` — `xoa bo nhung hinh anh khong lien quan`

- Xóa 11 ảnh SVG cũ không còn được các trang hiện tại sử dụng: dấu hiệu nhận diện/hero cũ và các hình bản đồ SVG thử nghiệm.
- Giữ lại những ảnh đang được HTML tham chiếu trong `assets/images/`.

## 17/11/2026 — Dùng ảnh nền chung cho toàn website

**Commit:** `4725131` — `them anh lam backgroud toan website`

- Thêm ảnh do người dùng cung cấp tại `assets/images/backgrounds/site-background.png`.
- Dùng ảnh làm nền chung, phủ lớp tối và giữ nền cố định khi cuộn để nội dung ở các trang có cùng phong cách.
- Điều chỉnh CSS và bỏ hình nền hero riêng ở Trang chủ. Ảnh nền này được người dùng cung cấp; mốc này không ghi nhận ảnh là ảnh do AI tạo.

## 17/11/2026 — Bổ sung hình ảnh cho phần Chế độ chơi

**Commit:** `6321190` — `Update 2 sua doi phan che do choi`

- Thay các đoạn giới thiệu văn bản đơn giản bằng ba thẻ nội dung có hình cho Warfare, Operations và Black Hawk Down.
- Dùng lại ảnh Trench Lines, Zero Dam và Mogadishu đã có trong dự án.
- Bổ sung mục tiêu và điểm nổi bật cho từng chế độ; bố trí ảnh cạnh nội dung trên màn hình rộng và đặt ảnh phía trên nội dung trên màn hình nhỏ.
- Bổ sung nguồn tham khảo và văn bản thay thế cho hình. Chỉ thay đổi HTML/CSS, không thêm JavaScript.

## 17/11/2026 — Ghi nhận nguồn và phạm vi hỗ trợ AI

**Commit:** `81b8b4a` — `update file docs/ai_log.md va evidence-index.md`

- Tạo `docs/evidence-index.md` để nối nội dung game với trang HTML hiển thị, vị trí dữ liệu và nguồn tham khảo.
- Tạo `docs/ai_log.md` để ghi phạm vi AI đã hỗ trợ và những gì chưa thể xác định về nguồn gốc nội dung/ảnh có sẵn.
- Cập nhật nguồn và ngày đối chiếu ở Trang chủ/Chế độ chơi; gỡ các giá trị Open Graph dạng placeholder vì chưa có URL công khai để tạo URL ảnh tuyệt đối.
- Các nguồn game được dùng để tóm lược nội dung, không phải bằng chứng xác minh độc lập mọi kỹ năng, hình ảnh hay quyền sử dụng.

## 14/11/2026 — Hồ sơ operator tương tác phiên bản 1.1

**Commit chính:** `2c66571` — `update chinh sua nhan vat 1.1`; điều chỉnh ảnh chân dung tại `b98bef6`.

- Chuyển trang Nhân vật từ danh sách thẻ tĩnh sang giao diện có danh sách chọn và vùng hồ sơ chi tiết.
- Thêm hồ sơ cho 18 operator: tên thật, chức vụ, mùa ra mắt, mô tả ngắn, gợi ý lối chơi và bốn mục khả năng gồm trang bị chiến thuật, hai thiết bị và đặc tính.
- Thêm bộ lọc bốn chức vụ: Assault, Engineer, Recon và Support; hiển thị nhãn tiếng Việt bên cạnh tên tiếng Anh.
- Hỗ trợ chọn operator bằng bàn phím, hiển thị nguồn theo từng hồ sơ và nút quay lại danh sách trên màn hình nhỏ.
- Chuẩn hóa vùng ảnh thành khung chân dung 3:4; ảnh nguồn nằm ngang được cắt để vừa khung.
- Ở giai đoạn này, JavaScript nằm riêng trong `js/operators.js`. Nó được chuyển vào `operators.html` ở mốc 22/11/2026.

## 12/11/2026 — Khởi tạo mini wiki

**Các commit nền tảng:** `1f1b722` (khởi tạo repo), `c1aa6a1` (thêm bộ website), `19ea0ce` (README và changelog ban đầu).

- Tạo bốn trang HTML: Trang chủ, Chế độ chơi, Nhân vật và Bản đồ; thêm stylesheet dùng chung tại `css/style.css`.
- Thêm logo, favicon, hình minh họa chế độ/bản đồ, 18 ảnh operator và ảnh xem trước mạng xã hội vào `assets/images/`.
- Dựng nội dung ban đầu gồm phần tóm tắt các chế độ, danh sách operator có bộ lọc chức vụ và các nhóm bản đồ.
- Chưa có framework, package manager, API, tài khoản hay cơ sở dữ liệu.

## Tình trạng được ghi nhận

Tại lần rà soát tài liệu ngày 25/11/2026, repo có bốn trang HTML, một stylesheet, ảnh cục bộ và JavaScript nhúng trong `operators.html`. Lịch sử Git hiện có các mốc từ 12/11 đến 25/11/2026; một số commit là merge hoặc điều chỉnh nhỏ nên changelog nhóm theo chủ đề thay vì diễn giải từng dòng commit.
