(() => {
  "use strict";

  const positions = {
    assault: {
      name: "Đột kích",
      original: "Assault",
      description: "Chuyên xung phong tuyến đầu; lớp này có tốc độ di chuyển khi ngắm bắn cao hơn các lớp khác."
    },
    engineer: {
      name: "Công binh",
      original: "Engineer",
      description: "Hỗ trợ xử lý phương tiện và kiểm soát phòng tuyến bằng thiết bị, vật cản hoặc công cụ chống phương tiện."
    },
    recon: {
      name: "Trinh sát",
      original: "Recon",
      description: "Thu thập tin tình báo, phát hiện và bám dấu đối thủ để giúp đội nắm tình hình chiến trường."
    },
    support: {
      name: "Hỗ trợ",
      original: "Support",
      description: "Hồi máu, tiếp sức và cứu đồng đội nhanh hơn các lớp nhân vật khác."
    }
  };

  const wiki = (slug) => `https://liquipedia.net/deltaforce/${slug}`;

  const operators = {
    "d-wolf": {
      name: "D-Wolf", realName: "Kai Silva", position: "assault", season: "S1 · Genesis",
      summary: "Dùng bộ khung trợ lực để tăng tốc, trượt nhanh và áp sát mục tiêu.",
      playstyle: "Phù hợp lối chơi cơ động: dùng tốc độ mở giao tranh, đánh gục đối thủ để kéo dài đợt tăng tốc rồi đổi vị trí.",
      abilities: [
        ["Trang bị chiến thuật", "Motorized Exoskeleton", "Kích hoạt chế độ quá tải của bộ khung trợ lực để tăng tốc chạy. Hạ gục đối thủ giúp hồi máu và kéo dài thời gian hiệu lực."],
        ["Thiết bị", "Triple Blaster", "Phóng lựu nổ mạnh; đầu đạn có thể bám vào phương tiện."],
        ["Thiết bị", "Tactical Smoke Grenade", "Tạo màn khói để che khuất tầm nhìn khi tiến công; khói tan nhanh."],
        ["Đặc tính", "Tactical Slide", "Bộ khung trợ lực giúp D-Wolf thực hiện cú trượt chiến thuật nhanh."]
      ],
      sources: [{ label: "Wiki D-Wolf", href: wiki("D-Wolf") }]
    },
    vyron: {
      name: "Vyron", realName: "Wang Yuhao", position: "assault", season: "S1 · Genesis",
      summary: "Dùng thiết bị phản lực để lao nhanh, hất ngã đối thủ và phá đội hình ở cự ly gần.",
      playstyle: "Dùng Dynamic Propulsion để mở góc hoặc thoát giao tranh; QLL32 tạo khoảng trống trước khi áp sát.",
      abilities: [
        ["Trang bị chiến thuật", "QLL32 Crouching Tiger", "Bắn một luồng khí nén có thể hất ngã đối thủ ở gần điểm va chạm."],
        ["Thiết bị", "Dynamic Propulsion", "Kích hoạt thiết bị trợ lực để lao theo hướng chỉ định. Hất ngã đối thủ giúp giảm thời gian hồi chiêu."],
        ["Thiết bị", "Magnetic Bomb", "Ném bom nổ mạnh có thể dính lên bề mặt cứng rồi phát nổ sau một khoảng chờ."],
        ["Đặc tính", "Dynamic Auxiliary System", "Khi dùng thiết bị hoặc rơi từ trên cao, hệ thống tăng lực trong chốc lát, giảm sát thương do ngã và tăng tốc độ di chuyển."]
      ],
      sources: [{ label: "Wiki Vyron", href: wiki("Vyron") }]
    },
    nox: {
      name: "Nox", realName: "Hélie de Montbel", position: "assault", season: "S3–S4 · Eclipse Vigil",
      summary: "Ẩn tiếng động bằng thiết bị gây nhiễu, làm chậm và gây chảy máu cho mục tiêu.",
      playstyle: "Kích hoạt Silent Assault để tiếp cận kín đáo; dùng Whirlwind Disc hoặc flashbang để chiếm lợi thế khi đột nhập.",
      abilities: [
        ["Trang bị chiến thuật", "Silent Assault", "Kích hoạt bộ gây nhiễu để giảm âm thanh phát ra và tăng độ cơ động. Thiết bị trinh sát của đối phương chỉ ghi nhận vị trí Nox lúc bắt đầu kích hoạt."],
        ["Thiết bị", "Whirlwind Disc", "Khóa mục tiêu phía trước rồi phóng đĩa tự bám đuổi. Mảnh văng gây sát thương, làm chậm và gây chảy máu; khóa từ phía sau nhanh hơn."],
        ["Thiết bị", "Breach Flashbang", "Ném lựu đạn choáng phát nổ sau khi chạm đất, làm lóa mắt và choáng đối thủ ở gần."],
        ["Đặc tính", "Deep Trauma", "Đối thủ bị Nox gây sát thương hồi máu chậm hơn. Trong Chiến Dịch, Nox có thể dùng điểm hồi sinh của đội cùng phe mà không tiêu hao lượt của điểm đó; hành động có thời gian hồi."]
      ],
      sources: [{ label: "Wiki Nox", href: wiki("Nox") }]
    },
    tempest: {
      name: "Tempest", realName: "Claire Ann Byers", position: "assault", season: "S5 · Break",
      summary: "Kết hợp dây kéo an toàn, cú lăn né tránh và mũi khoan phá vật cản.",
      playstyle: "Dùng dây an toàn để giữ đường lui trước khi đẩy lên; Drill Charge giúp ép đối thủ rời chỗ nấp.",
      abilities: [
        ["Trang bị chiến thuật", "Emergency Evasion Device", "Thả điểm neo dây an toàn. Tempest có thể kéo mình về điểm neo bằng cách kích hoạt lại hoặc khi nhận đòn chí mạng; lúc bị kéo về, cô tạm thời chống chịu sát thương vượt ngưỡng máu tối đa. Dây có thể chuyển sang chế độ treo khi rơi từ độ cao nhất định."],
        ["Thiết bị", "Tactical Combat Roll", "Tăng lực thân dưới bằng cột sống trợ lực để lăn nhanh theo nhiều hướng. Hạ gục đối thủ giúp giảm thời gian hồi chiêu."],
        ["Thiết bị", "Drill Charge", "Ném mũi khoan phá bề mặt cứng. Bụi dẫn điện và dòng điện xuyên vật chắn, vô hiệu hóa vũ khí và làm mục tiêu tê liệt tạm thời."],
        ["Đặc tính", "Auxiliary Surge Spine", "Khi đạn hoặc chất nổ ở gần, cột sống trợ lực tăng tốc độ chạy nước rút. Đặc tính cũng tăng tốc độ bơi trong điều kiện bình thường."]
      ],
      sources: [{ label: "Wiki Tempest", href: wiki("Tempest") }]
    },
    martelo: {
      name: "Martelo", realName: "Veronica Cardozo", position: "assault", season: "S12 · Aurora",
      summary: "Phá tuyến bằng khiên húc Ariete, lựu đạn nổ và màn khói có thể điều hướng.",
      playstyle: "Dùng khói để che bước tiến, sau đó húc xuyên tuyến bằng Ariete; Guerreira giúp tiếp tục di chuyển sau khi hạ gục hoặc khi máu thấp.",
      abilities: [
        ["Trang bị chiến thuật", "Ariete", "Trang bị khiên phá cửa rồi lao nhanh về phía trước, giảm sát thương nhận từ hướng trước mặt. Khi va chạm, cú húc gây sát thương và hất ngã mục tiêu; có thể kết thúc sớm bằng cú nện về phía trước."],
        ["Thiết bị", "Smoke Halo", "Giữ nút để ngắm và phóng một ống khói tới vị trí chỉ định. Chạm nút để bung nhanh ba ống khói thành vòng quanh Martelo."],
        ["Thiết bị", "HE Grenade", "Ném lựu đạn nổ mạnh; lựu đạn phát nổ sau một khoảng chờ ngắn và gây sát thương trong vùng ảnh hưởng."],
        ["Đặc tính", "Guerreira", "Sau khi hạ gục đối thủ hoặc khi máu xuống dưới một ngưỡng nhất định, Martelo được tăng tốc độ di chuyển và tốc độ nạp đạn trong thời gian ngắn."]
      ],
      note: "Bản cập nhật chính thức ngày 12/11 chỉnh hiệu ứng giảm âm thanh của Smoke Halo: phạm vi là 50 m và mức giảm âm thanh tăng ở ngoài 30 m.",
      sources: [
        { label: "Thông báo mùa Aurora", href: "https://deltaforce.garena.com/en/news/announcement/STZAUY" },
        { label: "Cập nhật chính thức ngày 12/11", href: "https://deltaforce.garena.com/en/news/all/XZSNPX" },
        { label: "Hướng dẫn Martelo · GAMES.GG", href: "https://games.gg/delta-force/guides/delta-force-martelo-guide-abilities-how-to-use-them/" },
        { label: "Hướng dẫn kỹ năng Martelo", href: "https://www.dotesports.com/delta-force/news/delta-force-season-aurora" }
      ]
    },
    stinger: {
      name: "Stinger", realName: "Roy Smee", position: "support", season: "S1 · Genesis",
      summary: "Dùng súng y tế và khói công nghệ để hồi máu, che chắn và cứu đồng đội.",
      playstyle: "Giữ đồng đội trong tầm súng y tế; phối hợp hai loại khói để vừa che tầm nhìn vừa hỗ trợ hồi máu.",
      abilities: [
        ["Trang bị chiến thuật", "Hive-Tech Pistol", "Súng y tế bắn đạn tự tìm nhiều mục tiêu, hồi máu từ từ và giảm đau cho đồng đội. Khi ngắm, súng khóa một mục tiêu."],
        ["Thiết bị", "Smokescreen", "Phóng UAV điều khiển bằng cử chỉ để tạo màn khói khi bay về phía trước; giữ nút bắn để điều hướng."],
        ["Thiết bị", "Hive-Tech Smoke Grenade", "Ném lựu đạn khói công nghệ. Đạn từ Hive-Tech Pistol bắn vào làn khói này có thể hồi máu."],
        ["Đặc tính", "Expertly Rescue", "Dùng Hive-Tech Pistol để cứu đồng đội linh hoạt hơn và hồi thêm máu cho người được cứu. Hiệu ứng bổ sung khác nhau theo chế độ chơi."]
      ],
      note: "Trong Chiến Dịch, kỹ năng cứu hộ còn loại bỏ hiệu ứng giảm máu tối đa. Trong Detonation, đồng đội đi vào Smoke Grenade được tăng tốc.",
      sources: [{ label: "Wiki Stinger", href: wiki("Stinger") }]
    },
    toxik: {
      name: "Toxik", realName: "Zoya Pomchenkova", position: "support", season: "S1 · Genesis",
      summary: "Tăng cường đồng đội bằng UAV và làm suy yếu đối thủ bằng khí gây choáng.",
      playstyle: "Dùng Adreno-Boost trước khi đội giao tranh; Dragonfly giúp tạo hành lang tiến công và làm suy yếu nhóm địch.",
      abilities: [
        ["Trang bị chiến thuật", "Blinding Gas", "Ném lựu đạn khí gây lóa mắt các đối thủ trong phạm vi ảnh hưởng."],
        ["Thiết bị", "Adreno-Boost", "Triển khai UAV tăng khả năng xử lý vũ khí và giảm độ giật khi trúng đạn cho đồng đội ở gần. Nếu họ hỗ trợ hoặc hạ gục đối thủ, lần tăng cường kế tiếp mạnh hơn."],
        ["Thiết bị", "Dragonfly Swarm System", "Phóng đàn UAV theo một hướng. Đồng đội trên đường bay được tăng cường adrenaline; đối thủ bị giảm thính giác, tầm nhìn và máu tối đa trong chốc lát."],
        ["Đặc tính", "Swift Healing", "Hiệu ứng thay đổi theo chế độ: rút ngắn thời gian đồng đội dùng vật phẩm hồi phục trong Chiến Dịch, hoặc giúp đồng đội bị thương bắt đầu hồi máu sớm hơn trong Warfare."]
      ],
      sources: [{ label: "Wiki Toxik", href: wiki("Toxik") }]
    },
    vlinder: {
      name: "Vlinder", realName: "Lina Van der Meer", position: "support", season: "S8 · Morphosis",
      summary: "Điều khiển UAV cứu hộ và drone y tế để hồi máu, quan sát trạng thái và hồi sinh đồng đội.",
      playstyle: "Triển khai drone y tế gần nhóm đồng đội; giữ UAV cứu hộ sẵn sàng để đưa người bị hạ gục trở lại chiến đấu.",
      abilities: [
        ["Trang bị chiến thuật", "Flutter Rescue UAVs", "UAV cứu hộ tự tiêm huyết tương cho đồng đội ở gần. Sau đó Vlinder tiếp cận mục tiêu để kích hoạt hồi sinh bằng máy khử rung tim. Một drone phòng thủ đang hoạt động có thể chặn một lần sát thương cho Vlinder và hiệu ứng này được làm mới định kỳ."],
        ["Thiết bị", "Med Drones", "Triển khai drone y tế khóa theo một đồng đội, bay theo họ và hồi máu cho họ cùng đồng minh ở gần."],
        ["Thiết bị", "Windmill Smoke Grenade", "Ném lựu đạn khói có đường bay điều khiển bằng thiết bị nhận diện cử chỉ; giữ nút để chỉnh hướng."],
        ["Đặc tính", "Bio Scan", "Hiệu ứng hiển thị và hỗ trợ đồng đội thay đổi theo chế độ chơi: kéo dài thời gian bị hạ gục trong Chiến Dịch, giảm hồi chiêu UAV khi cứu người trong Warfare, hoặc nhìn thấy bóng cùng máu đồng đội trong Detonation."]
      ],
      note: "Trong Detonation, Bio Scan hiển thị bóng và thanh máu của đồng đội trong phạm vi 40 m.",
      sources: [{ label: "Wiki Vlinder", href: wiki("Vlinder") }]
    },
    rover: {
      name: "Rover", realName: "Rowan Walsh", position: "support", season: "S11 · Reorientation",
      summary: "Phối hợp với chó nghiệp vụ để truy đuổi đối thủ, đồng thời chữa trị và gây áp lực bằng súng dart.",
      playstyle: "Đánh dấu mục tiêu bằng thiết bị để chó truy dấu dễ hơn; dùng Dart Rifle để hỗ trợ đồng đội và ép đối phương đổi vị trí.",
      abilities: [
        ["Trang bị chiến thuật", "Man’s Best Friend", "Thổi còi gọi chó nghiệp vụ tới hỗ trợ. Chó truy đuổi đối thủ gần nhất trong tầm, gây sát thương và đánh dấu khi tiếp xúc; nếu không có mục tiêu, chó đi theo và canh gác Rover."],
        ["Thiết bị", "Dart Rifle", "Bắn ống tiêm: sương thuốc lưu lại để hồi sát thương ở tay chân cho đồng minh, đồng thời làm giảm máu tối đa của đối thủ trong vùng và gây sát thương theo thời gian."],
        ["Thiết bị", "Irritant", "Ném lựu đạn khói kích ứng; đối thủ ở trong khói sẽ bị ho."],
        ["Đặc tính", "Guard Drive", "Đối thủ trúng thiết bị của Rover sẽ để chó nghiệp vụ dễ lần dấu hơn."]
      ],
      sources: [{ label: "Wiki Rover", href: wiki("Rover") }]
    },
    shepherd: {
      name: "Shepherd", realName: "Terry Musa", position: "engineer", season: "S1 · Genesis",
      summary: "Dùng drone và bẫy âm thanh để làm suy yếu, làm chậm đối thủ và giữ khu vực.",
      playstyle: "Đặt Sonic Trap ở lối hẹp; dùng Sonic Paralysis để gây áp lực lên đối thủ và thiết bị trinh sát gần đó.",
      abilities: [
        ["Trang bị chiến thuật", "Sonic Paralysis", "Triển khai drone âm thanh gây áp chế trong bán kính 30 m, làm giảm tốc độ bắn của địch, phá thiết bị âm thanh và gây nhiễu thiết bị trinh sát."],
        ["Thiết bị", "Sonic Trap", "Gắn bẫy lên bề mặt cứng. Bẫy kích hoạt khi đối thủ vào phạm vi 4 m, gây sát thương và làm chậm trong vùng rộng hơn."],
        ["Thiết bị", "Enhanced Fragmentation Grenade", "Lựu đạn phân mảnh có khả năng gây sát thương đáng kể lên áo giáp đạn đạo và các chi không được bảo vệ."],
        ["Đặc tính", "Sonic Defense", "Thiết bị cầm tay tạo sóng âm ngược pha để giảm sát thương từ sóng nổ."]
      ],
      sources: [{ label: "Wiki Shepherd", href: wiki("Shepherd") }]
    },
    uluru: {
      name: "Uluru", realName: "David Fletcher", position: "engineer", season: "S1 · Genesis",
      summary: "Kết hợp tên lửa tách bom, vật chắn bê tông và lựu đạn cháy để kiểm soát khu vực.",
      playstyle: "Dựng Quickset Cover để giữ góc hoặc che đồng đội; phá thế phòng thủ của đối phương bằng tên lửa và lựu đạn cháy.",
      abilities: [
        ["Trang bị chiến thuật", "Loitering Munition", "Ngắm để bắn đạn bay có dẫn đường bằng hình ảnh; khi va chạm, nó tách thành bốn quả bom. Bắn không ngắm sẽ dùng hướng dẫn đường thiết lập sẵn."],
        ["Thiết bị", "Quickset Cover", "Ném thiết bị phun bê tông đông cứng nhanh để tạo vật chắn chặn sát thương."],
        ["Thiết bị", "Composite Incendiary", "Ném lựu đạn cháy phát nổ khi chạm đất, nhanh chóng đốt xuyên Quickset Cover."],
        ["Đặc tính", "Battle Hardened", "Tăng sức chống chịu trước hiệu ứng làm chậm từ gãy xương và trang bị chiến thuật của các lớp nhân vật."]
      ],
      sources: [{ label: "Wiki Uluru", href: wiki("Uluru") }]
    },
    sineva: {
      name: "Sineva", realName: "Alexei Petrov", position: "engineer", season: "S2 · Star Fall",
      summary: "Mặc bộ đồ xử lý bom mìn với khiên chống nổ, móc kéo và lựu đạn dây thép gai.",
      playstyle: "Dùng khiên để tiến hoặc che đồng đội đang được cứu; Grapple Gun kéo mục tiêu hay vật phẩm khỏi vị trí khó tiếp cận.",
      abilities: [
        ["Trang bị chiến thuật", "EOD Set", "Mặc bộ đồ chống bom mìn để giảm sát thương nổ và lửa, đồng thời tăng mức bảo vệ. Có thể đổi giữa vũ khí và khiên chống nổ; khiên có thể đẩy lùi địch, gạt vật ném nhưng làm giảm khả năng xử lý và độ chính xác của vũ khí."],
        ["Thiết bị", "Grapple Gun", "Bắn móc kéo để kéo đối thủ, đồng đội bị hạ gục hoặc thùng trang bị khi trúng. Dây móc có thể bị phá hủy."],
        ["Thiết bị", "Razor Wire Grenade", "Triển khai dây thép gai gây sát thương và chảy máu; đối thủ di chuyển trong dây bị làm chậm, nhận sát thương và phát ra tiếng động. Có thể phá dây bằng thuốc nổ hoặc cận chiến."],
        ["Đặc tính", "Rear Guard", "Khi không cầm, khiên chống nổ đeo sau lưng chặn đạn từ phía sau. Khi cứu đồng đội, Sineva đưa khiên ra phía trước để che chắn."]
      ],
      sources: [{ label: "Wiki Sineva", href: wiki("Sineva") }]
    },
    gizmo: {
      name: "Gizmo", realName: "Rashid Rahal", position: "engineer", season: "S7 · Ahsarah",
      summary: "Dùng robot tuần tra, crawler và mìn khói để khống chế khu vực và làm lộ mục tiêu.",
      playstyle: "Kết hợp corrosion từ crawler với T.I.M. và Smart Smoke để gây áp lực lên mục tiêu trong khu vực hẹp.",
      abilities: [
        ["Trang bị chiến thuật", "Tenacious Interception Module", "Triển khai robot T.I.M. tự tuần tra. Khi phát hiện địch, robot đuổi theo và bắn lưới trói làm giảm mạnh khả năng di chuyển, đồng thời ngăn ngắm bắn và dùng kỹ năng operator."],
        ["Thiết bị", "Crawler Nest", "Đặt ổ cơ khí chứa ba crawler. Chúng kích hoạt khi địch tới gần, bám theo rồi phát nổ, gây sát thương và corrosion khiến mục tiêu nhận thêm sát thương từ đạn."],
        ["Thiết bị", "Smoke Mine", "Đặt mìn khói thông minh dính lên bề mặt cứng. Khi địch đến gần, khói kích hoạt và làm chậm; mục tiêu đang bị corrosion sẽ bị đánh dấu khi ở trong khói."],
        ["Đặc tính", "Firewall", "Tăng khả năng xử lý súng khi Gizmo ở gần các thiết bị do mình triển khai."]
      ],
      sources: [{ label: "Wiki Gizmo", href: wiki("Gizmo") }]
    },
    "n-two": {
      name: "N-Two", realName: "Gabriel Mercier", position: "engineer", season: "S10 · Meltdown",
      summary: "Dùng đạn lạnh và lựu đạn băng để làm chậm, gây ho và đóng băng mục tiêu.",
      playstyle: "Rải hiệu ứng lạnh để hạn chế đường di chuyển; phối hợp Frost Launcher với Cryo-Flask để tích lũy mức hạ thân nhiệt.",
      abilities: [
        ["Trang bị chiến thuật", "Frost Launcher", "Trang bị súng phóng dạng ổ xoay, bắn tối đa sáu quả đạn đóng băng. Đạn phát nổ sau một khoảng cố định, gây sát thương và hiệu ứng lạnh; bắn liên tục làm tăng tốc độ bắn."],
        ["Thiết bị", "Cryo-Flask", "Ném bình lạnh tạo vùng khí buốt tồn tại lâu. Đối thủ trong vùng tích lũy hiệu ứng lạnh và ho; khí lạnh có thể đóng băng cửa."],
        ["Thiết bị", "Homing Stun Grenade", "Thả lựu đạn choáng có cánh quạt tự bay tới operator địch ở gần; khi trúng, nó đánh dấu và làm rối tầm nhìn."],
        ["Đặc tính", "Permafrost", "Nhiệt độ thấp làm chậm đối thủ dần cho tới khi đóng băng. N-Two nhìn thấy mức hạ thân nhiệt và mục tiêu bị đóng băng được đánh dấu; trong Warfare, lạnh còn làm giảm khả năng điều khiển phương tiện."]
      ],
      sources: [{ label: "Wiki N-Two", href: wiki("N-Two") }]
    },
    hackclaw: {
      name: "Hackclaw", realName: "Mai Xiaowen", position: "recon", season: "S1 · Genesis",
      summary: "Giải mã tín hiệu, dùng drone làm lóa mắt và dao dữ liệu để vô hiệu hóa thiết bị.",
      playstyle: "Quét tín hiệu trước khi đột nhập; cho Flash Drone bay theo hướng đã giải mã và dùng Data Knife để phá thiết bị điện tử.",
      abilities: [
        ["Trang bị chiến thuật", "Signal Decoder", "Quét định kỳ tối đa sáu tín hiệu địch trong phạm vi 60 m phía trước và hiển thị hướng di chuyển trên kính. Tín hiệu gần nhất được tô đỏ; địch bị cảnh báo khi Hackclaw tiến gần."],
        ["Thiết bị", "Flash Drone", "Phóng drone làm lóa mắt đối thủ trong phạm vi. Có thể điều hướng drone theo đường bay do Signal Decoder xác định."],
        ["Thiết bị", "Data Knife", "Ném dao dữ liệu để xâm nhập thiết bị điện tử trong phạm vi 10 m khi va chạm, tạm thời vô hiệu hóa chúng. Ném trúng đối thủ gây sát thương lớn."],
        ["Đặc tính", "Silent Step", "Tăng tốc độ di chuyển khi đi khom hoặc ở trạng thái ẩn mình, đồng thời giảm tiếng động."]
      ],
      sources: [{ label: "Wiki Hackclaw", href: wiki("Hackclaw") }]
    },
    luna: {
      name: "Luna", realName: "Luna Kim", position: "recon", season: "S1 · Genesis",
      summary: "Dùng cung phát hiện, đánh dấu và gây sát thương điện lên đối thủ.",
      playstyle: "Bắn Detection Arrow để quét khu vực trước khi đội tiến vào; Hunter’s Mark giúp theo dõi mục tiêu bị trúng đòn.",
      abilities: [
        ["Trang bị chiến thuật", "Detection Arrow", "Bắn mũi tên trinh sát làm lộ đối thủ bên dưới đường bay và để lại vi cảm biến phát hiện mục tiêu đang di chuyển."],
        ["Thiết bị", "Volt Arrow", "Bắn mũi tên điện; đầu tên tạo dòng điện gây sát thương theo thời gian."],
        ["Thiết bị", "Enhanced Fragmentation Grenade", "Lựu đạn phân mảnh có thể gây sát thương hiệu quả lên áo giáp đạn đạo và các chi không được bảo vệ."],
        ["Đặc tính", "Hunter’s Mark", "Đối thủ bị Luna gây sát thương sẽ bị đánh dấu trong chốc lát."]
      ],
      sources: [{ label: "Wiki Luna", href: wiki("Luna") }]
    },
    raptor: {
      name: "Raptor", realName: "Landon Harrison", position: "recon", season: "S6 · War Ablaze",
      summary: "Gắn camera lên mục tiêu, điều khiển UAV trinh sát và vô hiệu hóa thiết bị điện tử bằng EMP.",
      playstyle: "Gắn Wing Cam lên đối thủ để duy trì dấu vết; dùng Silver Wing dò khu vực hoặc thả EMP trước khi đồng đội tiến vào.",
      abilities: [
        ["Trang bị chiến thuật", "Wing Cam", "Ngắm vào địch để gắn camera do thám, tự đánh dấu vị trí mục tiêu theo chu kỳ. Nếu mục tiêu bị hạ, camera vẫn ở lại và tiếp tục đánh dấu."],
        ["Thiết bị", "Silver Wing", "Điều khiển drone để đánh dấu địch trong tầm nhìn tới 90 m. Drone có thể mang và thả EMP, triển khai Wing Cam khi ngắm mục tiêu hoặc tự hủy để gây sát thương nhẹ và kích nổ EMP."],
        ["Thiết bị", "EMP Grenade", "Lựu đạn xung điện từ làm tê liệt thiết bị điện tử, phụ kiện súng điện tử và ống ngắm của địch; đồng thời phá thiết bị lớp ở gần."],
        ["Đặc tính", "Threat Detection", "Khi địch ngắm vào Raptor, cảnh báo xuất hiện ở rìa màn hình chỉ hướng của họ, giúp Raptor nhanh chóng triển khai Wing Cam."]
      ],
      sources: [{ label: "Wiki Raptor", href: wiki("Raptor") }]
    },
    morse: {
      name: "Morse", realName: "Luke Everley", position: "recon", season: "S9 · Echo",
      summary: "Dò âm thanh bằng sonar, phát hiện thiết bị địch và gây nhiễu khả năng quan sát.",
      playstyle: "Đặt sonar ở khu vực giao tranh để nhận biết số lượng địch; ném jammer để cản trở nhóm đối thủ trước khi đẩy lên.",
      abilities: [
        ["Trang bị chiến thuật", "Advanced Sonar Device", "Triển khai máy dò quét định kỳ một khu vực chỉ định, cho biết số lượng địch và đánh dấu chính xác những mục tiêu phát ra âm thanh."],
        ["Thiết bị", "Throwable Jammer", "Ném bộ gây nhiễu cộng hưởng làm chậm địch, mờ tầm nhìn, giảm tốc độ xoay và thính giác; mục tiêu cũng liên tục phát ra âm thanh."],
        ["Thiết bị", "Delayed Flashbang", "Ném lựu đạn choáng phát nổ trễ, làm lóa những đối thủ đang nhìn về phía vụ nổ."],
        ["Đặc tính", "Sonic Sitrep", "Dò thiết bị địch ở gần và tạo dấu đánh dấu chỉ Morse nhìn thấy."]
      ],
      sources: [{ label: "Wiki Morse", href: wiki("Morse") }]
    }
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  })[character]);

  const cards = Array.from(document.querySelectorAll(".operator-card"));
  const detail = document.querySelector("#operator-detail");
  if (!detail || cards.length === 0) return;

  const cardRecords = cards.map((card) => {
    const image = card.querySelector(".operator-card__image");
    const id = image?.getAttribute("src")?.split("/").pop()?.replace(/\.[^.]+$/, "");
    const operator = operators[id];
    if (!operator) return null;

    const positionKey = ["assault", "engineer", "recon", "support"].find((key) => card.classList.contains(`operator-card--${key}`));
    const position = positions[operator.position];
    card.dataset.operatorId = id;
    card.dataset.position = positionKey || operator.position;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-controls", "operator-detail");
    card.setAttribute("aria-pressed", "false");

    const role = card.querySelector(".operator-card__role");
    if (role && position) role.textContent = `${position.name} · ${position.original}`;
    const title = card.querySelector(".operator-card__name");
    if (title) title.textContent = operator.name;
    if (image) image.alt = `Ảnh nhân vật ${operator.name}`;
    const summary = card.querySelector(".operator-card__description");
    if (summary) summary.textContent = operator.summary;

    card.addEventListener("click", () => selectOperator(id, true));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectOperator(id, true);
      }
    });
    return { card, id };
  }).filter(Boolean);

  function renderOperator(id) {
    const operator = operators[id];
    const position = positions[operator.position];
    const card = cardRecords.find((record) => record.id === id)?.card;
    const image = card?.querySelector(".operator-card__image");
    const imageSource = image?.getAttribute("src") || "";
    const abilities = operator.abilities.map(([type, name, description]) => `
      <article class="operator-ability">
        <span class="operator-ability__type">${escapeHtml(type)}</span>
        <h4 class="operator-ability__name">${escapeHtml(name)}</h4>
        <p class="operator-ability__description">${escapeHtml(description)}</p>
      </article>`).join("");
    const sources = operator.sources.map((source) => `<a href="${escapeHtml(source.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a>`).join("");
    const note = operator.note ? `<p class="operator-playstyle"><strong>Ghi chú theo chế độ:</strong> ${escapeHtml(operator.note)}</p>` : "";

    detail.innerHTML = `
      <button class="operator-detail__back" type="button">← Quay lại danh sách nhân vật</button>
      <div class="operator-detail__hero">
        <figure class="operator-detail__portrait"><img src="${escapeHtml(imageSource)}" alt="Ảnh nhân vật ${escapeHtml(operator.name)}"></figure>
        <div class="operator-detail__identity">
          <p class="operator-detail__eyebrow">Hồ sơ nhân vật</p>
          <h2 class="operator-detail__title">${escapeHtml(operator.name)}</h2>
          <p class="operator-detail__real-name">Tên thật: ${escapeHtml(operator.realName)}</p>
          <div class="operator-detail__tags">
            <span class="operator-detail__tag">${escapeHtml(position.name)} · ${escapeHtml(position.original)}</span>
            <span class="operator-detail__tag">${escapeHtml(operator.season)}</span>
          </div>
          <p class="operator-detail__summary">${escapeHtml(operator.summary)}</p>
        </div>
      </div>
      <section class="operator-role" aria-labelledby="operator-role-title">
        <h3 class="operator-role__title" id="operator-role-title">Chức vụ: ${escapeHtml(position.name)}</h3>
        <p class="operator-role__text">${escapeHtml(position.description)}</p>
        <p class="operator-playstyle"><strong>Gợi ý lối chơi:</strong> ${escapeHtml(operator.playstyle)}</p>
        ${note}
      </section>
      <section class="operator-skills" aria-labelledby="operator-skills-title">
        <h3 class="operator-skills__title" id="operator-skills-title">Bộ kỹ năng</h3>
        <div class="operator-ability-grid">${abilities}</div>
      </section>
      <nav class="operator-detail__sources" aria-label="Nguồn tra cứu">Nguồn tham khảo: ${sources}</nav>`;
    detail.querySelector(".operator-detail__back")?.addEventListener("click", () => {
      document.querySelector(".operator-grid")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    });
  }

  function selectOperator(id, shouldScroll) {
    const record = cardRecords.find((item) => item.id === id);
    if (!record || record.card.hidden) return;
    cardRecords.forEach(({ card }) => card.setAttribute("aria-pressed", String(card === record.card)));
    renderOperator(id);
    if (shouldScroll && window.matchMedia("(max-width: 1023px)").matches) {
      detail.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }

  function applyFilter() {
    const selectedFilter = document.querySelector('input[name="operator-class"]:checked')?.value || "all";
    cardRecords.forEach(({ card }) => {
      card.hidden = selectedFilter !== "all" && card.dataset.position !== selectedFilter;
    });
    const activeId = cardRecords.find(({ card }) => card.getAttribute("aria-pressed") === "true" && !card.hidden)?.id;
    const firstVisibleId = cardRecords.find(({ card }) => !card.hidden)?.id;
    if (activeId) renderOperator(activeId);
    else if (firstVisibleId) selectOperator(firstVisibleId, false);
    else detail.innerHTML = '<p class="operator-detail__empty">Không có nhân vật trong nhóm này.</p>';
  }

  document.querySelectorAll('input[name="operator-class"]').forEach((input) => input.addEventListener("change", applyFilter));
  applyFilter();
  selectOperator("d-wolf", false);
})();
