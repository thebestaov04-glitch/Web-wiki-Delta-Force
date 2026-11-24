# Delta Force Fan Wiki

> Mini wiki tiếng Việt do cộng đồng thực hiện, giúp người chơi tra cứu nhanh các chế độ chơi, operator và bản đồ trong Delta Force.

> **Mã nguồn trên GitHub:** [thebestaov04-glitch/Web-wiki-Delta-Force](https://github.com/thebestaov04-glitch/Web-wiki-Delta-Force)<br>
> **Bản demo:** Dự án hiện chưa khai báo website đã triển khai. Có thể mở trang trực tiếp hoặc chạy bản sao trên máy theo hướng dẫn bên dưới.

Đây là website tĩnh dùng HTML, CSS và JavaScript thuần. Không cần cài thư viện, cơ sở dữ liệu hay bước biên dịch để xem hoặc chỉnh sửa nội dung.

## Delta Force trong wiki này

Delta Force là game bắn súng góc nhìn thứ nhất (FPS). Wiki giới thiệu ba trải nghiệm chính để người mới có thể chọn nội dung muốn tìm hiểu:

- **Warfare:** giao tranh PvP theo đội, tập trung vào mục tiêu tấn công, phòng thủ và chiếm cứ điểm.
- **Operations:** chế độ PvPvE; người chơi vào chiến trường, đối đầu với lực lượng trong game và đội chơi khác, hoàn thành mục tiêu rồi tìm đường rút lui.
- **Black Hawk Down:** chiến dịch co-op với các nhiệm vụ lấy bối cảnh Mogadishu.

Trong các mô tả trên, **PvP** là người chơi đấu với người chơi, **PvE** là người chơi đấu với đối thủ do game điều khiển, còn **co-op** là nhiều người phối hợp trong cùng một đội. Chi tiết và cách chơi có thể đổi theo mùa; hãy xem các liên kết nguồn trên từng trang để kiểm tra thông tin mới nhất.

## Khám phá website

| Trang                      | Nội dung                                                                          | Cách sử dụng                                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Trang chủ](index.html)    | Giới thiệu wiki và tóm tắt ba chế độ chơi                                         | Dùng các liên kết nhanh để đi tới chế độ, operator hoặc bản đồ                                                |
| [Chế độ chơi](modes.html)  | Tổng quan Warfare, Operations và Black Hawk Down                                  | Đọc phần mô tả từng chế độ và mở nguồn tham khảo ở cuối trang                                                 |
| [Nhân vật](operators.html) | Hồ sơ của 18 operator, chức vụ, gợi ý lối chơi và kỹ năng                         | Lọc theo Assault, Engineer, Recon hoặc Support; chọn một operator để xem hồ sơ. Có thể thao tác bằng bàn phím |
| [Bản đồ](maps.html)        | Danh mục bản đồ theo Operations, Hot Zone, Warfare, Detonation và Black Hawk Down | Xem nhóm bản đồ tương ứng với chế độ; một số mục có ghi chú về tên gọi hoặc vòng xoay theo mùa                |

Giao diện thích ứng với màn hình lớn và nhỏ. Ở trang Nhân vật, bạn có thể chọn operator bằng bàn phím; trên điện thoại, hồ sơ có nút quay lại danh sách. Font chữ tải từ Google Fonts khi có kết nối mạng.

**Lộ trình gợi ý cho người mới:** bắt đầu ở Chế độ chơi để chọn kiểu trận phù hợp, mở Nhân vật để tìm hiểu vai trò trong đội, rồi xem Bản đồ để nhận biết các chiến trường có trong wiki.

## Dùng website trên máy của bạn

### Tải mã nguồn từ GitHub

Có thể mở kho mã trên GitHub để xem tệp hoặc tải về bằng nút **Code → Download ZIP**. Nếu đã cài Git, chạy:

```bash
git clone https://github.com/thebestaov04-glitch/Web-wiki-Delta-Force.git
cd Web-wiki-Delta-Force
```

### Mở website

Cách nhanh nhất là mở `index.html` trong trình duyệt. Hoặc chạy một máy chủ cục bộ bằng Python 3 từ thư mục dự án:

```bash
python -m http.server 8000
```

Sau đó truy cập <http://localhost:8000>. Dừng máy chủ bằng `Ctrl+C` trong cửa sổ terminal.

### Xuất bản bằng GitHub Pages

Nếu bạn quản lý kho mã và muốn tạo bản xem trực tuyến, trong GitHub mở **Settings → Pages**. Ở phần **Build and deployment**, chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/(root)`, rồi bấm **Save**. Sau khi GitHub Pages hoàn tất xuất bản, địa chỉ dự án thường có dạng:

`https://thebestaov04-glitch.github.io/Web-wiki-Delta-Force/`

Đường dẫn này chỉ hoạt động sau khi Pages được bật và xuất bản thành công. Xem [hướng dẫn chính thức về nguồn xuất bản GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) nếu giao diện cài đặt của bạn khác.

## Đóng góp nội dung hoặc mã nguồn

Bạn có thể đề xuất sửa nội dung, cập nhật thông tin mùa mới, cải thiện giao diện hoặc khả năng truy cập:

1. Tạo fork của kho mã trên GitHub và tải fork về máy.
2. Sửa trang HTML tương ứng; nội dung giao diện dùng chung nằm trong `css/style.css`. Dữ liệu và tương tác hồ sơ operator nằm trong thẻ `<script>` của `operators.html`.
3. Mở website cục bộ, kiểm tra liên kết và nội dung trên màn hình lớn lẫn màn hình nhỏ.
4. Commit thay đổi lên fork và gửi **Pull Request** về kho gốc. Khi cập nhật dữ kiện game, vui lòng đính kèm nguồn tham khảo và ghi thời điểm đối chiếu.

Danh mục nguồn theo nội dung nằm trong [docs/evidence-index.md](docs/evidence-index.md); phạm vi hỗ trợ của AI được ghi trong [docs/ai_log.md](docs/ai_log.md). Lịch sử các mốc cập nhật nằm trong [changelog.md](changelog.md).

## Cấu trúc dự án

```text
.
├── index.html                 # Trang chủ
├── modes.html                 # Tổng quan chế độ chơi
├── operators.html             # Danh sách, bộ lọc và hồ sơ operator
├── maps.html                  # Danh mục bản đồ và nguồn tham khảo
├── css/
│   └── style.css              # Kiểu dáng dùng chung cho các trang
├── assets/
│   └── images/
│       ├── brand/             # Logo
│       ├── backgrounds/       # Ảnh nền website
│       ├── maps/              # Ảnh minh họa bản đồ và chế độ
│       ├── operators/         # Ảnh operator
│       ├── social/            # Ảnh xem trước khi chia sẻ
│       └── favicon.svg        # Biểu tượng trình duyệt
├── docs/
│   ├── evidence-index.md      # Danh mục nội dung và nguồn tham khảo
│   └── ai_log.md              # Nhật ký hỗ trợ của AI
├── README.md
└── changelog.md               # Lịch sử thay đổi
```

Thanh điều hướng và chân trang được viết trực tiếp trong mỗi tệp HTML. Khi thêm trang hoặc đổi liên kết điều hướng, hãy kiểm tra đồng bộ trên cả bốn trang.

## Mã nguồn công khai và giấy phép

Kho mã được lưu tại [GitHub](https://github.com/thebestaov04-glitch/Web-wiki-Delta-Force). Hiện dự án chưa có tệp `LICENSE`. Vì vậy, việc mã nguồn được xem trên GitHub không đồng nghĩa đã có giấy phép cho phép mọi người sử dụng lại, sửa đổi hoặc phân phối mã hay hình ảnh. Nếu muốn công bố dự án theo một giấy phép mã nguồn mở, chủ dự án cần chọn và thêm giấy phép phù hợp; GitHub có [hướng dẫn về cấp phép kho mã](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository). Giấy phép của mã nguồn cũng không tự động áp dụng cho hình ảnh, logo hoặc thương hiệu của game.

## Nguồn và khai báo AI (nếu có)

**Nguồn tham khảo trong dự án**

- [Delta Force — trang chính thức](https://playdeltaforce.com/) và [Delta Force Garena Việt Nam](https://deltaforce.garena.vn/).
- Các nguồn về bản đồ được dẫn trực tiếp ở cuối [trang Bản đồ](maps.html), gồm HQ Tool Station và các thông báo mùa từ Delta Force/Garena. Trang này ghi ngày đối chiếu 12/11/2026.
- Nguồn operator được dẫn tại từng hồ sơ trong [trang Nhân vật](operators.html), gồm các trang operator trên Liquipedia. Với Martelo mới ra mắt, trang dùng thêm [thông báo mùa Aurora](https://deltaforce.garena.com/en/news/announcement/STZAUY), [bản cập nhật ngày 12/11](https://deltaforce.garena.com/en/news/all/XZSNPX) và các hướng dẫn kỹ năng hiện có.
- Trang chủ và trang chế độ chơi đã dẫn nguồn chính thức cho phần giới thiệu và mô tả chế độ; xem [chỉ mục bằng chứng](docs/evidence-index.md) để tra cứu theo từng nội dung.

**Khai báo AI:** README này được biên soạn với sự hỗ trợ của AI theo yêu cầu của người dùng. Kho mã hiện không ghi nhận nguồn gốc AI hay con người của các ảnh và nội dung game đã có, nên README không khẳng định chúng được tạo bằng AI.

Xem [changelog.md](changelog.md) để biết các mốc thay đổi đã được lưu trong lịch sử Git.

Danh mục nguồn theo từng nội dung nằm trong [docs/evidence-index.md](docs/evidence-index.md); ghi chú về phần việc AI hỗ trợ nằm trong [docs/ai_log.md](docs/ai_log.md).
