import ImageCard from "./ImageCard";

const SectionTM = () => {
  return (
    <div className="my-10 sm:my-20 flex flex-col-reverse sm:flex-row justify-center gap-8 items-center">
      <div className="max-w-xs">
        <ImageCard src="small-background.jpg" shadowColor="amber" />
      </div>
      <div>
        <h1 className="text-3xl text-center sm:text-left text-zinc-600 underline decoration-violet-400 mb-2">
          Träffa våra Toastmasters!
        </h1>
        <p className="text-xl font-extralight text-zinc-600">
          Alexander och Ludvig kommer leda oss genom den oförglömliga dagen och
          natten. Om ni vill anmäla tal eller dylikt så kontaktar ni dem med:
          <br />
          <br />
          Mail{" "}
          <a href="mailto: toastmasters@fjwedding.se">
            toastmasters@fjwedding.se
          </a>
          <br />
          Alexander <a href="tel:0721558860">0721558860</a>
          <br />
          Ludvig <a href="tel:0721558860">0721558860</a>
          <br />
          <br />
          OSA på att anmäla tal är senast något datum 2023 för att våra toasters
          ska kunna planera in allt så bra som möjligt!
        </p>
      </div>
    </div>
  );
};

export default SectionTM;
