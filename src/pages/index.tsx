import react from "react";
import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";
import { Autho } from "component";
import { familyAtomFamily } from "store/family";
import { useRecoilState } from "recoil";

const Title = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const BoxComponent = ({ data }: { data: { id: string; name: string } }) => {
  const [value, setCount] = useRecoilState(familyAtomFamily(data));

  return (
    <div className="border p-2 rounded text-center">
      <h2 className="mb-2 text-xl font-bold">{value?.title}</h2>
      <p>data:{value?.count}</p>
      <button
        className="bg-blue-200 w-full rounded"
        onClick={() => setCount({ ...value, count: value.count + 1 })}
      >
        update
      </button>
    </div>
  );
};

const Home = () => {
  const originData = [
    { id: "test-0", name: "dawoon" },
    { id: "test-2", name: "dawoon-2" },
  ];
  const { getList } = useRequest();

  const { data } = useQuery("list", getList, {
    suspense: true,
  });

  return (
    <Autho>
      <PageContainer>
        <div className="p-2">
          <Title title={data.title} />
          <div className="flex flex-col gap-2 my-2">
            {originData.map((ele) => (
              <BoxComponent key={ele.id} id={ele.id} data={ele} />
            ))}
          </div>
        </div>
      </PageContainer>
    </Autho>
  );
};

export default Home;
