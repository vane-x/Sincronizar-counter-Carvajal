import * as React from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import serviceJson from '../../services/serviceJson';

const ItemListContainer = () => {
  const [product, setProduct]: any = React.useState<any>({});
  const param = useParams();

  React.useEffect(() => {
      serviceJson().then((response: any) => {
      const itemSelected = response.find((item: any) => item.id.toString() === param.id)
      setProduct(itemSelected);
    });
  }, [param.id, product]);

  return (
    <>
      <br />
        <ItemDetail itemProduct={product} />
      <br />
    </>
  )
};

export default ItemListContainer;
