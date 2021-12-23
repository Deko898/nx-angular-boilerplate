import { sortBy, orderBy, cloneDeep, List, Many } from 'lodash';

export function deepClone<T>(value: T): T {
  return cloneDeep(value);
}

export function _orderBy<T extends object>(
  collection: List<T> | null | undefined,
  iteratees?: string[],
  orders?: Many<boolean | 'asc' | 'desc'>
): T[] {
  return orderBy(collection, iteratees, orders);
}

export function _sortBy<T>(
  collection: List<T> | null | undefined,
  iteratees: string[]
): T[] {
  return sortBy(collection, iteratees);
}
