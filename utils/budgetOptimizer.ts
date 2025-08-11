import { Product } from '@/types';

export function findBestCombination(products: Product[], budget: number): Product[] {
  if (!products || products.length === 0 || budget <= 0) {
    return [];
  }

  const n = products.length;
  const dp: number[][] = Array(n + 1).fill(null).map(() => Array(Math.floor(budget) + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= Math.floor(budget); w++) {
      const currentProduct = products[i - 1];
      
      if (currentProduct.price <= w) {
        const withProduct = currentProduct.price + dp[i - 1][w - currentProduct.price];
        const withoutProduct = dp[i - 1][w];
        dp[i][w] = Math.max(withProduct, withoutProduct);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  
  const selectedProducts: Product[] = [];
  let w = Math.floor(budget);
  
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedProducts.push(products[i - 1]);
      w -= products[i - 1].price;
    }
  }
  
  return selectedProducts;
}