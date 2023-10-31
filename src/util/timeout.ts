export async function timeout<T>(promise: Promise<T>, ms: number, errorlog: string): Promise<T> {
    let timer: NodeJS.Timeout;
    const res = await Promise.race([
      promise,
      new Promise<'timeout'>(resolve => {
        timer = setTimeout(() => resolve('timeout'), ms);
      })
    ] as const).finally(() => clearTimeout(timer));
  
    if (res === 'timeout') {
      throw new Error(errorlog);
    }
    return res;
  }