// @flow
export const getCurrentTime = () => {
  const now = new Date();
  const hou = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  return {
    hou: hou.toString().padStart(2, "0"),
    min: min.toString().padStart(2, "0"),
    sec: sec.toString().padStart(2, "0")
  };
};

export const isHex = (t: string) => RegExp("^#", "g").test(t);
export const setColor = (p: string) => ({ color: isHex(p) ? p : `#${p}` });
export const setBackground = (p: string) => ({ backgroundColor: isHex(p) ? `${p}` : `#${p}` });