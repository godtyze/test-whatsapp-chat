export const convertNumber = (prefix: string, number: number): string => {
  return prefix + number + '@c.us';
};

export const getNumber = (sender: string) => sender.slice(0, sender.indexOf('@'));
