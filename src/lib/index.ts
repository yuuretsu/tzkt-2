export function buildApi(url: string) {
  return async (route: string, params: any = {}) =>
    await fetch(`${url}${route}?` + new URLSearchParams(params));
}

export function walletName({ alias, address }): { value: string, type: string } {
  return { value: alias || address, type: alias ? "alias" : "address" };
}

export const tzkt = buildApi("https://api.tzkt.io/v1");
