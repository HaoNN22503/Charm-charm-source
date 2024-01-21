import {
  AdditionalItemTypes,
  BeautyListMainTypes,
  BeautyListTypes,
  CuisineListMainTypes,
  CuisineListTypes,
  CommentFeedbackTypes,
} from "./../types/Interface";
import img1 from "../assets/image/CuisineImage (10).svg";
import img2 from "../assets/image/CuisineImage (1).svg";
import img3 from "../assets/image/CuisineImage (14).svg";
import img4 from "../assets/image/CuisineImage (6).svg";
import img5 from "../assets/image/CuisineImage (13).svg";
import img6 from "../assets/image/CuisineImage (9).svg";
import imgBeauty1 from "../assets/image/CuisineImage (11).svg";
import imgBeauty2 from "../assets/image/CuisineImage (12).svg";
import imgBeauty3 from "../assets/image/CuisineImage (5).svg";
import imgBeauty4 from "../assets/image/CuisineImage (8).svg";
import imgBeauty5 from "../assets/image/CuisineImage (3).svg";
import imgBeauty6 from "../assets/image/CuisineImage (4).svg";
import imgBeauty7 from "../assets/image/CuisineImage (2).svg";
import imgBeauty8 from "../assets/image/CuisineImage (7).svg";
import imgSaffron4g1 from "../assets/image/Saffron4g (1).svg";
import imgSaffron4g2 from "../assets/image/Saffron4g (2).svg";
import imgSaffron4g3 from "../assets/image/Saffron4g (3).svg";
import imgSaffron4g4 from "../assets/image/Saffron4g (4).svg";
import { CommentCardTypes, ProductListTypes } from "@/types/Interface";

export const CommentUsers: CommentCardTypes[] = [
  {
    idComment: 1,
    img: "",
    name: "Thu Huyền",
    comment:
      "Dịch vụ tư vấn tận tình, mở lọ ra thấy sợi nhuỵ dài thật, chuẩn ngạch Iran, hương thơm thư thái, dùng khá thích.",
  },
  {
    idComment: 2,
    img: "",
    name: "Minh Quang",
    comment:
      "Mình dùng một thời gian thấy ngủ ngon giấc hơn hẳn, bao bì thiết kế cũng đẹp đấy!",
  },
  {
    idComment: 3,
    img: "",
    name: "Hồng Ngọc",
    comment:
      "Mỗi sáng mình lại pha cốc saffron ngâm đông trùng hạ thảo ấm cho cả nhà. Tiện lợi, nhanh gọn mà bổ dưỡng.",
  },
  {
    idComment: 4,
    img: "",
    name: "Nguyet Minh",
    comment:
      "Mình đã sử dụng Nhụy hoa nghệ tây của Charm Charm, mình vô cùng hài lòng, mình ngủ thấy ngôn giấc hơn, người không còn mệt mỏi nữa.",
  },
  {
    idComment: 5,
    img: "",
    name: "....",
    comment:
      "Cảm ơn vì sự nhiệt tình của các bạn, cảm ơn bạn đã giao hàng. Hôm qua mình nói không cần nhưng hôm nay các bạn vẫn mang xuống, cảm ơn các bạn nhiều lắm! Năm mới chúc các bạn bình an , thịnh vượng vạn sự như ý nhé.",
  },
];
export const AdditionalItemsList: AdditionalItemTypes[] = [
  {
    id: 1,
    quantity: 1,
    name: "Saffron (4gr)",
    price: 500000,
    image: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1703668129/BeautyProject/1_swa0ws.svg",
      alt: "",
      width: 40,
      height: 40,
    },
  },
  {
    id: 2,
    quantity: 1,
    name: "Saffron mật ong",
    price: 700000,
    image: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1703668132/BeautyProject/3_p9dbcg.svg",
      alt: "",
      width: 40,
      height: 40,
    },
  },
  {
    id: 3,
    quantity: 1,
    name: "Saffron mật ong và nấm đông trùng hạ thảo",
    price: 1500000,
    image: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1703668129/BeautyProject/2_e7ubkk.svg",
      alt: "",
      width: 40,
      height: 40,
    },
  },
];
export const ProductList: ProductListTypes[] = [
  {
    idProduct: "1",
    nameProduct: "Saffron (1gr)",

    profileProduct: {
      topicProfile: "Mô tả sản phẩm",
      productProfile: "Lọ 1 gram Saffron (Khoảng 500 sợi Nhuỵ hoa nghệ tây)",
      contentProductProfile1: "",
      contentProductProfile2: "",
      contentProductProfile3: "",
      tittleProfile1:
        "1) Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây thông thường trên thị trường?",
      tittleProfile2: "2)  Công dụng của Saffron",
      tittleProfile3: "3) Cách dùng",
      contentTittle1p1: "- 100% cam kết đủ giấy tờ:",
      contentTittle1p2:
        "Nhập khẩu chính ngạch từ Iran, Chứng nhận Kiểm dịch Thực vật, Quy chuẩn của Y tế, Cục Quản lý chất lượng Nông, Lâm Sản & Thuỷ sản, kết quả thử nghiệm do VILAS ISO/IEC 2017 Quốc tế.",
      contentTittle1p3:
        "- Charm Charm Saffron tuyển chọn từ những cây nghệ tây 4-5 năm tuổi: Thời kỳ đỉnh cao nhất trong vòng đời 8 năm tuổi thọ của cây.",
      contentTittle1p4:
        "- Chỉ nhập khẩu dòng Extra Super Negin cao cấp, thượng hạng nhất:",
      contentTittle1p5:
        "Nghiên cứu dựa trên hàm lượng dinh dưỡng, màu sắc, mùi vị, độ ẩm,... Người tiêu dùng thông thái nhận biết qua chiều dài sợi, không vụn, màu sắc sợi đỏ sẫm, không lẫn gốc vàng hay cam, không nhiều bụi, vụn.",
      contentTittle1p6:
        "- Giá cả hợp lý, hỗ trợ tối ưu người tiêu dùng và đối tác đại lý:",
      contentTittle1p7:
        "Một sản phẩm của Công ty TNHH Global Trading Đức Thành Phát đạt danh hiệu Top 10 Thương hiệu hàng đầu Việt Nam 2023 do Trung tâm Nghiên cứu phát triển Doanh nghiệp Châu Á.",
      contentTittle2p1:
        "- Giàu vitamin và các chất picrocrocin, crocin giúp trung hòa các gốc tự do, chống oxy hoá gây ra các bệnh ung thư.",
      contentTittle2p2:
        "- Tăng cường sức đề kháng, đặc biệt phụ nữ mang thai và sau sinh làm giảm triệu chứng thai kỳ.",
      contentTittle2p3:
        "- Hỗ trợ hạ huyết áp, trầm cảm, các bệnh tim mạch, tiêu hoá, thị lực, hệ thần kinh, Alzheimer.",
      contentTittle2p4: "- Cải thiện chất lượng giấc ngủ ngon hơn, sâu hơn.",
      contentTittle2p5: "- Điều hoà nội tiết tố, tăng cường nhu cầu sinh lý.",
      contentTittle2p6:
        "- Phòng chống lão hoá, làn da trắng sáng, mịn màng, hồng hào hơn, làm giảm sắc tố và các đốm đen trên da, chữa lành vết sẹo, mờ thâm.",
      contentTittle2p7:
        "- Sản phẩm không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.",
      contentTittle3p1:
        "- Chỉ cần thả 5-10 sợi saffron vào cốc nước ấm 200ml, chờ vài phút để màu vàng từ sợi nhụy bắt đầu tan ra. Thức uống vừa thơm đậm mùi saffron, vừa có màu vàng đẹp mắt. Đây là một cách sử dụng đơn giản nhất mà vẫn phát huy tối đa tác dụng bổ dưỡng.",
      contentTittle3p2:
        "Có thể pha cùng mật ong, đường, sữa tươi, các loại trà xanh, trà hoa cúc, trà hoa hồng, táo đỏ, kỳ tử,... để tăng hương vị và dễ uống hơn.",
      contentTittle3p3:
        "Theo Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA), liều lượng khuyên dùng của người trưởng thành là mỗi ngày 20-50 sợi.",
    },

    imgProfileThumbNails: [
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958354/BeautyProject/10_gtj04z.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958349/BeautyProject/9_kz4icd.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958339/BeautyProject/11_wnsoxc.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960547/BeautyProject/12_w9rfow.svg",
        alt: "",
        width: 80,
        height: 80,
      },
    ],
    quantity: 1,
    capacities: [{ size: "1 gr", price: 300000, quantity: 1 }],
    orders: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    selected: true,
  },
  {
    idProduct: "2",
    nameProduct: "Saffron (4gr)",

    profileProduct: {
      topicProfile: "Mô tả sản phẩm",
      productProfile: "Diện mạo mới của hộp saffron 4gr:",
      contentProductProfile1:
        "Hộp mới với thiết kế sang trọng và hiện đại, nhuỵ hoa nghệ tây được đặt trong 2 hũ đựng vàng ánh, tròn trĩnh và thời thượng. Túi quà sang trọng rất thích hợp để tri ân cha mẹ, gửi tặng các chị em phụ nữ, bạn bè hay đồng nghiệp.",
      contentProductProfile2:
        "Charm Charm Saffron chăm chút tinh tế từng sản phẩm Nhuỵ hoa nghệ tây để mỗi món quà sức khỏe mang đến cho khách hàng là tầm đẳng cấp và sự tri ân.",
      contentProductProfile3: "",
      tittleProfile1:
        "1) Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây thông thường trên thị trường? ",
      tittleProfile2: "2)  Công dụng của Saffron",
      tittleProfile3: "3) Cách dùng",
      contentTittle1p1: "- 100% cam kết đủ giấy tờ:",
      contentTittle1p2:
        "Nhập khẩu chính ngạch từ Iran, Chứng nhận Kiểm dịch Thực vật, Quy chuẩn của Y tế, Cục Quản lý chất lượng Nông, Lâm Sản & Thuỷ sản, kết quả thử nghiệm do VILAS ISO/IEC 2017 Quốc tế.",
      contentTittle1p3:
        "- Charm Charm Saffron tuyển chọn từ những cây nghệ tây 4-5 năm tuổi: Thời kỳ đỉnh cao nhất trong vòng đời 8 năm tuổi thọ của cây.",
      contentTittle1p4:
        "- Chỉ nhập khẩu dòng Extra Super Negin cao cấp, thượng hạng nhất:",
      contentTittle1p5:
        "Nghiên cứu dựa trên hàm lượng dinh dưỡng, màu sắc, mùi vị, độ ẩm,... Người tiêu dùng thông thái nhận biết qua chiều dài sợi, không vụn, màu sắc sợi đỏ sẫm, không lẫn gốc vàng hay cam, không nhiều bụi, vụn.",
      contentTittle1p6:
        "- Giá cả hợp lý, hỗ trợ tối ưu người tiêu dùng và đối tác đại lý:",
      contentTittle1p7:
        "Một sản phẩm của Công ty TNHH Global Trading Đức Thành Phát đạt danh hiệu Top 10 Thương hiệu hàng đầu Việt Nam 2023 do Trung tâm Nghiên cứu phát triển Doanh nghiệp Châu Á.",
      contentTittle2p1:
        "- Giàu vitamin và các chất picrocrocin, crocin giúp trung hòa các gốc tự do, chống oxy hoá gây ra các bệnh ung thư.",
      contentTittle2p2:
        "- Tăng cường sức đề kháng, đặc biệt phụ nữ mang thai và sau sinh làm giảm triệu chứng thai kỳ.",
      contentTittle2p3:
        "- Hỗ trợ hạ huyết áp, trầm cảm, các bệnh tim mạch, tiêu hoá, thị lực, hệ thần kinh, Alzheimer.",
      contentTittle2p4: "- Cải thiện chất lượng giấc ngủ ngon hơn, sâu hơn.",
      contentTittle2p5: "- Điều hoà nội tiết tố, tăng cường nhu cầu sinh lý.",
      contentTittle2p6:
        "- Phòng chống lão hoá, làn da trắng sáng, mịn màng, hồng hào hơn, làm giảm sắc tố và các đốm đen trên da, chữa lành vết sẹo, mờ thâm.",
      contentTittle2p7:
        "- Sản phẩm không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.",
      contentTittle3p1:
        "- Chỉ cần thả 5-10 sợi saffron vào cốc nước ấm 200ml, chờ vài phút để màu vàng từ sợi nhụy bắt đầu tan ra. Thức uống vừa thơm đậm mùi saffron, vừa có màu vàng đẹp mắt. Đây là một cách sử dụng đơn giản nhất mà vẫn phát huy tối đa tác dụng bổ dưỡng.",
      contentTittle3p2:
        "Có thể pha cùng mật ong, đường, sữa tươi, các loại trà xanh, trà hoa cúc, trà hoa hồng, táo đỏ, kỳ tử,... để tăng hương vị và dễ uống hơn.",
      contentTittle3p3:
        "Theo Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA), liều lượng khuyên dùng của người trưởng thành là mỗi ngày 20-50 sợi.",
    },

    imgProfileThumbNails: [
      {
        src: imgSaffron4g2,
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: imgSaffron4g1,
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: imgSaffron4g3,
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: imgSaffron4g4,
        alt: "",
        width: 80,
        height: 80,
      },
    ],
    quantity: 1,
    orders: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    capacities: [{ size: "4 gr", price: 1200000, quantity: 1 }],
    selected: true,
  },
  {
    idProduct: "3",
    nameProduct: "Bột Saffron (1gr)",
    profileProduct: {
      topicProfile: "Mô tả sản phẩm",
      productProfile: "So sánh loại bột saffron và loại nguyên sợi saffron: ",
      contentProductProfile1:
        "- Về chất lượng và chủng loại: Dòng Extra Super Negin cao cấp như nhau.",
      contentProductProfile2:
        "- Về thẩm thấu nhanh nhất vào cơ thể: loại bột xay sẽ hoà tan trong nước triệt để hơn loại nguyên sợi.",
      contentProductProfile3:
        "Về thẩm mỹ đẹp mắt: loại nguyên sợi nổi trội hơn loại bột xay.",
      tittleProfile1:
        "1) Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây thông thường trên thị trường?",
      tittleProfile2: "2) Công dụng của Saffron",
      tittleProfile3: "3) Cách dùng",
      contentTittle1p1: "- 100% cam kết đủ giấy tờ:",
      contentTittle1p2:
        "Nhập khẩu chính ngạch từ Iran, Chứng nhận Kiểm dịch Thực vật, Quy chuẩn của Y tế, Cục Quản lý chất lượng Nông, Lâm Sản & Thuỷ sản, kết quả thử nghiệm do VILAS ISO/IEC 2017 Quốc tế.",
      contentTittle1p3:
        "- Charm Charm Saffron tuyển chọn từ những cây nghệ tây 4-5 năm tuổi: Thời kỳ đỉnh cao nhất trong vòng đời 8 năm tuổi thọ của cây.",
      contentTittle1p4:
        "- Chỉ nhập khẩu dòng Extra Super Negin cao cấp, thượng hạng nhất:",
      contentTittle1p5:
        "Nghiên cứu dựa trên hàm lượng dinh dưỡng, màu sắc, mùi vị, độ ẩm,... Người tiêu dùng thông thái nhận biết qua chiều dài sợi, không vụn, màu sắc sợi đỏ sẫm, không lẫn gốc vàng hay cam, không nhiều bụi, vụn.",
      contentTittle1p6:
        "- Giá cả hợp lý, hỗ trợ tối ưu người tiêu dùng và đối tác đại lý:",
      contentTittle1p7:
        "Một sản phẩm của Công ty TNHH Global Trading Đức Thành Phát đạt danh hiệu Top 10 Thương hiệu hàng đầu Việt Nam 2023 do Trung tâm Nghiên cứu phát triển Doanh nghiệp Châu Á.",
      contentTittle2p1:
        "- Giàu vitamin và các chất picrocrocin, crocin giúp trung hòa các gốc tự do, chống oxy hoá gây ra các bệnh ung thư.",
      contentTittle2p2:
        "- Tăng cường sức đề kháng, đặc biệt phụ nữ mang thai và sau sinh làm giảm triệu chứng thai kỳ.",
      contentTittle2p3:
        "- Hỗ trợ hạ huyết áp, trầm cảm, các bệnh tim mạch, tiêu hoá, thị lực, hệ thần kinh, Alzheimer.",
      contentTittle2p4: "- Cải thiện chất lượng giấc ngủ ngon hơn, sâu hơn.",
      contentTittle2p5: "- Điều hoà nội tiết tố, tăng cường nhu cầu sinh lý.",
      contentTittle2p6:
        "- Phòng chống lão hoá, làn da trắng sáng, mịn màng, hồng hào hơn, làm giảm sắc tố và các đốm đen trên da, chữa lành vết sẹo, mờ thâm.",
      contentTittle2p7:
        "- Sản phẩm không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.",
      contentTittle3p1:
        "- Chỉ cần thả một ít lượng bột saffron vào cốc nước ấm 200ml, chờ vài phút để màu vàng từ sợi nhụy bắt đầu tan ra. Thức uống vừa thơm đậm mùi saffron, vừa có màu vàng đẹp mắt. Đây là một cách sử dụng đơn giản nhất mà vẫn phát huy tối đa tác dụng bổ dưỡng.",
      contentTittle3p2:
        "- Có thể pha cùng mật ong, đường, sữa tươi, các loại trà xanh, trà hoa cúc, trà hoa hồng, táo đỏ, kỳ tử,... để tăng hương vị và dễ uống hơn.",
      contentTittle3p3: "",
    },
    imgProfileThumbNails: [
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958346/BeautyProject/4_zdvcpb.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960570/BeautyProject/15_ingeih.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960568/BeautyProject/14_p3wu6c.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960566/BeautyProject/13_hpzbfn.svg",
        alt: "",
        width: 80,
        height: 80,
      },
    ],
    quantity: 1,
    orders: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    capacities: [{ size: "1gr", price: 300000, quantity: 1 }],
    selected: true,
  },
  {
    idProduct: "4",
    nameProduct: "Saffron ngâm mật ong bạc hà",

    profileProduct: {
      topicProfile: "Mô tả sản phẩm",
      productProfile: "",
      contentProductProfile1:
        "Thưởng thức ly Mật ong bạc hà pha Nhuỵ hoa nghệ tây thanh khiết để cùng đắm mình vào 2 lớp hương vị: thơm nồng của saffron và ngọt ngào từ mật ong.",
      contentProductProfile2:
        "Hội tụ trong hũ Charm Charm Saffron là những vị thảo mộc nổi tiếng lâu đời và vô cùng quý giá. Mật ong bạc hà nơi cao nguyên đá và saffron được nâng niu xử lý qua công nghệ sấy khô công phu nhằm giữ nguyên tính tự nhiên nhất cho sản phẩm.",
      contentProductProfile3:
        "Thức uống chiết xuất hoàn toàn từ thiên nhiên không chỉ thơm ngon đậm đà, mà còn mang lại nhiều lợi ích sức khỏe. Sự kết hợp hoàn hảo đầy dinh dưỡng, giúp bồi bổ cơ thể khoẻ mạnh, tăng cường sức đề kháng cho mọi người, mọi nhà.",
      tittleProfile1:
        "1) Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây thông thường trên thị trường? ",
      tittleProfile2: "2)  Công dụng của Saffron",
      tittleProfile3: "",
      contentTittle1p1: "- 100% cam kết đủ giấy tờ:",
      contentTittle1p2:
        "Nhập khẩu chính ngạch từ Iran, Chứng nhận Kiểm dịch Thực vật, Quy chuẩn của Y tế, Cục Quản lý chất lượng Nông, Lâm Sản & Thuỷ sản, kết quả thử nghiệm do VILAS ISO/IEC 2017 Quốc tế.",
      contentTittle1p3:
        "- Charm Charm Saffron tuyển chọn từ những cây nghệ tây 4-5 năm tuổi: Thời kỳ đỉnh cao nhất trong vòng đời 8 năm tuổi thọ của cây.",
      contentTittle1p4:
        "- Chỉ nhập khẩu dòng Extra Super Negin cao cấp, thượng hạng nhất:",
      contentTittle1p5:
        "Nghiên cứu dựa trên hàm lượng dinh dưỡng, màu sắc, mùi vị, độ ẩm,... Người tiêu dùng thông thái nhận biết qua chiều dài sợi, không vụn, màu sắc sợi đỏ sẫm, không lẫn gốc vàng hay cam, không nhiều bụi, vụn.",
      contentTittle1p6:
        "- Giá cả hợp lý, hỗ trợ tối ưu người tiêu dùng và đối tác đại lý:",
      contentTittle1p7:
        "Một sản phẩm của Công ty TNHH Global Trading Đức Thành Phát đạt danh hiệu Top 10 Thương hiệu hàng đầu Việt Nam 2023 do Trung tâm Nghiên cứu phát triển Doanh nghiệp Châu Á.",
      contentTittle2p1:
        "- Giàu vitamin và các chất picrocrocin, crocin giúp trung hòa các gốc tự do, chống oxy hoá gây ra các bệnh ung thư.",
      contentTittle2p2:
        "- Tăng cường sức đề kháng, đặc biệt phụ nữ mang thai và sau sinh làm giảm triệu chứng thai kỳ.",
      contentTittle2p3:
        "- Hỗ trợ hạ huyết áp, trầm cảm, các bệnh tim mạch, tiêu hoá, thị lực, hệ thần kinh, Alzheimer.",
      contentTittle2p4: "- Cải thiện chất lượng giấc ngủ ngon hơn, sâu hơn.",
      contentTittle2p5: "- Điều hoà nội tiết tố, tăng cường nhu cầu sinh lý.",
      contentTittle2p6:
        "- Phòng chống lão hoá, làn da trắng sáng, mịn màng, hồng hào hơn, làm giảm sắc tố và các đốm đen trên da, chữa lành vết sẹo, mờ thâm.",
      contentTittle2p7:
        "- Sản phẩm không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.",
      contentTittle3p1:
        "Theo Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA), liều lượng khuyên dùng của người trưởng thành là mỗi ngày 20-50 sợi.",
      contentTittle3p2: "",
      contentTittle3p3: "",
    },
    imgProfileThumbNails: [
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958337/BeautyProject/6_izqknm.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958348/BeautyProject/5_ph03yf.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960565/BeautyProject/17_y5gttz.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960545/BeautyProject/16_eum4x1.svg",
        alt: "",
        width: 80,
        height: 80,
      },
    ],
    quantity: 1,
    orders: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    capacities: [
      { size: "220ml", price: 280000, quantity: 1 },
      { size: "400ml", price: 450000, quantity: 1 },
      { size: "500ml", price: 580000, quantity: 1 },
    ],
    selected: true,
  },

  {
    idProduct: "5",
    nameProduct: "Saffron mật ong & Đông Trùng Hạ Thảo",
    profileProduct: {
      topicProfile: "Mô tả sản phẩm",
      productProfile: "So sánh loại bột saffron và loại nguyên sợi saffron:",
      contentProductProfile1:
        "- Về chất lượng và chủng loại: Dòng Extra Super Negin cao cấp như nhau.",
      contentProductProfile2:
        "- Về thẩm thấu nhanh nhất vào cơ thể: loại bột xay sẽ hoà tan trong nước triệt để hơn loại nguyên sợi.",
      contentProductProfile3:
        "- Về thẩm mỹ đẹp mắt: loại nguyên sợi nổi trội hơn loại bột xay",
      tittleProfile1:
        "1) Charm Charm Saffron khác biệt gì với các loại nhuỵ hoa nghệ tây thông thường trên thị trường?",
      tittleProfile2: "2)  Công dụng của Saffron",
      tittleProfile3: "3) Cách dùng ",
      contentTittle1p1: "- 100% cam kết đủ giấy tờ:",
      contentTittle1p2:
        "Nhập khẩu chính ngạch từ Iran, Chứng nhận Kiểm dịch Thực vật, Quy chuẩn của Y tế, Cục Quản lý chất lượng Nông, Lâm Sản & Thuỷ sản, kết quả thử nghiệm do VILAS ISO/IEC 2017 Quốc tế.",
      contentTittle1p3:
        "- Charm Charm Saffron tuyển chọn từ những cây nghệ tây 4-5 năm tuổi: Thời kỳ đỉnh cao nhất trong vòng đời 8 năm tuổi thọ của cây.",
      contentTittle1p4:
        "- Chỉ nhập khẩu dòng Extra Super Negin cao cấp, thượng hạng nhất:",
      contentTittle1p5:
        "Nghiên cứu dựa trên hàm lượng dinh dưỡng, màu sắc, mùi vị, độ ẩm,... Người tiêu dùng thông thái nhận biết qua chiều dài sợi, không vụn, màu sắc sợi đỏ sẫm, không lẫn gốc vàng hay cam, không nhiều bụi, vụn.",
      contentTittle1p6:
        "- Giá cả hợp lý, hỗ trợ tối ưu người tiêu dùng và đối tác đại lý:",
      contentTittle1p7:
        "Một sản phẩm của Công ty TNHH Global Trading Đức Thành Phát đạt danh hiệu Top 10 Thương hiệu hàng đầu Việt Nam 2023 do Trung tâm Nghiên cứu phát triển Doanh nghiệp Châu Á.",
      contentTittle2p1:
        "- Giàu vitamin và các chất picrocrocin, crocin giúp trung hòa các gốc tự do, chống oxy hoá gây ra các bệnh ung thư.",
      contentTittle2p2:
        "- Tăng cường sức đề kháng, đặc biệt phụ nữ mang thai và sau sinh làm giảm triệu chứng thai kỳ.",
      contentTittle2p3:
        "- Hỗ trợ hạ huyết áp, trầm cảm, các bệnh tim mạch, tiêu hoá, thị lực, hệ thần kinh, Alzheimer.",
      contentTittle2p4: "- Cải thiện chất lượng giấc ngủ ngon hơn, sâu hơn.",
      contentTittle2p5: "- Điều hoà nội tiết tố, tăng cường nhu cầu sinh lý.",
      contentTittle2p6:
        "- Phòng chống lão hoá, làn da trắng sáng, mịn màng, hồng hào hơn, làm giảm sắc tố và các đốm đen trên da, chữa lành vết sẹo, mờ thâm.",
      contentTittle2p7:
        "- Sản phẩm không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.",
      contentTittle3p1:
        "- Chỉ cần thả một ít lượng bột saffron vào cốc nước ấm 200ml, chờ vài phút để màu vàng từ sợi nhụy bắt đầu tan ra. Thức uống vừa thơm đậm mùi saffron, vừa có màu vàng đẹp mắt. Đây là một cách sử dụng đơn giản nhất mà vẫn phát huy tối đa tác dụng bổ dưỡng.",
      contentTittle3p2:
        "- Có thể pha cùng mật ong, đường, sữa tươi, các loại trà xanh, trà hoa cúc, trà hoa hồng, táo đỏ, kỳ tử,... để tăng hương vị và dễ uống hơn.",
      contentTittle3p3: "",
    },
    imgProfileThumbNails: [
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958345/BeautyProject/3_vuctbe.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958355/BeautyProject/2_w3obkb.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702960543/BeautyProject/18_v86c6s.svg",
        alt: "",
        width: 80,
        height: 80,
      },
      {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1702958328/BeautyProject/1_bwzcj3.svg",
        alt: "",
        width: 80,
        height: 80,
      },
    ],

    quantity: 1,
    orders: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    capacities: [
      { size: "220ml", price: 280000, quantity: 1 },
      { size: "400ml", price: 450000, quantity: 1 },
      { size: "500ml", price: 580000, quantity: 1 },
    ],
    selected: true,
  },
];
export const BeautyListMain: BeautyListMainTypes[] = [
  {
    idBeauty: "1",
    topicBeauty: "Trẻ hoá làn da",
    imgBeauty: {
      imgBeauty1: {
        src: imgBeauty1,
        alt: "",
        width: 500,
        height: 500,
      },
      imgBeauty2: {
        src: imgBeauty2,
        alt: "",
        width: 500,
        height: 500,
      },
    },
    tittleBeauty:
      "5 bí mật tiết lộ Saffron làm trẻ hoá làn da, mềm mại và rạng rỡ",
    contentBeauty: {
      step1:
        "1) Saffron chứa các thành phần chống oxy hóa, góp phần phòng tránh ung thư: Saffron giàu các chất như crocin, picrocrocin, safranal, kaempferol và crocetin.",
      step2:
        "2) Chất caroten có trong saffron được nghiên cứu có thể phục hồi tế bào da tổn thương và đảm bảo giảm thiểu các tác nhân từ ô nhiễm môi trường hàng ngày.",
      step3:
        "3) Cải thiện tâm trạng, chất lượng giấc ngủ ngon hơn và đem lại cảm giác tươi tỉnh: Sự hiện diện của các thành phần hoạt tính là safranal và crocin, làm tăng mức serotonin trong cơ thể. Mùi hương của saffron còn giúp người sử dụng giảm stress.",
      step4:
        "4) Ngăn ngừa và điều trị mụn, xóa mờ vết thâm, phục hồi tình trạng da sau tổn thương, chống lão hóa, loại bỏ thâm, nám hay tàn nhang: Saffron chứa nhiều vitamin, khoáng chất thiết yếu và các chất chống oxy hóa.",
      step5:
        "5) Hỗ trợ làm đẹp, bảo vệ làn da khỏe mạnh khỏi tia UV, duy trì vẻ trắng hồng, sáng mịn hấp dẫn: Loại dược liệu quý này cải thiện vẻ đẹp của làn da từ bên trong.",
      content1:
        "Khi già đi, làn da của chúng ta cũng sẽ bị lão hoá và giảm tính đàn hồi.",
      content2:
        "Theo báo cáo của nhiều tài liệu nghiên cứu nước ngoài, các nhà khoa học chỉ ra 5 lợi ích với sắc đẹp khi sử dụng Nhuỵ hoa nghệ tây kỳ diệu như sau:",
      content3:
        "Nhờ đó, chúng giúp chống lại gốc tự do trong cơ thể và bảo vệ sức khỏe của người sử dụng. ",
      content4:
        "Khi bắt đầu quy trình chăm sóc da hàng ngày, bạn có thể cải thiện làn da của mình với Nhuỵ hoa nghệ tây. Đó chính là món quà thiên nhiên đã được sử dụng hàng trăm năm nay vì sức khỏe, vì sắc đẹp.",
      content5:
        "Charm Charm Saffron đảm bảo mỗi sản phẩm đưa đến tay người tiêu dùng luôn đạt chuẩn chất lượng của quy trình sấy khô nghiêm ngặt, hiện đại, cam kết giấy chứng nhận nhập khẩu chính ngạch từ Iran và ISO-Norm quốc tế.",
    },
    typeBeauty: "Sức khỏe",
  },
];
export const BeautyList: BeautyListTypes[] = [
  {
    idBeauty: "1",
    topicBeauty: "Sữa chua dưỡng nhan saffron",
    imgBeauty: {
      imgBeauty1: {
        src: imgBeauty3,
        alt: "",
        width: 400,
        height: 400,
      },
      imgBeauty2: {
        src: imgBeauty4,
        alt: "",
        width: 200,
        height: 400,
      },
    },
    tittleBeauty: "Khéo tay hay làm với Sữa chua Saffron đẹp mắt ngon miệng",
    contentBeauty: {
      tittle1: "Nguyên liệu cần chuẩn bị:",
      tittle2: "Nguyên liệu trang trí thêm:",
      tittle3: "Cách nấu:",
      step1:
        "BƯỚC 1: Đặt một miếng vải dạ hoặc giấy nến dày vào một cái rây lớn và để trên một cái bát lớn. Múc sữa chua vào rây, phủ một miếng vải dạ hoặc 2 tờ giấy bếp khác và để riêng ở nhiệt độ phòng trong 25-30 phút (thao tác này được thực hiện để loại bỏ độ ẩm dư thừa).",
      step2:
        "BƯỚC 2: Nhấc ra và loại bỏ lớp giấy trên cùng của sữa chua, sau đó nạo sữa chua vào một cái bát và khuấy đều đường. Trộn các sợi nghệ tây với sữa đặc, sau đó cho hỗn hợp đó cùng chút vani tạo hương vào sữa chua và khuấy đều cho đến khi các nguyên liệu đã hòa lẫn vào nhau. (Bạn có thể làm trước bước này và bảo quản trong tủ lạnh.)",
      step3:
        "BƯỚC 3: Chia 6 ly nhỏ sau đó rải hạt dẻ cười lên trên. Đặt mỗi ly trên một chiếc đĩa với một vài lát xoài tươi và thưởng thức.",
      step4: "",
      step5: "",
      step6: "",
      content1:
        "Sữa chua là món ăn dễ làm và phù hợp cho bữa xế hay món tráng miệng cho cả gia đình. Hôm nay các bạn vào bếp cùng Charm Charm Saffron thử Sữa chua Saffron mới lạ vừa ngon miệng, vừa tốt cho sức khỏe, trẻ đẹp làn da nhé!",
      content2:
        " Mật ong bạc hà ngọt dịu, thơm mát hoà quyện với Saffron thoảng hương cỏ khô sẽ là thức uống bổ dưỡng, mang tới năng lượng tích cực mỗi ngày cho bạn và gia đình.",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
      content7: "",
      content8:
        "Với công thức đơn giản này, món sữa chua đơn điệu sẽ càng đẹp mắt và thơm ngon hơn đó. Các bạn muốn cải thiện thực đơn cho cả nhà thì đừng bỏ qua công thức này nha!",
      contentTittle1:
        "700g sữa chua Hy Lạp không đường, 2 muỗng cà phê vani, 100g đường nâu, 8-10 sợi nghệ tây, 1 thìa cà phê sữa đặc.",
      contentTittle2:
        "1 muỗng canh hạt dẻ cười rang sẵn, băm nhỏ và 1 trái xoài chín lớn, cắt lát.",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "2",
    topicBeauty: "Điều hoà chuyển hoá",
    imgBeauty: {
      imgBeauty1: {
        src: imgBeauty5,
        alt: "",
        width: 400,
        height: 400,
      },
      imgBeauty2: {
        src: imgBeauty6,
        alt: "",
        width: 400,
        height: 400,
      },
    },
    tittleBeauty: "6 CÔNG THỨC LÀM ĐẸP DA VỚI SAFFRON",
    contentBeauty: {
      tittle1: "",
      tittle2: "",
      tittle3: "",
      step1:
        "𝐌𝐚̣̆𝐭 𝐧𝐚̣ 𝐒𝐚𝐟𝐟𝐫𝐨𝐧 𝐬𝐮̛̃𝐚 𝐭𝐮̛𝐨̛𝐢: Nguyên liệu gồm 5-7 sợi Saffron, một muỗng sữa tươi không đường. Đầu tiên, bạn hãy ngâm sợi nhụy nghệ tây trong sữa khoảng 2 tiếng cho đến khi màu sữa chuyển sang màu cam. Dùng dung dịch này thoa đều lên mặt và để trong 10 phút.",
      step2:
        "𝐌𝐚̣̆𝐭 𝐧𝐚̣ 𝐒𝐚𝐟𝐟𝐫𝐨𝐧 𝐜𝐚́𝐦 𝐠𝐚̣𝐨: 5-7 sợi Saffron, 1 muỗng sữa chua không đường, 1 muỗng bột cám gạo và vài hạt muối. Cho tất cả nguyên liệu chung vào một chén nhỏ và trộn đều chúng lại với nhau. Rửa mặt sạch và dùng hỗn hợp vừa làm đắp đều lên mặt sau đó để yên trong khoảng 15 - 20 phút.",
      step3:
        "𝐌𝐚̣̆𝐭 𝐧𝐚̣ 𝐒𝐚𝐟𝐟𝐫𝐨𝐧 𝐦𝐚̣̂𝐭 𝐨𝐧𝐠: 5 sợi Saffron, một muỗng mật ong. Trộn đều hai nguyên liệu thành hỗn hợp. Rửa sạch mặt, thoa lên da và thư giãn trong 15 - 20 phút.",
      step4:
        "𝐌𝐚̣̆𝐭 𝐧𝐚̣ 𝐒𝐚𝐟𝐟𝐫𝐨𝐧 đất 𝐬𝐞́𝐭: 5-6 sợi Saffron, 1 muỗng cà phê sữa đông, 1/2 muỗng cà phê đất sét. Ngâm sợi nhụy hoa nghệ trong sữa đông khoảng 4 - 5 giờ. Sau đó bạn trộn đều hỗn hợp lên rồi cho bột đất sét vào và đắp lên mặt cho đến khi hỗn hợp khô lại.",
      step5:
        "𝐌𝐚̣̆𝐭 𝐧𝐚̣ 𝐒𝐚𝐟𝐟𝐫𝐨𝐧 𝐠𝐨̂̃ đ𝐚̀𝐧 𝐡𝐮̛𝐨̛𝐧𝐠: 5-7 sợi Saffron, 1 thìa cà phê bột gỗ đàn hương, 2 thìa cà phê sữa tươi. Trộn đều Saffron, bột gỗ đàn hương và sữa tươi lại. Rửa mặt sạch sau đó dùng hỗn hợp trong khoảng 20 phút.",
      step6:
        "𝐌𝐚̣̆𝐭 𝐧𝐚̣ 𝐒𝐚𝐟𝐟𝐫𝐨𝐧 𝐝𝐚̂̀𝐮 𝐨𝐥𝐢𝐯𝐞: 5-7 sợi Saffron, 1/2 muỗng cà phê dầu olive, 1 muỗng cà phê sữa tươi (không đường), 1 muỗng nước lọc. Đầu tiên bạn hãy ngâm Saffron với nước và sau khi thấy nước đã chuyển sang màu cam đậm thì dùng nước này trộn đều với các nguyên liệu còn lại.",
      content1:
        "Saffron từ bao đời vẫn được coi như là loại gia vị thượng hạng trong căn bếp của các nhà hàng. Nhưng ngoài công dụng đó, nó còn được xem là một nguyên liệu 'thần thánh' để làm đẹp, dưỡng da.",
      content2:
        "Cũng như tinh bột nghệ nhưng Saffron còn mạnh mẽ hơn rất nhiều lần, trong Saffron có nhiều các loại thành phần tốt cho da như vitamin A, đồng, kali, sắt, kẽm, axit folic, và một số loại sắc tố tan trong dầu như alpha-carotene, beta-carotene,... Nhờ vậy, khả năng làm sáng da, lành sẹo, mờ thâm, tăng sức đề kháng cho da của Saffron là không thể chối cãi.",
      content3:
        "Chính vì điều đó mà nhiều tín đồ làm đẹp hiện nay đã nghĩ ra cách trộn một vài sợi Saffron với các nguyên liệu khác nhau để tạo ra nhiều loại mặt nạ dưỡng da tại nhà. Sau đây Charm Charm Saffron sẽ mách cho các chị em 6 công thức làm mặt nạ dưỡng da với Saffron:",
      content4: "",
      content5: "",
      content6: "",
      content7: "",
      content8: "",
      contentTittle1: "",
      contentTittle2: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "3",
    topicBeauty: "Giảm mụn nhọt làn da",
    imgBeauty: {
      imgBeauty1: {
        src: imgBeauty7,
        alt: "",
        width: 400,
        height: 400,
      },
      imgBeauty2: {
        src: imgBeauty8,
        alt: "",
        width: 200,
        height: 400,
      },
    },
    tittleBeauty: "Saffron giúp giảm mụn nhọt như thế nào?",
    contentBeauty: {
      tittle1: "",
      tittle2: "",
      tittle3: "",
      step1: "",
      step2: "",
      step3: "",
      step4: "",
      step5: "",
      step6: "",
      content1:
        "Vì sao một vùng có khí hậu khắc nghiệt như Trung Đông mà làn da người phụ nữ nơi đó vẫn mịn màng, khỏe đẹp đến vậy?",
      content2: "Đáp án chính là họ đã sử dụng Saffron!",
      content3:
        "Bên cạnh các phương pháp nấu ăn, ngâm nước uống thông thường, Saffron tại Trung Đông được dùng như 1 loại mặt nạ giúp sát khuẩn, ngừa mụn và giảm nám da.",
      content4:
        "Trong saffron có chứa nhiều vitamin A, bao gồm: retinal, retinol, axit retinoic và các carotenoid tiền vitamin A có công dụng giảm tốc độ lão hóa và tăng cường sự đàn hồi, mềm mại của da.",
      content5:
        "Không những vậy, vitamin A này còn đóng vai trò bảo vệ, giảm tình trạng da bị mụn và kiềm dầu, đẩy nhanh tốc độ liền sẹo cũng như mờ thâm.",
      content6:
        "Nếu bạn đang tìm kiếm những sản phẩm dưỡng nhan hoàn toàn từ thiên nhiên thì Saffron là lựa chọn hàng đầu!",
      content7:
        "Một chế độ dinh dưỡng hợp lý, tập thể thao thường xuyên sẽ góp phần không nhỏ trong “công cuộc” làm đẹp của bạn!",
      content8:
        "Charm Charm Saffron đảm bảo mỗi sản phẩm đưa đến tay người tiêu dùng luôn đạt chuẩn chất lượng của quy trình sấy khô nghiêm ngặt, hiện đại, cam kết giấy chứng nhận nhập khẩu chính ngạch từ Iran và ISO-Norm quốc tế.",
      contentTittle1: "",
      contentTittle2: "",
    },
    typeBeauty: "Sức khỏe",
  },
];
export const CuisineListMain: CuisineListMainTypes[] = [
  {
    idCuisine: "1",
    topicCuisine: "Thức uống saffron",
    imgCuisine: [
      {
        src: img1,
        alt: "",
        width: 500,
        height: 500,
      },
      {
        src: img2,
        alt: "",
        width: 500,
        height: 500,
      },
    ],
    tittleCuisine: "Pha thức uống ngon lành và dễ dàng với saffron",
    contentCuisine: {
      content1:
        "Mỗi lần uống chỉ cần thả 5-10 sợi nhuỵ hoa vào cốc nước ấm 200ml, chờ vài phút để màu vàng từ sợi nhụy bắt đầu tan ra. Đây là một cách sử dụng đơn giản nhất, mà vẫn phát huy tối đa tác dụng bổ dưỡng. Thức uống vừa thơm đậm mùi saffron, vừa có màu vàng đẹp mắt.",
      content2:
        "Bạn có thể pha cùng thêm thìa cafe mật ong, đường, sữa tươi, các loại trà xanh, hoa cúc, trà mạn, trà gừng, trà hoa hồng, táo đỏ, đông trùng hạ thảo,... để gia tăng màu sắc, hương vị, bổ dưỡng và dễ uống hơn.",
      content3:
        "Nếu trang trí món ăn thì hãy sử dụng saffron dạng sợi, nếu để chúng thật bắt mắt thì hãy sử dụng saffron dạng bột. Nhuỵ hoa nghệ tây sẽ tạo ra mùi hương và màu sắc hấp dẫn cho thực phẩm của bạn.",
      content4:
        "Vừa mang lại nhiều công dụng sức khoẻ và lợi ích làm đẹp, Saffron còn đem đến hương vị giải khát lôi cuốn và mùi hương ấn tượng.",
      content5:
        "Theo Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA), liều lượng khuyên dùng của người trưởng thành là mỗi ngày 20-50 sợi.",
      content6:
        "Charm Charm Saffron khác biệt với các loại nhuỵ hoa nghệ tây thông thường trên thị trường. Bởi lẽ, chỉ nhập khẩu loại Super Negin cao cấp nhất, được nghiên cứu dựa trên hàm lượng dinh dưỡng, màu sắc, độ ẩm,... và chỉ tuyển chọn từ những cây nghệ tây 4-5 năm tuổi ở thời kỳ đỉnh cao nhất trong vòng đời. Đây là thương hiệu đạt chất lượng nhập khẩu chính ngạch, kết quả tiêu chuẩn Vilas ISO/IEC 2017 quốc tế.",
    },
    typeCuisine: "Ẩm thực",
  },
];
export const CuisineList: CuisineListTypes[] = [
  {
    idCuisine: "1",
    topicCuisine: "Cơm, bánh ngọt saffron",
    imgCuisine: [
      {
        alt: "",
        src: img3,
        width: 400,
        height: 400,
      },
      {
        alt: "",
        src: img4,
        width: 200,
        height: 300,
      },
    ],
    tittleCuisine1: "Cơm vàng ươm và bánh thơm lừng với saffron",
    tittleCuisine2:
      "Bánh bông lan Saffron hương cam thanh mát - Món tráng miệng cho bữa tối của cả gia đình ",
    contentCuisine: {
      tittle1: "Nguyên liệu:",
      tittle2: "Cách làm:",
      step1:
        "Bước 1: Rửa sạch cam, bào lấy vỏ, sau đó cắt làm đôi, vắt lấy nước cốt cam.",
      step2:
        "Bước 2: Trộn đều bột bắp với nước cốt cam và saffron. Trong 1 tô khác, rây qua bột mì, 1/2 muỗng cà phê muối.",
      step3:
        "Bước 3: Để trứng gà trong tủ lạnh khoảng 15 phút, lấy ra, tách lấy lòng trắng trứng, thêm 35gr đường bột vào, dùng máy đánh trứng, đánh đều lên.",
      step4:
        "Bước 4: Cuối cùng, cho lòng đỏ trứng gà, hỗn hợp bột mì, nước cốt cam, Saffron, bột bắp, vỏ cam vào, đánh đều 1 phút.",
      step5:
        "Bước 5: Lót cốc giấy vào khuôn cupcake, múc hỗn hợp bánh vào, dàn đều.",
      step6:
        "Bước 6: Cho bánh bông lan Saffron hương cam vào lò, nướng khoảng 25 phút ở nhiệt độ 175 độ C.",
      step7:
        "Bước 7: Bánh bông lan Saffron hương cam chín, lấy ra khỏi khuôn, cắt thành miếng vừa ăn là có thể thưởng thức ngay!",
      contentTittle1:
        "3-5 sợi Saffron Extra Super Negin, 180 gram đường, 3 quả trứng gà, 160 gram bột mì, ½ thìa cà phê bột bắp, 150 gram bơ lạt (đun chảy), 1 quả cam vàng Mỹ (lấy cả ruột lẫn vỏ), muối",
      contentTittle2: "",
      contentTittle3: "",
      contentTittle4: "",
      contentTittle5: "",
      contentTittle6: "",
      contentStep1p1: "",
      contentStep1p2: "",
      contentStep1p3: "",
      contentStep1p4: "",
      contentStep2p1: "",
      content1:
        "Để nấu nhụy hoa nghệ tây với cơm, bạn thả khoảng 10 sợi vào cốc nước, rồi chờ nhuỵ hoa pha ra màu trong nước. Vo gạo như bình thường và sử dụng nước từ nhụy hoa nghệ tây để nấu cơm. ",
      content2:
        "Như vậy cơm không chỉ cực kỳ tốt cho sức khỏe mà còn có màu vàng đẹp mắt, hương thơm dễ chịu. Nhụy hoa nghệ tây nấu với cơm phù hợp với tất cả mọi người sử dụng hàng ngày.",
      content3:
        "Món tráng miệng dễ làm mà lại thơm ngon, bổ dưỡng. Hãy làm cho cả nhà thưởng thức nhé!",
      content4: "",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: "2",
    topicCuisine: "Món cà rì hải sản",
    imgCuisine: [
      {
        src: img5,
        alt: "",
        width: 400,
        height: 400,
      },
      {
        alt: "",
        src: "",
        width: 0,
        height: 0,
      },
    ],
    tittleCuisine1: "Saffron for Fried Chicken",
    tittleCuisine2: "",
    contentCuisine: {
      tittle1: "Nguyên liệu chuẩn bị:",
      tittle2: "Cách thực hiện:",
      step1: "BƯỚC 1: Sơ chế tôm, mực, sò điệp và nghêu:",
      step2: "BƯỚC 2: Sơ chế khoai lang, cà rốt, khoai tây:",
      step3:
        "BƯỚC 3: Lấy một nồi lớn và cho vào một ít dầu ăn. Khi dầu nóng lên thì bỏ tỏi vào phi cùng với sả, lá và bột cà ri cho thật thơm. Tiếp theo, bạn đổ nước khoảng 1/2 nồi và cho tất cả các loại củ vào, nấu khoảng 15 phút để các nguyên liệu chín.",
      step4:
        "BƯỚC 4: Sau khi khoai chín thì nêm nếm gia vị cho vừa ăn, nấu thêm một chút nữa để chúng mềm ra thì đổ hết lon nước dừa và tất cả các loại hải sản đã chuẩn bị trước đó vào nồi.",
      step5:
        "BƯỚC 5: Bỏ các sợi nhụy hoa nghệ tây vào và nấu cùng hỗn hợp khoảng 10 phút sao cho hải sản chín và các sợi nhụy hoa tan ra tạo thành màu vàng cam và BẬT DẬY MÙI THƠM ĐỘC ĐÁO cho món cà ri thì tắt bếp.",
      step6: "",
      step7: "",
      contentTittle1: "- 200g tôm tươi, 200g mực ống, 50g sò điệp, 500g nghêu.",
      contentTittle2: "- 1 củ khoai lang, 2 trái cà rốt, 2 củ khoai tây.",
      contentTittle3: "- 1 ít lá cà ri, 1 gói bột cà ri.",
      contentTittle4: "- 1 lon nước cốt dừa.",
      contentTittle5: "- Muối, hạt nêm, bột ngọt, đường, dầu ăn, tỏi, sả.",
      contentTittle6: "- Khoảng 15 - 20 sợi nhụy hoa nghệ tây.",
      contentStep1p1:
        "- Bạn dùng kéo cắt bỏ đầu và đuôi tôm. Rút bỏ sợi dây chỉ màu đen phía sau lưng và rửa lại sạch sẽ, vớt ra rổ để ráo nước.",
      contentStep1p2:
        "- Kéo nhẹ phần ruột và túi mực ra khỏi thân, ở phần đầu mực thì bạn cắt bỏ phần miệng, mắt. Với các sợi râu dài thì dùng dao cạo nhẹ để loại bỏ những chất bẩn. Sau đó rửa sạch dưới nước và cắt thành những khoang nhỏ, vừa ăn.",
      contentStep1p3:
        "- Để cậy vỏ của sò điệp, bạn sử dụng một con dao thật sắc bén. Sau khi đã lọc phần thịt ra, hãy loại bỏ lớp màng mỏng bao quanh thịt sò và phần bao tử màu đen. Rửa thịt sò nhiều lần dưới nước sạch để loại bỏ hết đất cát và bụi bẩn.",
      contentStep1p4:
        "- Bạn ngâm nghêu trong nước muối khoảng 1-2 tiếng để chất bẩn, cát bụi rơi ra. Rồi rửa lại sạch dưới nước và để ráo.",
      contentStep2p1:
        "- Bạn cạo sạch lớp vỏ bên ngoài. Ngâm trong nước muối khoảng 15 phút. Cắt thành từng khoang nhỏ vừa ăn.",
      content1:
        "Cà ri từ lâu là một món ăn đặc trưng nổi tiếng đến từ Ấn Độ. Khi được kết hợp cùng nhụy hoa nghệ tây Iran, món cà ri đậm đà tưởng chừng như quen thuộc này sẽ mang đến cho bạn một hương vị lạ lẫm, độc đáo và không kém phần ngon miệng.",
      content2: "",
      content3:
        "Sau cùng là múc ra tô và đừng quên rắc thêm vài sợi nhụy hoa nghệ tây để trang trí cho món ăn.",
      content4: "",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: "3",
    topicCuisine: "Mỳ Ý Saffron",
    imgCuisine: [
      {
        src: img6,
        alt: "",
        width: 200,
        height: 300,
      },
      {
        alt: "",
        src: "",
        width: 0,
        height: 0,
      },
    ],
    tittleCuisine1: "Làm mới menu của bạn với Mỳ Ý Saffron",
    tittleCuisine2: "",
    contentCuisine: {
      tittle1: "Thành phần gồm: ",
      tittle2: "Cách chế biến: Không hề cầu kỳ, chỉ cần 30 phút:",
      step1:
        "Bước 1: Cho khoảng 2 lít nước vào nồi và nấu sôi, bạn thêm vào nồi nước 2 thìa dầu ăn và 1 chút muối để sợi mì chín sẽ đậm vị hơn và không bị dính vào nhau. Sau 10 phút vớt mì để ráo.",
      step2:
        "Bước 2: Đun nóng dầu ô liu trong một chảo lớn. Xào hành tây cho đến khi hành chín và sau đó cho nấm vào. Xào trên lửa vừa, đảo thường xuyên để nấm hơi chuyển màu nâu.",
      step3:
        "Bước 3: Thêm bông cải xanh, ớt chuông, đậu Hà Lan, lá cần tây vào chung chảo xào trong 5 phút.",
      step4:
        "Bước 4: Đổ kem vào và đun nhỏ lửa trong 2-3 phút. Rắc thêm ớt nếu ăn được cay, 1 chút muối và Saffron để tăng thêm hương vị và màu sắc cho món ăn.",
      step5:
        "Bước 5: Cho mì ống đã nấu chín vào chảo và đảo đều cho sốt lẫn cùng mỳ. Đun nóng cho đến khi sủi bọt là thành công!",
      step6: "",
      step7: "",
      contentTittle1: "- 300g mì ống, có thể có thịt bò xay nhỏ.",
      contentTittle2: "- 300ml kem thực vật,",
      contentTittle3: "- 2 muỗng nhỏ dầu ô liu, các gia vị cần thiết,",
      contentTittle4: "- 1 củ hành tây thái nhỏ, 1 quả ớt chuông xanh thái nhỏ",
      contentTittle5:
        "- 150g nấm hương thái nhỏ, 50g đậu Hà Lan, 50g súp lơ, lá cần tây",
      contentTittle6:
        "- Và đương nhiên không thể thiếu 5-10 sợi 𝗦𝗮𝗳𝗳𝗿𝗼𝗻 𝗘𝘅𝘁𝗿𝗮 𝗦𝘂𝗽𝗲𝗿 𝗡𝗲𝗴𝗶𝗻 được rồi.",
      contentStep1p1: "",
      contentStep1p2: "",
      contentStep1p3: "",
      contentStep1p4: "",
      contentStep2p1: "",
      content1:
        "Mỳ Ý Saffron là món ăn đơn giản dành cho những ngày “đổi gió” cho khẩu vị.",
      content2:
        "Nếu các bạn cũng là người ăn chay, đã quá quen thuộc với menu hầu hết các món rau luộc, xào hoặc các thực phẩm giả thì đừng nên bỏ qua công thức độc đáo của món ăn này nhé!",
      content3:
        "Mỳ Ý chay Saffron sẽ cung cấp đầy đủ dinh dưỡng và làm phong phú thêm cho menu ăn chay của bạn đó! Lưu ngay về máy để hôm nào trổ tài nhé!",
      content4:
        "Lưu ý để món ăn có hương thơm, màu sắc cũng như dưỡng chất từ Saffron, hãy chọn đúng 𝗦𝗮𝗳𝗳𝗿𝗼𝗻 𝗘𝘅𝘁𝗿𝗮 𝗦𝘂𝗽𝗲𝗿 𝗡𝗲𝗴𝗶𝗻 𝘁𝘂̛̀ 𝗖𝗵𝗮𝗿𝗺 𝗖𝗵𝗮𝗿𝗺 𝗦𝗮𝗳𝗳𝗿𝗼𝗻, nhà nhập khẩu Saffron chính ngạch từ Iran!",
    },
    typeCuisine: "Ẩm thực",
  },
];
export const commentsData: CommentFeedbackTypes[] = [
  {
    idComment: "1",
    nameComment: "Nguyen Nhat Hao",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 5,
    imgComment: "",
    timeComment: "2023-11-08",
  },
  {
    idComment: "2",
    nameComment: "John Doe",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 4,
    imgComment: "",
    timeComment: "2023-11-07",
  },
  {
    idComment: "3",
    nameComment: "Bali",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 1,
    imgComment: "",
    timeComment: "2023-11-06",
  },
  {
    idComment: "4",
    nameComment: "John Milk",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 2,
    imgComment: "",
    timeComment: "2023-10-07",
  },
  {
    idComment: "5",
    nameComment: "Neyja",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 3,
    imgComment: "",
    timeComment: "2023-09-07",
  },
  {
    idComment: "6",
    nameComment: "Buling",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 4,
    imgComment: "",
    timeComment: "2023-11-22",
  },
  {
    idComment: "7",
    nameComment: "Mout",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 2,
    imgComment: "",
    timeComment: "2023-12-07",
  },
  {
    idComment: "8",
    nameComment: "Alibaba",
    contentComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis laborum nesciunt...",
    starComment: 1,
    imgComment: "",
    timeComment: "2023-12-24",
  },
];
