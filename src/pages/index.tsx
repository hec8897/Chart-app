import { PageContainer } from "component";
import { useRequest } from "hooks";
import { useQuery } from "react-query";

const Home = () => {
  const { getList } = useRequest();
  useQuery("list", getList, {
    onSuccess(data) {
      console.log(data);
    },
  });
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </PageContainer>
  );
};

export default Home;
