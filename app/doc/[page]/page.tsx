function DocIntroduction({ params }: { params: { page: string } }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Production best practices</h2>
      <div className="mt-8 text-gray-800">
        This guide provides a comprehensive set of best practices to help you
        transition from prototype to production. Whether you are a seasoned
        machine learning engineer or a recent enthusiast, this guide should
        provide you with the tools you need to successfully put the platform to
        work in a production setting: from securing access to our API to
        designing a robust architecture that can handle high traffic volumes.
        Use this guide to help develop a plan for deploying your application as
        smoothly and effectively as possible.
      </div>
    </div>
  );
}

export default DocIntroduction;
