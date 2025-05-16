/**
 * Вычисляет окончательную цену товара.
 * Если есть цена со скидкой — используется она.
 */
export function resolveFinalPrice(original, discounted) {
    return discounted != null ? discounted : original;
}

/**
 * Вычисляет процент скидки от полной цены.
 * Возвращает null, если нет скидки или оригинальная цена равна 0.
 */
export function computeDiscountPercent(original, discounted) {
    if (discounted == null || original === 0) return null;
  return Math.round((1 - discounted / original) * 100);
}
