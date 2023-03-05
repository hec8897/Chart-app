import react from "react";
import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";
import { Autho } from "component";

const Title = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const Home = () => {
  const { getList } = useRequest();

  const { data } = useQuery("list", getList, {
    suspense: true,
  });

  return (
    <Autho>
      <PageContainer>
        <Title title={data.title} />
      </PageContainer>
    </Autho>
  );
};

export default Home;
