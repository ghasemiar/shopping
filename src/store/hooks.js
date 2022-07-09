import { useRecoilState } from "recoil";
import { cart } from "./atoms";
const cloneIndex = (items, id) => ({
    clone: items.map((item) => ({ ...item })),
    index: items.findIndex((item) => item.id === id),
  });
  
  export const useAddItem = () => {
    const [items, setItems] = useRecoilState(cart);
    return (product) => {
      const { clone, index } = cloneIndex(items, product.id);
    
    setItems([...clone, { ...product }]);
      
      console.log(items)
    };
  };