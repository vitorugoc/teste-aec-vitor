const formatCurrency = (value: number): string => {
    // Using Intl.NumberFormat to format the currency
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  
    return formattedValue;
};

export default formatCurrency;
  