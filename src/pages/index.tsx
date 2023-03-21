import react from "react";
import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";
import { Autho } from "component";
import { familyAtomFamily } from "store/family";
import { useRecoilValue, useRecoilState } from "recoil";

const Title = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const BoxComponent = ({
  data,
  onClick,
}: {
  data: { title: string; count: number };
  onClick?: () => void;
}) => (
  <div className="border p-2 rounded text-center">
    <h2 className="mb-2 text-xl font-bold">{data?.title}</h2>
    <p>data:{data?.count}</p>
    <button className="bg-blue-200 w-full rounded" onClick={onClick}>
      update
    </button>
  </div>
);

const Home = () => {
  const [card1, setCard1] = useRecoilState(familyAtomFamily(0));
  const card2 = useRecoilValue(familyAtomFamily(1));
  const { getList } = useRequest();

  const { data } = useQuery("list", getList, {
    suspense: true,
  });

  console.log(card1);

  return (
    <Autho>
      <PageContainer>
        <div className="p-2">
          <Title title={data.title} />
          <div className="flex flex-col gap-2 my-2">
            <BoxComponent
              data={card1}
              onClick={() => setCard1({ ...card1, count: card1.count + 1 })}
            />
            <BoxComponent data={card2} />
          </div>
        </div>
      </PageContainer>
    </Autho>
  );
};

export default Home;
