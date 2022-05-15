import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type ICartItemCtx = {
  itemsCounter: number;
  addItem: boolean;
  setAddItem: Dispatch<SetStateAction<boolean>> | any;
  setItemsCounter: Dispatch<SetStateAction<number>> | any;
};

const initialCtxValue: ICartItemCtx = {
  itemsCounter: 0,
  addItem: false,
  setAddItem: (x: boolean) => x,
  setItemsCounter: (b: number) => b,
};

export const CartContext = createContext(initialCtxValue);

export default function CartContextProvider({ children }: { children: any }) {
  const [itemsCounter, setItemsCounter] = useState<number>(0);
  const [addItem, setAddItem] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{ itemsCounter, addItem, setAddItem, setItemsCounter }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = (): ICartItemCtx => {
  const ctx: ICartItemCtx = useContext(CartContext);
  if (ctx === undefined) {
    throw console.error("You need tou use into the CartItems Context");
  }
  return ctx;
};
