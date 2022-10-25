export function calcPageInfo(pageSize: number, currentPage: number, count: number) {
  return {
    pageSize: pageSize,
    currentPage: currentPage,
    totalPages: Math.ceil(count / pageSize)
  };
}
