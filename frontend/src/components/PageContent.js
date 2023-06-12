const PageContent = ({ title, children }) => {
  return (
    <div className="text-center my-3">
      <h1 className="text-danger">{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;