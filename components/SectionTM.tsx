import ImageCard from "./ImageCard";

const SectionTM = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center gap-8 items-center">
      <div className="max-w-xs flex flex-col gap-10">
        <ImageCard src="petri.jpg" shadowColor="violet" />
        <ImageCard src="alex.jpg" shadowColor="violet" />
      </div>
      <div>
        <h2 className="font-fancy text-center sm:text-left text-5xl text-zinc-600 mb-3">
          Träffa våra Toastmasters!
        </h2>
        <p className="font-normal text-2xl font-extralight text-zinc-600 mb-4">
          Alexander och Ludvig kommer leda oss genom den oförglömliga dagen och
          natten. Om ni vill anmäla tal eller dylikt så kontaktar ni dem med:
          <br />
          <br />
          Mail:{" "}
          <a href="mailto: toastmasters@fjwedding.se">
            toastmasters@fjwedding.se
          </a>
          <br />
          Telefon Alexander: <a href="tel:0721558860">0721558860</a>
          <br />
          Telefon Ludvig: <a href="tel:0721558860">0721558860</a>
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
