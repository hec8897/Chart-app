import react from "react";
import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";
import { Autho } from "component";
import { listSelector } from "store/list";
import { useRecoilValue } from "recoil";

const Title = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const Home = () => {
  const { list } = useRecoilValue(listSelector);
  const { getList } = useRequest();

  const { data } = useQuery("list", getList, {
    suspense: true,
  });

  return (
    <Autho>
      <PageContainer>
        <Title title={data.title} />
        {list.map((ele) => {
          return (
            <div key={ele.id}>
              <h2>{ele.name}</h2>
              <h2>{ele.desc}</h2>
            </div>
          );
        })}
      </PageContainer>
    </Autho>
  );
};

export default Home;
