import Card from "./Card";

const SectionWhenWhere = () => {
  return (
    <Card title="Var & När?">
      <p className="font-normal text-center text-2xl text-zinc-600 mb-4">
        Vi vill börja med att säga att vi är fantastiskt glada att ni vill dela
        den här dagen med oss!
      </p>
      <p className="font-normal text-center italic text-2xl font-extralight text-zinc-600 mb-4">
        Efter registrering och OSA-datum kommer ni få ett mail med mer info!
      </p>
      <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between gap-8 items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8967.815763666771!2d13.286492!3d55.8114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c48739fc2585c8b!2sEllinge%20Castle!5e0!3m2!1sen!2sse!4v1673445501152!5m2!1sen!2sse"
          width="300"
          height="300"
          loading="lazy"
          className="rounded border-2 border-solid border-zinc-600"
        />
        <div>
          <div className="mb-4">
            <h3 className="font-fancy text-3xl text-zinc-600 mb-2">När?</h3>
            <p className="font-normal text-center text-2xl text-zinc-600">
              Onsdagen den 19 Juli 2023
            </p>
            <p className="font-normal text-center text-2xl text-zinc-600">
              kl. 14:30
            </p>
          </div>
          <div>
            <h3 className="font-fancy text-3xl text-zinc-600 mb-2">Var?</h3>
            <p className="font-normal text-center text-2xl text-zinc-600">
              Ellinge Slott
            </p>
            <p className="font-normal text-center text-2xl text-zinc-600">
              Ellinge Gård, 241 93 Eslöv
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SectionWhenWhere;
