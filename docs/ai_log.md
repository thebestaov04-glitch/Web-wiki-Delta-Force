# Nhật ký hỗ trợ của AI

**Dự án:** Delta Force Fan Wiki  
**Tệp:** `docs/ai_log.md`<br>
**Cập nhật lần cuối:** 25/11/2026

## Mục đích và giới hạn

Nhật ký này ghi các phần việc AI đã hỗ trợ mà có thể đối chiếu với yêu cầu trong hội thoại hoặc nội dung kho mã. Nhật ký không xác nhận AI là tác giả của toàn bộ website, dữ liệu operator, hình ảnh hoặc tài sản game. Những gì chưa có hồ sơ nguồn gốc được ghi là chưa xác định, không suy đoán.

Website chính hiện vẫn gồm các trang HTML/CSS và JavaScript trong `operators.html`. Các mục bên dưới tóm tắt việc AI hỗ trợ tài liệu và chỉnh sửa giao diện đã được ghi nhận; chúng không phải nhật ký đầy đủ mọi hoạt động của dự án.

## Nhật ký theo ngày

### 25/11/2026 — Viết lại README và bổ sung cách dùng GitHub

Theo yêu cầu của chủ dự án, AI đã:

- Rà soát các trang và cấu trúc thư mục, sau đó viết lại README để người đọc hiểu ba chế độ được giới thiệu và cách đi giữa bốn trang wiki.
- Bổ sung cách tải repo, mở trang tại chỗ, chạy máy chủ tĩnh bằng Python và tùy chọn cấu hình GitHub Pages từ nhánh `main` cùng thư mục gốc.
- Bổ sung quy trình fork, chỉnh nội dung có nguồn và gửi Pull Request.
- Ghi rõ repo chưa có tệp `LICENSE` để người đọc không hiểu việc xem mã công khai là giấy phép tái sử dụng nội dung.
- Giữ nguyên phần nguồn tham khảo và khai báo AI trước đó trong README theo yêu cầu của chủ dự án.

### 25/11/2026 — Rà soát changelog, nhật ký AI và chỉ mục bằng chứng

Theo yêu cầu của chủ dự án, AI đã:

- Đối chiếu ba tài liệu với HTML/CSS, danh sách tệp và lịch sử Git hiện có.
- Mở rộng `changelog.md` để mô tả kiến trúc tĩnh hiện tại và các mốc triển khai có thể đối chiếu từ commit.
- Chỉnh `docs/evidence-index.md` để mô tả vị trí thực tế của nội dung và cách trang operator hoạt động; thay các tham chiếu lỗi thời tới `js/operators.js` bằng `operators.html`.
- Mở rộng nhật ký này để ghi phạm vi hỗ trợ, nguồn đã được dẫn trong dự án và giới hạn của việc kiểm chứng.
- Chỉ cập nhật tài liệu Markdown trong lượt rà soát này; không sửa HTML, CSS, JavaScript ứng dụng hay ảnh.

**Cơ sở rà soát:** các tệp hiện có trong repo, trang HTML/CSS, liên kết nguồn đặt trong website và lịch sử Git tới commit `856870a` ngày 25/11/2026. Đây là rà soát nội bộ mã nguồn; các bài báo game không được tra cứu lại trong lượt tài liệu này.

### 17/11/2026 — Nguồn cho nội dung và bố cục Chế độ chơi

Các phần việc đã được ghi nhận tại lần cập nhật website này:

- Đọc cấu trúc và nội dung website để lập chỉ mục nguồn theo trang.
- Tra cứu nguồn chính thức của Garena/Delta Force để gắn tham khảo cho thông tin phát hành và mô tả các chế độ chơi.
- Soạn `docs/evidence-index.md` và nhật ký AI.
- Cập nhật phần giới thiệu Trang chủ và Chế độ chơi; thêm liên kết nguồn và ngày đối chiếu 17/11/2026.
- Tạo các mục giới thiệu có ảnh cho Warfare, Operations và Black Hawk Down bằng ảnh đã có trong dự án; chỉ cập nhật HTML/CSS, không thêm JavaScript.
- Thêm ảnh nền người dùng cung cấp tại `assets/images/backgrounds/site-background.png` và đặt làm nền chung. Ảnh được người dùng cung cấp trong lần cập nhật đó, không phải ảnh được AI tạo theo ghi nhận có sẵn.
- Gỡ các giá trị Open Graph dạng `[Cần điền]` vì chưa có URL triển khai để tạo đường dẫn ảnh tuyệt đối.
- Cập nhật README và changelog để mô tả những thay đổi này.

## Nguồn đã được đối chiếu hoặc tham chiếu

Trong lần làm nội dung ngày 17/11/2026, nhật ký ghi nhận việc dùng các nguồn sau:

- [Garena: thông báo ra mắt Delta Force tại Việt Nam](https://deltaforce.garena.vn/news/tat-ca/garena-delta-force-chinh-thuc-ra-mat-o-viet-nam)
- [Garena: hướng dẫn Chiến Trường](https://deltaforce.garena.vn/news/chien-truong/huong-dan-chien-truong)
- [Garena: hướng dẫn Chiến Dịch](https://deltaforce.garena.vn/news/chien-dich/huong-dan-chien-dich)
- [Trang Delta Force Garena Việt Nam](https://deltaforce.garena.vn/) — được dùng để tham khảo phần mô tả Black Hawk Down và bối cảnh Mogadishu.

Khi viết README ngày 25/11/2026, hướng dẫn chính thức của GitHub được tham khảo để mô tả cách cấu hình Pages và giải thích việc cấp phép kho mã:

- [GitHub Pages: cấu hình nguồn xuất bản](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Docs: cấp phép kho mã](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

Danh mục đầy đủ hơn về nguồn gameplay, bản đồ và operator đang nằm trong `docs/evidence-index.md`; các liên kết operator cụ thể cũng xuất hiện ngay trong hồ sơ trên `operators.html`.

## Ghi chú về nguồn gốc và độ chắc chắn

- Nhật ký 17/11/2026 và lần sửa tài liệu 25/11/2026 không đủ hồ sơ để xác định ai tạo ra từng ảnh operator/bản đồ, logo, hoặc mọi mô tả game đã tồn tại trước đó.
- Ảnh nền tại `assets/images/backgrounds/site-background.png` được ghi nhận là ảnh người dùng cung cấp. Không gán cùng nguồn gốc đó cho những ảnh còn lại.
- Một số hồ sơ operator dùng Liquipedia hoặc hướng dẫn cộng đồng; đây là tài liệu thứ cấp. Trang operator gắn nguồn tại từng hồ sơ để người đọc tự đối chiếu.
- Thông tin trò chơi có thể đổi theo mùa và bản vá. Việc dẫn nguồn không đồng nghĩa toàn bộ thông tin đã được kiểm định độc lập hoặc sẽ luôn chính xác về sau.
- Nhật ký không xác nhận quyền cấp phép của ảnh/logo/tài sản Delta Force; xem ghi chú quyền sử dụng trong README và chỉ mục bằng chứng.

## Việc còn lại khi website được xuất bản

Mã nguồn hiện có ảnh chia sẻ `assets/images/social/og-cover.svg` nhưng chưa khai báo URL `og:image` tuyệt đối trong các trang. Khi chủ dự án chọn tên miền hoặc xuất bản website, có thể cập nhật thẻ chia sẻ bằng URL công khai chính xác. Nhật ký này không xác nhận GitHub Pages đã được bật hoặc website đã có URL demo công khai.
