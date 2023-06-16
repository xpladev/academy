import * as React from 'react';

function GrayCard({title, contents}: {
    title: string;
    contents: React.ReactNode;
  }) {
  return (
    <div className="flex flex-col h-full bg-card dark:bg-card-dark shadow-inner justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3">
      <div>
        <h4 className="text-primary dark:text-primary-dark font-bold text-2xl leading-tight">
          {title}
        </h4>
        <div className="my-4">{contents}</div>
      </div>
    </div>
  );
}

export default GrayCard;
