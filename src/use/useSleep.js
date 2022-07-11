export async function useSleep(s) {
  await new Promise((resolve) => setTimeout(resolve, 1000 * s));
}
