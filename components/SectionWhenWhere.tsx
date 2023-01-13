const SectionWhenWhere = () => {
  return (
    <div className="bg-amber-100 p-4 rounded-xl shadow-card shadow-amber-400 mr-2 mb-2">
      <h1 className="text-center text-3xl text-zinc-600 underline decoration-violet-400">
        Var & När?
      </h1>
      <h2 className="text-center text-xl font-extralight text-zinc-600 mb-4">
        Vi vill börja med att säga att vi är fantastiskt glada att ni vill dela
        den här dagen med oss!
      </h2>
      <h2 className="text-center italic text-xl font-extralight text-zinc-600 mb-4">
        Efter registrering och OSA-datum kommer ni få ett mail med mer info!
      </h2>
      <div className="flex flex-col-reverse sm:flex-row justify-center gap-8 items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8967.815763666771!2d13.286492!3d55.8114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c48739fc2585c8b!2sEllinge%20Castle!5e0!3m2!1sen!2sse!4v1673445501152!5m2!1sen!2sse"
          width="300"
          height="300"
          loading="lazy"
          className="rounded border-2 border-solid border-zinc-600"
        />
        <div>
          <div className="mb-4">
            <h1 className="text-3xl text-zinc-600 underline decoration-violet-400 mb-2">
              När?
            </h1>
            <p className="text-xl font-extralight text-zinc-600">
              Onsdagen den 19 Juli 2023
            </p>
            <p className="text-xl font-extralight text-zinc-600">kl. 14:30</p>
          </div>
          <div>
            <h1 className="text-3xl text-zinc-600 underline decoration-violet-400 mb-2">
              Var?
            </h1>
            <p className="text-xl font-extralight text-zinc-600">
              Ellinge Slott
            </p>
            <p className="text-xl font-extralight text-zinc-600">
              Ellinge Gård, 241 93 Eslöv
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWhenWhere;
