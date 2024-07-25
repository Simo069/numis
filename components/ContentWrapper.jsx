import MaxWidthWrapper from "./MaxWidthWrapper";

const ContentWrapper = ({ children, title }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
);

export default ContentWrapper;
