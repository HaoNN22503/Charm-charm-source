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
}
export interface ProductListTypes {
  idProduct: string;

  nameProduct: string;
  priceProduct: number;
  profileProduct: string;
  imgProfile: {
    imgProfile1: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imgProfile2: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imgProfile3: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imgProfile4: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  quantity: number;
  orders: { productId: number; quantity: number }[];
  selected: boolean;
}
export interface BeautyListMainTypes {
  idBeauty: string;
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
    imgBeauty3: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  tittleBeauty: string;
  contentBeauty: {
    content1: string;
    content2: string;
    content3: string;
    content4: string;
    content5: string;
    content6: string;
  };
  typeBeauty: string;
}
export interface BeautyListTypes {
  idBeauty: string;
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
    imgBeauty3: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imgBeauty4: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  tittleBeauty: string;
  contentBeauty: {
    contentHead1: string;
    contentHead2: string;
    contentTittle3: string;
    content4: string;
    content5: string;
    content6: string;
    contentTittle7: string;
    content9: string;
    content10: string;
    content11: string;
    content12: string;
    contentTittle13: string;
    content14: string;
    content15: string;
    content16: string;
    content17: string;
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
  idCuisine: number;
  urlCuisineMain: string;
  imgCuisine: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tittleCuisine: string;
  contentCuisine: {
    contentTittle1: string;
    content2: string;
    contentTittle3: string;
    content4: string;
    content5: string;
    content6: string;
    content7: string;
    content8: string;
    content9: string;
  };
  typeCuisine: string;
}
export interface CuisineListTypes {
  idCuisine: number;
  urlCuisine: string;
  imgCuisine: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tittleCuisine: string;
  contentCuisine: {
    contentTittle1: string;
    content2: string;
    contentTittle3: string;
    content4: string;
    content5: string;
    content6: string;
    content7: string;
    content8: string;
    content9: string;
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
