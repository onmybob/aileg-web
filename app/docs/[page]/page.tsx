function DocIntroduction({ params }: { params: { page: string } }) {
  return (
    <div className="w-screen ">
      <div className="w-full mx-auto px-8 py-8 flex flex-col  flex-shrink-1 break-words leading-7">
        <h2 className="text-3xl font-semibold">Hi~</h2>I **love** using
        [Next.js](https://nextjs.org/)
      </div>
    </div>
  );
}

export default DocIntroduction;
