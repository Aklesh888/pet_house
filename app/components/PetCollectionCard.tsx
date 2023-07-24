import Image from "next/image";



type Props = {
  image: any;
  name: string;
  gender: string;
  age: string;
};

const PetCollectionsCard = (props: Props) => {
  return (
    <div className="flex flex-col rounded-2xl items-start justify-center py-0 h-[450px] w-[330px] px-5 border m-5">
      <Image
        src={props.image}
        alt=""
        className="h-[350px] w-[330px] py-4 self-center"
      />
      <div className="text-lg py-2 font-bold">{props.name}</div>
      <div className="flex items-center justify-start space-x-16 w-full">
        <div className="py-2">
          Gender: <span className="font-bold">{props.gender}</span>{" "}
        </div>
        <div className="py-2">
          Age: <span className="font-bold">{props.age}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default PetCollectionsCard;
