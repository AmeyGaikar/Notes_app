const App = () => {
  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        {/* sidebar */}
        <div className=" col-span-3"></div>

        {/* main */}
        <div className="col-span-9 p-8 flex flex-col gap-7">
          <h1 className="text-3xl  font-bold">Create New Note</h1>

          <div className="flex flex-col gap-2 overflow-x-auto">
            <label className="text-xl font-semibold py-2 underline" htmlFor="input">
              Title
            </label>
            <input
              className="border-b-2 py-1 focus:outline-0 w-100"
              type="text"
              name="input"
              id="input"
            />
          </div>

          <p className="text-xl font-semibold underline">Content</p>
          <textarea className="border rounded-xl w-[800px]" name="content" id="content" rows={10}>
          </textarea>

          <div>
            <button className="bg-black text-white
             px-5 py-3 rounded-xl">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
