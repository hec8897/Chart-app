import { Suspense } from "react";
import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";

const Home = () => {
  const { getList } = useRequest();
  const { data } = useQuery("list", getList, {
    suspense: true,
    onSuccess(data) {
      console.log(data);
    },
  });
  return (
    <PageContainer>
      <Suspense fallback={<div>loading</div>}>
        <div>{data.title}</div>
      </Suspense>
    </PageContainer>
  );
};

export default Home;
