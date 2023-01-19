import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  // URLに含まれるidの部分を取得できる
  // console.log(router.query);
  // { id } JavaScriptの分割代入
  const { id } = router.query;
  return <div>{id}</div>;
};

export default Product;
