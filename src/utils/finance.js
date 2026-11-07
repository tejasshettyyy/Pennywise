export const currency = n => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(Number(n)||0)
export const monthExpenses = expenses => {const m=new Date().toISOString().slice(0,7);return expenses.filter(e=>e.date?.slice(0,7)===m)}
export const sum = items => items.reduce((s,x)=>s+Number(x.amount||0),0)
export const prettyDate = d => new Date(d+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})
