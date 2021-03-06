import React, { useContext } from 'react';
import style from './../styles/featured.module.scss';
import CartContext from './../context/CartContext';
import AddToCartButton from './Button/AddToCartButton';

interface Product {
  _id: string;
  details: null;
  name: string;
  category: string;
  price: number;
  featured: boolean;
  bestseller: boolean;
  image: object;
  currency: string;
}

export interface MyProductsArrayInterface extends Array<Product> {}

interface ProductCardProps {
  product: MyProductsArrayInterface;
}
const Featured: React.JSXElementConstructor<ProductCardProps> = ({
  product,
}: any) => {
  const featuredProduct = product.filter(
    (product: { featured: any }): any => product.featured
  );

  const { addToCart } = useContext(CartContext);

  return (
    <div className={style.featured}>
      {featuredProduct?.map(
        (product: {
          name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          image: { formats: { large: { url: string | undefined } } };
        }) => (
          <>
            <div className={style.featured__textBtn}>
              <h1 className={style.featured__headerText}>{product.name}</h1>
              <div className={style.featured__hide}>
                <AddToCartButton
                  onClick={() => addToCart(product)}
                  title={'Add To Cart'}
                />
              </div>
            </div>

            <div className={style.featured__wrapper}>
              <img
                src={product.image && product.image.formats.large.url}
                className={style.featured__featuredImage}
                alt=""
              />

              <div className={style.featured__photoOfTheDay}>
                Photo of the day
              </div>
            </div>
          </>
        )
      )}
      <div className={style.featured__show}>
        {featuredProduct?.map(
          (product: {
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            image: { formats: { large: { url: string | undefined } } };
          }) => (
            <>
              <div className={style.featured__show}>
                <AddToCartButton
                  onClick={() => addToCart(product)}
                  title={'Add To Cart'}
                  fullWidth="fullWidth"
                />
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Featured;
