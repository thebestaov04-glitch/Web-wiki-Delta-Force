# Chỉ mục bằng chứng, nguồn tham khảo và cách website hoạt động

**Dự án:** Delta Force Fan Wiki  
**Ngôn ngữ website:** Tiếng Việt  
**Ngày rà soát tài liệu:** 25/11/2026

Tài liệu này giúp người đọc lần từ thông tin trên website tới tệp đang hiển thị thông tin đó và nguồn tham khảo được gắn kèm. Tài liệu cũng mô tả website được triển khai bằng các tệp nào để người muốn sửa nội dung biết nên bắt đầu ở đâu.

## Cách đọc chỉ mục

- Cột **Vị trí trong website** nêu trang, phần giao diện hoặc nơi lưu dữ liệu.
- Cột **Nguồn/bằng chứng** dẫn nguồn bên ngoài nếu đó là dữ kiện về game; với hành vi giao diện, bằng chứng nằm trong mã nguồn được nêu.
- Cột **Ghi chú** nêu phạm vi, ngày đối chiếu hoặc điểm cần kiểm tra lại.
- Ngày rà soát tài liệu này không có nghĩa mọi dữ kiện game được kiểm tra lại cùng ngày. Ngày đối chiếu được ghi riêng theo từng trang hoặc từng nguồn.

## Website được triển khai bằng gì

| Phần | Cách hoạt động hiện tại | Vị trí để xem hoặc sửa |
| --- | --- | --- |
| Trang vào và điều hướng | Đây là website nhiều trang tĩnh. `index.html` là trang chủ; các liên kết thông thường mở trực tiếp từng tệp HTML, không có router phía máy khách. | `index.html`, `modes.html`, `operators.html`, `maps.html` |
| Nội dung chế độ chơi | Mô tả và bố cục ba chế độ là HTML viết sẵn. Hình Warfare, Operations và Black Hawk Down tái sử dụng ảnh đã có trong dự án. | `modes.html`; ảnh trong `assets/images/maps/official/cards/` |
| Hồ sơ operator | Danh sách thẻ và bộ lọc radio nằm trong HTML. Cùng tệp có JavaScript và các đối tượng dữ liệu `positions`/`operators`. Khi chọn thẻ, hàm dựng hồ sơ đưa tên, vai trò, mùa, mô tả, lối chơi, kỹ năng và nguồn liên quan vào vùng chi tiết. | `operators.html` — thẻ HTML ở đầu trang và thẻ `<script>` phía dưới. Không còn tệp `js/operators.js` trong repo hiện tại. |
| Lọc và chọn operator | Bộ lọc dựa trên bốn chức vụ; mã JavaScript lọc thẻ và giữ lựa chọn hợp lệ. Thẻ operator có thể được chọn bằng bàn phím; giao diện hẹp có nút quay lại danh sách. | Bộ lọc và thẻ trong `operators.html`; hành vi tương tác trong script cùng tệp |
| Bản đồ | Danh mục ảnh tĩnh được nhóm theo Operations, Hot Zone, Warfare, Detonation và Black Hawk Down. Akh Canal được giữ trong phần bản đồ đã rời vòng xoay. Mục Detonation hiện là phần giải thích, không phải danh sách ảnh bản đồ riêng. | `maps.html`; ảnh trong `assets/images/maps/official/cards/` |
| Giao diện chung | Một stylesheet điều khiển kiểu chữ, màu sắc, nền, khung nội dung, điều hướng, thẻ và các breakpoint đáp ứng. Thanh điều hướng/chân trang được viết trong từng trang HTML nên thêm trang mới cần cập nhật đồng bộ. | `css/style.css` và từng tệp HTML |
| Ảnh và phông chữ | Ảnh/logo/favicons dùng đường dẫn cục bộ trong `assets/images/`. Barlow Condensed và Inter lấy từ Google Fonts khi có mạng; trình duyệt dùng font dự phòng nếu không tải được. | Các thẻ `<img>` và `<link>` trong từng trang; CSS tại `css/style.css` |
| Khả năng sử dụng | Trang dùng landmark HTML, liên kết bỏ qua tới nội dung chính, văn bản thay thế ảnh, trạng thái focus-visible và bố cục theo kích thước màn hình. CSS có điều kiện giảm chuyển động theo thiết lập hệ điều hành. Đây là ghi nhận tính năng trong mã, không phải chứng nhận đạt chuẩn truy cập. | Các tệp HTML và `css/style.css` |
| Chạy và xuất bản | Repo không có package manager, bước build, API hay máy chủ ứng dụng. Có thể mở `index.html`, dùng máy chủ tĩnh cục bộ hoặc cấu hình GitHub Pages để xuất bản thư mục gốc. Repo hiện chưa ghi nhận URL demo đã triển khai. | Hướng dẫn người dùng tại `README.md`; các tệp ở thư mục gốc |

## Chỉ mục nội dung và nguồn

| Nội dung hoặc dữ kiện | Vị trí trong website | Nguồn/bằng chứng | Ghi chú về phạm vi |
| --- | --- | --- | --- |
| Delta Force là game bắn súng góc nhìn thứ nhất; thông tin ra mắt tại Việt Nam ngày 14/07/2025 | `index.html` — phần giới thiệu | [Thông báo ra mắt tại Việt Nam của Garena](https://deltaforce.garena.vn/news/tat-ca/garena-delta-force-chinh-thuc-ra-mat-o-viet-nam) | Ngày nêu là mốc phát hành ở Việt Nam theo thông báo của Garena. |
| Warfare/Chiến Trường: mục tiêu Công và Thủ, Chiếm Đóng và phối hợp chiếm hoặc bảo vệ cứ điểm | `index.html` — thẻ Warfare; `modes.html` — phần Warfare | [Hướng dẫn Chiến Trường của Garena](https://deltaforce.garena.vn/news/chien-truong/huong-dan-chien-truong) | Mô tả tóm lược từ hướng dẫn. Không nêu số người chơi cố định vì nguồn được dẫn không xác nhận con số 32 vs 32. |
| Operations/Chiến Dịch: PvPvE, thu thập vật phẩm, làm nhiệm vụ và rút quân | `index.html` — thẻ Operations; `modes.html` — phần Operations | [Hướng dẫn Chiến Dịch của Garena](https://deltaforce.garena.vn/news/chien-dich/huong-dan-chien-dich) | Hướng dẫn mô tả mối đe dọa từ lực lượng trong game và các đội chơi khác, cùng mục tiêu rút quân. |
| Black Hawk Down: chiến dịch góc nhìn thứ nhất, bối cảnh Mogadishu và phối hợp nhiệm vụ | `index.html`, `modes.html` và `maps.html` | [Trang Delta Force Garena Việt Nam](https://deltaforce.garena.vn/); [thông báo chiến dịch Black Hawk Down](https://deltaforce.garena.com/en/news/all/E6CN8A) | Trang Bản đồ ghi Mogadishu và bảy chương nhiệm vụ. Thông tin này có thể thay đổi theo phiên bản/phạm vi phát hành. |
| Hình minh họa ba chế độ | `modes.html` — các thẻ Warfare, Operations, Black Hawk Down; tệp ảnh tại `assets/images/maps/official/cards/` | Ảnh Trench Lines, Zero Dam và campaign Mogadishu đã có trong kho; danh mục nguồn bản đồ được dẫn ở cuối [trang Bản đồ](../maps.html) | Trang Chế độ chơi tái sử dụng ảnh có sẵn, không tạo ảnh mới trong lần làm bố cục được ghi nhận 17/11/2026. |
| Danh sách operator, số lượng hồ sơ và bốn chức vụ | `operators.html` — thẻ nhân vật, bộ lọc; dữ liệu trong script của cùng tệp | HTML và JavaScript trong repo | Đây là thông tin về cách website tổ chức nội dung: hiện có 18 hồ sơ và bộ lọc Assault, Engineer, Recon, Support. Không cần nguồn ngoài để xác nhận hành vi giao diện. |
| Tên thật, mùa ra mắt, tóm tắt, gợi ý lối chơi và khả năng của từng operator | `operators.html` — đối tượng dữ liệu trong script, hồ sơ sinh ra khi chọn thẻ | [Liquipedia — Delta Force Operators](https://liquipedia.net/deltaforce/Portal:Operators); nguồn liên kết trong từng hồ sơ | Liquipedia là nguồn cộng đồng thứ cấp. Các mô tả cần được đối chiếu lại khi game có bản vá. Tên kỹ năng giữ tiếng Anh; lời giải thích được Việt hóa. |
| Hồ sơ Martelo và ghi chú về Smoke Halo | `operators.html` — dữ liệu Martelo và liên kết trong hồ sơ | [Thông báo mùa Aurora](https://deltaforce.garena.com/en/news/announcement/STZAUY); [cập nhật chính thức ngày 12/11](https://deltaforce.garena.com/en/news/all/XZSNPX); [GAMES.GG — hướng dẫn Martelo](https://games.gg/delta-force/guides/delta-force-martelo-guide-abilities-how-to-use-them/); [Dot Esports — hướng dẫn mùa Aurora](https://www.dotesports.com/delta-force/news/delta-force-season-aurora) | Trang dùng nguồn chính thức cho thông tin mùa/bản cập nhật và nguồn hướng dẫn bổ sung cho mô tả kỹ năng. Các hướng dẫn cộng đồng là nguồn thứ cấp. |
| Danh sách Operations và Hot Zone; các thẻ Warfare | `maps.html` — các nhóm bản đồ và ảnh | [HQ Tool Station](https://www.playdeltaforce.com/events/hq/en/); các thông báo theo mùa liệt kê bên dưới | Danh sách và ảnh ghi đối chiếu lần cuối 12/11/2026 ngay trên trang Bản đồ. Mùa mới có thể thay đổi danh mục hoặc tên. |
| Tên bản đồ theo danh mục HQ và tên dùng trong thông báo mùa; Akh Canal đã rời vòng xoay | `maps.html` — phần Warfare, ghi chú tên Pyramid/Monument, Island Warfare/Cyclone và Akh Canal | [HQ Tool Station](https://www.playdeltaforce.com/events/hq/en/); [Aurora/S12](https://deltaforce.garena.com/en/news/all/GWPGVY); [thông báo Echo](https://deltaforce.garena.com/en/news/announcement/YVRATP) | Trang giữ cả tên HQ và tên theo mùa khi chúng khác nhau. Akh Canal được lưu làm tư liệu tham khảo và ghi rõ đã gỡ ở S12. |
| Các bản đồ/mốc mùa được nêu cụ thể trên trang Bản đồ | `maps.html` — liên kết nguồn ở cuối trang | [Aurora/S12: Zenith Port, Brakkesh 2.0, Akh Canal](https://deltaforce.garena.com/en/news/all/GWPGVY); [Ahsarah: Monument và sáu khu Hot Zone](https://deltaforce.garena.com/en/news/all/VPYSUD); [Meltdown: AZ3 và Coliseum](https://deltaforce.garena.com/en/news/all/2MX7J4); [Break: Tide Prison và Cyclone](https://deltaforce.garena.com/en/news/all/V6J38U); [Morphosis: Aftershock](https://www.playdeltaforce.com/season08/en/) | Các trang mùa là nguồn công bố bản đồ; danh mục HQ là nguồn tham khảo cho tên và nhóm hiện được liệt kê. |
| Detonation và các bản đồ/campaign trong Black Hawk Down | `maps.html` — mục Detonation và Black Hawk Down | [HQ Tool Station](https://www.playdeltaforce.com/events/hq/en/); [thông báo chiến dịch Black Hawk Down](https://deltaforce.garena.com/en/news/all/E6CN8A) | Trang hiện ghi HQ chưa nêu danh sách bản đồ riêng cho Detonation; BHD hiển thị Mogadishu và bảy chương. Cần xem lại nếu nguồn chính thức cập nhật. |
| Tuyên bố fan-made, phi thương mại và không liên kết nhà phát hành | Chân trang của cả bốn trang HTML | Nội dung tuyên bố trong repo; tên/nhãn hiệu thuộc chủ sở hữu tương ứng | Đây là lời khai báo của dự án, không phải bằng chứng cấp phép cho tài sản hình ảnh. |
| Ảnh nền toàn website | `assets/images/backgrounds/site-background.png`; CSS nền trong `css/style.css` | Ghi chú lịch sử cho biết ảnh được người dùng cung cấp trong lần cập nhật 17/11/2026 | Chỉ ảnh nền này có hồ sơ nguồn gốc nêu rõ trong ghi chú hiện có. Không suy ra nguồn gốc tương tự cho ảnh khác. |

## Nguồn chính được liên kết trong website

### Thông tin trò chơi và chế độ

- [Delta Force Garena Việt Nam](https://deltaforce.garena.vn/) — thông tin phiên bản khu vực, các chế độ và chiến dịch.
- [Garena: thông báo ra mắt tại Việt Nam](https://deltaforce.garena.vn/news/tat-ca/garena-delta-force-chinh-thuc-ra-mat-o-viet-nam) — mốc ra mắt khu vực và giới thiệu game.
- [Garena: hướng dẫn Chiến Trường](https://deltaforce.garena.vn/news/chien-truong/huong-dan-chien-truong) — Warfare/Chiến Trường.
- [Garena: hướng dẫn Chiến Dịch](https://deltaforce.garena.vn/news/chien-dich/huong-dan-chien-dich) — Operations/Chiến Dịch.

### Bản đồ và cập nhật theo mùa

- [HQ Tool Station](https://www.playdeltaforce.com/events/hq/en/) — danh mục bản đồ dùng để đối chiếu tên/nhóm.
- [Aurora/S12](https://deltaforce.garena.com/en/news/all/GWPGVY), [Ahsarah](https://deltaforce.garena.com/en/news/all/VPYSUD), [Meltdown](https://deltaforce.garena.com/en/news/all/2MX7J4) và [Break](https://deltaforce.garena.com/en/news/all/V6J38U) — các thông báo mùa liên kết ở cuối `maps.html`.
- [Echo — Akh Canal](https://deltaforce.garena.com/en/news/announcement/YVRATP), [Morphosis — Aftershock](https://www.playdeltaforce.com/season08/en/) và [Black Hawk Down — Mogadishu](https://deltaforce.garena.com/en/news/all/E6CN8A).

### Operator

- [Liquipedia — Delta Force Operators](https://liquipedia.net/deltaforce/Portal:Operators) — nguồn cộng đồng thứ cấp dùng cho phần lớn hồ sơ.
- Martelo có thêm [thông báo Aurora](https://deltaforce.garena.com/en/news/announcement/STZAUY), [cập nhật chính thức 12/11](https://deltaforce.garena.com/en/news/all/XZSNPX) và liên kết hướng dẫn cộng đồng ngay trong hồ sơ tại `operators.html`.

## Quy trình cập nhật nội dung

1. Xác định đoạn trên website và tệp chứa đoạn đó; phần giao diện nằm trong HTML/CSS, dữ liệu operator nằm trong script của `operators.html`.
2. Kiểm tra nguồn chính thức hoặc nguồn phù hợp cho đúng thông tin, chế độ, khu vực và mùa. Ghi rõ nếu cần dùng nguồn cộng đồng thứ cấp.
3. Sửa nội dung và liên kết nguồn ngay tại trang liên quan; với operator, kiểm tra cả thẻ danh sách và hồ sơ chi tiết.
4. Cập nhật ngày đối chiếu ở trang khi có ngày thực sự kiểm tra; cập nhật chỉ mục này nếu vị trí, nguồn hoặc phạm vi thay đổi.
5. Ghi mốc triển khai trong `changelog.md`. Không dùng ngày sửa tài liệu làm ngày xác minh toàn bộ game.

## Giới hạn và trạng thái kiểm chứng

- Nội dung game và danh mục bản đồ thay đổi theo mùa; ngày đối chiếu của mỗi trang không áp dụng tự động cho các trang khác.
- Liquipedia, GAMES.GG và Dot Esports là nguồn thứ cấp. Dùng liên kết tại từng hồ sơ để đối chiếu; ưu tiên thông báo chính thức khi có thể.
- Repo hiện không lưu hồ sơ đầy đủ về nguồn gốc, giấy phép hoặc quyền sử dụng của mọi ảnh/logo. Không suy luận rằng ảnh được tạo bằng AI hoặc có giấy phép mở.
- Chỉ mục mô tả mã và nguồn đang được liên kết trong dự án; nó không phải kiểm định độc lập mọi dữ kiện, quyền sử dụng, khả năng truy cập hoặc khả dụng tương lai của các trang bên ngoài.
- Trong lần rà soát ngày 25/11/2026, vị trí và cấu trúc nội dung được đối chiếu với HTML/CSS/asset/Git hiện có. Các nguồn game không được kiểm tra lại độc lập trong lần rà soát tài liệu này.
