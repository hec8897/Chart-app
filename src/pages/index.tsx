import { Suspense } from "react";
import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";

const Title = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const Home = () => {
  const { getList } = useRequest();
  const { data } = useQuery("list", getList, {
    suspense: true,
  });
  return (
    <PageContainer>
      <Suspense
        fallback={<div>loadingloadingloadingloadingloadingloading</div>}
      >
        <Title title={data.title} />
      </Suspense>
    </PageContainer>
  );
};

export default Home;
