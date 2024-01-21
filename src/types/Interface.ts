import { Dispatch, SetStateAction } from "react";

export interface CommentCardTypes {
  idComment: number;
  img: string;
  name: string;
  comment: string;
}
export interface AdditionalItemTypes {
  id: number;
  quantity: number;
  name: string;
  price: number;
  image: { src: string; alt: string; width: number; height: number };
}
export interface ProductListTypes {
  idProduct: string;
  nameProduct: string;

  profileProduct: {
    topicProfile: string;
    productProfile: string;
    contentProductProfile1: string;
    contentProductProfile2: string;
    contentProductProfile3: string;
    tittleProfile1: string;
    tittleProfile2: string;
    tittleProfile3: string;
    contentTittle1p1: string;
    contentTittle1p2: string;
    contentTittle1p3: string;
    contentTittle1p4: string;
    contentTittle1p5: string;
    contentTittle1p6: string;
    contentTittle1p7: string;
    contentTittle2p1: string;
    contentTittle2p2: string;
    contentTittle2p3: string;
    contentTittle2p4: string;
    contentTittle2p5: string;
    contentTittle2p6: string;
    contentTittle2p7: string;
    contentTittle3p1: string;
    contentTittle3p2: string;
    contentTittle3p3: string;
  };
  imgProfileThumbNails: [
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  ];
  quantity: number;
  capacities: { size: string; price: number; quantity: number }[];
  orders: { productId: number; quantity: number }[];
  selected: boolean;
}
export interface BeautyListMainTypes {
  idBeauty: string;
  topicBeauty: string;
  imgBeauty: {
    imgBeauty1: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imgBeauty2: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  tittleBeauty: string;
  contentBeauty: {
    step1: string;
    step2: string;
    step3: string;
    step5: string;
    step4: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
  };
  typeBeauty: string;
}
export interface BeautyListTypes {
  idBeauty: string;
  topicBeauty: string;
  imgBeauty: {
    imgBeauty1: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imgBeauty2: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  tittleBeauty: string;
  contentBeauty: {
    tittle1: string;
    tittle2: string;
    tittle3: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
    content6: string;
    content7: string;
    content8: string;
    contentTittle1: string;
    contentTittle2: string;
  };
  typeBeauty: string;
}
export interface CommentTypes {
  idComment: number;
  contentComment: string;
  tittleComment: string;
  ratingComment: number; // Giả sử mặc định là 5 sao
  nameComment: string;
  recommend: boolean;
}
export interface CuisineListMainTypes {
  idCuisine: string;
  topicCuisine: string;
  imgCuisine: [
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  ];
  tittleCuisine: string;
  contentCuisine: {
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
    content6: string;
  };
  typeCuisine: string;
}
export interface CuisineListTypes {
  idCuisine: string;
  topicCuisine: string;
  imgCuisine: [
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    {
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  ];
  tittleCuisine1: string;
  tittleCuisine2: string;
  contentCuisine: {
    tittle1: string;
    tittle2: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    step7: string;
    contentTittle1: string;
    contentTittle2: string;
    contentTittle3: string;
    contentTittle4: string;
    contentTittle5: string;
    contentTittle6: string;
    contentStep1p1: string;
    contentStep1p2: string;
    contentStep1p3: string;
    contentStep1p4: string;
    contentStep2p1: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
  };
  typeCuisine: string;
}
export interface ReviewTypes {
  id: number;
  name: string;
  rating: number;
  title: string;
  comment: string;
  recommendation: boolean;
  date: string;
}
export interface CommentFeedbackTypes {
  idComment: string;
  nameComment: string;
  contentComment: string;
  starComment: number;
  imgComment: string;
  timeComment: string;
}
