function Brief({ params }: { params: { page: string } }) {
  return (
    <div className="w-screen ">
      this ti
      <div className="my-2 mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="m-2 px-4 py-2 text-base text-gray-700">
          Lorem ipsum dolor sit amet...
        </div>
        <button className="rounded bg-blue-500  px-4 py-2 font-bold text-white hover:bg-blue-700">
          Button
        </button>
      </div>
    </div>
  );
}

export default Brief;
