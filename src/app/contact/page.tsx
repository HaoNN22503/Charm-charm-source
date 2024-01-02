import React from "react";

const ContactHABPage = () => {
  return (
    <div className="pb-[50px] w-full justify-evenly flex flex-col items-center text-white bg-[#a72020] contact-HAB__container">
      <div className="pt-[40px] items-center text-[23px] w-[70%] contact-HAB-tittle">
        <p>Ghé thăm showroom</p>
        <div className="w-full h-[400px] mt-[20px] contact-HAB-video-showroom">
          <video
            controls
            autoPlay
            src="https://res.cloudinary.com/dkfg3xljc/video/upload/v1703917215/BeautyProject/B%C3%ACnh_lu%E1%BA%ADn_ienyv1.mp4"
            className="contact-HAB-video-showroom-detail w-fit h-full"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ContactHABPage;
