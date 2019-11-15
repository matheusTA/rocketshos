import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/180334_1774166_20191029224432.png"
          alt="Tenis"
        />
        <strong>Tênis Nike Air Force 1</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/186782_1684483_20190909183826.png"
          alt="Tenis"
        />
        <strong>Tênis Nike Air Force 1</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/180543_1794408_20191107144702.png"
          alt="Tenis"
        />
        <strong>Tênis Nike Air Force 1</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/27524_140719_20190602131350.png"
          alt="Tenis"
        />
        <strong>Tênis Nike Air Force 1</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/183757_1673126_20190909164242.png"
          alt="Tenis"
        />
        <strong>Tênis Nike Air Force 1</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/184114_1692499_20190917121000.png"
          alt="Tenis"
        />
        <strong>Tênis Nike Air Force 1</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
