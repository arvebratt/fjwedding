import Button from "../Button";
import TextArea from "../TextArea";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MusicModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal title="Önska en låt" isOpen={isOpen} onClose={onClose}>
      <div className="mt-2">
        <p className="font-normal text-zinc-600">
          För att önska en eller flera låtar kan ni skriva in det i textfältet
          nedan.
        </p>
        <form
          onSubmit={onClose}
          name="requestMusic"
          method="POST"
          action="/home"
          data-netlify="true"
          className="flex flex-col gap-2 mt-4"
        >
          <input type="hidden" name="form-name" value="requestMusic" />
          <TextArea
            name="request"
            label="Önska en låt"
            placeholder="Cotton eye Joe av RedNex..."
          />
          <div className="max-w-xs ml-1 mt-4 flex gap-2">
            <Button
              version="secondary"
              type="submit"
              label="Skicka"
              buttonSize="sm"
            />
            <Button
              version="primary"
              type="button"
              label="Avbryt"
              buttonSize="sm"
              onClick={onClose}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MusicModal;
