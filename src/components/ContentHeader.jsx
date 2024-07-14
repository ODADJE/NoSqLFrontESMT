import ContentTitle from './ContentTitle';

function ContentHeader({ title, func, haveButton = false }) {
  return (
    <div className="flex justify-between items-center w-full">
      <ContentTitle>{title}</ContentTitle>
      {haveButton && (
        <button
          onClick={func}
          className="btn btn-primary btn-md text-lg font-semibold"
        >
          New {title}
        </button>
      )}
    </div>
  );
}

export default ContentHeader;
