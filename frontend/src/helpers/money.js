export const  formatCurrency = (amount, currencySymbol = '$') => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
      .format(amount)
      .replace('$', currencySymbol);
}