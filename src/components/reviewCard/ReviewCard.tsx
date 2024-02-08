type TReviewProps = {
  profileImg: string;
  userName: string;
  designation: string;
  companyName: string;
  reviewText: string;
  companyLogo: string;
  className: string;
};

const ReviewCard = ({
  profileImg,
  userName,
  designation,
  companyName,
  reviewText,
  companyLogo,
  className,
}: TReviewProps) => {
  return (
    <div
      className={`w-[350px] lg:w-[400px] p-10 rounded-[24px] transition-all duration-200
      hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
      mx-auto ${className}`}
    >
      <div className="flex gap-3 items-center ">
        <img src={profileImg} />
        <div>
          <h3 className=" text-dark-blue text-[16px] font-inter font-medium leading-[150%]">
            {userName}
          </h3>
          <h6 className=" font-inter text-[14px] mt-1 text-[#42526B] leading-[142%]">
            {designation}
            <span className="text-[#7534FF] font-medium ml-1">
              {companyName}
            </span>
          </h6>
        </div>
      </div>

      <p className="mt-6 text-dark-blue font-inter text-[18px] leading-[144%]">
        {reviewText}
      </p>
      <img src={companyLogo} className="mt-10" />
    </div>
  );
};

export default ReviewCard;
