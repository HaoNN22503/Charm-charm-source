import {
  AdditionalItemTypes,
  BeautyListMainTypes,
  BeautyListTypes,
  CuisineListMainTypes,
  CuisineListTypes,
  CommentFeedbackTypes,
} from "./../types/Interface";
import { CommentCardTypes, ProductListTypes } from "@/types/Interface";

export const CommentUsers: CommentCardTypes[] = [
  {
    idComment: 1,
    img: "",
    name: "abcxyz",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 2,
    img: "",
    name: "bababa",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 3,
    img: "",
    name: "hahaha",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 4,
    img: "",
    name: "cucwrvrv",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 5,
    img: "",
    name: "xữewx",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 6,
    img: "",
    name: "lancke",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 7,
    img: "",
    name: "ịijfi",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
  },
  {
    idComment: 8,
    img: "",
    name: "nccnc",
    comment:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley oforem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy Lorem Ipsum has",
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
    priceProduct: 500000,
    profileProduct:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",

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
    orders: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    selected: true,
  },
  {
    idProduct: "2",
    nameProduct: "Bột Saffron",
    priceProduct: 1000000,
    profileProduct:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",

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
    selected: true,
  },
  {
    idProduct: "3",
    nameProduct: "Saffron mật ong",
    priceProduct: 700000,
    profileProduct:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",

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
    selected: true,
  },

  {
    idProduct: "4",
    nameProduct: "Saffron mật ong & Đông Trùng Hạ Thảo",
    priceProduct: 1500000,
    profileProduct:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",

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
    selected: true,
  },
];
export const BeautyListMain: BeautyListMainTypes[] = [
  {
    idBeauty: "1",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618376/BeautyProject/SF6_pw3jlr.jpg",
        alt: "",
        width: 912,
        height: 513,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618377/BeautyProject/2_dyaogx.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618380/BeautyProject/4_fti6na.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty:
      "Vì sao phụ nữ nên tìm hiểu và sử dụng Saffron từ khi còn trẻ?",
    contentBeauty: {
      content1:
        "Rất nhiều người phụ nữ lúc trẻ thường bỏ qua việc chăm sóc sức khỏe và cho đến khi cơ thể xuất hiện dấu hiệu tuổi tác mới bắt đầu tìm kiếm những phương pháp trẻ hóa. Nhưng ở tuổi đó, những loại mỹ phẩm, các liệu trình spa hay cả phẫu thuật thẩm mỹ cũng chẳng thể kéo dài nét xuân!",
      content2:
        "NẾU BẠN THỰC SỰ MUỐN GIỮ VẺ ĐẸP LÂU DÀI, SỨC KHỎE DẺO DAI THÌ NÊN SỬ DỤNG SAFFRON NGAY KHI CÒN TRẺ! ",
      content3:
        "Saffron được mệnh danh là “vàng đỏ” Trung Đông bởi giá trị quý báu của nó. Từ xa xưa, Nữ hoàng Ai Cập Cleopatra đã sử dụng Saffron để gìn giữ sắc đẹp và tăng sự quyến rũ của mình. Cũng như các vua chúa, tầng lớp quý tộc thời cổ đại và trung cổ đã sử dụng Saffron để làm đẹp.",
      content4:
        "Trong Saffron, có hàng trăm chất dinh dưỡng hữu cơ giúp 𝒍𝒂̀𝒏 𝒅𝒂 𝒕𝒓𝒂̆́𝒏𝒈 𝒉𝒐̂̀𝒏𝒈, 𝒄𝒂̆𝒏𝒈 𝒎𝒊̣𝒏 và ngăn ngừa mụn, nám. Các chất chống oxy cực mạnh trong Saffron có khả năng đ𝒊𝒆̂̀𝒖 𝒄𝒉𝒊̉𝒏𝒉 𝒃𝒆́𝒐 𝒑𝒉𝒊̀ và các rối loạn chuyển hóa liên quan, hữu ích trong việc 𝒑𝒉𝒐̀𝒏𝒈 𝒏𝒈𝒖̛̀𝒂 𝒗𝒂̀ 𝒌𝒊𝒆̂̉𝒎 𝒔𝒐𝒂́𝒕 𝒕𝒊̀𝒏𝒉 𝒕𝒓𝒂̣𝒏𝒈 𝒕𝒉𝒖̛̀𝒂 𝒄𝒂̂𝒏!",
      content5:
        "Bên cạnh đó, Saffron 𝒕𝒂̆𝒏𝒈 𝒔𝒖̛́𝒄 đ𝒆̂̀ 𝒌𝒉𝒂́𝒏𝒈, trao cho bạn một “tấm khiên” bảo vệ sức khỏe lâu dài. Saffron chứa nhiều carotenoid, retinol nên có khả năng chống oxy hóa. Saffron dùng làm mặt nạ giúp làn da sáng khỏe, kháng viêm, chống khuẩn và điều trị các chứng mụn viêm rất hiệu quả.",
      content6:
        "Như vẫn gọi là {'triệt để từ trong ra ngoài'}, bạn có thể sử dụng Saffron làm gia vị nêm nếm tạo màu sắc cho món ăn có màu vàng tươi đẹp tự nhiên. Như vậy bạn sẽ được {'chăm sóc'} cả ngày bằng Saffron.",
    },
    typeBeauty: "Sức khỏe",
  },
];
export const BeautyList: BeautyListTypes[] = [
  {
    idBeauty: "1",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856415/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img2_yfgtix.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697857817/BeautyProject/ImageBeautyOption_blq9rn.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855832/BeautyProject/z4803563352611_eddcc23970a12a4423174cbac74047e4_qcycxg.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 0,
        height: 0,
      },
    },
    tittleBeauty: "Làm đẹp da bằng cách pha chế hỗn hợp saffron ngâm mật ong",
    contentBeauty: {
      contentHead1:
        "Mỗi ngày một ly nước mật ong bạc hà Saffron cho tinh thần tươi trẻ hơn.",
      contentHead2:
        " Mật ong bạc hà ngọt dịu, thơm mát hoà quyện với Saffron thoảng hương cỏ khô sẽ là thức uống bổ dưỡng, mang tới năng lượng tích cực mỗi ngày cho bạn và gia đình.",
      contentTittle3: "𝐃𝐮̀𝐧𝐠 𝐡𝐨̂̃𝐧 𝐡𝐨̛̣𝐩 để 𝐮𝐨̂́𝐧𝐠",
      content4:
        "Chuẩn bị một chai thủy tinh được rửa sạch bằng nước nóng. Sau đó, ngâm 0,1 gram saffron cùng 100ml mật ong nguyên chất trong khoảng một ngày.",
      content5:
        "Đối với hỗn hợp này có thể dùng và bảo quản trong vòng 10 ngày. Mỗi lần dùng, bạn có thể uống một trực tiếp 1 thìa cà phê saffron ngâm mật ong hoặc pha với nước ấm.",
      content6:
        "Thời điểm để hỗn hợp phát huy công dụng hiệu quả là buổi sáng trước khi ăn và tối trước khi đi ngủ.",
      contentTittle7: "𝐃𝐮̀𝐧𝐠 𝐡𝐨̂̃𝐧 𝐡𝐨̛̣𝐩 để 𝐥𝐚̀𝐦 𝐦𝐚̣̆𝐭 𝐧𝐚̣",
      content9:
        "Bạn giã nhuyễn 3 đến 5 sợi hoa nhụy tây sau đó ngâm cùng 1 hoặc 2 thìa mật ong nguyên chất. Tiếp đến, bạn để hỗn hợp trong ngăn mát tủ lạnh 15 đến 30 phút là có thể dùng được.",
      content10:
        " Sau khi tẩy trang, bạn dùng hỗn hợp thoa đều và massage nhẹ nhàng trong 3 phút và thư giãn 20 phút để dưỡng chất thấm đều trên da mặt. Cuối cùng, rửa sạch lại với nước ấm.",
      content11: "",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "2",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856418/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img3_eyqgqn.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855831/BeautyProject/z4803563365306_7474e3da042f78ff49881be4b11661c2_lvasth.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855831/BeautyProject/z4803563362868_14952a48e95d7ac073be86e6a436a38c_dvqkwn.jpg  ",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 0,
        height: 0,
      },
    },
    tittleBeauty: "Công dụng của saffron cải thiện sắc đẹp ",
    contentBeauty: {
      contentHead1: "Không có người phụ nữ xấu",
      contentHead2: "Chỉ có người phụ nữ không biết làm đẹp.",
      contentTittle3: "",
      content4:
        "Là con gái dù ở độ tuổi nào cũng phải thật xinh đẹp, kiêu sa và sang trọng. Đừng bao giờ lấy lý do tuổi tác để ngăn cản ý định làm đẹp nhé các chị em.",

      content5:
        "Tân trang nhan sắc và giữ lại nét đẹp thanh xuân cùng các dòng sản phẩm Charm Charm Saffron, bởi với hoạt chất Crocin chống oxy hóa cực mạnh, giải nhiệt thanh lọc cơ thể, mang lại cảm giác dễ chịu cả ngày dài:",

      content6: "",
      contentTittle7: "",
      content9:
        "- Chống lão hoá, cải thiện làn da trở nên căng bóng, hồng hào.",

      content10: "- Giúp cân bằng nội tiết tố",

      content11: "- Hỗ trợ điều trị trầm cảm, căng thẳng stress",

      content12: "- Saffron hỗ trợ giảm cân hiệu quả",

      contentTittle13: "",
      content14:
        "Quá nhiều ưu điểm trong một sản phẩm thì ngại gì không thử ngay nào các nàng ơi!",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "3",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856417/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img5_oqbozd.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856419/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img4_lyivf6.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697859135/BeautyProject/z4803736297243_561bbf3ab621139f962d4b0c88c27475_gzcvjt.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 0,
        height: 0,
      },
    },
    tittleBeauty: "Saffron mix hạt chia - Bí kíp giữ thanh xuân của phái đẹp ",
    contentBeauty: {
      contentHead1:
        "Nếu đã quá nhàm chán khi pha Saffron với nước lọc thông thường thì các nàng thử ngay cách này xem sao nhé. Chẳng những bổ sung chất xơ, điều chỉnh cân nặng mà da còn căng mướt trắng sáng thấy rõ luôn.",
      contentHead2: "",
      contentTittle3: "Chuẩn bị:",

      content4: "- 15 sợi Saffron",

      content5: "- 2 thìa hạt chia",

      content6: "- Bình nước 1 lít",
      contentTittle7: "𝐃𝐮̀𝐧𝐠 𝐡𝐨̂̃𝐧 𝐡𝐨̛̣𝐩 để 𝐥𝐚̀𝐦 𝐦𝐚̣̆𝐭 𝐧𝐚̣",
      content9:
        " Cho hạt chia và Saffron vào bình nước rồi lắc đều, chờ 15-20p cho hạt chia nở ra và Saffron tiết dưỡng chất ra nước là sử dụng được luôn. Ai nào thích uống lạnh thì cho vào ngăn mát 2 tiếng là thưởng thức.",
      content10:
        " Hạt chia lại chứa nhiều chất xơ, omega-3 và omega-6 giúp tăng cường sức khỏe cho làn da. Do đó khi kết hợp cả 2 sẽ có ngay thức uống làm đẹp cực kỳ hiệu quả, uống tới đâu da dẻ lại căng mướt, trắng sáng tới đó. Chị em nhất định phải thử nhé!",

      content11: "",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "4",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856415/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img6_rkbqi0.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856418/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img11_wzvyzl.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856414/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img9_wrrm3f.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty: "3 lý giải cho độ hot của saffron trong những năm gần đây",
    contentBeauty: {
      contentHead1: "",
      contentHead2: "",
      contentTittle3: "",
      content4:
        "Bởi tình hình dịch bệnh còn ảnh hưởng nhiều nên nhu cầu nâng cao sức đề kháng, bảo vệ sức khoẻ của người dân tăng cao. Đặc biệt, những sản phẩm thực phẩm chức năng nguồn gốc thiên nhiên được ưa chuộng và tìm hiểu. Và saffron là loại thảo dược quý vùng Trung Đông, được mệnh danh vàng đỏ bởi công dụng toàn diện cho cơ thể!",

      content5: "",

      content6: "",
      contentTittle7: "3 CÔNG DỤNG NỔI BẬT NHẤT CỦA SAFFRON CÓ THỂ KỂ ĐẾN:",
      content9:
        "1) Saffron tăng chất chống oxy hóa mạnh: Chất oxy hóa trong cơ thể nhiều là nguyên nhân dẫn đến các bệnh mãn tính, thậm chí là ung thư. Saffron giàu chất Crocin, chất chống oxy hóa mạnh mẽ giúp cơ thể tăng thêm đề kháng",

      content10:
        "2) Saffron an thần: Một trong những tác dụng có hiệu quả nhanh nhất khi dùng Saffron đó là chất lượng giấc ngủ được cái thiện. Saffron mang đến sự thoải mái cho tinh thần người sử dụng, làm giảm căng thẳng, mệt mỏi từ đó tạo cho bạn những giấc ngủ ngon",

      content11:
        "3) Saffron làm chậm tốc độ lão hoá da: Saffron chứa nhiều vitamin A, bao gồm retinol, axit retinoic và các carotenoid tiền vitamin A có công dụng giảm tốc độ lão hóa và tăng cường sự đàn hồi, mềm mại cho da.",

      content12:
        "Với những công dụng trên, SAFFRON xứng đáng được đặt trong tủ thuốc của mọi gia đình! Hãy sử dụng Saffron Extra Super Negin, loại Saffron cao cấp nhất để bảo vệ sức khoẻ từ hôm nay.",

      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "5",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856414/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img7_nmk2fa.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855832/BeautyProject/z4803563352611_eddcc23970a12a4423174cbac74047e4_qcycxg.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855831/BeautyProject/z4803563365306_7474e3da042f78ff49881be4b11661c2_lvasth.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty:
      "Saffron - Nguyên liệu thiết yếu cho những chiếc mặt nạ home-made",

    contentBeauty: {
      contentHead1: "",
      contentHead2: "",
      contentTittle3: "",
      content4:
        "Thời gian giãn cách là lúc chúng ta vừa phòng chống dịch vừa tự nâng cao sức khoẻ. Với chị em, việc cải thiện sắc đẹp vô cùng quan trọng, bởi vẻ ngoài cũng là một trong các yếu tố đánh giá sức khoẻ!",

      content5:
        "Vậy nên chị em đừng bỏ lỡ những mẹo làm đẹp hay từ Saffron nhé!",

      content6: "",
      contentTittle7: "",
      content9:
        "Sử dụng Saffron sẽ làm da chị em trắng sáng, đều màu lên rõ rệt. Tyrosinase trong Saffron là chất có tác dụng tổng hợp ra hắc sắc tố melanin, bảo vệ tế bào da khỏi tác hại của bức xạ UVB, chống nắng, giảm nguy cơ ung thư da.",

      content10:
        "Bên cạnh đó, Saffron có chứa các dưỡng chất thẩm thấu nhanh, không bít lỗ chân lông, dưỡng ẩm sâu cho da.",

      content11:
        "Kết hợp với Saffron để làm ra những chiếc mặt nạ home-made cực kì đa dạng như: yến mạch, sữa chua, nha đam,... Saffron chất lượng loại Extra Super Negin mang lại hiệu quả càng cao và không gây tác dụng phụ!",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "6",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856414/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img9_wrrm3f.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856419/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img10_1_brudxl.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856424/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img13_oi7szt.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697712789/BeautyProject/z4798483483836_df606b56d5b1fb9a3a13164f2ee27ee3_kdflrc.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty: "Các cách thư giãn cùng mật ong bạc hà saffron ",
    contentBeauty: {
      contentHead1:
        "Bên cạnh cách uống để giải nhiệt thông thường, mật ong bạc hà Saffron cũng là một trong các nguyên liệu giúp thư giãn da mặt hiệu quả! Hôm nay hãy cùng Saffron khám phá thêm 1 số loại mặt nạ sử dụng mật ong bạc hà Saffron dưỡng da nhé!",
      contentHead2: "",
      contentTittle3: "Mặt nạ mật ong bạc hà và saffron sữa chua",

      content4:
        "Với mặt nạ làm đẹp da mặt từ mật ong bạc hà saffron và sữa chua không đường này ngoài tác dụng làm trắng da hiệu quả, nó cũng cung cấp độ ẩm tối ưu cho da, ngăn chặn nếp nhăn da, làm sáng da, giúp da căng mịn hơn.",

      content5: "Cách làm:",

      content6:
        "Lấy 2 muỗng mật ong bạc hà saffron trộn cùng 2 muỗng sữa chua trắng không đường, trộn thật đều để hai hỗn hợp này quyện đều vào nhau.",
      contentTittle7: "Mặt nạ mật ong bạc hà saffron và trứng gà",
      content9:
        "Sự kết hợp giữa mật ong bạc hà saffron trứng gà sẽ tạo nên hỗn hợp mặt nạ dưỡng da tuyệt vời cho những cô nàng có làn da sần sùi, kém săn chắc",

      content10:
        "Mặt nạ mật ong bạc hà saffron trứng gà giúp phục hồi làn da đã có dấu hiệu lão hóa, giúp căng da, thu nhỏ lỗ chân lông.",

      content11: "Cách làm:",

      content12:
        "Trộn 1 lòng trắng trứng gà + 1 muỗng mật ong bạc hà saffron nguyên chất, đánh đều hỗn hợp sau đó massage hỗn hợp lên da. Để yên trong khoảng 20 phút rồi rửa mặt bằng nước ấm.",

      contentTittle13: "Mặt nạ mật ong bạc hà saffron và chuối",
      content14:
        "Mặt nạ mật ong bạc hà saffron và chuối giúp sáng da, tăng cường độ ẩm cho da.",
      content15: "Cách làm:",
      content16:
        "Sử dụng nửa trái chuối chín, 1 thìa cà phê mật ong bạc hà saffron nguyên chất. Trộn và nghiền nhuyễn hỗn hợp rồi thoa trực tiếp lên da mặt đã rửa sạch, sau 20 phút rửa mặt lại thât sạch bằng nước ấm.",
      content17:
        " Với 1 số công thức này, da của bạn sẽ được chăm sóc và phục hồi hiệu quả.",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "7",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856424/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img13_oi7szt.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618389/BeautyProject/SSFF-17_hsnvkw.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618377/BeautyProject/2_dyaogx.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty: "Saffron hữu ích như thế nào cho làn da trong mùa hè?",
    contentBeauty: {
      contentHead1:
        "Mùa hè là khoảng thời gian tia UV có cường độ mạnh nhất trong năm. Với sự nắng nóng kéo dài và tia UV mạnh như vậy rất dễ khiến sức khỏe tổn hại, đặc biệt là làn da, thứ giúp ta chống lại các tác hại từ môi trường.",
      contentHead2: "",
      contentTittle3:
        "Saffron với 4 công dụng tuyệt vời sẽ bảo vệ và mang lại làn da sáng cho bạn!",

      content4:
        "1) Saffron là một chất chống oxy hóa: Saffron có hàm lượng chất chống oxy hóa cao như carotenoid ngăn ngừa tổn thương cho da và bổ sung cá chất cần thiết cho da khỏe hơn. Giúp thải độc cho làn da khỏi các tạp chất từ môi trường.",

      content5:
        "2) Saffron kháng khuẩn mạnh mẽ: Vi khuẩn trú ngụ trên da là nguyên nhân chính gây ra mụn, viêm. Các loại mụn và bệnh viêm da thường tăng vào mùa hè do mồ hôi và bụi, tuy nhiên chúng có thể được giảm bớt bằng cách sử dụng saffron.",

      content6: "",
      contentTittle7: "",
      content9:
        "3) Crocetin, là một hợp chất có nhiều trong Saffron có đặc tính chống vi khuẩn đáng kinh ngạc, giúp làn da chống lại vi khuẩn, ngừa mụn và làm sạch sâu trong da hiệu quả.",

      content10:
        "4) Saffron làm lành da nhanh: Tia UV và các tác nhân môi trường khiến da trở nên nhạy cảm hơn và rất khó lành nếu nổi mụn, bị thương hoặc có sẹo. Saffron với đặc tính chống oxy hóa giúp các vết thương mau lành, chóng mờ sẹo.",

      content11: "Trong mùa hè này, hãy bảo vệ làn da với Saffron nhé!",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "8",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856425/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img0_ny89fx.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697618378/BeautyProject/SSFF-5_sf5ubh.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697617464/BeautyProject/SFT-7_fcqk0d.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty:
      "Mật ong bạc hà saffron bổ phế, mát gan – Sản phẩm đặc biệt của mùa hè!",
    contentBeauty: {
      contentHead1:
        "Thời tiết dù có mưa nhưng bên trong cơ thể vẫn nóng và gây nổi mề đay, mụn viêm cùng một số bệnh về đường hô hấp.",
      contentHead2: "",
      contentTittle3: "",
      content4:
        "Theo các phương thuốc cổ truyền, mật ong bạc hà là dược liệu quý phù hợp dùng trong mùa nóng để giảm nhiệt, điều hòa âm dương trong cơ thể và đặc biệt điều trị các bệnh về hô hấp như ho, viêm họng, phế quản,…",

      content5:
        "Ngoài ra, mật ong bạc hà giúp mát gan tiêu độc, giảm nóng trong hiệu quả",

      content6: "",
      contentTittle7: "",
      content9:
        "1) Kết hợp với Saffron, tác dụng của sản phẩm được nhân lên nhiều lần. Bên cạnh là phương thuốc quý nhuận phổi, bảo vệ cổ họng những ngày trở trời, mật ong bạc hà Saffron còn là phương thuốc dưỡng nhan thuần thiên nhiên cho các chị em ",

      content10:
        "2) Mật ong bạc hà Saffron làm giảm mụn bởi tính chất kháng khuẩn của mật ong rất mạnh, làm lành và mờ sẹo mụn cho các làn da mẫn cảm. Bên cạnh đó, sản phẩm còn giúp trắng da, cấp ẩm da trong mọi mùa.",

      content11: "",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "9",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856422/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img14_s80ecm.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856418/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img11_wzvyzl.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855830/BeautyProject/z4803563365304_d11990e70dd46c0d5d4bf97be6bb1347_saycxv.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty: "Saffron bảo vệ bạn khỏi nắng gắt như thế nào?",
    contentBeauty: {
      contentHead1: "",
      contentHead2: "",
      contentTittle3: "",
      content4:
        "Nắng nóng và khô hanh là nguyên nhân gây ra nám, sạm da, đen da và phải mất 1 thời gian dài da mới hồi lại được",

      content5:
        " Cho dù chị em có sử dụng bao nhiêu loại kem chống nắng, che chắn kín thì tia cực tím ngoài trời 41 độ vẫn sẽ gây tổn thương cho da!",

      content6: "",
      contentTittle7: "",
      content9: "VẬY TẠI SAO CHỊ EM KHÔNG SỬ DỤNG SAFFRON TỪ HÔM NAY?",

      content10:
        "Saffron chứa nhiều Carotenoid (gồm Beta Carotene, Lycopene, Zeaxanthin) và đặc biệt là Retinol – dưỡng chất chống lão hóa hàng đầu trong da liễu.",

      content11:
        "Vì vậy, sử dụng Saffron thường xuyên mỗi ngày sẽ quay ngược quá trình lão hóa da của bạn, đồng thời bảo vệ làn da khỏi tia UV cũng như làm sáng da an toàn.",

      content12:
        "Không gì quý hơn mỹ phẩm hoàn toàn thiên nhiên, không gây tác dụng phụ! Chị em đừng bỏ lỡ nhé!",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "10",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856416/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img12_m4hozb.png  ",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855831/BeautyProject/z4803563365306_7474e3da042f78ff49881be4b11661c2_lvasth.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697855831/BeautyProject/z4803563362868_14952a48e95d7ac073be86e6a436a38c_dvqkwn.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty: "Saffron giúp giảm mụn như thế nào?",
    contentBeauty: {
      contentHead1:
        "Vì sao một vùng có khí hậu khắc nghiệt như Trung Đông mà làn da người phụ nữ nơi đó vẫn mịn màng, khỏe đẹp? Đáp án chính là họ đã sử dụng Saffron!",
      contentHead2: "",
      contentTittle3: "",
      content4:
        "Bên cạnh các phương pháp nấu ăn, ngâm nước uống thông thường, Saffron tại Trung Đông được dùng như 1 loại mặt nạ giúp sát khuẩn, ngừa mụn và giảm nám da",
      content5:
        "Trong saffron có chứa nhiều vitamin A, bao gồm retinal, retinol, axit retinoic và các carotenoid tiền vitamin A có công dụng giảm tốc độ lão hóa và tăng cường sự đàn hồi, mềm mại của da",
      content6: "",
      contentTittle7: "",
      content9:
        "Không những vậy, vitamin A này còn đóng vai trò bảo vệ, giảm tình trạng da bị mụn và kiềm dầu, đẩy nhanh tốc độ liền sẹo cũng như mờ thâm",
      content10:
        "Nếu bạn đang tìm kiếm những sản phẩm dưỡng nhan hoàn toàn từ thiên nhiên thì Saffron là lựa chọn hàng đầu!",
      content11: "",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "11",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856424/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img13_oi7szt.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697712789/BeautyProject/z4798483486185_8b696eb0bb726574b1040ceaa1d0b311_r93rr3.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697712789/BeautyProject/z4798483475435_3a94f855d444c7219f143741f88c9675_jxrutz.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty:
      "Tại sao ngày càng nhiều chị em sử dụng Saffron thay cho các loại mặt nạ và kem dưỡng?",
    contentBeauty: {
      contentHead1:
        "Bên cạnh các công dụng tuyệt vời cho sức khỏe, Saffron còn là dược thảo dưỡng nhan mang lại sự trẻ hóa làn da cho chị em mà không gây tác dụng phụ hay kích ứng!",
      contentHead2: "",
      contentTittle3: "",

      content4:
        "Các loại mặt nạ hay kem dưỡng dù ít hay nhiều đều có 1 số thành phần hóa chất, sử dụng trên da nhạy cảm có khả năng gây kích ứng, viêm nhiễm, thậm chí là tổn thương sâu cho da.",
      content5:
        "Tuy nhiên, khi bạn bôi trực tiếp Saffron lên da hoặc kết hợp Saffron với các nguyên liệu như sữa chua, mật ong, trứng,… hoàn toàn tự nhiên nên da không hề bị kích ứng, giúp nuôi dưỡng làn da sạch – khỏe!",
      content6: "",
      contentTittle7: "",

      content9:
        "Dưỡng chất từ Saffron thẩm thấu vào da làm da mịn màng hơn, ngừa khuẩn giảm viêm, mụn hiệu quả và giúp trẻ hóa làn da sâu từ bên trong!",
      content10: "Hãy tự làm tươi trẻ bản thân bằng Saffron từ hôm nay nhé!",
      content11: "",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "12",

    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856422/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img14_s80ecm.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697712469/BeautyProject/z4798468323202_a48f03dd256d27f9b2a02ee030dc6866_yn396t.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697712470/BeautyProject/z4798468323978_f981ecaf63052f76a461f92f19eefdb3_fphbtm.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty: "LÀM THẾ NÀO ĐỂ THOÁT KHỎI NỖI SỢ NGÀY ĐÈN ĐỎ?",
    contentBeauty: {
      contentHead1: "NGÀY ĐÈN ĐỎ + NẮNG NÓNG = ÁC MỘNG CỦA CHỊ EM!",
      contentHead2: "",
      contentTittle3: "",

      content4:
        "Hội chứng tiền kinh nguyệt (PMS) và những ngày “đèn đỏ” là nỗi lo thường trực của nhiều chị em bởi chúng gây sự bất tiện, thậm chí là đau đớn, suy nhược kéo dài cho cơ thể!",
      content5:
        "Vậy nên, bên cạnh bổ sung những món ăn nhiều sắt và khoáng chất, sử dụng Saffron để làm giảm những triệu chứng PMS là phương pháp được các bác sĩ khuyên dùng!",
      content6: "",
      contentTittle7: "",

      content9:
        "Crocetin và crocin là hai chất chống oxy hóa được tìm thấy bên trong nghệ tây và có khả năng làm giảm áp lực chị em trong những ngày căng thẳng",
      content10:
        "Thêm vào đó, Safranal được biết đến với công dụng an thần và không gây tác dụng phụ, giúp người phụ nữ giảm bớt cảm giác đau đớn, mệt mỏi những ngày đầu kinh nguyệt",
      content11:
        "Ngoài ra, Saffron cung cấp 1 lượng lớn các chất dinh dưỡng và kháng khuẩn phòng ngừa mụn viêm, giúp làn da hồng hào, mịn màng hơn!",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
  {
    idBeauty: "13",
    imgBeauty: {
      imgBeauty1: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856422/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img15_vlwz5k.png",
        alt: "",
        width: 1519.2,
        height: 500,
      },
      imgBeauty2: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697860245/BeautyProject/z4803789458349_e40e479adc48ea0900e2945f0fc23505_ptovli.jpg",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty3: {
        src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697856425/BeautyProject/CHUY%C3%8AN_M%E1%BB%A4C_CHO_WEBSITE_Img0_ny89fx.png",
        alt: "",
        width: 400,
        height: 500,
      },
      imgBeauty4: {
        src: "",
        alt: "",
        width: 400,
        height: 500,
      },
    },
    tittleBeauty:
      "Mỗi ngày 1 ly trà táo mật ong bạc hà Saffron sẽ giúp bạn tươi trẻ dài lâu!",
    contentBeauty: {
      contentHead1: "",
      contentHead2: "",
      contentTittle3: "",

      content4:
        "Mật ong bạc hà Saffron được biết đến là một nguyên liệu không thể thiếu trong các sản phẩm dưỡng da thuần thiên nhiên cho phái nữ. Bên cạnh đó, nó còn cho ta những thức uống thơm ngon – bổ dưỡng!",
      content5: "",
      content6: "",
      contentTittle7: "",

      content9:
        "Bạn chỉ cần chuẩn bị: 1 quả táo, 2 túi lọc trà Lipton, khoảng 2 muỗng cà phê mật ong bạc hà Saffron cho thức uống này",
      content10:
        "Để làm trà táo mật ong bạc hà Saffron trước hết bạn cần rửa sạch táo rồi gọt vỏ và thái hạt lựu. Nếu không muốn bỏ vỏ bạn cũng có thể để nguyên vỏ nhé, nhưng lưu ý là cần sửa thật sạch!",
      content11:
        "Cuối cùng bạn thả táo vào ly và khuấy đều rồi để nguội. Lúc này bạn có thể thưởng thức ngay hoặc cho thêm vài viên đá lạnh để ngon miệng hơn",
      content12: "",
      contentTittle13: "",
      content14: "",
      content15: "",
      content16: "",
      content17: "",
    },
    typeBeauty: "Sức khỏe",
  },
];
export const CuisineListMain: CuisineListMainTypes[] = [
  {
    idCuisine: 1,
    urlCuisineMain: "kem-vani-saffron",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697863407/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_114303_um0mgm.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "KEM VANI SAFFRON",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
    },
    typeCuisine: "Ẩm thực",
  },
];
export const CuisineList: CuisineListTypes[] = [
  {
    idCuisine: 1,
    urlCuisine: "com-saffron",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697864343/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_115728_ki5lys.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "CƠM SAFFRON",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: 2,
    urlCuisine: "Saffron-for-Fried-Chicken",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697864342/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_115736_bsmgyf.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "Saffron for Fried Chicken",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: 3,
    urlCuisine: "saffron-trong-nau-an",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697864343/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_115743_yibz4i.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "Saffron trong nấu ăn",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: 4,
    urlCuisine: "canh-chua-ca-saffron",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697864310/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_115753_wtfcfq.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "Canh chua cá saffron",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: 5,
    urlCuisine: "sup-saffron-rau-cu",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697864343/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_115759_gwialu.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "Súp saffron rau củ",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
    },
    typeCuisine: "Ẩm thực",
  },
  {
    idCuisine: 6,
    urlCuisine: "xoi-man-saffron",
    imgCuisine: {
      src: "https://res.cloudinary.com/dkfg3xljc/image/upload/v1697864343/BeautyProject/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-10-21_115806_bj8p3j.png",
      alt: "",
      width: 500,
      height: 600,
    },
    tittleCuisine: "Xôi mặn saffron",
    contentCuisine: {
      contentTittle1: "Nguyên liệu",
      content2:
        "300ml whipping cream, 500ml sữa tươi, 200 gram đường, hương liệu vani, 10-15 sợi Saffron",
      contentTittle3: "Cách làm :",
      content4: "Ngâm saffron trong nước ấm 20 phút để nhụy hoa tan màu.",
      content5:
        "Đun sôi sữa, đổ vào bát, thêm nước saffron và hương liệu vani, khuấy đều. Sau đó thêm đường.",
      content6:
        "Làm nguội nhanh hỗn hợp bằng cách đặt hỗn hợp trong một bát đá lớn. Trộn hỗn hợp với whipping cream, đảo đều nhẹ tay.",
      content7: "Cho vào tủ lạnh, 30p – 1h lấy ra đảo đều.",
      content8: "Như vậy 6-7 lần trong khoảng 8 tiếng.",
      content9:
        "Bạn có thể rắc thêm hạt ngũ cốc hoặc hoa quả cho món ăn thêm bắt mắt hơn!",
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
