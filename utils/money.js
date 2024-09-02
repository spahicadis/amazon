export function formatCurrency(priceCents) {
return (priceCents / 100).toFixed(2)

} 


export default formatCurrency; //jednostavniji nacin exporta sada mi je dosao aha momenat jer sam se susreo sa ovime u projektu dvd React. Pa onda sada kada importamo ne moramo koristiti { } i svaki fajl moze imati samo jedan default export