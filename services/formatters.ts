const formatters = {
  priceUsd: (dollars: number) => {
    if (dollars < 1) {
      // return as cents
      const cents = Math.round(dollars * 100);
      return `${cents}¢`;
    }
    if (dollars < 100) {
      const rounded = Math.round(dollars * 100) / 100;
      return `$${rounded}`;
    }
    const rounded = Math.round(dollars);
    return `$${rounded}`;
  },
  percentage: (percentage: number) => {
    if (!percentage) return "?";
return `${Math.round(percentage * 100).toLocaleString()}%`;
  },
};

export default formatters;
