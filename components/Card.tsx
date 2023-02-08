import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div className="bg-violet-50 text-center p-4 rounded-xl shadow-card shadow-violet-200 mr-2 mb-2">
      <h2 className="font-fancy text-4xl text-zinc-600 mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
