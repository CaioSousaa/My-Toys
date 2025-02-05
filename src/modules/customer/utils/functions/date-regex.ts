export function regexValidate(date: string): boolean {
  return /^"\d{6}"$/.test(date);
}
