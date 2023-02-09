import Card from "./Card";

const SectionWhenWhere = () => {
  return (
    <div className="bg-violet-50 rounded-xl shadow-card shadow-violet-200 mr-2 mb-2 flex flex-col sm:flex-row">
      <div className="flex flex-col text-center gap-2 justify-center mx-10 p-4">
        <h2 className="font-fancy text-4xl text-zinc-600 mb-2">Var & När?</h2>
        <p className="font-normal text-2xl text-zinc-600 mb-2">
          Vi vill börja med att säga att vi är fantastiskt glada att ni vill
          dela den här dagen med oss!
        </p>
        <p className="font-normal text-center italic text-2xl font-extralight text-zinc-600 mb-6">
          Efter registrering och OSA-datum kommer ni få ett mail med mer info!
        </p>
        <h3 className="font-fancy text-3xl text-zinc-600 -mb-2">Var?</h3>
        <p className="font-normal text-center text-2xl text-zinc-600">
          Ellinge Slott
        </p>
        <p className="font-normal text-center text-2xl text-zinc-600 mb-6">
          Ellinge Gård, 241 93 Eslöv
        </p>
        <h3 className="font-fancy text-3xl text-zinc-600 -mb-2">När?</h3>
        <p className="font-normal text-center text-2xl text-zinc-600">
          Onsdagen den 19 Juli 2023
        </p>
        <p className="font-normal text-center text-2xl text-zinc-600">
          kl. 14:30
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8967.815763666771!2d13.286492!3d55.8114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c48739fc2585c8b!2sEllinge%20Castle!5e0!3m2!1sen!2sse!4v1673445501152!5m2!1sen!2sse"
        loading="lazy"
        className="w-auto sm:max-w-md h-auto rounded-bl-lg sm:rounded-bl-none rounded-br-lg rounded-tr-none sm:rounded-tr-lg"
      />
    </div>
  );
};

export default SectionWhenWhere;
