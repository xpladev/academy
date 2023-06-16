import React from "react";
const Card = ({
  imgLink,
  imgSrc,
  title,
  description,
}: {
  imgLink?: string;
  imgSrc?: string;
  title: string;
  description: string;
}) => {
  const contents = (
    <div className="px-8 flex flex-row items-center cursor-pointer max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {imgSrc && <img className="w-16 rounded-t-lg" src={imgSrc} alt="" />}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );

  return imgLink ? (
    <a href={imgLink} target="_blank">

      {contents}
    </a>
  ) : (
    contents
  );
};

export default Card;
