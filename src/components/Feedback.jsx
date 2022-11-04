import styles, { layout } from "../style";

const Feedback = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <form
        className="relative flex flex-col max-w-[500px] w-full px-8 py-16 border-2 border-white/50 border-1-white/20 border-b-white/20 rounded-2xl bg-white/20 overflow-hidden backdrop-blur-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className="font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[100px] leading-[75px]">
          Send us your message
        </h3>
        <input
          type="text"
          placeholder="Name"
          className="relative py-2 px-4 my-4 border-2 border-opacity-50 border-white rounded-lg bg-transparent placeholder-white outline-none placeholder-opacity-80 text-white caret-white focus:border-opacity-80 focus:bg-white/10 z-50"
        />
        <input
          type="email"
          placeholder="Email"
          className="relative py-2 px-4 my-4 border-2 border-opacity-50 border-white rounded-lg bg-transparent placeholder-white outline-none placeholder-opacity-80 text-white caret-white focus:border-opacity-80 focus:bg-white/10 z-50"
        />
        <textarea
          placeholder="Type youe message here..."
          row="10"
          className="relative py-2 px-4 my-4 border-2 border-opacity-50 border-white rounded-lg bg-transparent placeholder-white outline-none placeholder-opacity-80 text-white caret-white focus:border-opacity-80 focus:bg-white/10 z-50"
        />
        <button
          type="submit"
          className="relative py-2 px-4 my-4 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg text-white text-lg font-semibold tracking-wide z-50"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default Feedback;
