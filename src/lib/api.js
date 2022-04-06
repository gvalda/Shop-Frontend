// TODO Dynamically set api domain via env variables
const API_DOMAIN = 'http://localhost:5005';

export const getAllProducts = async () => {
  const response = await fetch(`${API_DOMAIN}/products`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch products');
  }
  const dataResults = data['products'];
  return dataResults;
};

export const getProduct = async (sku) => {
  const response = await fetch(`${API_DOMAIN}/products/${sku}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || `Could not fetch product with sku: ${sku}`);
  }
  return data;
};
