import Button from "./Button";
import InputField from "./InputField";

interface ModalRSVPProps {
  modalState: "open" | "closed";
  toggleModal: () => void;
}

const ModalRSVP: React.FC<ModalRSVPProps> = ({ modalState, toggleModal }) => {
  return (
    <>
      {modalState === "open" ? (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-75 p-0 flex justify-center items-center">
          <div className="bg-violet-100 w-full h-full sm:max-w-md sm:h-fit sm:rounded-sm flex flex-col justify-between">
            {/* title */}
            <div className="w-full border-b-2 border-zinc-600 flex justify-between items-center">
              <div className="m-2">
                <p className="text-xl font-semibold text-zinc-600">title</p>
                <p className="text-lg font-light text-zinc-600">subTitle</p>
              </div>
              <div
                className="bg-zinc-600 rounded-full cursor-pointer w-8 h-8 flex justify-center items-center m-2 shadow-md hover:rounded-md hover:bg-zinc-700 hover:shadow-lg transition ease-out duration-500"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  className="w-6 h-6 stroke-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {/* content */}
            <div className="flex flex-col justify-center items-center m-2 gap-2">
              <div className="flex gap-2">
                <InputField name={"firstname"} label={"Namn"} />
                <InputField name={"lastname"} label={"Efternamn"} />
              </div>
              <div className="flex gap-2">
                <InputField name={"email"} label={"Email"} />
                <InputField name={"phone"} label={"Telefonnummer"} />
              </div>
              <div className="flex gap-2">
                <InputField name={"password1"} label={"Lösenord"} />
                <InputField name={"password2"} label={"Upprepa lösenord"} />
              </div>
            </div>
            {/* footer */}
            <div className="p-2 border-t-2 border-zinc-600">
              <Button
                label={"Skapa konto"}
                type={"primary"}
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalRSVP;
