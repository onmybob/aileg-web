const Overview = () => {
  return (
    <div>
      <h1>Usage Steps</h1>
      <ul>
        <li>Apply for an appKey and appSeruky via this page</li>
        <li>Calling the AI apis using the HTTP protocol</li>
      </ul>
      <h2>Generate appkey and appsecure</h2>

      <button className="mt-6 rounded border border-gray-500 px-3 py-1 hover:bg-gray-800">
        Generated
      </button>
      <div className="content mt-4">
        The generated appkey and appserce must be kept safe, this is an
        important parameter for calling the AI apis in the future.
      </div>
      <div className="mt-4 bg-gray-800 px-4 py-4">
        <div>appKey:3432423432</div>
        <div>appSer:3432423432</div>
      </div>
    </div>
  );
};

export default Overview;
